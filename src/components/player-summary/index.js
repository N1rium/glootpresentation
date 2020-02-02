import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const PlayerSummary = styled.div`
  position: relative;
  margin: 200px 0px;
  padding: 0px 125px;
  margin-top: 250px;
  @media only screen and (max-width: 768px) {
    padding: 0px 25px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 70%, #fff);
`;

const Video = styled.video.attrs(props => ({
  src: 'https://res.cloudinary.com/gloot/video/upload/v1580318586/gloot%20presentation/matchesplayed2.mp4',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopSegment = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  @media only screen and (max-width: 768px) {
    text-align: left;
    margin-bottom: 25px;
  }
`;

const Title = styled.h2`
  color: #000;
  margin: 40px 0px;
  font-weight: 900;
`;

const Sums = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Sum = styled.div`
  color: rgb(114, 114, 114);
  margin-left: 80px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
  h2 {
    color: #5753ff;
    font-weight: 900;
    margin: 10px 0px;
  }
  p {
    margin: 0px;
  }
  .bold {
    font-weight: bold;
    font-size: 1.25em;
  }
  div {
    font-size: 0.7em;
    margin-top: 5px;
  }
`;

export default ({}) => {
  return (
    <PlayerSummary>
      <TopSegment>
        <Fade bottom>
          <Title>December player summary</Title>
        </Fade>
        <Sums>
          <Fade bottom>
            <Sum>
              <h2>69,872,451</h2>
              <p className="bold">Game events</p>
            </Sum>
          </Fade>
          <Fade bottom>
            <Sum>
              <h2>4,971,255</h2>
              <p className="bold">Matches played</p>
              <div>(2 matches per second)</div>
            </Sum>
          </Fade>
        </Sums>
      </TopSegment>
      <VideoContainer>
        <Video playsInline autoPlay muted loop />
        <Overlay />
      </VideoContainer>
    </PlayerSummary>
  );
};
