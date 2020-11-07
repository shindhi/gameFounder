import React, { useState } from 'react';
import { Alert, Text, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider, Portal, Modal } from 'react-native-paper';

import ListGames from './components/ListGames';

import {
  ModalFilter,
  Container,
  TitleContainer,
  TitleText,
  FilterContainer,
  FilterInformation,
  FilterButton,
  ContainerList,
} from './styles';

// const ModalTest: React.FC = ({ children, open }) => {
//   return (
//     <View>
//       <ModalFilter
//         animationType="slide"
//         // transparent={true}
//         visible={open}
//         onRequestClose={() => { Alert.alert("Eita") }}
//       >
//         <Button title="Fechar" onPress={() => setIsModalOpen(!isModalOpen)}>
//           <Text>Fechar</Text>
//         </Button>
//       </ModalFilter>
//     </View>
//   );
// }

const GamesCategory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);
  const containerStyle = { bakcgroundColor: '#fff', padding: 20 };

  return (
    <>
      <Provider>
        <Portal>
          <Modal visible={isModalOpen} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
      </Provider>

      <Container>
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
