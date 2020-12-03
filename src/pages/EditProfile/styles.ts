import { Animated, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.View`
  margin-top: 30px;
  justify-content: center;
  padding-bottom: 20px;
`;

export const WrapperAction = styled.View`
  padding: 0 20px;
  margin-bottom: 20px;

  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ReturnButton = styled.TouchableOpacity`
  width: 30px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 26px;

  margin-left: 80px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 20px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 14px;
`;

export const SelectDate = styled.View`
  width: 49%;
  height: 60px;
  padding: 0 16px;
  background: #000;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectDateText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const SelectDateButton = styled.View``;

export const SelectGenre = styled.View`
  width: 49%;
  height: 60px;
  background: #000;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ContainerButton = styled.View`
  margin-top: 30px;

  align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
  padding: 10px 0;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const CancelButtonText = styled.Text`
  color: #919191;
  font-size: 14px;
`;
