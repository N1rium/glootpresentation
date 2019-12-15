import React, { useRef, useEffect, useState } from 'react';
import { Opportunity, GrayBall, GreenBall, Icon, LastInfoContainer } from './style';

export default ({ scroll, debug }) => {
  const ref = useRef(null);
  const [s, setS] = useState({});

  useEffect(() => {
    const { offsetTop, offsetHeight, offsetWidth } = ref.current;
    setS({
      width: offsetWidth,
      height: offsetHeight,
      scrollPx: scroll - offsetTop,
      scrollPercentage: ((scroll - offsetTop) / offsetHeight) * 100,
    });
  }, [scroll]);

  const { scrollPercentage, width } = s;

  const greenBallStyle = {
    left: `${scrollPercentage >= 60 ? '110vw' : scrollPercentage >= 25 ? '75vw' : '25vw'}`,
    transform: `scale(${scrollPercentage >= 60 ? '50' : scrollPercentage >= 25 ? '25' : '1'})`,
    width: `${Math.floor(width / 100)}px`,
    height: `${Math.floor(width / 100)}px`,
  };

  const grayBallStyle = {
    left: `${scrollPercentage >= 25 ? '62.5vw' : '13vw'}`,
    transform: `scale(${scrollPercentage >= 25 ? '1' : '25'})`,
    zIndex: `${scrollPercentage >= 25 ? '1' : '0'}`,
    width: `${Math.floor(width / 100)}px`,
    height: `${Math.floor(width / 100)}px`,
  };

  return (
    <Opportunity ref={ref}>
      {debug && (
        <div style={{ position: 'sticky', top: '0', left: '0' }}>
          <div>scroll (px): {s.scrollPx}</div>
          <div>scroll (%): {s.scrollPercentage}</div>
        </div>
      )}
      <GrayBall style={grayBallStyle}>
        <div></div>
      </GrayBall>
      <GreenBall style={greenBallStyle}>
        <div></div>
      </GreenBall>

      <LastInfoContainer style={{ transform: `translateY(${scrollPercentage >= 60 ? '-100' : '100'}%)` }}>
        <div>Esport offline event</div>
        <div>Estimated revenue</div>
      </LastInfoContainer>
    </Opportunity>
  );
};
