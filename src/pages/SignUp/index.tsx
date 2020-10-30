import React, { useState } from 'react';
import { Image, Animated, ScrollView, View } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import photo from '../../assets/photoPerfil.png';

import {
  Container,
  Header,
  ContainerForm,
  InputWrapper,
  ContainerButton,
} from './styles';

const SingUp: React.FC = () => {
  const [scrollOfset] = useState(new Animated.Value(0));

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
            <Input
              name="date_of_birth"
              icon="calendar"
              placeholder="Data de nascimento"
            />
            <Input name="gender" icon="user" placeholder="Gênero" />
          </InputWrapper>

          <ContainerButton>
            <Button children="Cadastrar" />
            <Button children="Cancelar" />
          </ContainerButton>
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default SingUp;
