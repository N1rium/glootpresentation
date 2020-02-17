import React from 'react';
import styled from 'styled-components';
import PlayersIcon from '../../assets/icons/players.svg';
import Fade from 'react-reveal/Fade';

const Players = styled.div`
  min-height: 100vh;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 900;
  }
  .title {
    margin-bottom: 100px;
  }
`;

const Description = styled.p`
  color: rgb(114, 114, 114);
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 256px;
  }

  @media only screen and (max-width: 1024px) {
    img {
      max-width: 180px;
    }
  }

  h2 {
    margin: 10px 0px;
  }

  p {
    margin: 0;
    color: rgb(114, 114, 114);
  }

  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translateY(100%) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translateY(0%) scale(1);
    }
  }

  @keyframes animateOut {
    100% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
  }
`;

export default () => {
  return (
    <Players>
      <Fade>
        <div className="title">
          <h2>Active players worldwide 2019</h2>
          <Description>Across all platforms (mobile, PC & console)</Description>
        </div>
      </Fade>
      <PlayersContainer>
        <Fade>
          <img src={PlayersIcon} />
        </Fade>
        <Fade>
          <h2>2.6B</h2>
        </Fade>
        <Fade>
          <p>Players</p>
        </Fade>
      </PlayersContainer>
    </Players>
  );
};
