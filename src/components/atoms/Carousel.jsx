import React from "react";
import CarouselDogCard from "../atoms/CarouselDogCard";
import styled from "styled-components";

const CarouselContainer = styled.article`
  .cards-container {
    display: flex;
  }
  .cards-container::-webkit-scrollbar {
    display: none;
  }
`;

const Carousel = ({ data }) => {
  return (
    <CarouselContainer>
      <div className='cards-container'>
        {data.length &&
          data.map((item, i) => <CarouselDogCard key={item.id} item={item} />)}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
