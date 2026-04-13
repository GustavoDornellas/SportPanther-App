import styled from "styled-components";
import { Image } from "react-native";
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import Pantera from '../img/iconPantera.png';

const TabArea = styled.View`
    height: 70px;
    background-color: #352465;
    flex-direction: row;
`;

const TabIten = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const TabItenCenter = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    border-radius: 40px;
    box-shadow: 100px 50px 5px #000;
    opacity: 1;
    background-color: #352465;
`;

export default () => {
  const navigation = useNavigation()

  const goTo = (ScreenName) =>{
    navigation.navigate(ScreenName);

  }
    return(
      <TabArea>
        <TabIten onPress={() => goTo('Quadras')}>
          <FontAwesome name="soccer-ball-o" size={43} color="#fff" />
        </TabIten>  
            
        <TabItenCenter style={{elevation: 5}} onPress={() => goTo('Principal')}>
          <Image source={Pantera} style={{widht:50, height:50}}/>
        </TabItenCenter>

        <TabIten onPress={() => goTo('Profile')}>
          <EvilIcons name="user" size={65} color="#fff" />
        </TabIten>

      </TabArea>
    );
}