import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const i = 'https://color-hex.org/colors/807496.png';

export const Header = ({nome, foto}) => {
const navigation = useNavigation();
 
return (
        <View style={styles.head}>
            <Ionicons name="arrow-back" size={35} color="#fff" style={styles.voltar}  onPress={() => navigation.navigate('ChatList')}/>
            <Image source={{uri: i}} style={styles.foto}/>
            <Text style={styles.nome}>{nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    head:{
        width:'100%',
        height:90,
        backgroundColor:'#1F2128',
        borderBottomWidth:.3,
        borderColor:'#FFF',
        flexDirection:'row',
        alignItems:'center'
    },
    voltar:{
        marginTop:20,
        marginLeft: 10,
        justifyContent:'center'
    },
    foto:{
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderWidth:2,
        borderRadius:30,
        marginTop:15,
        marginLeft:7
    },
    nome:{
        fontSize:25,
        fontWeight:'bold',
        color:'#faf6f6',
        marginLeft:15
    }
});