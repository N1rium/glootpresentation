import styled from 'styled-components';

const OfflineEvents = styled.div`
  display: flex;
  justify-content: space-around;
  color: #000;
`;

const LeftSegment = styled.div``;
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
  }
  & > div {
    & > div {
      background: rgb(222, 222, 222);
      width: 25vw;
      height: 32px;
      border-radius: 6px;
      &:last-child {
        margin-top: 15px;
        width: 8vw;
      }
    }
  }
`;

export { OfflineEvents, LeftSegment, RightSegment, PlayerContainer };
