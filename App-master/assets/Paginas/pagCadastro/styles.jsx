import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex:1;
    flex-direction: column;
    align-items: center;
    background-color: #1F2128;
    justify-content: space-between;
`;

export const ViewLogo = styled.View`
    flex:1;
    align-items: center;
    padding: 20px;
    margin-top: 30px;
`;

export const Input = styled.TextInput`
    width: 250px;
    padding: 5px;
    border-bottom-width: 1px;
    border-color: #FFF;
    color: #FFF;
`;

export const  CardInput = styled.View`
    height: 100px;
    align-items: center;
    margin-top:45;
    justify-content: space-between;
`; 

export const  Entrar = styled.TouchableOpacity`
    width: 250px;
    height: 70px;
    color: #fff;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`; 

export const  Subli = styled.Text`
    color: #1a44fc;
    text-decoration: underline;
`; 
