import React from "react";
import styled from "styled-components";
//components
import { ReviewCard, PaginationNav, Filter } from "components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
};

const ReviewPage = () => {
  const contents = ["최신순", "오래된순"];
  return (
    <Styled.Wrapper>
      <Filter contents={contents} />
      <ReviewCard />
      <PaginationNav />
    </Styled.Wrapper>
  );
};

export default ReviewPage;
