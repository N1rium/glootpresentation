import React, { useRef, useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  MarketOverview,
  InnerContainer,
  Title,
  Description,
  PillarContainer,
  PillarInner,
  Pillars,
  MusicPillar,
  VideoPillar,
  GreenPillar,
  Indexes,
} from './style';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

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
            The gaming sector is 2x revenue
            <br /> of music and film combined.
          </Description>
        </Slide>
        <PillarContainer>
          <PillarInner>
            <Indexes className="top">
              <p>$19B</p>
              <p>$45B</p>
              <p>$161B</p>
            </Indexes>
            <Pillars>
              <MusicPillar
                className={topPercentage > 5 ? 'show' : 'false'}
                scroll={scroll.topPercentage}
                height="4vh"
              />
              <VideoPillar
                className={topPercentage > 25 ? 'show' : 'false'}
                scroll={scroll.topPercentage}
                height="15vh"
              />
              <GreenPillar
                className={topPercentage > 50 ? 'show' : 'false'}
                scroll={scroll.topPercentage}
                height="30vh"
              />
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
