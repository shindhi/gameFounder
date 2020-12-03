import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
`;

export const Header = styled.View`
  height: 50px;
  margin-bottom: 8px;

  align-items: center;
  flex-direction: row;
`;

export const ReturnButton = styled.TouchableOpacity``;

export const TitleNews = styled.Text`
  color: #fff;
  font-size: 26px;
  font-family: roboto_500;
  text-align: center;

  margin-right: 20px;

  flex: 1;
`;

export const WrapperNews = styled.ScrollView``;

export const NewsImage = styled.Image``;

export const MatterText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: roboto_400;
  line-height: 26px;

  padding: 20px 0;
`;
