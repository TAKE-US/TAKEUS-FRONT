import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { CarouselReviewCard } from "components";
import { Carousel } from "components";
import { getReviewsWithTags } from "lib/api/sample";

const ContainerWrap = styled.article`
  height: 100%;
  .container-top {
    display: flex;
    justify-content: space-between;
    height: 6rem;
    &__title {
      font: ${({ theme }) => theme.font.title1};
      &__number {
        display: inline-block;
        font-size: 3.2rem;
      }
    }
  }

  /* slide-container */
  .container-bottom {
    width: 100%;
    display: flex;
    &__cards {
      display: flex;
      overflow-y: hidden;
      & > * {
        margin-right: 1.8rem;
      }
    }
    &__cards::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CarouselReviewContainer = () => {
  const [review, setReview] = useState([]);
  const listRef = useRef(null);
  const movingValue = 272;

  useEffect(() => {
    (async () => {
      const data = await getReviewsWithTags();
      data && setReview(data.slice(0, 9));
    })();
  }, []);
  console.log(review);

  return (
    <ContainerWrap>
      <article className="container-top">
        <section className="container-top__title">
          <p className="container-top__title__number">1622</p>
          명이 TAKEUS와 함께하고 있습니다.
        </section>
        <Carousel listRef={listRef} movingValue={movingValue} />
      </article>
      <article className="container-bottom">
        <div className="container-bottom__cards" ref={listRef}>
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
        </div>
      </article>
    </ContainerWrap>
  );
};

export default CarouselReviewContainer;
