import React from 'react';
import { MarketOverview, Title, Description, IconGroup, IconContainer, PlayersContainer } from './style';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import MusicIcon from '../../assets/icons/musicicon.svg';
import GamingIcon from '../../assets/icons/gamesicon.svg';
import VideoIcon from '../../assets/icons/cameraicon.svg';
import PlayersIcon from '../../assets/icons/players.svg';

export default () => {
  return (
    <Reveal>
      <MarketOverview>
        <Title>
          <Fade top>Market overview</Fade>
        </Title>
        <Slide bottom>
          <Description>
            The gaming industry generates double
            <br /> the revenue than music & film do combined.
          </Description>
        </Slide>
        <IconGroup>
          <Slide left bottom>
            <IconContainer className="music">
              <img src={MusicIcon} />
              <p>$17B</p>
            </IconContainer>
          </Slide>
          <Zoom>
            <IconContainer className="games">
              <img src={GamingIcon} />
              <p>$116B</p>
            </IconContainer>
          </Zoom>
          <Slide right bottom>
            <IconContainer className="video">
              <img src={VideoIcon} />
              <p>$41B</p>
            </IconContainer>
          </Slide>
        </IconGroup>
        <Zoom>
          <PlayersContainer>
            <img src={PlayersIcon} />
            <h2>$2.3B</h2>
            <p>Players</p>
          </PlayersContainer>
        </Zoom>
        <Slide bottom>
          <footer>
            <div>Industry revenue 2018</div>
            <div>Active gamers worldwide</div>
          </footer>
        </Slide>
      </MarketOverview>
    </Reveal>
  );
};
