import { useContext } from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from '../../../contexts/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { async } from '@firebase/util';
import { getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';

export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #1F2128;
`;

{/*Inicio componetes cardPerfilInfo */ }
const CardPerfilInfo = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: 3%;
    justify-content: space-around;
    border-bottom-width:1px;
    border-color: #242731;
    padding-bottom: 5%;

`;

const CardImagePerfil = styled.View`
    flex-direction: column;
    align-items: center;
`;

const ImagePerfil = styled.Image`
    width: 120px;
    height: 120px;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #242731;
    border-radius: 70px;
    box-shadow: 100px 50px 5px #000;
    background-color: #cddb;
`;

const Nome = styled.Text`
    font-size: 22px;
    color: #fff;
`;

const BoxInfos = styled.View`
    flex-direction: column;
    margin-left: 20px;
`;

const CardInfos = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const BxStats = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Infos = styled.View`
    width: 140px;
    height: 30px;
    border-radius: 5px;
    align-items: center;
    margin: 4px;
    justify-content: space-between;
    background-color: #352465;
    flex-direction: row;
`;

const TxtInfo = styled.Text`
    font-size: 17px;
    color: #fff;
`;

{/*Fim componentes cardPerfilInfo */ }

{/*Inicio componetes cardStats */ }
export const Card = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;
`;

export const BoxStats = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 15px;
`;

export const Box = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

export const Txt = styled.Text`
    color: #fff;
`;



{/*Fim componetes cardStats */ }

export default () => {
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        setProfile(user);
    },[])

    const i = 'https://color-hex.org/colors/807496.png';
    return(
        <CardPerfilInfo>
                <CardImagePerfil>
                    <ImagePerfil style={{ elevation: 10}} source={{uri:profile.fotoUrl}}/>
                    <Nome>{profile.nome}</Nome>
                </CardImagePerfil>
            <BoxInfos>
                <CardInfos>
                    <BxStats>
                        <Infos>   
                            <MaterialCommunityIcons style={{marginLeft:5 }} name="foot-print" size={20} color="#fff"/>
                            <TxtInfo style={{marginRight:20 }}>{profile.pernaDominante}</TxtInfo>
                        </Infos>
                    </BxStats>

                    <BxStats>
                        <Infos>    
                            <MaterialCommunityIcons style={{marginLeft:5 }} name="timer-sand-empty" size={20} color="#fff" />
                            <TxtInfo style={{marginRight:20 }}>{profile.idade} anos</TxtInfo>
                        </Infos>
                    </BxStats>

                    <BxStats>
                        <Infos>    
                            <Entypo style={{marginLeft:5 }} name="ruler" size={20} color="#fff" />
                            <TxtInfo style={{marginRight:20 }}>{profile.altura} cm</TxtInfo>
                        </Infos>
                    </BxStats>
                    <BxStats>
                        <Infos>
                            <FontAwesome5 style={{marginLeft:5 }} name="vest" size={20} color="#fff" />
                            <TxtInfo style={{marginRight:20 }}>{profile.posicao}</TxtInfo>
                        </Infos>
                    </BxStats>

                </CardInfos>
            </BoxInfos>
        </CardPerfilInfo>
    );
}