import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FloatingAction } from 'react-native-floating-action';
import { useNavigation } from '@react-navigation/native';

import Profile02 from '../../assets/profile02.png';
import Profile03 from '../../assets/profile03.png';

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

const actions = [
  {
    text: 'Novo chat +',
    name: 'Friends',
    position: 1,
    textBackground: 'transparent',
    textColor: '#fff',
    textElevation: 0,
    color: '#FE8A07',
    icon: (
      <MaterialCommunityIcons name="account-outline" color="#fff" size={22} />
    ),
  },
  {
    text: 'Novo grupo +',
    name: 'GroupChat',
    position: 2,
    textBackground: 'transparent',
    textColor: '#fff',
    textElevation: 0,
    color: '#FE8A07',
    icon: (
      <MaterialCommunityIcons
        name="account-group-outline"
        color="#fff"
        size={22}
      />
    ),
  },
];

const Chat: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>Conversas</HeaderText>
      </Header>

      <ListChat>
        <ChatContainer onPress={() => navigation.navigate('PrivateChat')}>
          <ChatImage source={Profile02} />

          <ChatInformation>
            <ChatName>User X</ChatName>
            {/* <TagGame></TagGame> */}
          </ChatInformation>
        </ChatContainer>

        <ChatContainer>
          <ChatImage source={Profile03} />

          <ChatInformation>
            <ChatName>Group name</ChatName>
            <TagGame>
              <TagGameText>Valorant</TagGameText>
            </TagGame>
          </ChatInformation>
        </ChatContainer>

      </ListChat>
      <FloatingAction
        color={'#FE8A07'}
        distanceToEdge={10}
        overlayColor={'transparent'}
        actions={actions}
        buttonSize={50}
        onPressItem={(name) => navigation.navigate(`${name}`) }
      />
    </Container>
  );
};

export default Chat;
