import React from 'react';
import { RevenueDrivers, Drivers, PlusSign } from './style';
import PayToEnterIcon from '../../assets/paytoenter.png';
import B2BIcon from '../../assets/sponsorship.png';
import SubscriptionIcon from '../../assets/subscription.png';
import Fade from 'react-reveal/Fade';

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
      <Fade bottom>
        <div className="title">
          <h2>Multiple revenue drivers</h2>
          <h3>Focus on revenue from the players</h3>
        </div>
      </Fade>
      <Fade bottom>
        <Drivers>
          <Driver icon={PayToEnterIcon} header="Pay to enter" desc="10% service fee & surplus from contests" />
          <Driver icon={SubscriptionIcon} header="Premium Service" desc="$10 / month in advance" />
          <Driver icon={B2BIcon} header="Broadcasting, Ads, Sponsorships & Publisher revenues" />
        </Drivers>
      </Fade>
    </RevenueDrivers>
  );
};
