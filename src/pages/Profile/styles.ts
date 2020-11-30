import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #191a1e;

  flex: 1;
  z-index: 1;
`;

export const HeaderProfile = styled.View`
  margin-top: 20px;
  padding: 0 20px;

  flex-direction: row;
  align-items: flex-end;
`;

export const ButtonEditProfile = styled.TouchableOpacity``;

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

export const ListContainer = styled.View`
  margin-top: 85px;
  background: #262729;
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const EditListGame = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background: #db7c0c;

  position: absolute;
  top: -17.5px;
  right: 20px;
  z-index: 5;

  justify-content: center;
  align-items: center;
`;

export const DescriptionList = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 15px 20px;
  border-bottom-color: #fff;
  border-bottom-width: 0.5px;
`;

export const ListCategory = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
  margin-top: 7px;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 72px;
  margin-right: 25px;
`;

export const CategoryImage = styled.Image`
  border-radius: 4px;
`;

export const CategoryName = styled.Text`
  color: #fff;
`;
