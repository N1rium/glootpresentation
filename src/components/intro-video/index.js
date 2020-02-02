import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import GlootLogo from '../../assets/gloot-logo.svg';

const IntroVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 1;
  position: sticky;
  top: 0;
`;

const Title = styled.h3`
  position: absolute;
  top: 100vh;
  transform: translateY(calc(-100% - 13vh));
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`;

const Online = styled.span`
  color: #07fe7f;
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  width: 256px;
  @media only screen and (max-width: 1023px) {
    width: 128px;
  }
`;

export default () => {
  return (
    <IntroVideo>
      <Logo />
      <Title>
        <Fade bottom>
          <div>
            OFFLINE GOES <Online>ONLINE</Online>
          </div>
        </Fade>
      </Title>
    </IntroVideo>
  );
};
