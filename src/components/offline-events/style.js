import styled from 'styled-components';

const OfflineEvents = styled.div`
  color: #000;
  padding: 100px 25px;
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  footer {
    font-size: 0.8em;
  }
`;

const Content = styled.div``;

const LeftSegment = styled.div`
  div {
    position: sticky;
    top: 45%;
  }
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

  @media (orientation: landscape) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export { OfflineEvents, Content, LeftSegment, RightSegment };
