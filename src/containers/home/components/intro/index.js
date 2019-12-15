import React, { useState, useEffect } from 'react';
import { Intro, Logo, SlideTwo, PhoneContainer, DeviceContainer, TvContainer } from './style';

export default ({ scroll }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const el = document.getElementById('intro');
    const { offsetTop } = el;
    setScrollTop(scroll - offsetTop);
  }, [scroll]);

  return <Intro></Intro>;
};
