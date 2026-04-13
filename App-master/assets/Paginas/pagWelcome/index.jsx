import { View, Text,TouchableOpacity,StyleSheet,Image, ImageBackground, ScrollView  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
  
import Logo from '../../img/Pantera.png';
import Icone from '../../img/icones.png';
import Wave from '../../img/wave.png';

import {SejaVcMsm, SejaLgl, Proteja} from './textos';

export default function Wel(){
    const navigation = useNavigation();

    return(
        <ScrollView>
            <View style={styles.container}>
                    <View style={styles.cardTopo}>
                        <Image source={Logo} style={styles.imgLogo}/>
                        <Text style={styles.textBemvinda}>Bem-vinda a SportPanther</Text>
                        <Text style={styles.text}>Siga as regras da casa</Text>
                    </View>

                    <View style={styles.cardRegras}>
                        
                        <View style={styles.titCardRegras}>
                            <Image source={Icone} style={styles.icon}/><Text style={styles.subTitulo}>
                            Seja você mesma</Text>
                        </View>
                            <SejaVcMsm/>
                        
                        <View style={styles.titCardRegras}>
                            <Image source={Icone} style={styles.icon}/><Text style={styles.subTitulo}>
                            Proteja-se</Text>
                        </View>
                            <Proteja />

                        <View style={styles.titCardRegras}>
                            <Image source={Icone} style={styles.icon}/><Text style={styles.subTitulo}>
                            Seja legal</Text>
                        </View>
                             <SejaLgl /> 
                    </View>

                        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.reset({routes:[{name:'Nome'}]})}>
                                <Text style={styles.txtContinuar}>Continuar</Text>
                            </TouchableOpacity>
                        </ImageBackground>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#1F2128',
    },

    cardTopo:{
        alignItems:"center",
        padding:20,
        marginTop:30
    },

    imgLogo:{
        marginVertical:10,
    },

    textBemvinda:{
        fontSize:25,
        color:'#fff'
    },

    cardRegras:{
        width:250
    },

    titCardRegras:{
        flexDirection:"row",
        alignItems:'center',
        padding:1,
        marginTop:35
    },

    icon:{
        marginRight:20
    },
    subTitulo:{
        fontSize: 18,
        color:'#fff'
    },
    text:{
        fontSize:12,
        marginTop:5,
        color:'#666'
    },
    btn:{
        justifyContent:'flex-end',
        alignItems:'center',
        padding: 10,
        width:250,
        backgroundColor:'#fff',
        borderRadius:50,
        marginTop: 104
    },
    txtContinuar:{
        color:'#6C51B9',
        fontSize:25,
    },
    Image: {
        flex:1,
        width: '100%',
        height: 250,
        alignItems:'center',
        marginBottom:0,
    },
    
});