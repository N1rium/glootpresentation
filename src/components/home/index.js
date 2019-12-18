import React, { useState } from 'react';
import IntroVideo from '../intro-video';
import ImageWithText from '../image-with-text';
import StickyVideo from '../sticky-video';
import MarketOverview from '../market-overview';
import OfflineEvents from '../offline-events';
import Opportunity from '../opportunity';
import RevenueDrivers from '../revenue-drivers';

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
        <ImageWithText
          image={'../src/assets/phone.png'}
          header="Mobile"
          description="Worlds first online real money esports platform on mobile."
        />
        <ImageWithText
          image={'../src/assets/dator.png'}
          header="Mobile"
          description="Worlds first online real money esports platform on mobile."
        />
        <ImageWithText
          image={'../src/assets/tv.png'}
          header="Mobile"
          description="Worlds first online real money esports platform on mobile."
        />
      </div>
      <StickyVideo scroll={scroll} />
      <MarketOverview />
      <OfflineEvents />
      <Opportunity scroll={scroll} />
      <RevenueDrivers />
    </div>
  );
};
