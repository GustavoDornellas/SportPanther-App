import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Checkbox from 'expo-checkbox';

import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

export default function Birthday({route}){

    //navegação
    const navigation = useNavigation();

    const [birth, setBirth] = useState('');

    const { nome } = route.params;

    const btnClick = () => {
        if(birth <= 17 ){
            alert('Esse aplicativo é somente para maiores de 18 anos');
            
        }  if(birth > 90){
            alert('Um pouco idosa demais, não?!');
        }  if(birth >= 18 && birth <90){
            navigation.navigate('Altura',{
                nome:nome,
                idade:birth});
        }
      }

    return (
        <ImageBackground source={require('../../img/Fundo.png')}>
            <ScrollView>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Voltar} style={styles.imgVoltar} />
                </TouchableOpacity>
            </View> 
            
                <View style={styles.container}>
                    <View style={styles.cardTopo}>
                        <Text style={styles.textNome}>Idade:</Text>
                    </View>

                    <View style={styles.cardInf}>
                        <TextInput
                            value={String(birth)}
                            onChangeText={text => {setBirth(text)}}
                            style={styles.inputNasc}
                            placeholder='Idade em anos'
                            placeholderTextColor='#fff'
                            maxLength={2}
                            keyboardType='numeric'
                            />
                    </View>
                        
                    
                    <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                        <TouchableOpacity style={styles.btn} onPress={btnClick}>
                            <Text style={styles.txtContinuar}>Continuar</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: '#1F2128'
    },
    textNome :{
        textAlign:'left',
        fontSize:40,
        color:'#fff',
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
        height: 400,
        alignItems:'center',
        marginTop:50
    },
    inputNasc: {
        width:200,
        borderWidth:2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        alignSelf:'center',
        borderColor:'#fff',
        color:'#fff',
        padding:10,
        marginBottom:25,
        marginTop: 176
    },
    nascUnderText:{
        color:'#666666',
        fontSize:12 ,
        marginBottom:100
    },
    checkboxView:{
        display:'flex',
        flexDirection:'row',
        paddingBottom:20,
        marginLeft:0,
        justifyContent:'flex-start',
        alignContent:'flex-start'
    },
    checkboxText:{
        color:'#fff',
        marginRight:10,
        marginLeft:10
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
    cardInf: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    cardTopo:{
        alignItems:"center",
        padding:10,
    }
});