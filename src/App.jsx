import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Header, Footer } from "./components";
import {
  LoginPage,
  DogPage,
  InfoPage,
  ContactPage,
  MainPage,
  DogDetailPage,
  DogEnrollPage
} from "./pages";
import styled from 'styled-components';

const Styled = {
  ContentWrapper: styled.main`
    max-width: 1078px;
    margin: 0 auto;
    padding: 0 180px;
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
            <Route path="/dog" exact>
              <DogPage />
            </Route>
            <Route path="/dog/enroll" exact>
              <DogEnrollPage />
            </Route>
            <Route path="/dog/:id" exact>
              <DogDetailPage />
            </Route>
            <Route path="/info" exact>
              <InfoPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </Styled.ContentWrapper>
        <Footer />
      </Router>

    </>
  );
}

export default App;
