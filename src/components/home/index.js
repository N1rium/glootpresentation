import React, { useState } from 'react';
import ImageWithText from '../image-with-text';
import StickyVideo from '../sticky-video';
import MarketOverview from '../market-overview';
import OfflineEvents from '../offline-events';
import Opportunity from '../opportunity';
import RevenueDrivers from '../revenue-drivers';
import './style.scss';

export default ({}) => {
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    const { target } = e;
    const { scrollTop } = target;
    setScroll(scrollTop);
  };

  return (
    <div id="app-content" onScroll={onScroll}>
      <div className="hero-frame">
        <section className="intro">
          <video playsInline autoPlay muted src="src/assets/video/intro.mp4" />
        </section>
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
        {/* <section className="esports-platform">
          <div className="hero-frame-top" />
          <h2>The online real money esports platform</h2>
        </section> */}
      </div>
      <StickyVideo scroll={scroll} />
      <MarketOverview />
      <OfflineEvents />
      <Opportunity scroll={scroll} />
      <RevenueDrivers />
    </div>
  );
};
