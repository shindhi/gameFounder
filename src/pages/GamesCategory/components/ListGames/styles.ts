import styled from 'styled-components/native';

export const ListContainer = styled.View`
  margin-top: 90px;
  background: rgba(196, 196, 196, 0.22);
  width: 100%;
`;

export const ListDescription = styled.Text`
  font-family: roboto_700;
  color: #fff;
  padding-top: 5px;
  padding-left: 10px;
`;

export const ListGame = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 10px 24px;
  margin-top: 7px;
`;

export const GameContainer = styled.View`
  width: 66px;
  margin-right: 15px;
`;

export const GameImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

export const GameName = styled.Text`
  color: #fff;
  font-family: roboto_500;
`;
