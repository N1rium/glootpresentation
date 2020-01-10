import React, { useRef, useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  MarketOverview,
  InnerContainer,
  Title,
  Description,
  IconGroup,
  IconContainer,
  PlayersContainer,
  PillarContainer,
  PillarInner,
  Pillars,
  Pillar,
  MusicPillar,
  VideoPillar,
  GreenPillar,
  Indexes,
} from './style';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import MusicIcon from '../../assets/icons/musicicon.svg';
import GamingIcon from '../../assets/icons/gamesicon.svg';
import VideoIcon from '../../assets/icons/cameraicon.svg';
import PlayersIcon from '../../assets/icons/players.svg';

export default ({ scroll: parentScroll }) => {
  const ref = useRef(null);

  const [scroll, setScroll] = useState({
    topPx: parentScroll,
    topPercentage: parentScroll,
  });

  useEffect(() => {
    const { scrollHeight, offsetTop } = ref.current;
    setScroll({
      topPx: parentScroll - offsetTop,
      topPercentage: ((parentScroll - offsetTop) / scrollHeight) * 100 * 2,
    });
  }, [parentScroll]);

  const { topPercentage } = scroll;

  return (
    <MarketOverview ref={ref}>
      <InnerContainer>
        <Title>
          <Fade bottom>Market overview</Fade>
        </Title>
        <Slide bottom>
          <Description style={isMobile ? {} : { marginBottom: '80px' }}>
            The gaming industry generates double
            <br /> the revenue than music & film do combined.
          </Description>
        </Slide>
        {/* <IconGroup>
          <Slide left bottom>
            <IconContainer className="music">
              <img src={MusicIcon} />
              <p>$17B</p>
            </IconContainer>
          </Slide>
          <Zoom>
            <IconContainer className="games">
              <img src={GamingIcon} />
              <p>$116B</p>
            </IconContainer>
          </Zoom>
          <Slide right bottom>
            <IconContainer className="video">
              <img src={VideoIcon} />
              <p>$41B</p>
            </IconContainer>
          </Slide>
        </IconGroup> */}
        <PillarContainer>
          <PillarInner>
            <Indexes className="top">
              <p className={topPercentage > 5 ? 'show' : 'false'}>$17B</p>
              <p className={topPercentage > 25 ? 'show' : 'false'}>$41B</p>
              <p className={topPercentage > 50 ? 'show' : 'false'} style={{ fontWeight: 'bold' }}>
                $116B
              </p>
            </Indexes>
            <Pillars>
              <MusicPillar scroll={scroll.topPercentage} height="4vh" />
              <VideoPillar scroll={scroll.topPercentage} height="15vh" />
              <GreenPillar scroll={scroll.topPercentage} height="30vh" />
            </Pillars>
            <Fade>
              <Indexes>
                <p className="show">Music</p>
                <p className="show">Film</p>
                <p className="show">Games</p>
              </Indexes>
            </Fade>
          </PillarInner>
        </PillarContainer>
      </InnerContainer>
    </MarketOverview>
  );
};
