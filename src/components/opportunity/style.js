import styled from 'styled-components';
import GlootLogo from 'assets/gloot-logo.png';

const Opportunity = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;
  color: #000;
`;

const GrayBall = styled.div`
  display: inline-block;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  /* transition: all 0.5s ease-in-out; */
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
  /* transition: all 0.5s ease-in-out; */

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

const RightTextContainer = styled.div`
  position: absolute;
  right: 0;
  top: 25vh;
  max-width: 50vw;
`;
const LeftTextContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100vh;
  max-width: 50vw;
`;

export { Opportunity, GrayBall, GreenBall, Icon, LastInfoContainer, RightTextContainer, LeftTextContainer };
