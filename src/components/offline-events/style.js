import styled from 'styled-components';

const OfflineEvents = styled.div`
  color: #000;
  padding: 0px 25px;
`;

const LeftSegment = styled.div`
  p {
    color: rgb(114, 114, 114);
  }
`;
const RightSegment = styled.div`
  h2 {
    color: rgb(69, 71, 255);
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  img {
    margin-right: 20px;
    width: 64px;
  }
  & > div {
    width: 100%;
    & > div {
      width: 75%;
      background: rgb(222, 222, 222);
      height: 16px;
      border-radius: 6px;
      &:last-child {
        margin-top: 8px;
        width: 33%;
      }
    }
  }
`;

export { OfflineEvents, LeftSegment, RightSegment, PlayerContainer };
