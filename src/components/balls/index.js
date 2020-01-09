import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Balls = styled.div`
  position: relative;
  margin: 100px 0px;
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
  background: rgb(67, 79, 255);
`;

const BlackBall = styled(Ball)`
  background: #a8f388;
`;

const SmallBlackBall = styled(BlackBall)`
  width: 2vh;
  height: 2vh;
  margin-left: -1vh;
`;
const SmallBlueBall = styled(Ball)`
  width: 22.5vh;
  height: 22.5vh;
`;

const MediumBlackBall = styled(BlackBall)`
  width: 25vh;
  height: 25vh;
  margin-right: -12.5vh;
  z-index: 1;
`;
const MediumBlueBall = styled(Ball)`
  width: 30vh;
  height: 30vh;
`;

const BigBlueBall = styled(Ball)`
  width: 45vh;
  height: 45vh;
  margin-right: -22.5vh;
`;

const BigBlackBall = styled(BlackBall)`
  height: 80vh;
  width: 80vh;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
`;

const BigContainer = styled(Container)`
  margin-right: -40vh;
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

const Title = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
`;

const BigTitle = styled(Title)`
  margin-left: -45vh;
`;

const MediumTitle = styled(Title)``;

const Appendixes = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 25px;
  justify-content: space-around;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    margin: 25px 0px;
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

export default () => {
  return (
    <>
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
            <MediumBlackBall />
            <MediumTitle>2021</MediumTitle>
            <MediumBlueBall />
          </MediumContainer>
        </Fade>
        <Fade bottom>
          <BigContainer>
            <BigBlueBall />
            <BigTitle>2023</BigTitle>
            <BigBlackBall />
          </BigContainer>
        </Fade>
      </Balls>
      <Appendixes>
        <Fade left>
          <Appendix>
            <AppendixBlueBall />
            <p>esports offline events</p>
          </Appendix>
        </Fade>
        <Fade right>
          <Appendix>
            <AppendixBlackBall />
            <p>G-Loot estimated revenue</p>
          </Appendix>
        </Fade>
      </Appendixes>
    </>
  );
};
