import styled from 'styled-components/native';

export const Header = styled.View`
  margin-top: 30px;
`;

export const Container = styled.View``;

export const ButtonReturn = styled.TouchableOpacity``;

export const TitlePage = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: roboto_700;

  padding: 0 20px;
  margin-top: 5px;
`;

export const SubtitlePage = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  font-family: roboto_500;

  padding: 0 20px;
  margin-top: 8px;
`;

export const GamesGallery = styled.ScrollView`
  margin-top: 20px;
  background: rgba(196, 196, 196, 0.3);
`;

export const ContainerGames = styled.View`
  padding: 20px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const GameWrapper = styled.TouchableOpacity`
  width: 80px;
  padding: 0 5px;
  margin-bottom: 40px;

  align-items: center;
  justify-content: center;
`;

export const GameImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const GameTitle = styled.Text`
  color: #fff;
  font-family: roboto_400;
`;
