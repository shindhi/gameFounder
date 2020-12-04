import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Profile02 from '../../assets/profile02.png';
import Profile03 from '../../assets/profiel03.png';
import Profile04 from '../../assets/profile04.png';

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
          <FriendImage source={Profile02} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>

        <NewChatButton onPress={() => navigation.navigate('PrivateChat')}>
          <FriendImage source={Profile03} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>

        <NewChatButton onPress={() => navigation.navigate('PrivateChat')}>
          <FriendImage source={Profile04} />

          <Friend>
            <FriendName>User X</FriendName>
          </Friend>
        </NewChatButton>
      </ListFriends>
    </Container>
  );
};

export default Friends;
