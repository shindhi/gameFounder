import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  margin-bottom: 8px;
  background: #000;

  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 24px;
  flex: 1;
  text-align: center;
  padding-right: 20px;
`;

export const ReturnButton = styled.TouchableOpacity``;

export const WrapperImageGroup = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageGroupButton = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin-top: 30px;
`;

export const ImageGroup = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 8px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameGroup = styled.Text`
  margin-top: 10px;

  color: #fff;
  font-size: 20px;
  font-family: roboto_700;
`;

export const WrapperFormGroup = styled.View`
  margin-top: 35px;
  background: #262729;
  padding: 20px;

  align-items: center;
`;

export const TitleVacancy = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: roboto_400;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);

  margin: 23px 0;
`;

export const TitlePrivacy = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: roboto_400;
`;

export const SelectNumber = styled.View`
  width: 80px;
  height: 40px;
  background: #000;
  margin-top: 16px;
`;

export const WrapperButtons = styled.View`
  margin-top: 15px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Private = styled.TouchableOpacity`
  margin-right: 40px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NotPrivate = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: roboto_400;
  font-size: 16px;

  margin-left: 8px;
`;

export const CreateButton = styled.TouchableOpacity`
  height: 50px;
  margin: 30px 20px 0;
  background: #db7c0c;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const CreateButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: roboto_700;
`;