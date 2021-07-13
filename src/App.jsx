import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import store from "redux/store";
import { setDogs } from "redux/actions";

import { Header, Footer } from "./components/index";
import {
  LoginPage,
  DogPage,
  InfoPage,
  AboutUsPage,
  MainPage,
  DogDetailPage,
  DogEnrollPage,
  ReviewPage,
  ReviewPostPage,
  MyPage,
} from "./pages";

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
              <AboutUsPage />
            </Route>
            <Route path="/review" exact>
              <ReviewPage />
            </Route>
            <Route path="/review/post" exact>
              <ReviewPostPage />
            </Route>
            <Route path="/mypage" exact>
              <MyPage />
            </Route>
          </Switch>
        </Styled.ContentWrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;
