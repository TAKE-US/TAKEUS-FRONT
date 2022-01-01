import React from 'react';
import styled from 'styled-components';

import { EnrollCaution } from 'components';

const PageStyle = styled.div`
  margin-top: 18.7rem;
  margin-bottom: 8rem;
`;

const DogEnrollCautionPage = () => {
  return (
    <PageStyle className="dog-enrollcaution-page">
      <EnrollCaution />
    </PageStyle>
  );
};

export default DogEnrollCautionPage;
