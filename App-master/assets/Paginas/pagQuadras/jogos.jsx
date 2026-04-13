import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { Container, QuadraView, Quadra, NomeQuadra} from "./styles";
import { HeaderArea,HeaderIten } from '../../TabBar/CustomHeader.jsx';
import DEMO from '../../data/quadras';
import { db } from '../../../config/firebaseConfig';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getDoc, doc, where } from 'firebase/firestore';

export default () => {

    const [open, setOpen] = useState(false);
    const [uid, setId] = useState(null);
    const [jogos, setJogos] = useState([]);

    const click = ({key}) => {
        setId(key);
        see(key)
        setOpen(true);
    }

    const mdlCls = () => {
        setOpen(!open);
        setId(null);
    }
    const navigation = useNavigation();

   async function see(id) {
        await getDoc(doc(db, 'jogos', id), where('id', '==', id))
        .then((response) =>{
            setJogos(response.data());
        });
        
   };

    return(
        <>
            <HeaderArea>
                <HeaderIten>
                    <AntDesign name='arrowleft' size={30} color='#FFF' onPress={() => navigation.goBack()} />
                </HeaderIten>
                <View style={styles.cardTit}>
                    <Text style={styles.titulo}>Jogos</Text>
                </View>
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
                                
                                {jogos ? (
                                    <View key={jogos.id} style={{width:'90%', height:30, marginTop:10, backgroundColor:'#1f2128', justifyContent:'center', textAlign:'center'}}>
                                        <Text style={{fontSize:15, color:'#fff'}}>{jogos.dia} às {jogos.hora}</Text>
                                    </View>
                                ) : (
                                    <View style={{width:'90%', height:30, marginTop:10, backgroundColor:'#1f2128' }}>
                                        <Text style={{fontSize:15, color:'#fff'}}>Nenhum Jogo Marcado ainda</Text>
                                    </View>
                                )}

                                </View>
                                
                                
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
        marginLeft:-50
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