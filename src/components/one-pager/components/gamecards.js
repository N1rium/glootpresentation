import React from 'react';
import styled from 'styled-components';
import Pubg from '../../../assets/gamecards/pubg.jpg';
import Apex from '../../../assets/gamecards/apex.jpg';
import CounterStrike from '../../../assets/gamecards/counterstrike.jpg';
import Fade from 'react-reveal/Fade';

const GameCards = styled.div`
  position: relative;
`;
const Row = styled.div`
  display: flex;
  overflow: hidden;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const GameCard = styled.img.attrs(props => ({ src: props.src }))`
  flex-basis: 33.3%;
  margin: 5px;
  object-fit: cover;
  @media (orientation: landscape) {
    width: 33.3%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default () => {
  return (
    <GameCards>
      <Overlay />
      <Fade>
        <Row>
          <GameCard src={Pubg} />
          <GameCard src={Apex} />
          <GameCard src={CounterStrike} />
        </Row>
      </Fade>
    </GameCards>
  );
};
