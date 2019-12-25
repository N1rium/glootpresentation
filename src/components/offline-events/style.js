import styled from "styled-components";

const OfflineEvents = styled.div`
  color: #000;
  padding: 250px 25px;
  display: flex;
  footer {
    font-size: 0.8em;
  }
`;

const LeftSegment = styled.div`
  width: 100%;
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
  width: 80%;
  h3 {
    color: rgb(114, 114, 114);
    font-weight: 900;
  }
  h2 {
    color: rgb(69, 71, 255);
    font-weight: 900;
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

export { OfflineEvents, LeftSegment, RightSegment, PlayerContainer };
