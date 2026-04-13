import { createStackNavigator } from "@react-navigation/stack";

import SignIn from './assets/Paginas/pagSignIn';
import Welcome from './assets/Paginas/pagWelcome';
import Nome from './assets/Paginas/pagNome';
import Nascimento from './assets/Paginas/pagNascimento';
import PernaDom from './assets/Paginas/pagPernaDom';
import Altura from './assets/Paginas/pagAltura';
import Pick from './assets/Paginas/pagFoto';
import Posicao from './assets/Paginas/pagPosicao';
import MainTab from './assets/TabBar/MainTab';
import Cadastro from './assets/Paginas/pagCadastro';
import ChatList from "./assets/Paginas/pagChat/chatList";
import ChatRoom from './assets/Paginas/pagChat/chatRoom';
import Notificacao from './assets/Paginas/pagNotificacao';
import jogos from './assets/Paginas/pagQuadras/jogos';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='Pick' component={Pick}/>
      <Stack.Screen name='MainTab' component={MainTab}/>
      <Stack.Screen name='Cadastro' component={Cadastro}/>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='Nome' component={Nome}/>
      <Stack.Screen name='Nascimento' component={Nascimento}/>
      <Stack.Screen name='Altura' component={Altura}/>
      <Stack.Screen name='PernaDom' component={PernaDom}/>
      <Stack.Screen name='Posicao' component={Posicao}/>
      <Stack.Screen name='jogos' component={jogos}/>
      <Stack.Screen name='ChatList' component={ChatList}/>
      <Stack.Screen name='ChatRoom' component={ChatRoom}/>
      <Stack.Screen name='Notificacao' component={Notificacao}/>
    </Stack.Navigator>
  );
}