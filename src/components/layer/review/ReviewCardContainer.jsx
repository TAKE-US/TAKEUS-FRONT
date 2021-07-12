import React from "react";
import styled from "styled-components";
import { ReviewCard } from "components";

const Styled = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    & > * {
      margin-bottom: 2.2rem;
    }
  `,
};

const ReviewCardContainer = ({ reviews }) => {
  return (
    <Styled.Wrapper>
      {reviews?.map((review, id) => (
        <ReviewCard key={id} review={review} />
      ))}
    </Styled.Wrapper>
  );
};

export default ReviewCardContainer;
