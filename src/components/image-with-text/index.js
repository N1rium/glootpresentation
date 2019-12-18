import React from 'react';
import { ImageWithText, Header } from './style';

export default ({ header, description, isLeft, image }) => {
  return (
    <ImageWithText isLeft={isLeft} src={image}>
      <Header>
        <h3>{header}</h3>
        <p>{description}</p>
      </Header>
    </ImageWithText>
  );
};
