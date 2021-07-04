import React from "react";
import styled from "styled-components";
import leftarrow from "../../assets/img/btn_round_arrow_left_40.svg";
import rightarrow from "../../assets/img/btn_round_arrow_right_40.svg";
import CarouselReviewCard from "../atoms/CarouselReviewCard";

const ContainerWrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 108rem;
  height: 48rem;
  .container-top {
    display: flex;
    justify-content: space-between;
    width: 108rem;
    height: 6rem;
    &__title {
      width: 52.3rem;
      font: ${({ theme }) => theme.font.title1};
      &__number {
        display: inline-block;
        font-size: 3.2rem;
      }
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      width: 10.4rem;
      &__left {
        width: 4rem;
        height: 4rem;
      }
      &__right {
        width: 4rem;
        height: 4rem;
      }
    }
  }
  .container-bottom {
    display: flex;
    justify-content: space-between;
    width: 108rem;
    height: 10rem;
  }
`;

const CarouselReviewContainer = () => {
  return (
    <ContainerWrap>
      <article className='container-top'>
        <section className='container-top__title'>
          <p className='container-top__title__number'>1622</p>
          마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <div className='container-top__btns'>
          <img
            className='container-top__btns__left'
            src={leftarrow}
            alt='leftarrow'
          />
          <img
            className='container-top__btns__right'
            src={rightarrow}
            alt='rightarrow'
          />
        </div>
      </article>
      <article className='container-bottom'>
        <CarouselReviewCard />
        <CarouselReviewCard />
        <CarouselReviewCard />
      </article>
    </ContainerWrap>
  );
};

export default CarouselReviewContainer;
