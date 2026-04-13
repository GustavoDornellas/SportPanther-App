import React, {useState} from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image, ImageBackground, TextInput, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

export default function Name(){

    
const navigation = useNavigation();
    const [usuario, setUsuario] = React.useState('');
    
      const btnClick = () => {
        if(usuario){
            navigation.navigate('Nascimento',{
                nome: usuario
            });
            
        } else {
            Alert.alert('Atenção','Preencha o campo com seu nome');
        }
      }

    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.reset({routes:[{name:'Welcome'}]})}>
                    <Image source={Voltar}/>
                </TouchableOpacity>        
            </View>
                    <View style={styles.container}>
                            <View style={styles.cardTopo}>
                                <Text style={styles.textNome}>Nome:</Text>
                            </View>

                        <View>
                            <TextInput 
                            value={String(usuario)}
                            onChangeText={(texto)=>{setUsuario(texto)}}
                            keyboardType='default'
                            style={styles.boxloginusuario}
                            placeholder='Nome'
                            placeholderTextColor='#fff'/>    
                        </View>

                        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                            <TouchableOpacity style={styles.btn} onPress={btnClick}>
                                <Text style={styles.txtContinuar}>Continuar</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: '#1F2128'
    },

    back: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft:10,
        marginTop:25,
        marginBottom:25, 
        position: "relative"
    },

    cardTopo:{
        alignItems:"center",
        padding:10,
    },


    textNome :{
        fontSize:40,
        color:'#fff',
        textAlign:'left'
    },

    boxloginusuario:{
        width:200,
        borderWidth:2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        alignSelf:'center',
        borderColor:'#fff',
        color:'#fff',
        padding:10,
        marginBottom:50,
        marginTop: 50
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

    Image: {
        justifyContent: "center",
        width: '100%',
        height: 300,
        alignItems:'center',
        marginBottom:0
      }
});