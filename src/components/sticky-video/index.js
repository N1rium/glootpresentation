import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const scrollThreshold = 1;

const StickyVideo = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;
`;

const VideoContainer = styled.div.attrs(props => ({
  style: {
    transform: `scale(${Math.max(0.6, 1 - props.scroll / 250)})`,
    marginLeft: props.scroll > scrollThreshold ? '-75vw' : '0',
    width: props.scroll > scrollThreshold ? '250vw' : '100vw',
    borderWidth: props.scroll > scrollThreshold ? '10px' : '0px',
  },
}))`
  position: sticky;
  top: 0;
  height: 100vh;
  will-change: transform;
  box-shadow: 0px 0px 16px 8px rgba(0, 0, 0, 0.3);
  border: 0px solid #fff;
  border-radius: 6px;
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
    : 'https://res.cloudinary.com/gloot/video/upload/v1578990599/Video/gloot_the_future_of_esports_720p.mp4',
}))``;

const Button = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 50%;
  font-size: 14px;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
  bottom: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const MuteButton = styled(Button)`
  right: 20px;
`;

const PlayButton = styled(Button)`
  right: 88px;
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
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

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
    setMuted(vid.muted);
  };

  const playPause = () => {
    const vid = document.getElementById('mainvideo');
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <StickyVideo ref={ref}>
        <VideoContainer scroll={scroll.topPercentage}>
          <Video ref={videoRef} playsInline autoPlay muted>
            <VideoSource isMobile={isMobile} />
          </Video>
          {loading ? (
            <Loader />
          ) : (
            <>
              <PlayButton onClick={playPause}>
                <FontAwesomeIcon icon={playing ? faPlay : faPause} />
              </PlayButton>
              <MuteButton onClick={mute}>
                <FontAwesomeIcon icon={muted ? faVolumeMute : faVolumeUp} />
              </MuteButton>
            </>
          )}
        </VideoContainer>
      </StickyVideo>
    </>
  );
};
