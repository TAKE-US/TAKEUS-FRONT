import React from "react";
import CarouselDogCard from "../atoms/CarouselDogCard";
import styled from "styled-components";

const CarouselContainer = styled.article`
  section {
    display: flex;
  }
`;

const Carousel = ({ data }) => {
  return (
    <CarouselContainer>
      {data.length && (
        <section>
          {data.map((item, i) => (
            <div key={item.id}>
              <CarouselDogCard item={item} />
            </div>
          ))}
        </section>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
