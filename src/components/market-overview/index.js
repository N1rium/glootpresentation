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
        <IconContainer className="music">
          <img src={MusicIcon} />
          <p>$17B</p>
        </IconContainer>
        <IconContainer className="games">
          <img src={GamingIcon} />
          <p>$116B</p>
        </IconContainer>
        <IconContainer className="video">
          <img src={VideoIcon} />
          <p>$41B</p>
        </IconContainer>
      </IconGroup>
      <PlayersContainer>
        <img src={PlayersIcon} />
        <p>$2.3B</p>
        <p>Players</p>
      </PlayersContainer>
      <footer>
        <div>Industry revenue 2018</div>
        <div>Active gamers worldwide</div>
      </footer>
    </MarketOverview>
  );
};
