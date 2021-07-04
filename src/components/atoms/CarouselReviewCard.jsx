import React from "react";
import styled from "styled-components";

const CardWrap = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Card = styled.section`
  width: 34.6rem;
  height: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 25.5rem;
    height: 25.5rem;
    border-radius: 1rem;
  }
`;

const CarouselReviewCard = () => {
  return (
    <CardWrap>
      <Card>Review 입니다</Card>
      <Card>Review 입니다</Card>
      <Card>Review 입니다</Card>
    </CardWrap>
  );
};

export default CarouselReviewCard;
