import styled from 'styled-components';

const MarketOverview = styled.div`
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150vh;
  footer {
    font-size: 0.6em;
    color: rgb(114, 114, 114);
    & > div {
      display: inline-block;
      margin: 0px 10px;
    }
  }
`;

const InnerContainer = styled.div`
  position: sticky;
  top: 10%;
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
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  @media (orientation: portrait) {
    flex-direction: column;
    & > * {
      margin: 25px 0px;
    }
    & > :nth-child(2) {
      order: 1;
    }
  }
`;

const IconContainer = styled.div`
  font-weight: 900;

  p {
    margin-top: 1.5em;
  }

  img {
    display: block;
  }

  @media (orientation: portrait) {
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

const PillarContainer = styled.div`
  opacity: 1;
  transition: all 0.25s ease-in-out;
  &.hide {
    opacity: 0;
  }
`;
const Pillars = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid rgba(0, 0, 0, 0.33);
  @media only screen and (max-width: 812px) {
    justify-content: center;
  }
`;

const Pillar = styled.div`
  width: 140px;
  max-width: 140px;
  margin: 0px 20px;
  height: ${props => props.height};
  background: #7752f8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transform-origin: bottom center;
  @media only screen and (max-width: 812px) {
    width: 20vw;
    @media (orientation: landscape) {
      width: 10vw;
    }
  }
`;

const MusicPillar = styled(Pillar).attrs(props => ({
  style: {
    transform: `scaleY(${Math.max(0, Math.min(1, (props.scroll + 50) / 50))})`,
  },
}))``;
const VideoPillar = styled(Pillar).attrs(props => ({
  style: {
    transform: `scaleY(${Math.max(0, Math.min(1, (props.scroll + 25) / 50))})`,
  },
}))``;

const GreenPillar = styled(Pillar).attrs(props => ({
  style: {
    transform: `scaleY(${Math.max(0, Math.min(1, props.scroll / 50))})`,
  },
}))`
  background: #8dfa87;
`;
const Indexes = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 812px) {
    justify-content: center;
  }
  p {
    margin: 20px;
    width: 140px;
    max-width: 140px;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    &.show {
      opacity: 1;
    }
    @media only screen and (max-width: 812px) {
      width: 20vw;
      @media (orientation: landscape) {
        width: 10vw;
      }
    }
  }
`;

export {
  MarketOverview,
  InnerContainer,
  Title,
  Description,
  IconGroup,
  IconContainer,
  PlayersContainer,
  PillarContainer,
  Pillars,
  Pillar,
  MusicPillar,
  VideoPillar,
  GreenPillar,
  Indexes,
};
