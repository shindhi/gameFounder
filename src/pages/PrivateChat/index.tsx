import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Profile02 from '../../assets/profile02.png';

import {
  Header,
  ReturnButton,
  UserImage,
  UserName,
  MessageContainer,
  MessageText,
  Container,
  ContainerMessages,
  ContainerSendMessage,
  AreaText,
  ButtonSend,
} from './styles';

const userId = 1;
const arrayMessageMock = [
  {
    userId: 2,
    messageId: Math.random(),
    message: 'Hello World',
  },
];

interface PropsMessage {
  userId: number;
  messageId: number;
  message: string;
}

interface PropsBoxMessage {
  userIdMessage: number;
  message: string;
}

const BoxMessage: React.FC<PropsBoxMessage> = ({ userIdMessage, message }) => {
  return (
    <>
      <MessageContainer user={userIdMessage === userId}>
        <MessageText>{message}</MessageText>
      </MessageContainer>
    </>
  );
};

const PrivateChat: React.FC = () => {
  const navigation = useNavigation();

  const [textMessage, setTextMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState<PropsMessage[]>(
    arrayMessageMock
  );

  const handleSendMessage = useCallback(
    (userId) => {
      const structMessage: PropsMessage = {
        userId,
        message: textMessage,
        messageId: Math.random(),
      };

      setMessageHistory([...messageHistory, structMessage]);
      setTextMessage('');
    },
    [messageHistory, textMessage]
  );

  return (
    <Container>
      <Header>
        <ReturnButton onPress={() => navigation.navigate('Chat')}>
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={26} />
        </ReturnButton>

        <UserImage source={Profile02} />

        <UserName>User X</UserName>
      </Header>

      <ScrollView>
        <ContainerMessages>
          {messageHistory.map((msg: PropsMessage) => (
            <BoxMessage
              key={msg.messageId}
              message={msg.message}
              userIdMessage={msg.userId}
            />
          ))}
        </ContainerMessages>
      </ScrollView>

      <ContainerSendMessage>
        <AreaText
          value={textMessage}
          onChangeText={(textMessage) => setTextMessage(textMessage)}
        />

        <ButtonSend onPress={() => handleSendMessage(userId)}>
          <MaterialCommunityIcons name="send" color="#fff" size={26} />
        </ButtonSend>
      </ContainerSendMessage>
    </Container>
  );
};

export default PrivateChat;
