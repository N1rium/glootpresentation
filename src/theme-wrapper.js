import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    font-size: 1em;
  }

  @media only screen and (min-width: 1024px) {
    body {
      font-size: 1.5em;
    }
  }

  @media only screen and (min-width: 1200px) {
    body {
      font-size: 2em;
    }
  }

  h2, h3 {
    margin: 0;
  }

  h2 {
    font-size: 2.5em;
    line-height: 1em;
  }

  h3 {
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
  }

  #app-container {
    width: 100%;
    height: 100%;
  }

  #app-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .scaleIn {
    animation: scaleIn 1s ease-in-out;
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
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
