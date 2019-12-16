import React from "react";
import { ImageWithText } from "./style";

export default ({ header, description, icon, image }) => {
  return (
    <ImageWithText>
      <div>
        <header>
          <img src="../src/assets/icons/smartphone@3x.png" />
          <h3>{header}</h3>
        </header>
        <p>{description}</p>
      </div>
      <div>
        <img className="phone" src={image} />
      </div>
    </ImageWithText>
  );
};
