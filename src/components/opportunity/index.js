import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
  color: #000;
  padding: 0px 25px;
  p {
    color: rgb(114, 114, 114);
  }
  .opportunity,
  .missing {
    display: flex;
    flex-direction: column;
  }
  .opportunity {
    text-align: right;
    margin-bottom: 40px;
  }
  .ball-container {
    display: flex;
    align-items: center;
    &.right {
      justify-content: flex-end;
    }
    margin: 20px 0px;
  }

  @media (orientation: landscape) {
    .opportunity,
    .missing {
      flex-direction: row;
      justify-content: space-evenly;
      p {
        max-width: 50vw;
      }
    }

    .opportunity {
      & > :first-child {
        order: 1;
      }
    }
  }
`;

const Ball = styled.div`
  border-radius: 50%;
  width: ${props => (props.small ? '16px' : '200px')};
  height: ${props => (props.small ? '16px' : '200px')};
  z-index: ${props => (props.small ? '1' : '0')};
`;

const BlueBall = styled(Ball)`
  background: #5753ff;
  margin-right: ${props => (props.small ? '-8px' : '0px')};
`;

const BlackBall = styled(Ball)`
  margin-left: ${props => (props.small ? '-8px' : '0px')};
  background: url(../src/assets/glootboll.svg);
  background-size: cover;
  background-position: center;
`;

export default () => {
  return (
    <Wrapper>
      <div className="opportunity">
        <div>
          <h2>Opportunity</h2>
          <p>Top 300 esports professionals earn more than the rest of the 2.6 billion players combined.</p>
        </div>
        <div className="ball-container right">
          <BlueBall />
          <BlackBall small />
        </div>
      </div>
      <div className="missing">
        <div>
          <h2>G-Loot is the missing component</h2>
          <p>Anyone, anywhere in the world can now earn money from playing the games they already play & love.</p>
        </div>
        <div className="ball-container">
          <BlueBall small />
          <BlackBall />
        </div>
      </div>
    </Wrapper>
  );
};
