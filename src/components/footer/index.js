import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Footer = styled.div`
  min-height: 100vh;
  width: 100%;
  border: 15px solid rgb(17, 17, 17);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (min-width: 769px) {
    border-width: 30px;
  }
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  *:not(h2) {
    color: gray;
  }
`;

const Contact = styled.div`
  margin: 20px 0px;
`;

const Screens = styled.div`
  position: relative;
`;

const BigScreen = styled.div`
  width: 40vw;
  height: calc(40vw / 1.5);
  background-image: url(../src/assets/tv.png);
  background-size: cover;
  background-position: center;
  @media (orientation: portrait) {
    width: 75vw;
    height: calc(75vw / 1.5);
  }
`;

export default () => {
  return (
    <Footer>
      <Fade left>
        <Texts>
          <h2>Q&A</h2>
          <Contact>CONTACT</Contact>
          <div>Patrik Nybladh, CEO</div>
          <div>+46 739 63 21 75, </div>
          <div>patrik@gloot.com</div>
        </Texts>
      </Fade>
      <Screens>
        <Reveal effect="scaleIn" duration={500}>
          <BigScreen />
        </Reveal>
      </Screens>
    </Footer>
  );
};
