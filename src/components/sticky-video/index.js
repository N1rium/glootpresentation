import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import GlootLogo from '../../assets/gloot-logo.png';
import { isMobile } from 'react-device-detect';

const StickyVideo = styled.div`
  width: 100vw;
  height: 200vh;
`;

const getScaleFromScroll = scroll => {
  return `scale(1)`;
};

const VideoContainer = styled.div.attrs(props => ({
  style: {
    transform: props.isMobile
      ? getScaleFromScroll()
      : `scale(${Math.max(0.3, props.scroll <= 50 ? '1' : `${50 / props.scroll}`)})`,
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
  // poster: GlootLogo,
}))`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const VideoSource = styled.source.attrs(props => ({
  src: props.isMobile
    ? 'https://res.cloudinary.com/gloot/video/upload/v1578603617/gloot%20presentation/mainvideo_compressed.mp4'
    : 'https://res.cloudinary.com/gloot/video/upload/v1538466873/Video/G-Loot_-_The_future_of_esport_1080p_HQ.mp4',
}))``;

const MuteButton = styled.div`
  position: absolute;
  width: 20vw;
  height: 20vw;
  max-width: 64px;
  max-height: 64px;
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

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s linear infinite;
  position: absolute;
  bottom: 32px;
  right: 32px;
  margin: 0 auto;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default ({ scroll: parentScroll }) => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const vid = document.getElementById('mainvideo');
    vid.addEventListener('playing', function() {
      if (vid.readyState == 4) {
        setLoading(false);
        vid.play();
      }
    });
    vid.addEventListener('suspend', function(e) {
      if (vid.readyState == 4) {
        setLoading(false);
        vid.play();
      }
    });

    const loadedCheck = setInterval(() => {
      if (vid.readyState >= 3) {
        setLoading(false);
        vid.play();
        clearInterval(loadedCheck);
      }
    }, 500);
  }, []);

  const mute = () => {
    const vid = document.getElementById('mainvideo');
    vid.muted = !vid.muted;
  };

  return (
    <>
      <StickyVideo ref={ref}>
        <VideoContainer scroll={scroll.topPercentage}>
          <Video playsInline autoPlay muted>
            <VideoSource isMobile={isMobile} />
          </Video>
          {loading ? <Loader /> : <MuteButton onClick={mute} />}
        </VideoContainer>
      </StickyVideo>
    </>
  );
};
