import React from 'react';
import Home from './components/home';
import history from './history';
import { Router } from 'react-router-dom';
import Routes from './router';

import ThemeWrapper from './theme-wrapper';

import 'babel-polyfill';
import 'whatwg-fetch';

export default () => {
  return (
    <ThemeWrapper>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeWrapper>
  );
};
