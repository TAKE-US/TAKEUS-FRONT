import React from "react";
import { Route } from "react-router-dom";

import { ReviewPage, ReviewPostPage } from "pages";

const DogRouter = ({ match }) => {
  const path = match.path;
  return (
    <>
      <Route exact path={path} component={ReviewPage} />
      <Route exact path={path + "/post"} component={ReviewPostPage} />
      <Route path={path + "/post/:id"}>
        <ReviewPostPage edit={true} />
      </Route>
    </>
  );
};

export default DogRouter;
