/* eslint-disable arrow-parens */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselReviewCard } from 'components';
import { Carousel } from 'components';
import { getReviewsWithTags } from 'lib/api/sample';
import { withRouter } from 'react-router-dom';

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
      &__button {
        padding: 0;
        margin-left: 2.4rem;
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.gray1};
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
      gap: 1.8rem;
    }
    &__cards::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CarouselReviewContainer = ({ history }) => {
  const [reviews, setReview] = useState([]);
  const [reviewTotalCount, setReviewTotalCount] = useState(0);
  const listRef = useRef(null);
  const movingValue = 361;

  useEffect(() => {
    (async () => {
      const { data, totalNum } = await getReviewsWithTags('이동봉사과정', 1);
      setReviewTotalCount(totalNum);
      data && setReview(data.slice(0, 6));
    })();
  }, []);

  return (
    <ContainerWrap>
      <article className="container-top">
        <section className="container-top__title">
          <p className="container-top__title__number">{reviewTotalCount}</p>
          명이 TAKEUS와 함께하고 있습니다.
          <button className="container-top__title__button" onClick={() => history.push('/review')}>
            더보기
          </button>
        </section>
        <Carousel listRef={listRef} movingValue={movingValue} />
      </article>
      <article className="container-bottom">
        <div className="container-bottom__cards" ref={listRef}>
          {reviews?.length && reviews.map((review) => <CarouselReviewCard key={review._id} review={review} />)}
        </div>
      </article>
    </ContainerWrap>
  );
};

export default withRouter(CarouselReviewContainer);
