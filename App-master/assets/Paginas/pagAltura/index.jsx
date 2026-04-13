import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput, ScrollView, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Checkbox from 'expo-checkbox';

import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

    export default function Name({route}){
    //navegação
    const navigation = useNavigation();

    //seta altura
    const  [altura, setAltura] =  React.useState('');
    let alt = parseInt(altura);
    
    const { nome } = route.params;
    const { idade } = route.params;

    const btnClick = () => {
        if(alt > 135 && alt < 220) {
            navigation.navigate('PernaDom',{
                nome:nome,
                idade:idade,
                altura: altura});
        
        } else{
            Alert.alert('Atenção','Coloque sua verdadeira altura');
        }
      }

    return(
        <View style={styles.container}>
            <ScrollView style={{margin:0}}>
                {/*btn voltar*/}
                <View style={styles.back}>
                    <TouchableOpacity onPress={ () => navigation.goBack() }>
                        <Image source={Voltar} style={styles.imgVoltar} />
                    </TouchableOpacity>
                </View>

                <View style={styles.cardTopo}>
                    <Text style={styles.textNome1}>Altura:</Text>
                </View>
            
                <View style={styles.cardInf}>
                    <TextInput 
                    value={Number(altura)}
                    onChangeText={(texto)=>{setAltura(texto)}}
                    keyboardType='numeric'
                    style={styles.boxloginusuario}
                    placeholder='Altura (em cm)'
                    placeholderTextColor='#fff'
                    maxLength={3}
                    />   
                </View>
                

            {/*parte de baixo*/ }
                <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                    <TouchableOpacity style={styles.btn} onPress={btnClick}>
                        <Text style={styles.txtContinuar}>Continuar</Text>
                    </TouchableOpacity>
                </ImageBackground> 
            </ScrollView>   
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: '#1F2128',
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

    text:{
        fontSize:12,
        marginTop:5,
        color:'#666',
        marginBottom: 106,
    },

    textNome :{
        fontSize:40,
        color:'#fff',
        textAlign:'left',
        marginBottom:0
    },

    textNome1 :{
        fontSize:40,
        color:'#fff',
        textAlign:'left',
        marginBottom:96
    },

    cardInf: {
        justifyContent:'center',
        alignItems:'center',
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
        marginBottom:20,
        marginTop: 70
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
    checkboxView:{
        flexDirection:'row',
        paddingBottom:20,
        marginLeft:0,
        justifyContent:'flex-start',
        alignContent:'flex-start'
    },
    checkboxText:{
        color:'#fff',
        marginLeft:10
    },
    Image: {
        justifyContent: "center",
        width: '100%',
        position:'relative',
        height: 400,
        alignItems:'center',
        marginTop:30
      }
});