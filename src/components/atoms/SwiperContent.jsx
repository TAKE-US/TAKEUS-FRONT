import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const SwiperContentWrap = styled.div`
  position: relative;
  width: 57%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 342px;
  transition: transform ease-in 0.6s;

  img {
    width: 100%;
    transform: ${props => `translateX(${props.xPosition}px)`};
    margin: auto;
  }
`;

function SwiperContent({ images, setWidth, xPosition, handleClickPrev, handleClickNext }) {
  const slideRef = useRef();

  useEffect(() => {
    console.log('HI THIS IS SWIPERCONTENT LET\'S CHECK XPOSITION AGAIN', xPosition);
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth, xPosition]);

  return (
    <SwiperContentWrap>
      <Slide
        xPosition={xPosition}
        ref={slideRef}
      >
        {images.map((img, i) => (
          <img src={img} key={i} alt="" />
        ))}
      </Slide>
      <Arrow
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </SwiperContentWrap >
  );
}

export default SwiperContent;
