import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Valorant from '../../assets/valorant.png';

import {
  Container,
  Header,
  Title,
  ListNews,
  ContainerNews,
  ImageNews,
  WrapperText,
  TitleNews,
  BriefDescription,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Notícias</Title>
      </Header>

      <ListNews
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ContainerNews onPress={() => navigation.navigate('News')}>
          <ImageNews source={Valorant} />
          <WrapperText>
            <TitleNews>Title</TitleNews>
            <BriefDescription>Lorem inpsum</BriefDescription>
          </WrapperText>
        </ContainerNews>

        <ContainerNews>
          <ImageNews source={Valorant} />
          <WrapperText>
            <TitleNews>Title</TitleNews>
            <BriefDescription>Lorem inpsum</BriefDescription>
          </WrapperText>
        </ContainerNews>

        <ContainerNews>
          <ImageNews source={Valorant} />
          <WrapperText>
            <TitleNews>Title</TitleNews>
            <BriefDescription>Lorem inpsum</BriefDescription>
          </WrapperText>
        </ContainerNews>

        <ContainerNews>
          <ImageNews source={Valorant} />
          <WrapperText>
            <TitleNews>Title</TitleNews>
            <BriefDescription>Lorem inpsum</BriefDescription>
          </WrapperText>
        </ContainerNews>

        <ContainerNews>
          <ImageNews source={Valorant} />
          <WrapperText>
            <TitleNews>Title</TitleNews>
            <BriefDescription>Lorem inpsum</BriefDescription>
          </WrapperText>
        </ContainerNews>
      </ListNews>
    </Container>
  );
};

export default Home;
