import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1F2128;
`;

export const QuadraView = styled.View`
        flex-direction: column;
        align-items: center;
        background-color: #242731;
        width: 330px;
        height: 220px;
        border-radius: 10px;
        margin: 10px;
    `;

export const Quadra = styled.TouchableOpacity`
    width: 300px;
    height: 180px;
    border-radius: 20px;
    background-color: #2C2C2C;
    margin: 5px;
    margin-top: 10px;
`;

export const NomeQuadra = styled.Text`
   font-size: 17px;
   color: #fff;
   position: relative;
   margin-top: 1px;
`;