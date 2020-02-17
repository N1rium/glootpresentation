import React from 'react';
import styled from 'styled-components';
import GlootLogo from '../../assets/gloot-logo.svg';
import Patrik from '../../assets/patrik.png';
import LinkedIn from '../../assets/linkedin.png';
import Fade from 'react-reveal/Fade';

const Footer = styled.div`
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
    url(https://res.cloudinary.com/gloot/image/upload/q_30/v1581974163/gloot%20presentation/employees_1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 0px;
  @media only screen and (min-width: 769px) {
    border-width: 30px;
  }
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  width: 128px;
  margin: 20px 0px;
  @media only screen and (max-width: 1024px) {
    width: 64px;
  }
`;

const Title = styled.h3``;

const TitleContainer = styled.div`
  text-align: center;
`;

const ContactContainer = styled.div`
  text-align: center;
`;
const Image = styled.img.attrs({ src: Patrik })`
  max-width: 300px;
  margin: 20px 0px;
`;
const Name = styled.div`
  font-weight: 900;
  font-size: 1.2em;
`;
const JobTitle = styled.div`
  color: #07fe7f;
  font-size: 0.8em;
  margin-bottom: 40px;
`;

const Phone = styled.a.attrs({ href: 'tel:0046739632175' })`
  color: #fff;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  &:hover {
    opacity: 0.5;
  }
`;

const Email = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
`;

const ContactInfo = styled.div``;
const SocialLinkedIn = styled.img.attrs({ src: LinkedIn })`
  width: 48px;
  margin: 20px 0px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  &:hover {
    opacity: 0.5;
  }
`;

export default ({}) => {
  const email = email => {
    window.location.href = `mailto:${email}`;
  };
  const linkedIn = () => {
    window.open('https://www.linkedin.com/in/patrik-nybladh-4645833b', '_blank');
  };
  return (
    <Footer>
      <Fade>
        <TitleContainer>
          <Logo />
          <Title>Contact</Title>
        </TitleContainer>
        <ContactContainer>
          <Image />
          <ContactInfo>
            <Name>Patrik Nybladh</Name>
            <JobTitle>Chief Executive Officer</JobTitle>
            <Phone>+46 (0)739 63 21 75</Phone>
            <Email onClick={() => email('partrik@gloot.com')}>patrik@gloot.com</Email>
            <SocialLinkedIn onClick={linkedIn} />
          </ContactInfo>
        </ContactContainer>
      </Fade>
    </Footer>
  );
};
