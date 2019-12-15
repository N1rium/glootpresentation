import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'containers/home';

const PrivateRoute = props => {
  return <Route {...props} />;
};

const Router = () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomeContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
