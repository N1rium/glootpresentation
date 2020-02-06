import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: #000;
  z-index: 10;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.25s ease-in-out;
  will-change: transform, opacity;
  &.visible {
    opacity: 1;
    transform: translateY(0%);
  }
  div {
    font-weight: 900;
  }
`;

export default ({ visible }) => {
  return (
    <Header className={visible ? 'visible' : 'hidden'}>
      <div>G-Loot</div>
    </Header>
  );
};
