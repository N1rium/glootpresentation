import styled from 'styled-components';

const RevenueDrivers = styled.div`
  margin: 250px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #000;
  padding: 0px 25px;
  p {
    color: rgb(114, 114, 114);
  }
  @media (orientation: landscape) {
    text-align: center;
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Drivers = styled.div`
  img {
    width: 45%;
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
  @media (orientation: landscape) {
    & > div {
      display: inline-block;
      width: 33%;
    }
  }
`;

export { RevenueDrivers, Drivers };
