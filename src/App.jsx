import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentRouter from 'router';
import { isMobile } from 'react-device-detect';

import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

import { Header, Footer } from './components/index';
import LoginProvider from './lib/context/provider';
import { MobilePage } from 'pages';
import ReactGA from 'react-ga';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 108rem;
    margin: 0 auto;
    margin-top: -8.8rem;
  `,
};

const TRACKING_ID = 'G-ZQN8W2SDPD';

function App() {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <MobilePage />
      ) : (
        <Router>
          <LoginProvider>
            <Header />
            <Styled.ContentWrapper>
              <ContentRouter />
            </Styled.ContentWrapper>
            <Footer />
          </LoginProvider>
        </Router>
      )}
    </>
  );
}

export default App;
