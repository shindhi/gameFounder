import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191a1e;
  padding: 10px 20px 0;

  flex: 1;
`;

export const ListGroups = styled.ScrollView`
  margin-top: 15px;

  flex: 1;
`;

export const Group = styled.TouchableOpacity`
  margin-bottom: 20px;

  align-items: center;
  flex-direction: row;
`;

export const ImageGroup = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const InfoGroup = styled.View``;

export const NameGroup = styled.Text`
  color: #fff;
  font-family: roboto_400;
`;

export const ContainerSubInfo = styled.View`
  padding-top: 8px;

  align-items: center;
  flex-direction: row;
`;

export const Wave = styled.Text`
  color: #7d7d7f;
  font-size: 12px;
  font-family: roboto_400;

  margin-right: 8px;
`;
