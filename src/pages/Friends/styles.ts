import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;

  flex: 1;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 26px;
`;

export const ListFriends = styled.ScrollView`
  padding: 0 20px;
  margin-top: 15px;

  flex: 1;
`;

export const NewChatButton = styled.TouchableOpacity`
  padding: 5px 0;
  margin-bottom: 15px;

  flex-direction: row;
`;

export const FriendImage = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 4px;
`;

export const Friend = styled.View`
  margin-left: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FriendName = styled.Text`
  color: #fff;
  font-family: roboto_500;
  font-size: 16px;
`;
