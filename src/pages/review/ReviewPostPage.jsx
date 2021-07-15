import React from "react";
import styled from "styled-components";

import { ReviewPostInfo, ReviewPrecaution } from "components";

const PageStyle = styled.div`
  margin-top: 18.7rem;
`;

const ReviewPostPage = ({ edit }) => {
  return (
    <PageStyle>
      <ReviewPrecaution edit={edit ? true : false} />
      <ReviewPostInfo edit={edit ? true : false} />
    </PageStyle>
  );
};

export default ReviewPostPage;
