import React from 'react';
import Home from './components/home';

import ThemeWrapper from './theme-wrapper';

import 'babel-polyfill';
import 'whatwg-fetch';

export default () => {
  return (
    <ThemeWrapper>
      <Home />
    </ThemeWrapper>
  );
};
