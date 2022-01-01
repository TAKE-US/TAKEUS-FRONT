import React from 'react';
import { Route } from 'react-router-dom';
import {
  DogPage,
  DogDetailPage,
  DogEnrollPage,
  DogEnrollCautionPage,
  DogEnrollConfirmPage,
} from 'pages';

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
      <Route exact path={path + '/enroll'} component={DogEnrollPage} />
      <Route path={path + '/enroll/caution'} component={DogEnrollCautionPage} />
      <Route path={path + '/enroll/confirm'} component={DogEnrollConfirmPage} />
    </>
  );
};

export default DogRouter;
