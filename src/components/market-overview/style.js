import styled from 'styled-components';

const MarketOverview = styled.div`
  color: #000;
  text-align: center;
`;

const Title = styled.h2``;
const Description = styled.p`
  color: rgb(114, 114, 114);
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  margin: 0 40px;
`;

const PlayersContainer = styled.div`
  img {
    width: 128px;
  }
`;

export { MarketOverview, Title, Description, IconGroup, IconContainer, PlayersContainer };
