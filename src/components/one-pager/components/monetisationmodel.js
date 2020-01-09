import React from 'react';
import styled from 'styled-components';
import PayToEnterIcon from '../../../assets/paytoenter.png';
import B2BIcon from '../../../assets/sponsorship.png';
import SubscriptionIcon from '../../../assets/subscription.png';
import Fade from 'react-reveal/Fade';

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

const Circle = styled.img.attrs(props => ({ src: props.src }))`
  width: 120px;
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
        <Fade>
          <Circle src={PayToEnterIcon} />
        </Fade>
        <Title>PAY TO ENTER</Title>
        <div>10% service fee & surplus from contests</div>
      </Model>
      <PlusSign>+</PlusSign>
      <Model>
        <Fade>
          <Circle src={SubscriptionIcon} />
        </Fade>
        <Title>SUBSCRIPTION</Title>
        <div>$10/month in advance</div>
      </Model>
      <PlusSign>+</PlusSign>
      <Model>
        <Fade>
          <Circle src={B2BIcon} />
        </Fade>
        <Title>BROADCASTING, ADS, SPONSORSHIPS & PUBLISHER REVENUE</Title>
      </Model>
    </MonetisationModel>
  );
};
