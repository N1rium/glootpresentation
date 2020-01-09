import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const StickyVideo = styled.div`
  width: 100vw;
  height: 200vh;
`;

const VideoContainer = styled.div.attrs(props => ({
  style: {
    transform: `scale(${Math.max(0.3, props.scroll <= 50 ? '1' : `${50 / props.scroll}`)})`,
  },
}))`
  position: sticky;
  top: 0;
  height: 100vh;
  will-change: transform;
  box-shadow: 0px 0px 16px 8px rgba(0, 0, 0, 0.3);
  border: 0px solid #fff;
  border-radius: 6px;
  margin-left: ${props => (props.scroll > 50 ? '-75vw' : '0')};
  width: ${props => (props.scroll > 50 ? '250vw' : '100vw')};
  border-width: ${props => (props.scroll > 50 ? '10px' : '0px')};
  @media only screen and (min-width: 769px) {
    max-width: 100vw;
    margin-left: 0 !important;
  }

  @media (orientation: landscape) {
    max-width: 100vw;
    margin-left: 0 !important;
  }
`;

const Video = styled.video.attrs(props => ({
  id: 'mainvideo',
  src: 'https://res.cloudinary.com/gloot/video/upload/v1538466873/Video/G-Loot_-_The_future_of_esport_1080p_HQ.mp4',
}))`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const MuteButton = styled.div`
  position: absolute;
  width: 128px;
  height: 128px;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  bottom: 32px;
  right: 32px;
  border-radius: 50%;
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

  const mute = () => {
    const vid = document.getElementById('mainvideo');
    vid.muted = !vid.muted;
  };

  return (
    <>
      <StickyVideo ref={ref}>
        <VideoContainer scroll={scroll.topPercentage}>
          <Video playsInline autoPlay muted />
          <MuteButton onClick={mute} />
        </VideoContainer>
      </StickyVideo>
    </>
  );
};
