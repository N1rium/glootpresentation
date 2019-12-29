import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #000;
  padding: 0px 25px;
  p {
    color: rgb(114, 114, 114);
  }
  .opportunity,
  .missing {
    display: flex;
    flex-direction: column;
  }
  .opportunity {
    text-align: right;
    margin-bottom: 40px;
  }
  .ball-container {
    display: flex;
    align-items: center;
    &.right {
      justify-content: flex-end;
    }
    margin: 20px 0px;
  }
`;

const Ball = styled.div`
  border-radius: 50%;
  width: ${props => (props.small ? '16px' : '200px')};
  height: ${props => (props.small ? '16px' : '200px')};
  z-index: ${props => (props.small ? '1' : '0')};
`;

const BlueBall = styled(Ball)`
  background: rgb(67, 79, 255);
  margin-right: ${props => (props.small ? '-8px' : '0px')};
`;

const BlackBall = styled(Ball)`
  background: #000;
  margin-left: ${props => (props.small ? '-8px' : '0px')};
`;

const Appendix = styled.div`
  & > * {
    display: inline-block;
    vertical-align: middle;
  }
  color: rgb(19, 23, 29);
`;

const TinyBall = styled.div`
  border-radius: 50%;
  background: ${props => (props.blue ? 'rgb(67, 79, 255)' : '#000')};
  width: 10px;
  height: 10px;
  margin-right: 10px;
`;

export default () => {
  return (
    <Wrapper>
      <div className="opportunity">
        <div>
          <h2>Opportunity</h2>
          <p>Top 300 esports professionals earn more than the rest of the 2.3 billion players combined.</p>
        </div>
        <div className="ball-container right">
          <BlueBall />
          <BlackBall small />
        </div>
      </div>
      <div className="missing">
        <div>
          <h2>G-Loot is the missing component</h2>
          <p>Anyone, anywhere in the world can now earn money from playing the games they already play & love.</p>
          <div className="ball-container">
            <BlueBall small />
            <BlackBall />
          </div>
        </div>
      </div>
      <div>
        <Appendix>
          <TinyBall blue />
          <div>esports offline events</div>
        </Appendix>
        <Appendix>
          <TinyBall />
          <div>G-Loot estimated revenue</div>
        </Appendix>
      </div>
    </Wrapper>
  );
};
