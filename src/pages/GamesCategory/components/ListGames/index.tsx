import React from 'react';

import LeagueOfLegends from '../../../../assets/lol.png';
import AmoungUs from '../../../../assets/amoungUs.png';
import Valorant from '../../../../assets/valorantIcon.png';
import CSGO from '../../../../assets/csgoIcon.png';

import {
  ListContainer,
  ListDescription,
  ListGame,
  GameContainer,
  GameImage,
  GameName,
} from './styles';

const ListGames: React.FC = () => {
  return (
    <ListContainer>
      <ListDescription>MOBA</ListDescription>

      <ListGame>
        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={AmoungUs} />
          <GameName numberOfLines={1}>Amoung Us</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={Valorant} />
          <GameName numberOfLines={1}>Valorant</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={CSGO} />
          <GameName numberOfLines={1}>Cs Go</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={Valorant} />
          <GameName numberOfLines={1}>Valorant</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={AmoungUs} />
          <GameName numberOfLines={1}>Amoung Us</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={CSGO} />
          <GameName numberOfLines={1}>Cs Go</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>
      </ListGame>
    </ListContainer>
  );
};

export default ListGames;
