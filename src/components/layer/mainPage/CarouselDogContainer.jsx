/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import styled from "styled-components";
import CarouselDogCard from "../../atoms/CarouselDogCard";
import rightarrow from "../../../assets/img/btn_round_arrow_right_40.svg";
import leftarrow from "../../../assets/img/btn_round_arrow_left_40.svg";

const ContainerWrap = styled.article`
  display: flex;
  flex-direction: column;
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
      width: 10rem;
      display: flex;
      justify-content: space-between;
      &__left + &__right {
        all: unset;
        width: 4rem;
        height: 3.5rem;
        position: absolute;
        top: 50%;
        width: 4rem;
        height: 3.5rem;
      }
    }
  }

  /* slide-container */
  .container-bottom {
    width: 100%;
    display: flex;
    max-width: 120rem;
    overflow-y: auto;
    /* items-container */
    &__cards {
      display: flex;
      overflow-y: hidden;
    }
    &__cards::-webkit-scrollbar {
      display: none;
    }
  }
  .container-bottom::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselDogContainer = () => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 268,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -268,
        behavior: "smooth",
      });
    }
  };

  const data = dogs;

  return (
    <ContainerWrap>
      <article className='container-top'>
        <section className='container-top__title'>
          <p className='container-top__title__number'>1622</p>
          마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <div className='container-top__btns'>
          <div className='container-top__btns__left' onClick={scrollLeft}>
            <img src={leftarrow} alt='leftarrow' />
          </div>
          <div className='container-top__btns__right' onClick={scrollRight}>
            <img src={rightarrow} alt='rightarrow' />
          </div>
        </div>
      </article>
      <article className='container-bottom'>
        <div className='container-bottom__cards' ref={listRef}>
          {data.length &&
            data.map((item, i) => (
              <CarouselDogCard key={item.id} item={item} />
            ))}
        </div>
      </article>
    </ContainerWrap>
  );
};

// mock data
const dogs = [
  {
    id: 0,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 1,
    name: "강아지",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 2,
    name: "강강강",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 3,
    name: "낭낭낭",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 4,
    name: "왈왈왈",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 5,
    name: "하하하",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 6,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 7,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 8,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
];

export default CarouselDogContainer;
