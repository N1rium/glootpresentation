import React from 'react';
import { MarketOverview, Title, Description, IconGroup, IconContainer, PlayersContainer } from './style';

import MusicIcon from '../../assets/icons/musicicon.svg';
import GamingIcon from '../../assets/icons/gamesicon.svg';
import VideoIcon from '../../assets/icons/cameraicon.svg';
import PlayersIcon from '../../assets/icons/players.svg';

export default () => {
  return (
    <MarketOverview>
      <Title>Market overview</Title>
      <Description>The gaming industry generates double the revenue than music & film do combined.</Description>
      <IconGroup>
        <IconContainer>
          <p>$17B</p>
          <img src={MusicIcon} />
        </IconContainer>
        <IconContainer>
          <p>$116B</p>
          <img src={GamingIcon} />
        </IconContainer>
        <IconContainer>
          <p>$41B</p>
          <img src={VideoIcon} />
        </IconContainer>
      </IconGroup>
      <PlayersContainer>
        <img src={PlayersIcon} />
        <p>$2.3B</p>
        <p>Players</p>
      </PlayersContainer>
    </MarketOverview>
  );
};
