/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CarouselDogCard from "../atoms/CarouselDogCard";
import leftarrow from "../../assets/img/btn_round_arrow_left_40.svg";
import rightarrow from "../../assets/img/btn_round_arrow_right_40.svg";

const ContainerWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 108rem;
  height: 38rem;
  margin: 0 18rem;
  .container-top {
    display: flex;
    justify-content: space-between;
    width: 108rem;
    height: 10rem;
    &__title {
      width: 52.3rem;
      font: ${({ theme }) => theme.font.title1};
      &__number {
        display: inline-block;
        font: "normal 900 3.6rem 'Spoqa Han Sans Neo'";
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
      <CarouselDogCard />
    </ContainerWrap>
  );
};

export default CarouselDogContainer;
