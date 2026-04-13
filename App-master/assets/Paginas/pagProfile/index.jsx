import React from 'react';
import { View, Text, ScrollView, StyleSheet} from "react-native";
import { Container } from './styles';
import Cards from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {HeaderArea,HeaderIten} from '../../TabBar/CustomHeader';
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from '../../../contexts/auth';

export default () => {    
    const { logout } = React.useContext(AuthContext);
    const navigation = useNavigation();
    
    const _hndlPrss = () => {
        logout();
        navigation.reset({routes:[{name:'SignIn'}]});
    }

    return(
        <>
        <HeaderArea>
            <HeaderIten>
                <MaterialCommunityIcons name="logout-variant" size={30} color="#fff" onPress={_hndlPrss}/>
            </HeaderIten>
            <View style={styles.cardTit}>
                <Text style={styles.titulo}>Perfil</Text>
            </View>
            <HeaderIten>
                <Ionicons name='chatbox-ellipses-outline' size={30} color='#FFF' onPress={() => navigation.navigate('ChatList')} style={{marginRight:5}}/>
            </HeaderIten>
        </HeaderArea>
            
        <Container>
        <ScrollView>    
                    <Cards />
            <View style={styles.container}>
                <View style={{padding:23}}/>
            </View>
        </ScrollView>
        </Container>
        </>
        );

    }

    const styles = StyleSheet.create({
        
        cardTit:{
            flex:1, 
            marginBottom: 5,
            marginTop: 20,
            alignItems:'center',
            justifyContent:'center',
        }, 
    
        titulo:{
            fontSize: 30,
            color: '#fff',
        },

        container:{
            flex:1,
            justifyContent:'space-between',
            backgroundColor: '#1F2128'
        },
        estatisticas:{
            justifyContent: 'center',
            alignContent:'center',
        },

        estatisticass:{
            paddingBottom:'10%',
            justifyContent: 'center',
            marginBottom:'3%',
            borderBottomWidth:1,
            borderColor:'#242731'
        },

        textesta: {
            fontSize:30,
        },

        textamg: {
            fontSize:20, 
            marginBottom:5,
        },

        textamgnum:{
            fontSize:18,
        },
        
        textpart: {
            fontSize:20, 
            marginBottom:5,
        },

        textpartnum:{
            fontSize:18,
        },

        texthist:{
            fontSize:30,
            marginBottom:25
        },
        img:{
            alignItems:'center',
            justifyContent:'center',
            width: 80, 
            height:50, 
            backgroundColor: '#056b12',
            borderRadius:5,
        },
        boxhistorico:{
            alignContent: 'center',
            justifyContent:'center',
            backgroundColor: '#242731',
            height:70,
            paddingBottom:'4%'
        },
    }); 