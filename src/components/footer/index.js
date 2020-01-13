import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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
    </Footer>
  );
};
