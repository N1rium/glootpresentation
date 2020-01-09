import React from 'react';
import { ImageWithText, Header, Image } from './style';
import Fade from 'react-reveal/Fade';

export default ({ header, description, isLeft, image }) => {
  return (
    <ImageWithText isLeft={isLeft} src={image}>
      <div>
        <Header>
          <h3>{header}</h3>
          <p>{description}</p>
        </Header>
      </div>
      <Image isLeft={isLeft} src={image} />
    </ImageWithText>
  );
};
