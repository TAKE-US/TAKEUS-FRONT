import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components";
import {
  LoginPage,
  DogPage,
  InfoPage,
  ContactPage,
  MainPage,
  DogDetailPage,
  DogEnrollPage
} from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
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
          <Route path="/dog/detail" exact>
            {/* dog/:id 로 돌려놔야함 */}
            <DogDetailPage />
          </Route>
          <Route path="/info" exact>
            <InfoPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
