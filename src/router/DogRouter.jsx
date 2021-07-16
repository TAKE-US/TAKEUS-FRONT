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
      <Route path={ path + '/search' } exact>
        <DogPage />
      </Route>
      <Route path={ path + '/search/:id' }>
        <DogDetailPage />
      </Route>
      <Route path={ path+ '/enroll' }>
        <DogEnrollPage />
      </Route>
    </>
  );
};

export default DogRouter;
