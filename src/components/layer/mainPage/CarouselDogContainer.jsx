import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import DogCard from "../../atoms/DogCard";
import Carousel from "components/atoms/Carousel";
import { getDogs } from "lib/api/sample";

const ContainerWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 48rem;
  .container-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
    &__title {
      width: 52.3rem;
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
    /* max-width: 100%; */
    overflow-y: auto;
    /* items-container */
    &__cards {
      display: grid;
      grid-template-columns: repeat(30, 25.5rem);
      grid-gap: 1.75rem;
      overflow-y: hidden;
      article {
        margin-right: 1.8rem;
      }
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
  const [dogs, setDogs] = useState([]);
  const listRef = useRef(null);
  const movingValue = 272;
  useEffect(() => {
    (async () => {
      const data = await getDogs();
      setDogs(data.slice(0, 8));
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
            dogs.map((dog, i) => (
              <DogCard key={dog._id} id={dog._id} dog={dog} />
            ))}
        </div>
      </article>
    </ContainerWrap>
  );
};

export default withRouter(CarouselDogContainer);
