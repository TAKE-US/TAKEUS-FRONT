import React from "react";
import { Route, Switch } from "react-router-dom";
import DogRouter from "./DogRouter";
import ReviewRouter from "./ReviewRouter";

import {
  LoginPage,
  InfoPage,
  AboutUsPage,
  MainPage,
  MyPage,
  KakaoPage,
} from "pages";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/dog" component={DogRouter} />
        <Route path="/review" component={ReviewRouter} />
        <Route path="/oauth/callback/kakao" component={KakaoPage}></Route>
      </Switch>
    </>
  );
};

export default Router;
