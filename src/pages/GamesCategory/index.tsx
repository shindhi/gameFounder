import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  TitleContainer,
  TitleText,
  FilterContainer,
  FilterInformation,
} from './styles';
import ListGames from './components/ListGames';
import { ScrollView } from 'react-native-gesture-handler';

const GamesCategory: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleText>Categorias / Gêneros</TitleText>
      </TitleContainer>

      <FilterContainer>
        <FilterInformation>Selecione um(a) ou mais:</FilterInformation>
        <MaterialCommunityIcons
          name="filter-outline"
          size={24}
          color="#DB7C0C"
        />
      </FilterContainer>

      {/* List */}
      <ScrollView>
        <ListGames></ListGames>
        <ListGames></ListGames>
        <ListGames></ListGames>
      </ScrollView>
    </Container>
  );
};

export default GamesCategory;
