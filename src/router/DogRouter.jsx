import React from "react";
import { Route } from "react-router-dom";

import {
  DogPage,
  DogDetailPage,
  DogEnrollPage,
} from "pages";

const DogRouter = ({ match }) => {
  const path = match.path;
  return (
    <>
      <Route exact path={path + '/search'} component={ DogPage } />
      <Route path={ path + '/search/:id' } component={ DogDetailPage } />
      <Route path={path + '/enroll'} component={ DogEnrollPage }/>
    </>
  );
};

export default DogRouter;
