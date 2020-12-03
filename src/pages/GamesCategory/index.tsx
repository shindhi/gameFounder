import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListGames from './components/ListGames';

import {
  ContainerModal,
  ModalView,
  HeaderModal,
  ModalTitle,
  ModalButtonClose,
  InputGroups,
  InputGroupsText,
  InputModal,
  ButtonCloseModal,
  ButtonCloseModalText,

  Container,
  TitleContainer,
  TitleText,
  FilterContainer,
  FilterInformation,
  FilterButton,
  ContainerList,
} from './styles';

const GamesCategory: React.FC = () => {
  const navigation = useNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterGames = useCallback(() => {
    setIsModalOpen(!isModalOpen);

    navigation.navigate('FilteredGames');
  }, [isModalOpen]);

  return (
    <>
      <Container>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalOpen}
        >
          <ContainerModal>
            <ModalView>
              <HeaderModal>
                <ModalTitle>Filtro</ModalTitle>
                <ModalButtonClose onPress={() => setIsModalOpen(!isModalOpen)}>
                  <MaterialCommunityIcons name="close" color="#fff" size={26} />
                </ModalButtonClose>
              </HeaderModal>

              <InputGroups>
                <InputGroupsText>Nome do jogo</InputGroupsText>
                <InputModal placeholder="Ex: Valorant" />
              </InputGroups>

              <InputGroups>
                <InputGroupsText>Categorias</InputGroupsText>
                <InputModal placeholder="Ex: FPS" />
              </InputGroups>

              <InputGroups>
                <InputGroupsText>Gênero</InputGroupsText>
                <InputModal placeholder="Ex: Ação" />
              </InputGroups>

              <ButtonCloseModal onPress={handleFilterGames}>
                <ButtonCloseModalText>Filtrar</ButtonCloseModalText>
              </ButtonCloseModal>
            </ModalView>
          </ContainerModal>
        </Modal>
        
        <TitleContainer>
          <TitleText>Categorias / Gêneros</TitleText>
        </TitleContainer>

        <FilterContainer>
          <FilterInformation>Selecione um(a) ou mais:</FilterInformation>

          <FilterButton onPress={() => setIsModalOpen(!isModalOpen)}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={26}
              color="#DB7C0C"
            />
          </FilterButton>
        </FilterContainer>

        {/* List */}
        <ContainerList>
          <ListGames></ListGames>
          <ListGames></ListGames>
          <ListGames></ListGames>
          <ListGames></ListGames>
        </ContainerList>
      </Container>
    </>
  );
};

export default GamesCategory;
