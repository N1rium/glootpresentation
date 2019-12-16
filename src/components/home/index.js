import React, { useState } from 'react';
import ImageWithText from '../image-with-text';
import './style.scss';

export default ({}) => {
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    const { target } = e;
    const { scrollTop } = target;
    setScroll(scrollTop);
  };

  return (
    <div id="app-content">
      <div className="hero-frame-top" />
      <div className="hero-frame">
        <section className="intro">
          <video
            playsInline
            autoPlay
            muted
            src="https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4"
          />
        </section>
        <ImageWithText header="Mobile" description="Worlds first online real money esports platform on mobile." />
        <ImageWithText header="Mobile" description="Worlds first online real money esports platform on mobile." />
        <ImageWithText header="Mobile" description="Worlds first online real money esports platform on mobile." />
        {/* <section className="esports-platform">
          <div className="hero-frame-top" />
          <h2>The online real money esports platform</h2>
        </section> */}
      </div>
    </div>
  );
};
