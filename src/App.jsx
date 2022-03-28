import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentRouter from 'router';
import { isMobile } from 'react-device-detect';

import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

import { Header, Footer } from './components/index';
import LoginProvider from './lib/context/provider';
import { MobilePage } from 'pages';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 108rem;
    margin: 0 auto;
    margin-top: -8.8rem;
  `,
};

function App() {
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
