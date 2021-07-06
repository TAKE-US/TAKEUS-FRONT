import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import PaginationDot from './PaginationDot';

const SwiperContentWrap = styled.div`
  position: relative;
  width: 40.3rem;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Slide = styled.div`
  display: flex;
  height: 100%;
  background-size: cover;
  border-radius: 10px;

  img {
    width: 100%;
    background-image: url(${props => props.img});
    transform: ${props => `translateX(${props.xPosition}px)`};
    transition: transform ease-in 0.3s;
  }
`;

function SwiperContent({ index, images, setWidth, xPosition, handleClickPrev, handleClickNext }) {
  const slideRef = useRef();

  useEffect(() => {
    console.log('Swiper Content UseEffect: ', images);
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth, images]);

  return (
    <SwiperContentWrap>
      <Slide
        xPosition={xPosition}
        ref={slideRef}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="i" />
        ))}
      </Slide>
      <Arrow
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
      <PaginationDot
        index={index}
        imagesLength={images.length}
      />
    </SwiperContentWrap >
  );
}

export default SwiperContent;
