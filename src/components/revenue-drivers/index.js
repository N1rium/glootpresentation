import React from 'react';
import { RevenueDrivers, Drivers } from './style';
import PayToEnterIcon from '../../assets/icons/musicicon.svg';

const Driver = ({ icon, header, desc }) => {
  return (
    <div>
      <img src={icon} />
      <div>{header}</div>
      <div>{desc}</div>
    </div>
  );
};

export default () => {
  return (
    <RevenueDrivers>
      <h2>Multiple revenue drivers</h2>
      <Drivers>
        <Driver icon={PayToEnterIcon} header="Pay to enter" desc="10% service fee & surplus from contests" />
        <Driver icon={PayToEnterIcon} header="Subscription" desc="$10 / month in advance" />
        <Driver icon={PayToEnterIcon} header="B2B" desc="Broadcasting, Ads, Sponsorships & Publisher revenues " />
      </Drivers>
    </RevenueDrivers>
  );
};
