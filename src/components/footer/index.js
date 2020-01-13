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
  width: 100%;
  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-weight: 900;
  }
  *:not(h2) {
    color: gray;
  }
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  & > div {
    flex-basis: 50%;
  }
`;

const Contact = styled.div`
  margin: 0px 40px;
  h3 {
    color: #fff;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

const Email = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  &:hover {
    opacity: 0.5;
  }
`;

export default () => {
  const email = email => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <Footer>
      <Texts>
        <Fade>
          <h2>Contact</h2>
        </Fade>
        <Contacts>
          <Fade>
            <Contact>
              <h3>Goldman</h3>
              <div>Joel Mossberg</div>
              <div>+46 76 800 81 09</div>
              <Email onClick={() => email('joel.mossberg@gs.com')}>joel.mossberg@gs.com</Email>
            </Contact>
          </Fade>
          <Fade>
            <Contact>
              <h3>Carnegie</h3>
              <div>Thomas Baekkevold</div>
              <div>+46 73 417 87 17</div>
              <Email onClick={() => email('tomas.baekkevold@carnegie.se')}>tomas.baekkevold@carnegie.se</Email>
            </Contact>
          </Fade>
        </Contacts>
      </Texts>
    </Footer>
  );
};
