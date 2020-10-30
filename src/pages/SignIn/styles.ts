import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 40px;
  margin: 10px 0 40px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;

  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  color: #6D6D6D;
  font-size: 14px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding-bottom: 35px;
`;

export const CreateAccountButtonText= styled.Text`
  color: #fff; 
`;
