import styled from 'styled-components';

const OfflineEvents = styled.div`
  color: #000;
  padding: 250px 25px;
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  footer {
    font-size: 0.8em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const LeftSegment = styled.div`
  h2 {
    font-weight: 900;
    line-height: 0.9em;
  }
  p {
    color: rgb(114, 114, 114);
  }
  footer {
    font-size: 0.6em;
    color: rgb(114, 114, 114);
  }
`;
const RightSegment = styled.div`
  margin-top: 40px;
  h3 {
    color: rgb(114, 114, 114);
    font-weight: 900;
  }
  h2 {
    color: rgb(69, 71, 255);
    font-weight: 900;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 0px;
  img {
    margin-right: 20px;
    width: 48px;
  }
  & > div {
    width: 100%;
    & > div {
      width: 75%;
      background: rgb(222, 222, 222);
      height: 12px;
      border-radius: 6px;
      &:last-child {
        margin-top: 8px;
        width: 33%;
      }
    }
  }
`;

export { OfflineEvents, Content, LeftSegment, RightSegment, PlayerContainer };
