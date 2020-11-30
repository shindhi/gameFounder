import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const GroupChat: React.FC = () => {
  return (
    <Container>
      <Header>
        <ReturnButton>
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={26} />

          <Title>Criar Grupo</Title>
        </ReturnButton>
      </Header>
    </Container>
  );
};

export default GroupChat;
