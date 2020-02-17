import React, { useState, useRef, useEffect } from 'react';
import { useViewportSpy } from 'beautiful-react-hooks';
import styled from 'styled-components';
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
import PlayerSummary from '../player-summary';
import OnePager from '../one-pager';
import Employees from '../employees';
import Footer from '../footer';

import GlootLogo from '../../assets/gloot-logo.svg';
import marketOverview from '../market-overview';

const StickyNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 11;
  transform: translateY(-100%) translateZ(0);
  will-change: transform;
  transition: transform 0.25s ease-in-out;
  & > div {
    padding: 0px 125px;
    background: rgba(29, 29, 31, 0.85);
    /* backdrop-filter: saturate(180%) blur(20px); */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.visible {
    transform: translateY(0%) translateZ(0);
  }
  @media only screen and (min-width: 1024px) {
    height: 42px;
  }
  @media only screen and (max-width: 768px) {
    & > div {
      padding: 0px 40px;
    }
  }
`;

const Breadcrumb = styled.span`
  font-size: 0.8em;
  font-weight: bold;
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  height: 62.5%;
  margin-right: 10px;
`;

const indexMap = ['Market overview', 'Offline goes online', 'Platform activity', 'Estimated revenue'];

export default ({}) => {
  const navbarContentRef = useRef(null);
  const offlineOnlineRef = useRef(null);
  const marketOverviewRef = useRef(null);
  const playerSummaryRef = useRef(null);
  const onePagerRef = useRef(null);
  const ballsRef = useRef(null);
  const showNavbar = useViewportSpy(navbarContentRef);
  const offlineOnline = useViewportSpy(offlineOnlineRef);
  const marketOverview = useViewportSpy(marketOverviewRef);
  const playerSummary = useViewportSpy(playerSummaryRef);
  const onePager = useViewportSpy(onePagerRef);
  const balls = useViewportSpy(ballsRef);
  const [scroll, setScroll] = useState(0);
  const [indexes, setIndexes] = useState([false, false]);

  const onScroll = e => {
    const { target } = e;
    const { scrollTop } = target;
    setScroll(scrollTop);
  };

  useEffect(() => {
    const newIndexes = [...indexes];
    newIndexes[0] = marketOverview;
    setIndexes(newIndexes);
    if (showNavbar && marketOverview) {
      analytics.track('Market Overview Viewed', {
        product_type: 'G-Loot Teaser',
      });
    }
  }, [marketOverview]);

  useEffect(() => {
    const newIndexes = [...indexes];
    newIndexes[1] = offlineOnline;
    setIndexes(newIndexes);
    if (showNavbar && offlineOnline) {
      analytics.track('Offline Goes Online Viewed', {
        product_type: 'G-Loot Teaser',
      });
    }
  }, [offlineOnline]);

  useEffect(() => {
    const newIndexes = [...indexes];
    newIndexes[2] = playerSummary;
    setIndexes(newIndexes);
    if (showNavbar && playerSummary) {
      analytics.track('Estimated Revenue Viewed', {
        product_type: 'G-Loot Teaser',
      });
    }
  }, [playerSummary]);

  useEffect(() => {
    const newIndexes = [...indexes];
    newIndexes[3] = balls;
    setIndexes(newIndexes);
    if (showNavbar && balls) {
      analytics.track('Platform Activity Viewed', {
        product_type: 'G-Loot Teaser',
      });
    }
  }, [balls]);

  useEffect(() => {
    if (onePager) {
      analytics.track('Summary Viewed', {
        product_type: 'G-Loot Teaser',
      });
    }
  }, [onePager]);

  return (
    <div id="app-content" onScroll={onScroll}>
      <StickyNav className={`${showNavbar ? 'visible' : ''}`}>
        <div>
          <Logo />
          <Breadcrumb>{indexMap[indexes.findIndex(item => item === true)]}</Breadcrumb>
        </div>
      </StickyNav>
      <div>
        <IntroVideo />
      </div>
      <StickyVideo scroll={scroll} />
      <MarketOverview scroll={scroll} />
      <div ref={navbarContentRef} className="navbar-content">
        <div ref={marketOverviewRef} className="market-overview">
          <Players2019 />
          <OfflineEvents scroll={scroll} />
        </div>
        <div ref={offlineOnlineRef} className="offline-online">
          {isMobile === true && <Opportunity />}
          {isMobile === false && <OpportunityLite scroll={scroll} />}
        </div>
        <div ref={playerSummaryRef} className="player-summary">
          <PlayerSummary />
        </div>
        <div ref={ballsRef} className="balls">
          <Balls />
        </div>
      </div>
      <div style={{ background: '#000' }}>
        <AnyGameInTheWorld scroll={scroll} />
        <RevenueDrivers />
        {/* <RevenueModel /> */}
        <div ref={onePagerRef}>
          <OnePager />
        </div>
        {/* <Employees /> */}
        <Footer />
      </div>
    </div>
  );
};
