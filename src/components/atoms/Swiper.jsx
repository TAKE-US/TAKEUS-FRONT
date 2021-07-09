import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwiperContent from './SwiperContent';

const SwiperWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 40.3rem;
  height: 40.3rem;
  border-radius: 1rem;
`;

const Swiper = ({ images }) => {
  useEffect(() => {
    try {
      console.log(images);
    } catch (err) {
      console.log(err);
    }
  });

  const [index, setIndex] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const width = 403;

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <SwiperWrap>
      <SwiperContent
        index={index}
        images={images}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </SwiperWrap>
  );
};

export default Swiper;