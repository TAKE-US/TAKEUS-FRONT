import React from "react";
import styled from "styled-components";
import { ReviewCard } from "components";
import { useHistory } from "react-router";
//api
import { deleteReview } from "lib/api/sample";

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

const ReviewCardContainer = ({ reviews, setReviews }) => {
  const history = useHistory();
  const editHandler = (e, id) => {
    e.stopPropagation();
    history.push(`/review/post/${id}`);
  };
  const deleteHandler = async (e, id) => {
    e.stopPropagation();
    try {
      await deleteReview(id);
    } catch {
      return;
    }
    setReviews(reviews.filter(review => review._id !== id));
  };

  return (
    <Styled.Wrapper>
      {reviews?.map((review, id) => (
        <ReviewCard key={id} review={review} editHandler={editHandler} deleteHandler={deleteHandler} />
      ))}
    </Styled.Wrapper>
  );
};

export default ReviewCardContainer;
