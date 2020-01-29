import React, { useState, useEffect, useRef } from 'react';
import useTimeout from 'use-timeout';
import styled from 'styled-components';

const PlayerSummary = styled.div`
  position: relative;
  margin: 200px 0px;
  padding: 0px 125px;
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
  margin-bottom: 40px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: #000;
  margin: 40px 0px;
`;

const Sums = styled.div`
  display: flex;
`;

const Sum = styled.div`
  color: rgb(114, 114, 114);
  margin-right: 80px;
  h2 {
    color: #7752f8;
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
        <Title>December player summary</Title>
        <Sums>
          <Sum>
            <h2>4,971,255</h2>
            <p className="bold">Matches played</p>
            <div>(2 matches per second)</div>
          </Sum>
          <Sum>
            <h2>4,971,255</h2>
            <p className="bold">Game events</p>
          </Sum>
        </Sums>
      </TopSegment>
      <VideoContainer>
        <Video playsInline autoPlay muted loop />
        <Overlay />
      </VideoContainer>
    </PlayerSummary>
  );
};
