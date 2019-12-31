import React from 'react';
import { OfflineEvents, Content, LeftSegment, RightSegment, PlayerContainer } from './style';
import PlayerImage from '../../assets/icons/usericon.svg';

import Slide from 'react-reveal/Slide';

const Player = () => {
  return (
    <PlayerContainer>
      <img src={PlayerImage} />
      <div>
        <div></div>
        <div></div>
      </div>
    </PlayerContainer>
  );
};

export default () => {
  return (
    <Slide bottom>
      <OfflineEvents>
        <Content className="content">
          <LeftSegment>
            <h2>
              Offline events with
              <br /> real money prizes
            </h2>
            <p>
              - limited to invited professional
              <br /> esports teams only
            </p>
            <footer>Total prize money and active players 2019</footer>
          </LeftSegment>
          <RightSegment>
            <h2>$211M</h2>
            <h3>300 players</h3>
            <Slide right>
              <Player />
            </Slide>
            <Slide right>
              <Player />
            </Slide>
            <Slide right>
              <Player />
            </Slide>
          </RightSegment>
        </Content>
      </OfflineEvents>
    </Slide>
  );
};
