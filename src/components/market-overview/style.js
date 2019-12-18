import styled from 'styled-components';

const MarketOverview = styled.div`
  color: #000;
  text-align: center;
  margin-top: -120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 25px;
  footer {
    & > div {
      display: inline-block;
      margin: 0px 10px;
    }
  }
`;

const Title = styled.h2``;
const Description = styled.p`
  color: rgb(114, 114, 114);
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  margin: 0 80px;
  font-weight: 900;
  @media only screen and (max-width: 768px) {
    &.games {
      order: 1;
      img {
        transform: scale(1.5);
      }
    }
    &.music {
      img {
        transform: scale(0.8);
      }
    }
  }
`;

const PlayersContainer = styled.div`
  img {
    width: 128px;
  }
`;

export { MarketOverview, Title, Description, IconGroup, IconContainer, PlayersContainer };
