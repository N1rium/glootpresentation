import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #fff;
    background: #fff;
    font-family: roboto;
  }

  body {
    overflow: hidden;
  }

  #app-container {
    width: 100%;
    height: 100%;
  }

  #app-content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

export default ({ children }) => {
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};
