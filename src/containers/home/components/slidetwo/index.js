import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default ({ scroll }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const SlideTwo = styled.div``;

  useEffect(() => {
    const el = document.getElementById('intro');
    const { offsetTop } = el;
    console.warn('scroll slide two: ', scroll - offsetTop);
  }, [scroll]);

  return <SlideTwo></SlideTwo>;
};
