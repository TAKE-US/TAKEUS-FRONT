import React from 'react';
import { Route } from 'react-router-dom';
import { DogPage, DogDetailPage, DogEnrollPage, DogEnrollCautionPage } from 'pages';

const DogRouter = ({ match }) => {
  const path = match.path;
  return (
    <>
      <Route exact path={path + '/search'} component={DogPage} />
      <Route path={path + '/search/airport'} component={DogPage} />
      <Route exact path={path + '/search/:id'} component={DogDetailPage} />
      <Route path={path + '/search/:id/edit'}>
        <DogEnrollPage edit={true} />
      </Route>
      <Route path={path + '/enroll'} component={DogEnrollPage} />
      <Route path={path + '/enrollcaution'} component={DogEnrollCautionPage} />
    </>
  );
};

export default DogRouter;
