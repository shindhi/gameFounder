import React from 'react';

import User1 from '../../assets/user1.png';
import User2 from '../../assets/user2.png';
import LeagueOfLegends from '../../assets/lol.png';

import {
  Container,
  Header,
  HeaderText,
  ListChat,
  ChatContainer,
  ChatImage,
  ChatInformation,
  ChatName,
  TagGame,
  TagGameText,
} from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Conversas</HeaderText>
      </Header>

      <ListChat>
        <ChatContainer>
          <ChatImage source={User1} />

          <ChatInformation>
            <ChatName>User X</ChatName>
            {/* <TagGame></TagGame> */}
          </ChatInformation>
        </ChatContainer>

        <ChatContainer>
          <ChatImage source={User2} />

          <ChatInformation>
            <ChatName>Group name</ChatName>
            <TagGame>
              <TagGameText>Valorant</TagGameText>
            </TagGame>
          </ChatInformation>
        </ChatContainer>
      </ListChat>
    </Container>
  );
};

export default Chat;
