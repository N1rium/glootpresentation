import React from 'react';
import styled from 'styled-components';

const ConsentContainer = styled.div.attrs({ className: 'consent-container' })`
  padding: 0px 20px;
  margin: 20px 0px;
  max-width: 480px;
  & > div {
    & > div {
      background: transparent !important;
      padding: 0;
    }
  }
  p {
    margin: 20px 0px;
    font-size: 0.55em;
  }
  a {
    color: #fff;
  }
  button {
    display: none;
  }
`;

export default function() {
  return (
    <ConsentContainer>
      <div>
        <div>
          <p>
            {' '}
            <span>
              We use cookies (and other similar technologies) to collect data to improve your experience on our site. By
              using our website, you’re agreeing to the collection of data as described in our{' '}
              <a href="https://company.gloot.com/privacy-policy/" target="_blank">
                Website Data Collection Policy
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </ConsentContainer>
  );
}
