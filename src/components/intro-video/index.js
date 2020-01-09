import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

const IntroVideo = styled.div`
  z-index: 0;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  min-height: 50vh;
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

export default () => {
  return (
    <IntroVideo>
      {!isMobile && <Video playsInline autoPlay muted />}
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
