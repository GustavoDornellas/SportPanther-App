import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { Header } from './componentes';
import { Ionicons } from '@expo/vector-icons';

const ChatRoom = ({route}) => {

  const { nome } = route.params;

  const [messages, setMessages] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id:2,
        text:'tbm, obrigada!',
        createdAt: new Date(),
        user:{
          _id:2
        }
      },
      
    ])
  }, []);
  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#863a86',
            marginRight:0
          },
          left: {
            backgroundColor: 'whitesmoke',
            marginLeft:-45
          }
        }}
      />
    )
  }

  const renderSend = (props) => {
    return (
      <Send
        {...props}
        label={<Ionicons name='send-sharp' size={24} />}
      />
    )
  }
  
  return(
    <SafeAreaView style={styles.content}>
      <Header nome={nome}/>

      <GiftedChat
        style={{flex:1}}
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        placeholder={'Escreva uma mensagem...'}
        renderSend={renderSend}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{_id:1}}
      />
    </SafeAreaView>
  ); 
}



const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#1F2128',
    opacity:.9
  },
  keyboard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center', 
  },
  footer:{
    width:'100%',
    height:55,
    backgroundColor:'#1F2128', 
    alignSelf:'flex-end',
    position:'absolute',
    flexDirection:'row'
  },
  input:{
    width:'85%',
    height:30,
    borderRadius:35,
    paddingLeft:5,
    marginLeft:5,
    marginTop:7,
    backgroundColor:'#3e4047',
    color:'whitesmoke'
  },
  btn:{
    
    marginLeft:15,
    marginTop:8
  }
});

export default ChatRoom;