import styled from 'styled-components/native';

interface MessageContainerProps {
  user: boolean;
}

export const Header = styled.View`
  align-items: center;
  height: 50px;
  margin-bottom: 8px;

  flex-direction: row;
`;

export const ReturnButton = styled.TouchableOpacity`

`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-family: roboto_500;
  font-size: 16px;
`;

// Styles Box mensage
export const MessageContainer = styled.View<MessageContainerProps>`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${props => (props.user ? 8 : 0)}px;
  border-bottom-right-radius: ${props => (props.user ? 0 : 8)}px;

  background-color: ${props => (props.user ? '#626364' : '#303238')};
  margin-bottom: 20px;
  padding: 15px;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-family: roboto_500;
`;

// Style page: Chat
export const Container = styled.SafeAreaView`
  padding: 0 20px;
  padding-top: 10px;
  background: #191a1e;

  flex: 1;
`;

export const ContainerMessages = styled.View`
  flex: 1;
`;

export const ContainerSendMessage = styled.View`
  padding: 10px 0 10px;
  flex-direction: row;
`;

export const AreaText = styled.TextInput`
  border-width: 1px;
  /* background: rgba(254, 138, 7, 0.65); */
  border-color: rgba(254, 138, 7, 0.65);
  border-width: 2px;
  border-radius: 50px;
  color: #FE8A07;
  padding: 10px 15px;

  flex: 1;
`;

export const ButtonSend = styled.TouchableOpacity`
  background: #fe8a07;
  height: 50px;
  width: 50px;
  margin-left: 20px;

  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;