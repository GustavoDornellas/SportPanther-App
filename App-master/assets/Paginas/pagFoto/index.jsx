import React, {useState, useContext} from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image, ImageBackground, ScrollView, Alert } from "react-native";
import { useNavigation} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker'; 
import { db } from '../../../config/firebaseConfig';
import { updateDoc, doc } from 'firebase/firestore';

import { AuthContext } from '../../../contexts/auth';

import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

export default function Name({route}){
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    
    const { nome } = route.params;
    const { idade } = route.params;
    const { altura } = route.params;
    const { pernaDom } = route.params;
    const { posicao } = route.params;
    
    const [Img, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 5],
            quality: 1,
            });
        if (!result.canceled) {
            setImage(result.assets[0].uri);   
        }
    }

    async function updateUser(uid){
        await updateDoc(doc(db, 'users', uid), {
            nome: nome,
            idade:idade,
            altura:altura,
            posicao:posicao,
            pernaDominante:pernaDom,
            fotoUrl:Img,
            updatedAt: new Date(),
        })
        .then(()=>{
            navigation.navigate('MainTab');

        }).catch((error)=>{
            Alert.alert(error)
        });
    }; 
    
    const Go =()=>{
        if(Img){
            updateUser(user.id)
        }
        if(Img == ''){
            Alert.alert("atenção","Escolha uma imagem");
        }
    }

    return(
        <ImageBackground source={require('../../img/Fundo.png')} style={styles.bgImage}>
            <ScrollView> 
                <View style={styles.back}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Voltar} />
                    </TouchableOpacity>
                </View>

                    <View style={styles.container}>
                            <View style={styles.cardTopo}>
                                <Text style={styles.textNome}>Escolha uma foto:</Text>
                                <View style={styles.cardPick}>
                                    <TouchableOpacity style={styles.pick} onPress={pickImage}>
                                        {Img && <Image source={{ uri: Img }} style={{ width: 250, height: 250, borderRadius:125 }} />}
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.text}>Sua foto aparecerá a todas as usuárias do aplicativo</Text>
                            </View>

                        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                            <TouchableOpacity style={styles.btn} onPress={Go}>
                                <Text style={styles.txtContinuar}>Finalizar</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage:{
            height:'100%'
        },
    back: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft:10,
        marginTop:25,
        marginBottom:25,
        position: "relative",
    },
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#1F2128',
    },
    cardTopo:{
        alignItems:"center",
        padding:10,
        },
     textNome:{
        fontSize:40,
        color:'#fff',
        textAlign:'left',
        marginBottom:84
    },
    cardPick:{
        alignItems:'center',
    },
    pick:{
        width:254,
        height:254,
        backgroundColor:'#cddb',
        borderWidth:2,
        borderColor:'#6C51B9',
        borderRadius:127,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 50
        
    },
    text:{
        fontSize:12,
        color:'#666'
    },    
    Image: {
        justifyContent: "center",
        width: '100%',
        height: 300,
        alignItems:'center',
      },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        width:250,
        backgroundColor:'#fff',
        borderRadius:50,
    },
    txtContinuar:{
        color:'#6C51B9',
        fontSize:25,
    },

});