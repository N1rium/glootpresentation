import React from 'react';
import styled from 'styled-components';

const AnyGameInTheWorld = styled.div`
  width: 100vw;
  height: 300vh;
  position: relative;
  & > div {
    width: 100%;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Video = styled.video.attrs(props => ({
  src: 'https://res.cloudinary.com/gloot/video/upload/v1578660896/gloot%20presentation/videoloop.mp4',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextSegment = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 992px;
  color: #fffffe;
  opacity: 0.8;
  margin: 0px 20px;
  h2 {
    margin-bottom: 20px;
  }
  h2,
  h3 {
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.75);
  }
  &.first {
    top: 100vh;
  }
  &.second {
    bottom: 60vh;
    right: 0;
  }
  @media only screen and (min-width: 769px) {
    margin: 0px 80px;
  }
`;

const Partners = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;

const Partner = styled.img.attrs(props => ({ src: props.src }))`
  width: 128px;
`;

export default () => {
  return (
    <AnyGameInTheWorld>
      <Image />
      <div>
        <ImageContainer>
          <Video playsInline autoPlay muted loop />
        </ImageContainer>
        <TextSegment className="first">
          <h2>Connects any game in the world</h2>
          <h3>with unique tech, we can connect games without relying on API availability</h3>
        </TextSegment>
        <TextSegment className="second">
          <h2>Strong partnerships</h2>
          <h3>Official esports partner for world leading game developers</h3>
        </TextSegment>
        <Partners>
          <Partner src="https://res.cloudinary.com/gloot/image/upload/v1578668075/gloot%20presentation/game-apex.png" />
          <Partner src="https://res.cloudinary.com/gloot/image/upload/v1578668075/gloot%20presentation/game-ea.png" />
          <Partner src="https://res.cloudinary.com/gloot/image/upload/v1578668075/gloot%20presentation/game-pubg.png" />
        </Partners>
      </div>
    </AnyGameInTheWorld>
  );
};
