import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding-top: ${statusBarHeight}px;
  background: #191a1e;

  flex: 1;
`;

export const Header = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding-top: 5px;
  padding-bottom: 10px;

  align-items: center;
`;

export const HeaderText = styled.Text`
  color: #fff; 
  font-size: 22px;
  font-family: roboto_700;
`;

export const ListChat = styled.ScrollView`
  padding: 0 20px;
  margin-top: 15px;

  flex: 1;
`;

export const ChatContainer = styled.TouchableOpacity`
  padding: 5px 0;
  margin-bottom: 15px;

  flex-direction: row;
`;

export const ChatImage = styled.Image`
  width: 59px;
  height: 59px;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ChatInformation = styled.View`
  margin-left: 20px;
  justify-content: center;
`;

export const ChatName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: roboto_500;
`;

export const TagGame = styled.View`
  background: rgba(75, 75, 75, 1);
  padding: 3px 0;
  border-radius: 50px;
  margin-top: 6px;

  align-items: center;
  justify-content: center;
`;

export const TagGameText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: roboto_500;
`;
