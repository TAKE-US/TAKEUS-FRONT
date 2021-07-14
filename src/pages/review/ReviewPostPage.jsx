import React from 'react';
import styled from 'styled-components';

import { ReviewPostInfo, ReviewPrecaution } from 'components';

const PageStyle = styled.div`
  margin-top: 18.7rem;
`;

const ReviewPostPage = () => {

  return (
    <PageStyle>
      <ReviewPrecaution />
      <ReviewPostInfo />
    </PageStyle>
  );
};

export default ReviewPostPage;
