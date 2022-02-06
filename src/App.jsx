import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentRouter from 'router';

import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

import { Header, Footer } from './components/index';
import LoginProvider from './lib/context/provider';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 1080px;
    margin: 0 auto;
    margin-top: -8.8rem;
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <LoginProvider>
          <Header />
          <Styled.ContentWrapper>
            <ContentRouter />
          </Styled.ContentWrapper>
          <Footer />
        </LoginProvider>
      </Router>
    </>
  );
}

export default App;
