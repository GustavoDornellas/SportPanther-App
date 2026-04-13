import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text} from 'react-native';
import { HeaderArea } from '../../TabBar/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { Solicitacao } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../config/firebaseConfig';
import { AuthContext } from '../../../contexts/auth';
import { where, collection, query, onSnapshot } from 'firebase/firestore';

const Notificacao = () => {
  const { user } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [profiles, setProfiles] = React.useState([]);

  return (
    <>
    <HeaderArea>
      <Ionicons name="arrow-back" size={35} color="#fff" style={styles.voltar}  onPress={() => navigation.navigate('ChatList')}/>
      <View style={styles.head}><Text style={styles.tit}>Solicitações</Text></View>  
    </HeaderArea>
    <SafeAreaView style={styles.lista}>    
        {(profiles.map((item) => <Solicitacao key={item.id} nome={item.nome} foto={item.fotoUrl} />))}
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
        justifyContent:'center',
        marginRight:30
      }, 
      tit:{
        fontSize: 25,
        color: '#fff',
        fontWeight:'bold',
      }

});

export default Notificacao;