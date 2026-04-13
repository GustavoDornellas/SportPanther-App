import * as React from "react";
import { Text, Image, ScrollView, View, StyleSheet, ImageBackground, TouchableOpacity, Pressable} from "react-native";
import { Container, ViewLogo, CardInput, Input, Subli, Entrar } from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';

import {AuthContext} from '../../../contexts/auth';

import Logo from '../../img/Pantera.png';
import Wave from '../../img/wave.png';

export default () => {
    const navigation = useNavigation();

    const { signup, erro, loading } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const _abrirTermos = async () => {
        await WebBrowser.openBrowserAsync('https://sportpanther.vercel.app/pagina-termos/index.html');
    };

    const GoTo = () => { navigation.reset({routes:[{name:'SignIn'}]}); }
    
    const handleClick = () => signup({email:email, senha:senha});

    return(
        <Container>
            <ScrollView style={{width: '100%', height:'100%'}}>
                <ViewLogo>
                    <Image source={Logo}/>
                    <Text style={{ fontSize:40, color:'#fff', margin: 15}}>
                        SportPanther
                    </Text>
                </ViewLogo>

                <CardInput>
                    <Text style={{fontSize:16, color:erro?'#ff0000':'#1F2128'}}>Usuário e ou senha inválidos</Text>
                    <Input 
                        value={String(email)}
                        onChangeText={(texto)=>{setEmail(texto)}}
                        keyboardtype='email-address'
                        placeholder='Email'
                        placeholderTextColor='#cdc'
                    />
                    
                    <Input 
                        value={String(senha)}
                        onChangeText={(texto)=>{setSenha(texto)}}
                        keyboardtype='default'
                        placeholder='Senha (mín. 6)'
                        secureTextEntry
                        maxLength={20}
                        placeholderTextColor='#cdc'
                    />

                    <Entrar onPress={GoTo}>
                        <Text style={{color:'#fff'}}>Já possui uma conta? <Subli>Entrar</Subli></Text>
                    </Entrar>

                </CardInput>

                <ImageBackground source={Wave} style={styles.wave} resizeMode="cover">    
                    
                    <TouchableOpacity style={styles.btn} onPress={handleClick}>
                        <Text style={{color:'#898385',fontSize: 20}}>{loading?'Carregando...':'Cadastrar'}</Text>
                    </TouchableOpacity>

                    <Pressable style={{ position:'relative', marginTop:10 }} onPress={_abrirTermos}>
                        <Text style={{color:'#fff'}}>
                            Ao se cadastrar você concorda com 
                            nossa <Subli>politica de privacidade</Subli>
                        </Text>
                    </Pressable> 
                </ImageBackground>   
            </ScrollView>
        </Container>
    );
} 

const styles = StyleSheet.create({
   input: {
    width: 250,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#FFF',
    color: '#FFF'
   }, 
   wave: {
    justifyContent: 'center',
    width: '100%',
    height: 300,
    alignItems: 'center',
    marginTop: 70,
    marginBottom:0
   },
   btn: {
    position: 'relative',
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    width: 250,
    marginTop:70
   }
});