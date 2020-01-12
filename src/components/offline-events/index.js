import React, { useRef, useState, useEffect } from 'react';
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
          <h2>Offline events with real money prizes</h2>
          <p>limited to invited professional esports teams only</p>
        </Sticky>
        <List />
      </Content>
    </OfflineEvents>
  );
};
