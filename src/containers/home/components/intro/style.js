import styled from 'styled-components';
import macbookframe from '../../../../assets/macbookframe.png';

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Intro = styled(Slide).attrs({
  id: 'intro',
  style: {
    background: `url('https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/11124022/374da292-a5e6-4da5-b4b5-8f6c532cf677.jpg')`,
  },
})`
  height: 300vh;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
`;

const SlideTwo = styled(Slide)``;

const Logo = styled.img.attrs(props => ({
  src:
    'https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png',
  style: {
    opacity: `${1 - (props.scroll - 100) / 500}`,
    transform: `translateX(-50%) translateY(-50%) scale(${Math.min(1, 1 - (props.scroll - 100) / 500)})`,
  },
}))`
  position: fixed;
  left: 50%;
  top: 50%;
  pointer-events: none;
`;

const DeviceContainer = styled.div.attrs(props => ({
  style: {
    opacity: `${(props.scroll - 100) / 500}`,
    transform: `translateX(-50%) translateY(-50%) scale(${Math.min(1, (props.scroll - 100) / 500)})`,
  },
}))`
  position: fixed;
  left: 50%;
  top: 50%;
  pointer-events: none;
`;

const TvContainer = styled.div`
  width: 75vw;
  height: 50vw;
  border: 5px solid #000;
  box-shadow: 2px 8px 20px 2px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  max-height: 450px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PhoneContainer = styled.div.attrs(props => ({
  style: {
    transform: `translateY(-${Math.min((props.scroll - 100) / 10, 60)}%)`,
  },
}))`
  background: url(${macbookframe});
  width: 50vw;
  height: 25vw;
  max-width: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  position: absolute;
  right: 5%;
  bottom: -65vh;
`;

export { Intro, Logo, SlideTwo, PhoneContainer, TvContainer, DeviceContainer };