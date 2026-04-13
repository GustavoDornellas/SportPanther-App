import { useRef, useContext, useEffect, useState } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container } from './styles';
import {HeaderArea,HeaderIten} from '../../TabBar/CustomHeader.jsx';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { db } from '../../../config/firebaseConfig';
import { AuthContext } from '../../../contexts/auth';
import { collection, doc, onSnapshot, setDoc, query, where, getDocs } from 'firebase/firestore';

import fundo from '../../img/Fundo.png';

import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const swipeRef= useRef();
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        let unsub;

        const fetchCards = async () => {

            const swipes = await getDocs(collection(db, 'users', user.id, 'swipes')).then(
                (snapshot) => snapshot.docs.map((doc) => doc.id)
            );

            const swipedUserIds = swipes.length > 0 ? swipes : ['test']; 

            unsub = onSnapshot(query(
                collection(db, 'users'),
                where('id', 'not-in', [...swipedUserIds])
                ), (snapshot) => {
                setProfiles(
                    snapshot.docs
                    .filter((doc) => doc.id != user.id)
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                );
            });
        };

    fetchCards();
    return unsub;
    },[db]);

    const swipeRight = async (cardIndex) => {
        if(!profiles[cardIndex]) return;

        const userSwiped = profiles[cardIndex];

        setDoc(doc(db, 'users', user.id, 'swipes', userSwiped.id),userSwiped);
        setDoc(doc(db, 'friends', user.id),userSwiped);
    };

    return(
        <>
            <HeaderArea>
                <HeaderIten>
                    <View style={{width:30, height:24}} />
                </HeaderIten>
                <View style={styles.cardTit}>
                    <Text style={styles.titulo}>Encontrar Jogadoras</Text>
                </View>
                <HeaderIten>
                    <Ionicons name='chatbox-ellipses-outline' size={30} color='#FFF' onPress={() => navigation.navigate('ChatList')} style={{marginRight:5}}/>
                </HeaderIten>
            </HeaderArea>

            <Container>
                <Swiper 
                    ref={swipeRef}
                    stackSize={5}
                    cardIndex={0}
                    showSecondCard={false}
                    verticalSwipe={false}
                    onSwipedRight={(cardIndex)=>{
                        swipeRight(cardIndex);
                    }}
                    backgroundColor={'#1f2128'}
                    overlayLabels={{
                        left: {
                          title: "NAH",
                          style: {
                            label: {
                              textAlign: "right",
                              color: "red",
                            },
                          },
                        },
                        right: {
                          title: "CHAMAR",
                          style: {
                            label: {
                              textAlign: "left",
                              color: "#00c3ff",
                            },
                          },
                        },
                      }}
                      animateCardOpacity
                      cards={profiles}
                      renderCard={(item) => item ? (
                        <View style={styles.card} key={item.id}>
                            <Image source={{uri:item.fotoUrl}} style={styles.bgImg}/>      
                            <View style={styles.bottom}>
                                <Text style={{color:'#fff', fontSize:30}}>{item.nome}</Text>
                                <Text style={styles.nm}>{item.posicao} | {item.pernaDominante}</Text>
                            </View>
                        </View>
                        ) : (
                            <View style={styles.card}>
                            <Image source={fundo} style={styles.bgImg}/>      
                            <View style={styles.bottom}>
                                <Text style={{color:'#fff', fontSize:30}}>Sem usuárias</Text>
                                <Text style={styles.nm}>SportPanther</Text>
                            </View>
                        </View> 
                        )}          
                />       
            </Container>
            <View style={styles.fundo}>
            <AntDesign name="close" size={40} color="#f00000" style={styles.nope} onPress={() => swipeRef.current.swipeLeft()}/>
                <MaterialCommunityIcons name="email-send-outline" size={40} color="#00ff15" style={styles.yep} onPress={() => swipeRef.current.swipeRight()}/>
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    
    cardTit:{
        flex:1, 
        marginBottom: 5,
        marginTop: 20,
        alignItems:'center',
        justifyContent:'center'
    }, 

    titulo:{
        fontSize: 25,
        color: '#fff',
    },
    cont:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    nome:{
        fontSize:25,
        color:'#fff',
        marginTop:17,
        marginLeft:5,
    },
    fundo:{
        flexDirection:'row',
        justifyContent:"space-between",
        position:'relative',
        backgroundColor:'#1F2128',
    },
    nope:{
        marginLeft:35,
        marginBottom:10,
    },
    yep:{
        marginRight:35,
        marginBottom:10
    },
    card:{
        width:350,
        height:550,
        elevation:10,
        alignItems:'baseline',
        borderRadius:15,
        backgroundColor:'#808'
    },
    bgImg:{
        width:350,
        height:550,
        borderRadius:15
    },
    bottom:{
        width:350,
        height:100,
        marginTop:-100,
        opacity:0.75,
        paddingLeft:15,
        paddingTop:10,
        backgroundColor:'#1f2128',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    nm:{
        color:'#fff',
        fontSize:20,
        marginTop:10
    }
});