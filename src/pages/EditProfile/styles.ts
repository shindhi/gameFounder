import styled from 'styled-components/native';

export const Header = styled.TouchableOpacity``;

export const Container = styled.View`
  padding: 0 20px;

  align-items: center;
`;

export const Title = styled.Text``;

export const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const GroupForm = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectDate = styled.View`
  width: 49%;
  height: 60px;
  padding: 0 16px;
  background: #000;
  border-radius: 4px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectDateText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: roboto_400;
`;
