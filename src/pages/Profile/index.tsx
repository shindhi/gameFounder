import React from 'react';
import { Text, View } from 'react-native';

import User from '../../assets/photoPerfil.png';

import {
  Container,
  HeaderProfile,
  UserImage,
  UserName,
  UserStatus,
  Identifier,
  StatusText,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <HeaderProfile>
        <UserImage source={User} />

        <View>
          <UserName>User</UserName>

          <UserStatus>
            <Identifier />
            <StatusText>Online</StatusText>
          </UserStatus>
        </View>
      </HeaderProfile>
    </Container>
  );
};

export default Profile;
