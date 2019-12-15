import React from 'react';
import Home from './containers/home';
import Wrapper from './components/wrapper';

import ThemeWrapper from './theme-wrapper';

import 'babel-polyfill';
import 'whatwg-fetch';

export default () => {
  return (
    <ThemeWrapper>
      <Wrapper></Wrapper>
    </ThemeWrapper>
  );
};
