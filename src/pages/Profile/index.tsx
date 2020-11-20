import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';

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
  EditListGame,
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
        <EditListGame
          onPress={() => {
            console.log('Edit games');
          }}
        >
          <MaterialCommunityIcons
            name="pencil-outline"
            size={20}
            color="#fff"
          />
        </EditListGame>

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
