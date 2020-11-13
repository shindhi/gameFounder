import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
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
      <Header></Header>
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
