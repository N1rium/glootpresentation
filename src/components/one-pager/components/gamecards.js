import React from 'react';
import styled from 'styled-components';

const GameCards = styled.div``;
const Row = styled.div`
  display: flex;
`;

const GameCard = styled.div`
  flex-basis: 33.3%;
  height: 120px;
  border: 1px solid green;
  margin: 5px;
`;

export default () => {
  return (
    <GameCards>
      <Row>
        <GameCard />
        <GameCard />
        <GameCard />
      </Row>
      <Row>
        <GameCard />
        <GameCard />
        <GameCard />
      </Row>
    </GameCards>
  );
};
