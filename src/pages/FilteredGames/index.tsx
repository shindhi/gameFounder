import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import LeagueOfLegends from '../../../../assets/lol.png';
import AmoungUs from '../../../../assets/amoungUs.png';
import Valorant from '../../../../assets/valorantIcon.png';
import CSGO from '../../../../assets/csgoIcon.png';

import {
  Container,
  Header,
  ButtonReturn,
  TitlePage,
  SubtitlePage,
  GamesGallery,
  ContainerGames,
  GameWrapper,
  GameImage,
  GameTitle,
} from './styles';

const FilteredGames: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header>
        <ButtonReturn onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#fff" />
        </ButtonReturn>
      </Header>
      <Container>
        <TitlePage>Games</TitlePage>
        <SubtitlePage>Selecione um ou mais:</SubtitlePage>

        <GamesGallery>
          <ContainerGames>
            <GameWrapper>
              <GameImage source={LeagueOfLegends} />
              <GameTitle numberOfLines={1}>League of Legends</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={Valorant} />
              <GameTitle numberOfLines={1}>Valorant</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={CSGO} />
              <GameTitle numberOfLines={1}>Cs Go</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={AmoungUs} />
              <GameTitle numberOfLines={1}>Amoung Us</GameTitle>
            </GameWrapper>

            <GameWrapper>
              <GameImage source={AmoungUs} />
              <GameTitle numberOfLines={1}>Amoung Us</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={Valorant} />
              <GameTitle numberOfLines={1}>Valorant</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={CSGO} />
              <GameTitle numberOfLines={1}>Cs Go</GameTitle>
            </GameWrapper>
            <GameWrapper>
              <GameImage source={LeagueOfLegends} />
              <GameTitle numberOfLines={1}>League of Legends</GameTitle>
            </GameWrapper>
          </ContainerGames>
        </GamesGallery>
      </Container>
    </>
  );
};

export default FilteredGames;
