import React from "react";
import styled from "styled-components";
//components
import { ReviewSearch } from "components";

const Styled = {
  Wrapper: styled.div`
    /* margin-top: 14rem; */
  `,
};

const ReviewPage = () => {
  return (
    <Styled.Wrapper>
      <ReviewSearch />
    </Styled.Wrapper>
  );
};

export default ReviewPage;
