import React from 'react';
import { RevenueDrivers, Drivers } from './style';
import PayToEnterIcon from '../../assets/icons/pay2enter.svg';
import B2BIcon from '../../assets/icons/b2b.svg';
import SubscriptionIcon from '../../assets/icons/subscription.svg';

const Driver = ({ icon, header, desc }) => {
  return (
    <div>
      <img src={icon} />
      <div className="header">{header}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default () => {
  return (
    <RevenueDrivers>
      <h2>Multiple revenue drivers</h2>
      <p>The gaming industry generates double the revenue than music & film do combined.</p>
      <Drivers>
        <Driver icon={PayToEnterIcon} header="Pay to enter" desc="10% service fee & surplus from contests" />
        <Driver icon={SubscriptionIcon} header="Subscription" desc="$10 / month in advance" />
        <Driver icon={B2BIcon} header="B2B" desc="Broadcasting, Ads, Sponsorships & Publisher revenues " />
      </Drivers>
    </RevenueDrivers>
  );
};
