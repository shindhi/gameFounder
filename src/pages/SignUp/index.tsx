import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import photo from '../../assets/photoPerfil.png';

import {
  Container,
  Header,
  ContainerForm,
  InputWrapper,
  TextInput, 
  InputCalendar,
  SelectGenre,
  ContainerButton,
  CancelButton,
  CancelButtonText
} from './styles';

const SingUp: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={photo} />
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
            <InputCalendar>
              <TextInput 
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                placeholder="Data de nascimento"
              />
              <FeatherIcon name="calendar" size={20} color="#666360" />
            </InputCalendar>

            <SelectGenre>
              <TextInput 
                placeholder="Gênero"
              />
            </SelectGenre>
          </InputWrapper>

          <ContainerButton>
            <Button children="Cadastrar" />

            {/* Cancel Button */}
            <CancelButton>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
          </ContainerButton>
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default SingUp;
