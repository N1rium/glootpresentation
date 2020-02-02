import React from 'react';
import styled from 'styled-components';
import GlootLogo from '../../assets/gloot-logo.svg';
import Fade from 'react-reveal/Fade';

const Employees = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-top: 15px solid rgb(17, 17, 17);
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(https://res.cloudinary.com/gloot/image/upload/v1578925078/gloot%20presentation/employees.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (min-width: 769px) {
    border-width: 30px;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  width: 128px;
  margin: 20px 0px;
  @media only screen and (max-width: 1024px) {
    width: 64px;
  }
`;

const Title = styled.h2``;
const Number = styled.div`
  font-size: 4em;
  font-weight: 900;
  color: #8efa87;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

export default ({}) => {
  return (
    <Employees>
      <Fade>
        <TitleContainer>
          <Logo />
          <Title>G-Loot employees</Title>
        </TitleContainer>
      </Fade>
      <NumberContainer>
        <Fade>
          <div>
            <Number>40</Number>
            <p>January 2019</p>
          </div>
        </Fade>
        <Fade delay={500}>
          <div>
            <Number>+120</Number>
            <p>January 2020</p>
          </div>
        </Fade>
      </NumberContainer>
    </Employees>
  );
};
