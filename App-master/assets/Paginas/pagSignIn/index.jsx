import { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../../contexts/auth';

import Logo from '../../img/Pantera.png';
import Wave from '../../img/wave.png';

import { A, CardLogin, Input } from './politicaPriv';

export default function SIn() {
  const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const { Cor, loading, signin, user } = useContext(AuthContext);

  const GoToCadastro = () => navigation.reset({routes:[{name:'Cadastro'}]});

  const handleClick = () => { 
    signin({mail:mail, pass:pass});
    if(Cor == 1){
      return null;
    }else{
      if(user.fotoUrl != 'nothing'){
          console.log(user);
          navigation.navigate('MainTab');
            
      }if(user.fotoUrl == 'nothing'){
          console.log(user.fotoUrl);
          navigation.navigate('Welcome');
            
      }
  }
}

  return (
        <View style={styles.container}>
          <View style={styles.cardTopo}>
            <Image source={Logo} />
            <Text style={styles.textSport}>SportPanther</Text>
          </View>

          <CardLogin>
            <Text style={{fontSize:16, color:Cor?'#ff0000':'#1F2128'}}>Usuário e/ou senha incorretos</Text>
            <Input 
              keyboardType='email-address'      
              placeholder='Email'
              placeholderTextColor='#cdc'
              value={String(mail)}
              onChangeText={(texto)=>{setMail(texto)}}
            />

            <Input 
              keyboardType='default'
              placeholder='Senha'
              secureTextEntry
              maxLength={20}
              placeholderTextColor='#cdc'
              value={String(pass)}
              onChangeText={(texto)=>{setPass(texto)}}  
            />
          </CardLogin>

          <TouchableOpacity onPress={GoToCadastro} style={styles.cad}>
              <Text style={styles.text}>Ainda não tem uma conta? <A>Cadastre-se</A></Text>
          </TouchableOpacity>
        
        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>  
            <TouchableOpacity style={styles.card} onPress={handleClick}>
              <Text style={styles.texto}>{loading?'Carregando...':'Entrar'}</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#1F2128',
  },

  card:{
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius: 50,
    width: 250,

  },

  textSport:{
    fontSize:40,
    color:'#fff',
    margin: 15
  },

  texto:{
    color:'#898385',
    fontSize: 20
  },

  cardTopo:{
    alignItems:"center",
    padding:20,
    marginTop:30
},

text: {
  color:'#fff',
  fontSize: 14,
  textAlign:'center'
},

Image: {
  justifyContent: "center",
  width: '100%',
  height: 254,
  alignItems:'center',
  alignContent:'center'
},
cad:{
  width:270,
  height:70,
  textAlign:'center',
  alignItems:'baseline'
}
});