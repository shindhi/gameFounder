import React from 'react';
import { View } from 'react-native';

import User from '../../assets/photoPerfil.png';
import LeagueOfLegends from '../../assets/lol.png';

import {
  Container,
  HeaderProfile,
  UserImage,
  UserName,
  UserStatus,
  Identifier,
  StatusText,
  ListContainer,
  DescriptionList,
  ListCategory,
  ItemContainer,
  CategoryImage,
  CategoryName,
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

      <ListContainer>
        <DescriptionList>FPS e Moba</DescriptionList>

        <ListCategory>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
          <ItemContainer>
            <CategoryImage source={LeagueOfLegends} />
            <CategoryName numberOfLines={1}>League of Legends</CategoryName>
          </ItemContainer>
        </ListCategory>
      </ListContainer>
    </Container>
  );
};

export default Profile;
