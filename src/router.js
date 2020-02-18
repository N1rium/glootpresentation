import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from './components/home';
import LoginContainer from './components/login';

const PrivateRoute = props => {
  console.warn(localStorage.getItem('token'));
  if (localStorage.getItem('token') != 'token') return <Redirect to="/login" />;
  return <Route {...props} />;
};

const Router = () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomeContainer} />
    <Route exact path="/login" component={LoginContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
