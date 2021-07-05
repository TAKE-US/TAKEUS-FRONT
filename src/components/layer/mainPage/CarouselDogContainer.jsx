/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CarouselDogCard from "../../atoms/CarouselDogCard";
import CarouselButton from "../../atoms/CarouselButton";
import leftarrow from "../../../assets/img/btn_round_arrow_left_40.svg";
import rightarrow from "../../../assets/img/btn_round_arrow_right_40.svg";

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

const SliderContainer = styled.article`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const CarouselDogContainer = () => {
  const totalItems = 8;
  const [current, setCurrent] = useState(0);
  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  const moveNext = () => {
    if (!isMoving.current) {
      if (current === totalItems - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  const movePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(totalItems - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const { id, ...rest } = dogs;

  const CardList = dogs.map((dog, index, dogs) => {
    let slicedDogs;
    if (index <= dogs.length - 4) {
      slicedDogs = dogs.slice(index, index + 4);
    } else {
      slicedDogs = dogs
        .slice(index, index + 4)
        .concat(dogs.slice(0, index - 5));
    }
    const prev = current === 0 ? totalItems - 1 : current - 1;
    const next = current === totalItems - 1 ? 0 : current + 1;
    return (
      <CarouselDogCard
        key={dog.id}
        slicedDogs={slicedDogs}
        active={index === current}
        prev={index === prev}
        next={index === next}
      />
    );
  });

  return (
    <ContainerWrap>
      <article className='container-top'>
        <section className='container-top__title'>
          <p className='container-top__title__number'>1622</p>
          마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <div className='container-top__btns'>
          <CarouselButton prev handleSlide={movePrev} />
          <CarouselButton next handleSlide={moveNext} />
        </div>
      </article>
      <SliderContainer>{CardList}</SliderContainer>
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
