import styled from 'styled-components';

const ImageWithText = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  min-height: 50vh;
  background: #000;
  border: 15px solid rgb(17, 17, 17);
  box-shadow: 0px -9px 28px -8px rgba(0, 0, 0, 1);
  padding: 40px 25px;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isLeft ? 'flex-end' : 'flex-start')}
  background-color: #000;
  background-image: ${props => `url(${props.src})`};
  background-attachment: fixed;
  background-size: contain;
  background-position: ${props => (props.isLeft ? '-50vw center' : '50vw center')};
  background-repeat: no-repeat;

  @media only screen and (min-width: 769px) {
    border-width: 30px;
  }

  @media (orientation: portrait) {
    align-items: flex-start;
    background-position: 50% 75%;
    background-attachment: initial;
  }

  img {
    width: 0;
  }
`;

const Header = styled.div`
  max-width: 100%;
  p {
    color: rgb(170, 170, 170);
  }

  @media (orientation: landscape) {
    max-width: 40vw;
  }
`;

export { ImageWithText, Header };
