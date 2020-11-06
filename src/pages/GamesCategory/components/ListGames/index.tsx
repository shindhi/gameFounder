import React from 'react';

import LeagueOfLegends from '../../../../assets/lol.png';

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
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
        </GameContainer>

        <GameContainer>
          <GameImage source={LeagueOfLegends} />
          <GameName numberOfLines={1}>League of Legends</GameName>
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
