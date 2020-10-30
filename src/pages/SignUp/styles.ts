import { Animated, Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding-top: ${ statusBarHeight + 'px' };
  
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 20px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  margin-top: 40px;
`;