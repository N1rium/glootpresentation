import React, { useRef, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { OfflineEvents, Content, LeftSegment, RightSegment, Sticky } from './style';
import List from './components/list';
import { isMobile } from 'react-device-detect';

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

  return (
    <OfflineEvents ref={ref}>
      <Content className="content" scroll={scroll.topPx}>
        <Sticky>
          <Fade bottom>
            <h2>
              Offline events with <br />
              real money prizes
            </h2>
          </Fade>
          <Fade bottom>
            <p>limited to invited professional esports teams only</p>
          </Fade>
        </Sticky>
        <List />
      </Content>
    </OfflineEvents>
  );
};
