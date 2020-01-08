import React from 'react';
import styled from 'styled-components';

const MonetisationModel = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Model = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-basis: 33.3%;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border: 4px solid #a7f491;
  border-radius: 50%;
`;

const Title = styled.div`
  margin-top: 20px;
`;

const PlusSign = styled.div`
  font-size: 1.2em;
  height: 140px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 64px;
  }
`;

export default () => {
  return (
    <MonetisationModel>
      <Model>
        <Circle></Circle>
        <Title>PAY TO ENTER</Title>
        <div>10% service fee & surplus from contests</div>
      </Model>
      <PlusSign>+</PlusSign>
      <Model>
        <Circle></Circle>
        <Title>SUBSCRIPTION</Title>
        <div>$10/month in advance</div>
      </Model>
      <PlusSign>+</PlusSign>
      <Model>
        <Circle></Circle>
        <Title>BROADCASTING, ADS, SPONSORSHIPS & PUBLISHER REVENUE</Title>
      </Model>
    </MonetisationModel>
  );
};
