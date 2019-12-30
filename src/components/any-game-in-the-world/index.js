import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import StickyBg1 from '../../assets/stickybg1.png';
import StickyBg2 from '../../assets/stickybg2.jpg';

const AnyGameInTheWorld = styled.div`
  width: 100vw;
  height: 400vh;
`;

const ImageContainer = styled.div.attrs(props => ({
  style: {
    transform: `scale(${props.scroll <= 0 ? '0.5' : `${Math.min(1, 0.5 + props.scroll / 100)}`})`,
  },
}))`
  position: sticky;
  top: 0px;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.scroll <= 100 ? StickyBg1 : StickyBg2})`,
  },
}))`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.25s ease-in-out;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TextSegment = styled.div`
  position: relative;
  z-index: 1;
  max-width: 992px;
  margin: ${props => (props.first ? '100vh 80px' : '0px 80px')};
  color: #fffffe;
  opacity: 0.8;
  h2 {
    margin-bottom: 20px;
  }
`;

export default ({ scroll: parentScroll, debug = false }) => {
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

  return (
    <AnyGameInTheWorld ref={ref}>
      {debug && (
        <div style={{ position: 'fixed', top: '0', left: '0', zIndex: 10 }}>
          Scroll: {scroll.topPx} : {scroll.topPercentage}
        </div>
      )}
      <ImageContainer scroll={scroll.topPercentage}>
        <Image scroll={scroll.topPercentage} />
      </ImageContainer>
      <TextSegment first>
        <h2>Connects any game in the world</h2>
        <h3>with unique tech, we can connect games without relying on API availability</h3>
      </TextSegment>
      <TextSegment>
        <h2>Connects any game in the world</h2>
        <h3>with unique tech, we can connect games without relying on API availability</h3>
      </TextSegment>
    </AnyGameInTheWorld>
  );
};
