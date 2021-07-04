/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styled from "styled-components";
import CarouselDogCard from "../atoms/CarouselDogCard";
import leftarrow from "../../assets/img/btn_round_arrow_left_40.svg";
import rightarrow from "../../assets/img/btn_round_arrow_right_40.svg";

const ContainerWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 108rem;
  height: 48rem;
  margin: 0 18rem;
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
      width: 10rem;
      display: flex;
      justify-content: space-between;
      &__left {
        all: unset;
        width: 4rem;
        height: 3.5rem;
      }
      &__right {
        all: unset;
        width: 4rem;
        height: 3.5rem;
      }
    }
  }
`;

const TotalSliderContainer = styled.article`
  width: 100%;
  overflow: hidden;
`;

const SliderContainer = styled.article`
  width: 100%;
  display: flex;
`;

const CarouselDogContainer = () => {
  return (
    <ContainerWrap>
      <article className='container-top'>
        <section className='container-top__title'>
          <p className='container-top__title__number'>1622</p>
          마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <div className='container-top__btns'>
          <button className='container-top__btns__left'>
            <img src={leftarrow} alt='leftarrow' />
          </button>
          <button className='container-top__btns__right'>
            <img src={rightarrow} alt='rightarrow' />
          </button>
        </div>
      </article>
      <TotalSliderContainer>
        <SliderContainer>
          <CarouselDogCard />
          <CarouselDogCard />
          <CarouselDogCard />
          <CarouselDogCard />
        </SliderContainer>
      </TotalSliderContainer>
    </ContainerWrap>
  );
};

export default CarouselDogContainer;
