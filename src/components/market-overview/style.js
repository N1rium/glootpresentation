import styled from 'styled-components';

const MarketOverview = styled.div`
  color: #000;
  text-align: center;
  margin-top: -120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2``;
const Description = styled.p`
  color: rgb(114, 114, 114);
  max-width: 50%;
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
