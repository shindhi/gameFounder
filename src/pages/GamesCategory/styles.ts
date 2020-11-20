import styled from 'styled-components/native';
  
export const ModalFilter = styled.Modal`
  height: 180px;
  width: 180px;

  justify-content: center;
  align-items: center;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

// Modal start
export const ContainerModal = styled.View`
  flex: 1;
  justify-content: center;
  background: rgba(41, 42, 42, 0.6);
`;

export const ModalView = styled.View`
  margin: 20px;
  border-radius: 20px;
  padding: 20px;

  background: #292a2b;
`;

export const ModalTitle = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 25px;

  margin-bottom: 20px;
`;

export const InputGroups = styled.View`
  margin-bottom: 20px;

  align-items: flex-start;
`;

export const InputGroupsText = styled.Text`
  color: #fff;
  font-family: roboto_500;
`;

export const InputModal = styled.TextInput.attrs({
  placeholderTextColor: '#494949',
})`
  color: #fff;
  font-family: roboto_500;

  width: 100%;
  background: #000;
  border-radius: 4px;
  margin-top: 5px;
  padding: 5px 10px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  align-items: center; 
  justify-content: center;
`;

export const ButtonCloseModalText = styled.Text`
  color: #DB7C0C;
  font-family: roboto_700;
  font-size: 20px;
`;

// Modal end


export const TitleContainer = styled.View`
  padding: 0 20px;
  margin-top: 20px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: roboto_700;
`;

export const FilterContainer = styled.View`
  padding: 0 20px;
  margin-top: 28px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterInformation = styled.Text`
  color: #a3a3a5;
  font-size: 18px;
  font-family: roboto_700;
`;

export const FilterButton = styled.TouchableOpacity``;

export const ContainerList = styled.ScrollView`
  margin-top: 25px;
  flex: 1;
`;