import styled from 'styled-components';

const RevenueDrivers = styled.div`
  color: #000;
  text-align: center;
`;

const Drivers = styled.div`
  width: 100%;
  & > div {
    display: inline-block;
    width: 33%;
    img {
      width: 120px;
    }
  }
`;

export { RevenueDrivers, Drivers };
