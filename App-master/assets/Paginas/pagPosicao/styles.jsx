import { useFonts, ABeeZee_400Regular } from '@expo-google-fonts/abeezee';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex:1;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1F2128;
`;

export const BtnVoltar = styled.View`
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 25px;
    margin-left: 10px;
    margin-bottom: 0px;
    position: relative;
`;

export const CardPosition = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.Text`
    color: #fff; 
    font-size: 20px;
    align-self: center;
`;

export const BtnContinuar = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 250px;
    background-color: #fff;
    border-radius: 50px;
`;

