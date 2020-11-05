import { Platform } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding: 0 20px;
  padding-top: ${statusBarHeight + 'px'};
  background: #191a1e;

  flex: 1;
`;

export const HeaderProfile = styled.View`
  margin-top: 20px;

  flex-direction: row;
  align-items: flex-end;
`;

export const UserImage = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const UserStatus = styled.View`
  margin-top: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Identifier = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #12a918;
  margin-right: 5px;
`;

export const StatusText = styled.Text`
  color: #fff;
`;
