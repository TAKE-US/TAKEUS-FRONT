import React from "react";
import { Route } from "react-router-dom";

import {
  ReviewPage,
  ReviewPostPage
} from "pages";

const DogRouter = ({ match }) => {
  const path = match.path;
  return (
    <>
      <Route exact path={ path + '/review' } component={ ReviewPage } />
      <Route exact path={path + '/review/post'} component={ ReviewPostPage } />
      <Route exact path={path + '/review/post/:id'}>
        <ReviewPostPage edit/>
      </Route>
      
    </>
  );
};

export default DogRouter;
