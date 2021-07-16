import React from "react";
import { Route, Switch } from "react-router-dom";
import DogRouter from './DogRouter';
import ReviewRouter from './ReviewRouter';

import {
  LoginPage,
  InfoPage,
  AboutUsPage,
  MainPage,
  MyPage,
} from "pages";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/info" component={ InfoPage } />
        <Route exact path="/about" component={ AboutUsPage } />
        <Route exact path="/mypage" component={ MyPage } />
        
        <Route path="/dog" component={ DogRouter } />
        <Route exact path="/review" compoennt={ ReviewRouter } />
      </Switch>
    </>
  );
};

export default Router;
