import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import FindDogCard from "../../atoms/FindDogCard";
import Carousel from "components/atoms/Carousel";
import { getDogs } from "lib/api/sample";

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
  }

  /* slide-container */
  .container-bottom {
    width: 100%;
    display: flex;
    max-width: 115rem;
    overflow-y: auto;
    /* items-container */
    &__cards {
      display: flex;
      overflow-y: hidden;
      article {
        margin-right: 1.8rem;
      }
    }
    &__cards::nth-last-child(1) {
      margin-right: 0;
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
      setDogs(data);
      console.log(data);
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
              <FindDogCard key={dog._id} id={dog._id} dog={dog} />
            ))}
        </div>
      </article>
    </ContainerWrap>
  );
};

export default withRouter(CarouselDogContainer);
