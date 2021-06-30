import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components";
import {
  VolunteerPage,
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
          <Route path="/dog/:id" exact>
            <DogDetailPage />
          </Route>
          <Route path="/info" exact>
            <InfoPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/volunteer" exact>
            <VolunteerPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
