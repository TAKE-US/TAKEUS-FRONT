import React from 'react';
import styled from 'styled-components';

import { EnrollConfirm } from 'components';

const PageStyle = styled.div`
  margin-top: 18.7rem;
  margin-bottom: 15.5rem;
`;

const DogEnrollConfirmPage = () => {
  return (
    <PageStyle className="dog-enrollcaution-page">
      <EnrollConfirm />
    </PageStyle>
  );
};

export default DogEnrollConfirmPage;
