import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Start, Intro, CrossPlatform } from '../slides';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  transform: ${props => `translateY(-${props.slide * 100}%)`};
  transition: transform 1s ease-in-out;
  will-change: transform;
`;

const Debug = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  font-size: 2em;
  z-index: 10000;
  & > div {
    margin: 0px 5px;
    cursor: pointer;
  }
`;

export default () => {
  const [slide, setSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const slideController = index => {
    if (isSliding || index < 0 || index > 3) return;
    setSlide(index);
    setIsSliding(true);
  };

  return (
    <Wrapper onTransitionEnd={() => setIsSliding(false)}>
      <Debug>
        <div onClick={() => slideController(slide - 1)}>-</div>
        <div onClick={() => slideController(slide + 1)}>+</div>
      </Debug>
      <Inner slide={slide}>
        <Start />
        <Intro />
        <CrossPlatform />
      </Inner>
    </Wrapper>
  );
};
