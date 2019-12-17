import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const StickyVideo = styled.div`
  width: 100vw;
  height: 200vh;
`;

const VideoContainer = styled.div.attrs(props => ({
  style: {
    transform: `scale(${props.scroll <= 50 ? '1' : `${50 / props.scroll}`})`,
    borderWidth: `${props.scroll > 50 ? '10px' : '0px'}`,
  },
}))`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  box-shadow: 0px 0px 16px 8px rgba(0, 0, 0, 0.3);
  border: 0px solid #fff;
  border-radius: 6px;
`;

const Video = styled.video.attrs(props => ({
  src:
    'https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4',
}))`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default ({ scroll: parentScroll, debug = true }) => {
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
    <>
      <StickyVideo ref={ref}>
        {debug && (
          <div style={{ position: 'fixed', top: '0', left: '0', zIndex: 10 }}>
            Scroll: {scroll.topPx} : {scroll.topPercentage}
          </div>
        )}
        <VideoContainer scroll={scroll.topPercentage}>
          <Video playsInline autoPlay muted />
        </VideoContainer>
      </StickyVideo>
    </>
  );
};
