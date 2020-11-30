import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Picker } from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import photo from '../../assets/photoPerfil.png';

import {
  Container,
  Header,
  UserAvatarButton,
  Avatar,
  ContainerForm,
  InputWrapper,
  TextInput,
  SelectDate,
  SelectDateText,
  SelectGenre,
  ContainerButton,
  CancelButton,
  CancelButtonText,
} from './styles';

const SingUp: React.FC = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [gender, setGender] = useState<React.ReactText>('');
  const [userAvatar, setUserAvatar] = useState<string>(
    'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FGameFounder-e9152488-9fe6-4adf-b379-acc5fea9fd09/ImagePicker/202a9e7b-4a19-48fe-b54e-56bc5afe9511.jpg'
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        console.log(status);

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
      setUserAvatar(result.uri);
    }
  };

  const formattedDate = useMemo(() => {
    return format(date, "dd'/'MM'/'yyyy");
  }, [date]);

  const onChange = useCallback(
    (event, selectedDate) => {
      const currentDate = selectedDate || date;

      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    },
    [date, SelectDate]
  );

  const handleSelectDate = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <Container>
      <Header>
        <UserAvatarButton onPress={pickImage}>
          {userAvatar !== '' ? (
            <Avatar source={{ uri: userAvatar }} />
          ) : (
            <Avatar source={photo} />
          )}
        </UserAvatarButton>
      </Header>

      <ScrollView keyboardShouldPersistTaps="handled">
        <ContainerForm>
          <Input name="name" icon="user" placeholder="Nome completo" />
          <Input name="nickname" icon="user" placeholder="Nickname" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input
            name="confirm_password"
            icon="lock"
            placeholder="Confirmar senha"
          />

          <InputWrapper>
            <SelectDate>
              <SelectDateText>{formattedDate}</SelectDateText>
              <FeatherIcon
                name="calendar"
                size={20}
                color="#666360"
                onPress={handleSelectDate}
              />

              {show && (
                <DateTimePicker
                  value={date}
                  display="spinner"
                  onChange={onChange}
                />
              )}
            </SelectDate>

            <SelectGenre>
              <Picker
                selectedValue={gender}
                mode="dialog"
                style={{
                  flex: 1,
                  color: '#fff',
                }}
                onValueChange={(genderValue, genderIndex) =>
                  setGender(genderValue)
                }
              >
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Feminino" value="f" />
                <Picker.Item label="Outro" value="o" />
              </Picker>
            </SelectGenre>
          </InputWrapper>

          <ContainerButton>
            <Button children="Cadastrar" />

            {/* Cancel Button */}
            <CancelButton onPress={() => navigation.goBack()}>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
          </ContainerButton>
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default SingUp;
