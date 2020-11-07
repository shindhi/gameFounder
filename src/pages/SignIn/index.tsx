import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';  
import {
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  ButtonsContainer,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [showCreateAccountButton, setShowCreateAccountButton] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  const keyboardDidShow = useCallback(() => {
    // Esconder botão de cadastro
    setShowCreateAccountButton(false);
  }, []);

  const keyboardDidHide = useCallback(() => {
    // Mostrar botão de cadastro
    setShowCreateAccountButton(true);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logo} />

            <View>
              <Title>Game Founder</Title>
            </View>

            <Input
              name="email"
              icon="user"
              placeholder="E-mail"
              onSubmitEditing={Keyboard.dismiss}
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              onSubmitEditing={Keyboard.dismiss}
            />

            <ButtonsContainer>
              <Button
                style={{ width: 170 }}
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              >
                Entrar
              </Button>

              <ForgotPassword
                onPress={() => {
                  console.log('forgot password');
                }}
              >
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </ButtonsContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {showCreateAccountButton && (
        <CreateAccountButton
          onPress={() => {
            console.log('create account');
          }}
        >
          <Text style={{ color: '#6D6D6D' }}>Não possui uma conta? </Text>
          <CreateAccountButtonText>Cadastre-se</CreateAccountButtonText>
        </CreateAccountButton>
      )}
    </>
  );
};

export default SignIn;
