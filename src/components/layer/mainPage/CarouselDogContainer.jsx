/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CarouselDogCard from "../../atoms/CarouselDogCard";
import leftarrow from "../../../assets/img/btn_round_arrow_left_40.svg";
import rightarrow from "../../../assets/img/btn_round_arrow_right_40.svg";
import CarouselButton from "../../atoms/CarouselButton";

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
`;

const CarouselDogContainer = () => {
  const totalItems = 2;
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

  const { id, name, location, info } = dogs;

  const CardList = Array(totalItems)
    .fill()
    .map((_, index) => {
      const key = `item_${index}`;
      const prev = current === 0 ? totalItems - 1 : current - 1;
      const next = current === totalItems - 1 ? 0 : current + 1;
      return (
        <>
          <CarouselDogCard
            key={id}
            name={name}
            location={location}
            info={info}
            active={index === current}
            prev={index === prev}
            next={index === next}
          />
          <CarouselDogCard
            key={id}
            name={name}
            location={location}
            info={info}
            active={index === current}
            prev={index === prev}
            next={index === next}
          />
          <CarouselDogCard
            key={id}
            name={name}
            location={location}
            info={info}
            active={index === current}
            prev={index === prev}
            next={index === next}
          />
          <CarouselDogCard
            key={id}
            name={name}
            location={location}
            info={info}
            active={index === current}
            prev={index === prev}
            next={index === next}
          />
        </>
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
          <button className='container-top__btns__left'>
            <img src={leftarrow} alt='leftarrow' />
          </button>
          <button className='container-top__btns__right'>
            <img src={rightarrow} alt='rightarrow' />
          </button>
        </div>
      </article>
      <SliderContainer>
        {CardList}
        <CarouselButton prev handleSlide={movePrev} />
        <CarouselButton next handleSlide={moveNext} />
      </SliderContainer>
    </ContainerWrap>
  );
};

const dogs = [
  {
    id: 0,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 1,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 2,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 3,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 4,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무",
  },
  {
    id: 5,
    name: "멍멍이",
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
