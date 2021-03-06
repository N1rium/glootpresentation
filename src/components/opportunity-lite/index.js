import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
  color: #000;
  padding: 0px 25px;
  height: 140vh;
  p {
    color: rgb(114, 114, 114);
    max-width: 768px;
  }
  .opportunity {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 25%;
    text-align: center;
  }
  .ball-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Ball = styled.div`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  z-index: ${(props) => (props.small ? '1' : '0')};
  will-change: transform;
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const BlueBall = styled(Ball).attrs((props) => ({
  style: {
    transform: `scale(${Math.max(0.1, Math.min(1 - props.scroll / 75, 1))})`,
    zIndex: props.scroll > 25 ? '2' : '0',
  },
}))`
  background: #5753ff;
  margin-right: ${(props) => (props.small ? '-8px' : '0px')};
`;

const BlackBall = styled(Ball).attrs((props) => ({
  style: {
    transform: `scale(${Math.max(0.1, Math.min(props.scroll / 75, 1))}) translateX(-50%)`,
  },
}))`
  margin-left: ${(props) => (props.small ? '-8px' : '0px')};
  background: url(../src/assets/glootboll.svg);
  background-size: cover;
  background-position: center;
  transform: scale(0.1);
  transform-origin: center left;
`;

const TextSegment = styled.div`
  position: absolute;
  top: 0;
  max-width: 900px;
  will-change: opacity;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextSegmentRight = styled(TextSegment).attrs((props) => ({
  style: {
    opacity: 1 - props.scroll / 50 > 1 ? '1' : `${Math.max(0, 1 - props.scroll / 50)}`,
  },
}))`
  right: 150px;
  text-align: right;
`;

const TextSegmentLeft = styled(TextSegment).attrs((props) => ({
  style: {
    opacity: (props.scroll - 25) / 50 < 1 ? `${Math.max(0, (props.scroll - 25) / 50)}` : '1',
  },
}))`
  text-align: left;
  left: 150px;
`;

const Balls = styled.div.attrs((props) => ({
  style: {
    transform: `translateX(${Math.max(-50, Math.min(50, props.scroll - 25))}%)`,
  },
}))`
  display: flex;
  margin-left: 200px;
  @media only screen and (max-width: 768px) {
    margin-left: 100px;
  }
`;

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
    <Wrapper ref={ref}>
      <div className="opportunity">
        <div className="ball-container">
          <TextSegmentRight scroll={topPercentage}>
            <h2>Opportunity</h2>
            <p>Top 600 esports professionals earn more than the rest of the 2.6 billion players combined.</p>
          </TextSegmentRight>
          <Balls scroll={topPercentage}>
            <BlueBall scroll={topPercentage} />
            <BlackBall scroll={topPercentage} />
          </Balls>
          <TextSegmentLeft scroll={topPercentage}>
            <h2>G-Loot is the missing component</h2>
            <p>
              Anyone, anywhere in the world can now earn money from playing and competing in the games they already play
              & love.
            </p>
          </TextSegmentLeft>
        </div>
      </div>
    </Wrapper>
  );
};
