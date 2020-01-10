import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import IntroVideo from '../intro-video';
import ImageWithText from '../image-with-text';
import Header from '../header';
import StickyVideo from '../sticky-video';
import MarketOverview from '../market-overview';
import Players2019 from '../players-2019';
import OfflineEvents from '../offline-events';
import Opportunity from '../opportunity';
import OpportunityLite from '../opportunity-lite';
import Balls from '../balls';
import RevenueDrivers from '../revenue-drivers';
import AnyGameInTheWorld from '../any-game-in-the-world';
import RevenueModel from '../revenue-model';
import OnePager from '../one-pager';
import Employees from '../employees';
import Footer from '../footer';

export default ({}) => {
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    const { target } = e;
    const { scrollTop } = target;
    setScroll(scrollTop);
  };

  return (
    <div id="app-content" onScroll={onScroll}>
      {/* <div>
        <IntroVideo />
        <ImageWithText
          image={'../src/assets/phone.png'}
          header="Mobile"
          description="Worlds first online real money esports platform on mobile."
        />
        <ImageWithText
          direction="left"
          image={'../src/assets/dator.png'}
          header="PC"
          isLeft
          description="Worlds first online real money esports platform on PC."
        />
        <ImageWithText
          image={'../src/assets/tv.png'}
          header="Console"
          description="Worlds first online real money esports platform on console."
        />
      </div> */}
      {/* <Header visible={scroll > 2000} /> */}
      <StickyVideo scroll={scroll} />
      <MarketOverview scroll={scroll} />
      <Players2019 />
      <OfflineEvents scroll={scroll} />
      {isMobile === true && <Opportunity />}
      {isMobile === false && <OpportunityLite scroll={scroll} />}
      <Balls />
      <div style={{ background: '#000' }}>
        <AnyGameInTheWorld scroll={scroll} />
        <RevenueDrivers />
        <RevenueModel />
        <OnePager />
        <Employees />
        <Footer />
      </div>
    </div>
  );
};
