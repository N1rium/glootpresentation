import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import StickyBg1 from '../../assets/stickybg1.png';
import StickyBg2 from '../../assets/stickybg2.jpg';

const AnyGameInTheWorld = styled.div`
  width: 100vw;
  height: 400vh;
  position: relative;
  & > div {
    width: 100%;
    height: 100%;
  }
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
  @media (orientation: portrait) {
    transform: scale(1) !important;
  }
`;

const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  will-change: opacity;
  transition: opacity 0.25s ease-in-out;
`;

const Image1 = styled(Image)`
  background-image: url(${StickyBg1});
`;

const Image2 = styled(Image).attrs(props => ({
  style: {
    opacity: `${props.scroll > 100 ? 1 : 0}`,
  },
}))`
  background-image: url(${StickyBg2});
`;

const TextSegment = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 992px;
  color: #fffffe;
  opacity: 0.8;
  margin: 0px 20px;
  h2 {
    margin-bottom: 20px;
  }
  &.first {
    top: 120vh;
  }
  &.second {
    bottom: 80vh;
  }
  @media only screen and (min-width: 769px) {
    margin: 0px 80px;
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
      <div>
        <ImageContainer scroll={scroll.topPercentage}>
          <Image1 />
          <Image2 scroll={scroll.topPercentage} />
        </ImageContainer>

        <TextSegment className="first">
          <h2>Connects any game in the world</h2>
          <h3>with unique tech, we can connect games without relying on API availability</h3>
        </TextSegment>
        <TextSegment className="second">
          <h2>Connects any game in the world</h2>
          <h3>with unique tech, we can connect games without relying on API availability</h3>
        </TextSegment>
      </div>
    </AnyGameInTheWorld>
  );
};
