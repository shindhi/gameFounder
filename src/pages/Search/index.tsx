import React, { useCallback } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import Lol from '../../assets/lol.png';

import {
  Container,
  ListGroups,
  Group,
  ImageGroup,
  InfoGroup,
  NameGroup,
  ContainerSubInfo,
  Wave,
} from './styles';

const Search: React.FC = () => {
  const navigation = useNavigation();

  const filter = useCallback(() => {}, []);

  return (
    <Container>
      <Input icon="search" name="searchGroup" />

      <ListGroups>
        <Group
          onPress={() => {
            navigation.navigate('PrivateChat');
          }}
        >
          <ImageGroup source={Lol} />

          <InfoGroup>
            <NameGroup>Amoung US</NameGroup>

            <ContainerSubInfo>
              <Wave>2/10</Wave>

              <MaterialCommunityIcons name="lock" size={20} color="#7D7D7F" />
            </ContainerSubInfo>
          </InfoGroup>
        </Group>

        <Group>
          <ImageGroup source={Lol} />

          <InfoGroup>
            <NameGroup>Amoung US</NameGroup>

            <ContainerSubInfo>
              <Wave>2/10</Wave>

              <MaterialCommunityIcons name="lock" size={20} color="#7D7D7F" />
            </ContainerSubInfo>
          </InfoGroup>
        </Group>
      </ListGroups>
    </Container>
  );
};

export default Search;
