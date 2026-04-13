import React, { useState } from 'react';
import { Container, BtnVoltar, CardPosition, BtnContinuar } from './styles';
import { ImageBackground, TouchableOpacity, Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import Wave from '../../img/wave.png';
import Voltar from '../../img/voltar.png';

export default function Position({ route }) {
    
    const navigation = useNavigation();

    const [slctdPos, setSlctdPos] = useState('Atacante');

    const { nome } = route.params;
    const { idade } = route.params;
    const { altura } = route.params;
    const { pernaDom } = route.params;

    const btnClick = () => {
    navigation.navigate('Pick',{
        nome:nome,
        idade:idade,
        altura: altura,
        pernaDom:pernaDom,
        posicao:slctdPos
    });
    }

    return(   
        <Container>   
                <BtnVoltar>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Voltar}/>
                    </TouchableOpacity>
                </BtnVoltar>

                    
                        <View style={styles.cardTopo}>
                                <Text style={styles.txtTitulo}>Posição:</Text>
                        </View>

                            <CardPosition>
                                <Picker
                                    selectedValue={slctdPos}
                                    style={styles.picker}
                                    onValueChange={(itemValue) => setSlctdPos(itemValue)
                                }>
                                    <Picker.Item label="Goleira" value="Goleira" />
                                    <Picker.Item label="Zagueira" value="Zagueira" />
                                    <Picker.Item label="Lateral" value="Lateral" />
                                    <Picker.Item label="Meia" value="Meia" />
                                    <Picker.Item label="Ponta" value="Ponta" />
                                    <Picker.Item label="Atacante" value="Atacante" />
                                </Picker>
                            </CardPosition>

                        <ImageBackground source={Wave} resizeMode="cover" style={styles.Image}>
                            <BtnContinuar onPress={btnClick}>
                                <Text style={styles.txtContinuar}>Continuar</Text>
                            </BtnContinuar>
                        </ImageBackground>
        </Container>
    );
}

const styles = StyleSheet.create({

    cardTopo:{
        flex: 1,
        alignItems:"center",
        padding:10,
    },

    txtTitulo :{
        fontSize:40,
        color:'#fff',
    },

    txtContinuar:{
        color:'#6C51B9',
        fontSize:25,
    },

    Image: {
        justifyContent: "center",
        width: '100%',
        height: 300,
        alignItems:'center',
        marginBottom:0
      },

      picker:{
          width:150,
          alignSelf:'center',
          color:'#fff',
          padding:10,
        }
  });