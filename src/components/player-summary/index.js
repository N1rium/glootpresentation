import React, { useEffect, useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import { useFetch } from '../../hooks/fetch';

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

const Video = styled.video.attrs((props) => ({
  src: 'https://res.cloudinary.com/gloot/video/upload/v1598457620/gloot%20presentation/fundslocked_final_1.mov',
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
  @media only screen and (max-width: 666px) {
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
  @media only screen and (max-width: 666px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Sum = styled.div`
  color: rgb(114, 114, 114);
  margin-left: 80px;
  @media only screen and (max-width: 666px) {
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
  const biRef = useRef(null);

  const getNumMatches = (numMatches, startDate, endDate) => {
    const progress = (Date.now() - startDate) / (endDate - startDate);
    const amount = Math.round(progress * numMatches).toFixed(0);
    const beutifyAmount = new Intl.NumberFormat().format(amount);
    return beutifyAmount;
  };

  const fetchStats = async () => {
    const resp = await fetch('https://edge.gloot.com/gnog-nest/client-stats');
    const data = await resp.json();
    setBiData(data);
    biRef.current = data;
    console.warn(getNumMatches(data.matches, data.startDate, data.endDate));
  };

  const [biData, setBiData] = useState({ matches: 0, events: 0, startDate: 0, endDate: 0 });
  const [matches, setMatches] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    fetchStats();

    const interval = setInterval(() => {
      const ref = biRef.current;
      console.log(ref);
      setMatches(getNumMatches(ref.matches, ref.startDate, ref.endDate));
      setEvents(getNumMatches(ref.events, ref.startDate, ref.endDate));
    }, Math.random() * 1500);

    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, []);

  return (
    <PlayerSummary>
      <TopSegment>
        <Fade bottom>
          <Title>G-Loot August summary</Title>
        </Fade>
        <Sums>
          <Fade bottom>
            <Sum>
              <h2>{events}</h2>
              <p className="bold">Tracked game events</p>
            </Sum>
          </Fade>
          <Fade bottom>
            <Sum>
              <h2>{matches}</h2>
              <p className="bold">Matches played</p>
              <div>(~2 matches per second)</div>
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
