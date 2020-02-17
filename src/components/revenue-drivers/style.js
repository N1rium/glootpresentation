import styled from 'styled-components';

const RevenueDrivers = styled.div`
  margin: 250px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  padding: 0px 25px;
  .title {
    margin: 40px 0px;
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
  display: flex;
  flex-direction: column;
  img {
    width: 45%;
  }
  & > div {
    margin-top: 40px;
    text-align: center;
    .header {
      font-weight: bold;
      margin: 10px 0px;
    }
  }
  @media (orientation: landscape) {
    flex-direction: row;
    & > div {
      display: inline-block;
      width: 33%;
    }
  }
`;

const PlusSign = styled.div`
  font-size: 1.2em;
  height: 140px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 64px;
  }
`;

export { RevenueDrivers, Drivers, PlusSign };
