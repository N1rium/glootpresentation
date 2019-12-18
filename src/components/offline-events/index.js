import React from 'react';
import { OfflineEvents, LeftSegment, RightSegment, PlayerContainer } from './style';
import PlayerImage from '../../assets/icons/usericon.svg';

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
    <OfflineEvents>
      <LeftSegment>
        <h2>Offline events with real money prizes</h2>
        <p>- limited to invited professional esports teams only</p>
      </LeftSegment>
      <RightSegment>
        <h2>$211M</h2>
        <h3>300 players</h3>
        <Player />
        <Player />
        <Player />
      </RightSegment>
      <footer>Total prize money and active players 2019</footer>
    </OfflineEvents>
  );
};
