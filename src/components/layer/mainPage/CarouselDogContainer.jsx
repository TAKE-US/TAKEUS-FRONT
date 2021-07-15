/* eslint-disable arrow-parens */
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { DogCard } from "components";
import { Carousel } from "components";
import { getDogs } from "lib/api/sample";

const ContainerWrap = styled.article`
  width: 100%;
  .container-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
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

const CarouselDogContainer = () => {
  const [dogs, setDogs] = useState([]);
  const listRef = useRef(null);
  const movingValue = 272;

  useEffect(() => {
    (async () => {
      const data = await getDogs();
      data && setDogs(data.slice(0, 8));
    })();
  }, []);

  return (
    <ContainerWrap>
      <article className="container-top">
        <section className="container-top__title">
          <p className="container-top__title__number">1622</p>
          마리의 대상견이 이동 봉사를 기다리고 있습니다.
        </section>
        <Carousel listRef={listRef} movingValue={movingValue} />
      </article>
      <article className="container-bottom">
        <div className="container-bottom__cards" ref={listRef}>
          {dogs.length &&
            dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
        </div>
      </article>
    </ContainerWrap>
  );
};

export default withRouter(CarouselDogContainer);
