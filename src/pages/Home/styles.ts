import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191a1e;

  flex: 1;
`;

export const Header = styled.View`
  background: #000;
  padding-top: 5px;
  padding-bottom: 10px;

  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 24px;
`;

export const ListNews = styled.ScrollView`
  padding: 10px 20px;
`;

export const ContainerNews = styled.TouchableOpacity`
  position: relative;
  margin-bottom: 20px;
`;

export const ImageNews = styled.Image`
  border-top-left-radius: 10px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 10px;
  opacity: 0.6;

  height: 140px;
`;

export const WrapperText = styled.View`
  position: absolute;
  bottom: 15px;
  left: 20px;
`;

export const TitleNews = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 18px;
`;

export const BriefDescription = styled.Text`
  color: #fff;
  font-family: roboto_400;
  font-size: 16px;
`;