import React from "react";
import styled from "styled-components";
//components
import { ReviewCard, PaginationNav, DogFilter } from "components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
};

const ReviewPage = () => {
  return (
    <Styled.Wrapper>
      <DogFilter />
      <ReviewCard />
      <PaginationNav />
    </Styled.Wrapper>
  );
};

export default ReviewPage;
