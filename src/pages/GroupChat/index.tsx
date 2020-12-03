import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';

import Game from '../../assets/lol.png';

import {
  Container,
  Header,
  Title,
  ReturnButton,
  WrapperImageGroup,
  ImageGroupButton,
  ImageGroup,
  NameGroup,
  WrapperFormGroup,
  TitleVacancy,
  Divider,
  TitlePrivacy,
  SelectNumber,
  WrapperButtons,
  Private,
  NotPrivate,
  ButtonText,
  CreateButton,
  CreateButtonText
} from './styles';

const GroupChat: React.FC = () => {
  const navigation = useNavigation();

  const [groupImage, setGroupImage] = useState<string>('');
  const [numberOfVacancies, setNumberOfVacancies] = useState<React.ReactText>('');
  const [groupStatus, setGroupStatus] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== 'granted') {
          alert('Desculpe, precisamos da permissão da camêra para funcionar!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      espect: [4, 3], // Especifica a proporção a ser mantida
      quality: 1,
    });

    if (!result.cancelled) {
      setGroupImage(result.uri);
    }
  };


  return (
    <Container>
      <Header>
        <ReturnButton>
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={26} />
        </ReturnButton>

        <Title>Criar Grupo</Title>
      </Header>

      <WrapperImageGroup>
        <ImageGroupButton onPress={pickImage}>
          {groupImage !== '' ? (
            <ImageGroup source={{ uri: groupImage }} />
          ) : (
            <ImageGroup source={Game} />
          )}
        </ImageGroupButton>
        <NameGroup>LoL</NameGroup>
      </WrapperImageGroup>

      <WrapperFormGroup>
        <TitleVacancy>Número de vagas:</TitleVacancy>

        <SelectNumber>
          <Picker
            selectedValue={numberOfVacancies}
            mode="dropdown"
            style={{
              flex: 1,
              color: '#fff',
            }}
            itemStyle={{
              backgroundColor: '#000',
              color: '#fff',
            }}
            onValueChange={(vacancyValue, _) =>
              setNumberOfVacancies(vacancyValue)
            }
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </SelectNumber>

        <Divider></Divider>

        <TitlePrivacy>Privacidade</TitlePrivacy>
        <WrapperButtons>
          <Private onPress={() => setGroupStatus('private')}>
            <FeatherIcon
              name="lock"
              size={20}
              color={
                groupStatus !== 'private' ? '#7D7D7F' : 'rgba(255, 0, 0, 0.5)'
              }
            />
            <ButtonText>Fechado</ButtonText>
          </Private>

          <NotPrivate onPress={() => setGroupStatus('notPrivate')}>
            <FeatherIcon
              name="unlock"
              size={20}
              color={
                groupStatus !== 'notPrivate'
                  ? '#7D7D7F'
                  : 'rgba(59, 227, 0, 0.5)'
              }
            />
            <ButtonText>Aberto</ButtonText>
          </NotPrivate>
        </WrapperButtons>
      </WrapperFormGroup>

      <CreateButton onPress={() => navigation.navigate('PrivateChat')}>
        <CreateButtonText>Criar</CreateButtonText>
      </CreateButton>
    </Container>
  );
};

export default GroupChat;
