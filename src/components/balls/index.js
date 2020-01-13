import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Balls = styled.div`
  position: relative;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  @media (orientation: portrait) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const Ball = styled.div`
  border-radius: 50%;
  background: #5f5e5f;
`;

const BlackBall = styled(Ball)`
  background: linear-gradient(rgba(168, 243, 136, 0.95), rgba(168, 243, 136, 0.95)), url(../src/assets/blacklogo.svg);
  background-size: cover;
  background-position: center;
`;

const SmallBlackBall = styled(BlackBall)`
  width: 4vh;
  height: 4vh;
  margin-left: -2vh;
`;
const SmallBlueBall = styled(Ball)`
  width: 22.5vh;
  height: 22.5vh;
`;

const MediumBlackBall = styled(BlackBall)`
  width: 25vh;
  height: 25vh;
  margin-left: -12.5vh;
  z-index: 1;
`;
const MediumBlueBall = styled(Ball)`
  width: 35vh;
  height: 35vh;
`;

const BigBlueBall = styled(Ball)`
  width: 45vh;
  height: 45vh;
  margin-right: -22.5vh;
`;

const BigBlackBall = styled(BlackBall)`
  height: 90vh;
  width: 90vh;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
`;

const BigContainer = styled(Container)`
  margin-right: -66vh;
  justify-content: flex-end;
`;
const MediumContainer = styled(Container)`
  @media (orientation: portrait) {
    margin-bottom: 100px;
  }
`;
const SmallContainer = styled(Container)`
  @media (orientation: portrait) {
    margin-bottom: 100px;
  }
`;

const Title = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-weight: 900;
  margin: 0;
  transform: scale(1.2);
`;

const BigTitle = styled(Title)`
  margin-left: -45vh;
`;

const MediumTitle = styled(Title)``;

const Appendixes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      margin: 10px 0px;
    }
  }
`;

const Appendix = styled.div`
  display: flex;
  align-items: center;
  color: rgb(19, 23, 29);
  p {
    margin: 0;
    margin-left: 10px;
  }
`;

const AppendixBlueBall = styled(Ball)`
  width: 16px;
  height: 16px;
`;

const AppendixBlackBall = styled(BlackBall)`
  width: 16px;
  height: 16px;
`;

const Wrapper = styled.div`
  margin-top: 300px;
`;

const Header = styled.h2`
  color: #000;
  text-align: center;
  margin-bottom: 40px;
`;

const TopSegmentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TopSegment = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Wrapper>
      <TopSegmentContainer>
        <TopSegment>
          <Header>G-Loot takes esports online</Header>
          <Appendixes>
            <Fade left>
              <Appendix>
                <AppendixBlueBall />
                <p>Esports offline events</p>
              </Appendix>
            </Fade>
            <Fade right>
              <Appendix>
                <AppendixBlackBall />
                <p>G-Loot estimated revenue</p>
              </Appendix>
            </Fade>
          </Appendixes>
        </TopSegment>
      </TopSegmentContainer>
      <Balls>
        <Fade bottom>
          <SmallContainer>
            <SmallBlueBall />
            <Title>Today</Title>
            <SmallBlackBall />
          </SmallContainer>
        </Fade>
        <Fade bottom>
          <MediumContainer>
            <MediumBlueBall />
            <MediumTitle>2021</MediumTitle>
            <MediumBlackBall />
          </MediumContainer>
        </Fade>
        <Fade bottom>
          <BigContainer>
            <BigBlueBall />
            <BigTitle>2024</BigTitle>
            <BigBlackBall />
          </BigContainer>
        </Fade>
      </Balls>
    </Wrapper>
  );
};
