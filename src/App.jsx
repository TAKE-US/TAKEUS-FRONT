import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContentRouter from 'router';

import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import store from "redux/store";
import { setDogs } from "redux/actions";

import { Header, Footer } from "./components/index";

window.store = store;
window.setDogs = setDogs;

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
        <Header />
        <Styled.ContentWrapper>
          <ContentRouter />
        </Styled.ContentWrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;
