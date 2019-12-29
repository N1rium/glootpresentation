import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const AnyGameInTheWorld = styled.div`
  width: 100vw;
  height: 200vh;
`;

const ImageContainer = styled.div.attrs(props => ({
  style: {
    backgroundImage: 'url(https://images.alphacoders.com/936/936388.png)',
  },
}))`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
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
      <ImageContainer scroll={scroll.topPercentage} />
    </AnyGameInTheWorld>
  );
};
