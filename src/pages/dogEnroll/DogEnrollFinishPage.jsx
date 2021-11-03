import React from 'react';
import styled from 'styled-components';

import { EnrollFinish } from 'components';

const PageStyle = styled.div`
  margin-top: 18.7rem;
  margin-bottom: 15.5rem;
`;

const DogEnrollFinishPage = () => {
  return (
    <PageStyle className="dog-enrollcaution-page">
      <EnrollFinish />
    </PageStyle>
  );
};

export default DogEnrollFinishPage;
