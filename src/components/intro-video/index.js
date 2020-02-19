import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import GlootLogo from '../../assets/gloot-logo.svg';

const IntroVideo = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
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

const signOut = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export default () => {
  const [logoClicks, setLogoClicks] = useState(0);
  return (
    <IntroVideo>
      <Fade top>
        <Logo onClick={() => (logoClicks >= 4 ? signOut() : setLogoClicks(logoClicks + 1))} />
      </Fade>
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
