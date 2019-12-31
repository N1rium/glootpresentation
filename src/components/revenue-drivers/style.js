import styled from 'styled-components';

const RevenueDrivers = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #000;
  padding: 0px 25px;
  p {
    color: rgb(114, 114, 114);
  }
  @media only screen and (min-width: 769px) {
    text-align: center;
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Drivers = styled.div`
  width: 100%;
  img {
    width: 80px;
  }
  & > div {
    margin-top: 40px;
    text-align: center;
    color: rgb(114, 114, 114);
    .header {
      font-weight: bold;
      margin: 10px 0px;
    }
  }
  @media only screen and (min-width: 769px) {
    & > div {
      display: inline-block;
      width: 33%;
    }
  }
`;

export { RevenueDrivers, Drivers };
