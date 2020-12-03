import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Valorant from '../../assets/valorant.png';

import {
  Container,
  Header,
  ReturnButton,
  TitleNews,
  WrapperNews,
  NewsImage,
  MatterText,
} from './styles';

const News: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ReturnButton onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={26} />
        </ReturnButton>

        <TitleNews>Title News</TitleNews>
      </Header>

      <WrapperNews>
        <NewsImage source={Valorant} />

        <MatterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </MatterText>
      </WrapperNews>
    </Container>
  );
};

export default News;
