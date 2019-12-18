import React from 'react';
import styled from 'styled-components';

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

const Video = styled.video.attrs({ src: 'src/assets/video/intro.mp4' })``;

export default () => {
  return (
    <IntroVideo>
      <Video playsInline autoPlay muted />
    </IntroVideo>
  );
};
