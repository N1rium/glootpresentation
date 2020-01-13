import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import IntroVideo from '../intro-video';
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
      <div>
        <IntroVideo />
      </div>
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
        {/* <RevenueModel /> */}
        <OnePager />
        <Employees />
        <Footer />
      </div>
    </div>
  );
};
