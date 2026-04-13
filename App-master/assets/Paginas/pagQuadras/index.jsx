import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity, Image, Alert } from "react-native";
import { Container, QuadraView, Quadra, NomeQuadra} from "./styles";
import { HeaderArea,HeaderIten } from '../../TabBar/CustomHeader.jsx';
import { TextInputMask } from 'react-native-masked-text';
import { db } from '../../../config/firebaseConfig';
import DEMO from '../../data/quadras';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { setDoc, doc } from 'firebase/firestore';

export default () => {

    const [open, setOpen] = useState(false);
    const [djogo, setDjogo] = useState(null);
    const [jhorario, setJhorario] = useState(null);
    const [uid, setId] = useState(null);

    const click = ({key}) => {
        setId(key);
        setOpen(true);
    }

    const mdlCls = () => {
        setDjogo(null);
        setJhorario(null);
        setOpen(!open);
        setId(null);
    }
    const navigation = useNavigation();

    async function crt({id, dia, hora}) {
        await setDoc(doc(db, 'jogos', id), {
            id:id,
            dia:dia,
            hora:hora,
        }).then(()=>Alert.alert('','jogo criado'))
   };

   const Go =({id, dia, hora })=>{
    if(djogo != null && jhorario != null){
        crt({id:id, dia:dia, hora:hora })
    }else{
        return null;
    }
}

    return(
        <>
            <HeaderArea>
                <HeaderIten>
                    <MaterialCommunityIcons name='soccer-field' size={30} color='#FFF' onPress={() => navigation.navigate('jogos')} style={{marginRight:5}}/>
                </HeaderIten>
                <View style={styles.cardTit}>
                    <Text style={styles.titulo}>Quadras disponíveis</Text>
                </View>
                <HeaderIten>
                    <Ionicons name='chatbox-ellipses-outline' size={30} color='#FFF' onPress={() => navigation.navigate('ChatList')} style={{marginRight:5}}/>
                </HeaderIten>
            </HeaderArea>
        <Container>
           
            
            <ScrollView>
                
                    {(DEMO.map((item) =>
                       <QuadraView key={item.id}>
                                <Quadra onPress={()=>click({key:item.id})}>
                                    <Image source={{uri: item.imagem}} style={styles.image}/>
                                </Quadra>
                            <NomeQuadra>{item.nome}</NomeQuadra>      
                        </QuadraView>
                    ))}

                        {(DEMO.filter((item) => item.id == uid).map((item) => 
                            <Modal key={item.id} visible={open} transparent={true} animationType= 'slide'>
                            <ScrollView>
                            <View style = {{
                                            flex:1,  
                                            justifyCont: 'center', 
                                            alignItems: 'center', 
                                            margin:15,
                                            borderRadius:10,
                                            borderWidth:0.5,
                                            borderColor:'#242731',
                                            elevation:10,
                                            backgroundColor:'#1F2128',
                                            marginTop: '28%'
                                            }}>
                            
                                <View style={{display:'flex', alignContent:'flex-start', alignSelf:'flex-start'}}>
                                <TouchableOpacity onPress={mdlCls}>
                                    <AntDesign name="close" size={40} color="red" style={styles.close}/>
                                </TouchableOpacity>

                                </View>

                                <TouchableOpacity style={{width:'93%', height:200, marginTop:5, alignItems:'center'}}>
                                    <Image style={{width:'99%', height:200, borderRadius:5}} source={{uri:item.imagem}} />
                                </TouchableOpacity>
                                
                                <View>
                                    <Text style={styles.nmCamp}>{item.nome}</Text>
                                    <Text style={styles.edCamp}>{item.endereco}</Text>
                                </View>

                                <View style={styles.inputs}>
                                    <TextInputMask
                                        type={'datetime'}
                                        options={{
                                        format: 'DD/MM/YYYY'
                                        }}
                                        value={String(djogo)}
                                        onChangeText={(texto)=>{setDjogo(texto)}}
                                        keyboardType='decimal-pad'
                                        style={styles.txtInput}
                                        maxLength={12}
                                        placeholder='dd/mm/yyy'
                                        ></TextInputMask>
                                    <TextInputMask
                                        type={'datetime'}
                                        options={{
                                        format: 'HH:mm'
                                        }}
                                        value={String(jhorario)}
                                        onChangeText={(texto)=>{setJhorario(texto)}}
                                        keyboardType='decimal-pad'
                                        style={styles.txtInput}
                                        maxLength={5}
                                        placeholder='24:00'
                                        ></TextInputMask>
                                </View>

                                    <View style={{margin:10, display:'flex', flexDirection:'row', gap:20}}>
                                        <TouchableOpacity style={styles.btnMrcr} onPress={Go({id:item.id, dia:djogo, hora:jhorario })}>
                                            <Text style={{fontSize:15, color:'#fff', fontWeight:'bold'}}>Marcar jogo</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </ScrollView>
                            </Modal>   
                        ))}  

                <View style={styles.viewSafada}/>                
            </ScrollView>  
        </Container>
        </>
    );
}

const styles = StyleSheet.create({
    cardTit:{
        flex:1, 
        marginBottom: 5,
        marginTop: 20,
        alignItems:'center',
        justifyContent:'center',
    }, 

    titulo:{
        fontSize: 27,
        color: '#fff',
    },

    viewSafada:{
        height:40,
    },
    txtInput:{
        backgroundColor:'#ffffff',
        padding:7,
        fontSize:17,
        color:'#000',
        borderRadius:10,
        margin:10,
    }, 
    btnMrcr:{
        padding:15,
        textAlign:'center',
        alignItems:'center',
        elevation:10,
        borderRadius:15,
        width:'50%',
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#352465',
    },
    nmCamp:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        marginTop:8,
    },
    edCamp:{
        fontSize:20,
        color:'#fff',
    },
    infos:{
        alignSelf:'flex-start',
        minWidth:'80%',
        maxWidth:'90%',
        marginBottom:10
    },
    inputs:{
        alignSelf:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
        maxWidth:'90%',
        marginTop:15,
    },
    image:{
        width:300,
        height:180,
        borderRadius:10
    },
    close:{
        margin:10,
        marginTop:10
    },
});