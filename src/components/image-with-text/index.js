import React from 'react';
import { ImageWithText } from './style';

export default ({ header, description, icon, image }) => {
  return (
    <ImageWithText>
      <div>
        <header>
          <img />
          <h3>{header}</h3>
        </header>
        <p>{description}</p>
      </div>
      <div>
        <img />
      </div>
    </ImageWithText>
  );
};
