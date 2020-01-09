import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';
import GlootLogo from '../../assets/gloot-logo.png';

const IntroVideo = styled.div`
  z-index: 0;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 100vh;
  transform: translateY(calc(-100% - 13vh));
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`;

const Online = styled.span`
  color: #8df98e;
`;

const Video = styled.video.attrs({ src: 'src/assets/video/intro.mp4' })``;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${GlootLogo});
  background-color: #000;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center;
`;

export default () => {
  return (
    <IntroVideo>
      {!isMobile && <Video playsInline autoPlay muted />}
      {isMobile && <ImageContainer></ImageContainer>}
      <Title>
        <Fade bottom>
          <div>
            Offline goes <Online>online</Online>
          </div>
        </Fade>
      </Title>
    </IntroVideo>
  );
};
