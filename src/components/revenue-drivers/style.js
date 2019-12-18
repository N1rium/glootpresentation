import styled from 'styled-components';

const RevenueDrivers = styled.div`
  color: #000;
  padding: 0px 25px;
`;

const Drivers = styled.div`
  width: 100%;
  img {
    width: 120px;
  }
  & > div {
    text-align: center;
  }
  @media only screen and (min-width: 769px) {
    & > div {
      display: inline-block;
      width: 33%;
    }
  }
`;

export { RevenueDrivers, Drivers };
