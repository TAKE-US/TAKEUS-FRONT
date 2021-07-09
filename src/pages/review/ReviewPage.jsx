import React from "react";
import styled from "styled-components";
//components
import { ReviewCard, PaginationNav } from "components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
};

const ReviewPage = () => {
  return (
    <Styled.Wrapper>
      <ReviewCard />
      <PaginationNav />
    </Styled.Wrapper>
  );
};

export default ReviewPage;
