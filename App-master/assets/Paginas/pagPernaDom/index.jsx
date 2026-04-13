import React, {useState} from 'react';
import { View,
        Text,
        TouchableOpacity,
        StyleSheet,
        Image,
        ImageBackground
         } from "react-native";
import { Picker } from '@react-native-picker/picker';
      
        
import { useNavigation } from "@react-navigation/native";

import Checkbox from 'expo-checkbox';
  
import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

export default function Name({ route }){
    const navigation = useNavigation();

    const [slctdLeg, setSlctdLeg] = useState("Direita");

    const { nome } = route.params;
    const { idade } = route.params;
    const { altura } = route.params;

    const btnClick = () => {
         navigation.navigate('Posicao',{
            nome:nome,
            idade:idade,
            altura: altura,
            pernaDom:slctdLeg
         })
      }

    return(
        <ImageBackground source={require('../../img/Fundo.png')} style={styles.bgImage}>
                <View style={styles.back}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Voltar} style={styles.imgVoltar} />
                    </TouchableOpacity>
                </View>
                    <View style={styles.container}>             
                            <View style={styles.cardTopo}>
                                <Text style={styles.textNome}>Perna Dominante:</Text>

                            </View>
                            
                        <View>

                        <Picker
                                selectedValue={slctdLeg}
                                style={styles.boxloginusuario}
                                onValueChange={(itemValue) => setSlctdLeg(itemValue)
                            }>
                                <Picker.Item label="Direita" value="Direita" />
                                <Picker.Item label="Esquerda" value="Esquerda" />
                                <Picker.Item label="Ambidestra" value="Ambidestra" />
                            </Picker>
                        </View>

                        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                            <TouchableOpacity style={styles.btn} onPress={btnClick}>
                                <Text style={styles.txtContinuar}>Continuar</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#1F2128'
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

    bgImage:{
        height:'100%'
      },

    textNome :{
        fontSize:40,
        color:'#fff',
        textAlign:'left'
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
        marginBottom:60,
        marginTop: 100
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
        display:'flex',
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
        height: 300,
        alignItems:'center',
        marginBottom:0
      }
});