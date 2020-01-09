import React from 'react';
import styled from 'styled-components';
import List from './components/list';
import GameCards from './components/gamecards';
import MonetisationModel from './components/monetisationmodel';

const OnePager = styled.div`
  background: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  & > * {
    flex: 1 1 auto;
  }
  p.header {
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
  }
  p:not(.header) {
    font-size: 0.8em;
  }
  li {
    margin: 20px 0px;
    font-size: 0.8em;
    &.silent {
      list-style-type: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    & > * {
      flex-basis: 100% !important;
    }
  }
`;

const Highlights = styled.div`
  margin: 0px 40px;
  flex-basis: 40%;
`;

const RightContainer = styled.div`
  margin: 0px 40px;
  flex-basis: 60%;
  max-width: 900px;
  @media only screen and (max-width: 1200px) {
    max-width: 100%;
  }
`;
const SelectedGames = styled.div``;
const Monetization = styled.div``;
const Divider = styled.div`
  width: 100%;
  height: 4px;
  margin: 20px 0px;
  background: #a5f08e;
`;

export default () => {
  return (
    <OnePager>
      <Container>
        <Highlights>
          <p className="header">Key highlights</p>
          <Divider />
          <List />
        </Highlights>
        <RightContainer>
          <SelectedGames>
            <p className="header">SELECTED GAMES</p>
            <Divider />
            <GameCards />
          </SelectedGames>
          <Monetization>
            <p className="header">MONETIZATION</p>
            <Divider />
            <MonetisationModel />
          </Monetization>
        </RightContainer>
      </Container>
    </OnePager>
  );
};
