import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const i = 'https://color-hex.org/colors/807496.png';

function Contato({foto, nome}) {
    const navigation=useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.cardImg}>
            <Image style={styles.img} source={{uri:foto}} />
        </View>
        <View style={styles.txts}>
            <Text style={styles.nome}>
                {nome}
            </Text>
        </View>
    </TouchableOpacity>
  );
}

export const Solicitacao = ({nome,foto}) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardImg}>
                <Image style={styles.img} source={{uri:i}} />
            </View>
            <View style={styles.txts}>
                <Text style={styles.nome}>{nome}</Text>
                
                </View>
                <View style={[styles.btns]}>
                <TouchableOpacity style={[styles.btn,{ backgroundColor:'#199201'}]}>
                    <Text style={{color:'#fff', fontSize:10}}>Aceitar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{backgroundColor:'#ac0707'}]}>
                  <Text style={{color:'#fff', fontSize:10}}>Recusar</Text>
                </TouchableOpacity>
            </View>  
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:'2%',
        borderBottomWidth:1,
        borderColor:'#242731',


    },
    cardImg:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:15
    },
    txts:{
        flex:1,
        justifyContent:'flex-start',
        paddingLeft:5,
        paddingTop:10,
    },
    img:{
        width:55,
        height:55,
        borderRadius:33,
        backgroundColor:'#808',
        marginBottom:'25%',
    },
    nome:{
        fontSize:17,
        fontWeight:'bold',
        color:'#faf6f6'
    },
    btns:{
        flex:2,
        widht:80,
        height:30,
        marginRight:13,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center'
    },
    btn:{
        width:80,
        height:30,
        borderRadius:5,
        elevation:10,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Contato; 