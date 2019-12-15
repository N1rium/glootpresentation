import styled from 'styled-components';
import GlootLogo from 'assets/gloot-logo.png';

const Opportunity = styled.div`
  width: 100vw;
  height: 400vh;
  background: url('https://cdn.shopify.com/s/files/1/0070/6661/5861/files/Featured_product_backgroud_image_1800x.jpg?v=1552502823');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const GrayBall = styled.div`
  display: inline-block;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
  div {
    background: #5f5e5f;
    border-radius: 50%;
    width: 100%;
    padding-bottom: 100%;
  }
`;

const GreenBall = styled.div`
  display: inline-block;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;

  div {
    background: #8dfa87;
    border-radius: 50%;
    width: 100%;
    padding-bottom: 100%;
  }
`;

const Icon = styled.img.attrs({ src: GlootLogo })`
  position: sticky;
  top: 10px;
  left: 10px;
  width: 10vw;
  max-width: 64px;
`;

const LastInfoContainer = styled.div`
  position: sticky;
  top: calc(100vh - 10px);
  transform: translateY(-100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.25s ease-in-out;
`;

export { Opportunity, GrayBall, GreenBall, Icon, LastInfoContainer };
