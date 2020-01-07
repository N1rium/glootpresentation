import React, { useRef, useEffect, useState } from 'react';
import {
  Opportunity,
  GrayBall,
  GreenBall,
  Icon,
  LastInfoContainer,
  RightTextContainer,
  LeftTextContainer,
} from './style';

export default ({ scroll }) => {
  const ref = useRef(null);
  const [s, setS] = useState({});

  useEffect(() => {
    const { offsetTop, offsetHeight, offsetWidth, scrollHeight } = ref.current;
    setS({
      width: offsetWidth,
      height: offsetHeight,
      scrollPx: scroll - offsetTop,
      scrollPercentage: ((scroll - offsetTop) / offsetHeight) * 100 * 2,
    });
    console.log(scrollPercentage);
  }, [scroll]);

  const { scrollPercentage, width } = s;

  const greenBallStyle = {
    left: `${Math.min(75, 25 + Math.max(0, scrollPercentage))}vw`,
    transform: `scale(${Math.min(25, 1 + Math.max(0, scrollPercentage / 2))})`,
    width: `${Math.floor(width / 100)}px`,
    height: `${Math.floor(width / 100)}px`,
  };

  const grayBallStyle = {
    left: `${Math.min(62.5, 13 + Math.max(0, scrollPercentage))}vw`,
    transform: `scale(${Math.max(1, Math.min(25, 25 - Math.max(0, scrollPercentage / 2)))})`,
    zIndex: `${scrollPercentage >= 25 ? '1' : '0'}`,
    width: `${Math.floor(width / 100)}px`,
    height: `${Math.floor(width / 100)}px`,
  };

  return (
    <Opportunity ref={ref}>
      <RightTextContainer>
        <h2>Opportunity</h2>
        <p>Top 300 esports professionals earn more than the rest of the 2.3 billion players combined.</p>
      </RightTextContainer>
      <LeftTextContainer>
        <h2>G-Loot is the missing component</h2>
        <p>Anyone, anywhere in the world can now earn money from playing the games they already play & love.</p>
      </LeftTextContainer>
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
