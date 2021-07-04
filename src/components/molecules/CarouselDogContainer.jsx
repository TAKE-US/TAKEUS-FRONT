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
  height: 30rem;
  margin: 0 18rem;
  .container-top {
    display: flex;
    justify-content: space-between;
    width: 108rem;
    height: 10rem;
    &__title {
      width: 52.3rem;
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      width: 10.4rem;
    }
  }
`;

const CarouselDogContainer = () => {
  return (
    <ContainerWrap>
      <article className='container-top'>
        <section className='container-top__title'>
          1622마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <div className='container-top__btns'>
          <img src={leftarrow} alt='leftarrow' />
          <img src={rightarrow} alt='rightarrow' />
        </div>
      </article>
      <CarouselDogCard />
    </ContainerWrap>
  );
};

export default CarouselDogContainer;
