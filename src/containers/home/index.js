import React, { useState } from 'react';
import Opportunity from './components/opportunity';
import { Intro, Logo, SlideTwo, PhoneContainer, DeviceContainer, TvContainer, IntroTitle } from './style';
import useScroll from 'react-use-scroll';

export default ({}) => {
  const [scroll, setScroll] = useState(0);

  const onScroll = e => {
    const { target } = e;
    const { scrollTop } = target;
    setScroll(scrollTop);
  };

  return (
    <div id="scroller" onScroll={onScroll} style={{ overflowY: 'auto', width: '100%', height: '100%' }}>
      <Intro>
        <Logo scroll={scroll} />
        <DeviceContainer scroll={scroll}>
          <IntroTitle scroll={scroll}>
            WORLD’S FIRST ONLINE REAL MONEY  ESPORTS PLATFORM FOR MOBILE, PC & CONSOLE
          </IntroTitle>
          <TvContainer scroll={scroll}>
            <video autoPlay muted loop>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
            </video>
            <PhoneContainer scroll={scroll} />
          </TvContainer>
        </DeviceContainer>
      </Intro>
      <SlideTwo />
    </div>
  );
};
