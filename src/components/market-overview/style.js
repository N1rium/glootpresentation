import styled from 'styled-components';

const MarketOverview = styled.div`
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 25px;
  footer {
    font-size: 0.6em;
    color: rgb(114, 114, 114);
    & > div {
      display: inline-block;
      margin: 0px 10px;
    }
  }
`;

const Title = styled.h2`
  font-weight: 900;
`;
const Description = styled.p`
  margin: 0.8em 0 3em;
  color: rgb(114, 114, 114);
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  margin: 0 120px;
  font-weight: 900;

  p {
    margin-top: 1.5em;
  }

  img {
    display: block;
  }

  @media only screen and (min-width: 768px) {
    &.music,
    &.video {
      p {
        font-size: 0.8em;
      }
      img {
        transform: scale(1.8);
      }
    }
    &.games {
      order: 1;

      img {
        transform: scale(1.5);
      }
    }
  }
`;

const PlayersContainer = styled.div`
  margin: 40px 0px;
  h2 {
    font-weight: 900;
  }

  p {
    margin: 0;
    color: rgb(114, 114, 114);
  }
`;

export { MarketOverview, Title, Description, IconGroup, IconContainer, PlayersContainer };
