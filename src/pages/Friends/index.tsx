import React from 'react';
import { useNavigation } from '@react-navigation/native';

import User1 from '../../assets/user1.png';

import {
  Container,
  Header,
  HeaderText,
  ListFriends,
  NewChatButton,
  FriendImage,
  Friend,
  FriendName,
} from './styles';

const Friends: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>Amigos</HeaderText>
      </Header>

      {/* Listagem de amigos */}
      <ListFriends>
        <NewChatButton onPress={() => navigation.navigate('PrivateChat')}>
          <FriendImage source={User1} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>

        <NewChatButton onPress={() => navigation.navigate('PrivateChat')}>
          <FriendImage source={User1} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>

        <NewChatButton onPress={() => navigation.navigate('PrivateChat')}>
          <FriendImage source={User1} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>
      </ListFriends>
    </Container>
  );
};

export default Friends;
