import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderArea } from '../../../TabBar/CustomHeader';
import Contato from './styles';
import { db } from '../../../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../../../contexts/auth';
import { collection, query, onSnapshot, where } from 'firebase/firestore';

const ChatList = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const [dados, setDados] = useState([]);
  
  useEffect(
    () => {
      let unsub;

      const fetchCards = async () => {
          unsub = onSnapshot(query(
            collection(db, 'friends'),
            where('id', '!=', user.id)
            ), (snapshot) => {
            setDados(
                snapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        });
      }
      
    fetchCards();
    return unsub;
  },[db]);

  return (
    <>
    <HeaderArea>
      <Ionicons name="arrow-back" size={35} color="#fff" style={styles.voltar}  onPress={() => navigation.navigate('Principal')}/>
      <View style={styles.head}><Text style={styles.tit}>Conversas</Text></View>

    </HeaderArea>
      <SafeAreaView style={styles.lista}>
        <ScrollView>

          {dados && (dados.map((item) => 
            <TouchableOpacity style={{flex:1, margin:2}} key={item.id}>
              <Contato  nome={item.nome}/>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    lista:{
      flex:1,
      backgroundColor:'#1f2128',
      borderTopWidth:1,
      borderColor:'#fff',
      paddingTop:15,
    }, 
    voltar:{
      marginTop:20,
      marginLeft: 5,
      justifyContent:'center'
  },
    solic:{
      textAlign:'center',
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
      marginTop:'10%'
    },
    head:{
      flex:1, 
      marginBottom: 5,
      marginTop: 25,
      alignItems:'center',
      justifyContent:'center'
    }, 
    tit:{
      fontSize: 25,
      color: '#fff',
      fontWeight:'bold',
    }
});

export default ChatList;