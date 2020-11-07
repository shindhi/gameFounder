import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

  
export const ModalFilter = styled.Modal`
  height: 180px;
  width: 180px;

  justify-content: center;
  align-items: center;
`;

export const Container = styled.SafeAreaView`
  padding-top: ${statusBarHeight}px;

  flex: 1;
`;

export const TitleContainer = styled.View`
  padding: 0 20px;
  margin-top: 20px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: roboto_700;
`;

export const FilterContainer = styled.View`
  padding: 0 20px;
  margin-top: 28px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterInformation = styled.Text`
  color: #a3a3a5;
  font-size: 18px;
  font-family: roboto_700;
`;

export const FilterButton = styled.TouchableOpacity``;

export const ContainerList = styled.ScrollView`
  margin-top: 25px;
  flex: 1;
`;