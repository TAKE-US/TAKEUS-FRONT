import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Header, Footer } from "./components/index";
import {
  LoginPage,
  DogPage,
  InfoPage,
  AboutPage,
  MainPage,
  DogDetailPage,
  DogEnrollPage,
  ReviewPage,
} from "./pages";
import styled from 'styled-components';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 1080px;
    margin: 0 auto;
    margin-top: -14rem;
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Styled.ContentWrapper>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/dogSearch" exact>
              <DogPage />
            </Route>
            <Route path="/dogEnroll" exact>
              <DogEnrollPage />
            </Route>
            <Route path="/dogSearch/:id" exact>
              <DogDetailPage />
            </Route>
            <Route path="/info" exact>
              <InfoPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/review" exact>
              <ReviewPage />
            </Route>
          </Switch>
        </Styled.ContentWrapper>
        <Footer />
      </Router>

    </>
  );
}

export default App;
