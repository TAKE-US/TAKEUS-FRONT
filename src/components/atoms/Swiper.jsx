import React, { useState } from 'react';
import styled from 'styled-components';
import SwiperContent from './SwiperContent';

const SwiperWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const Swiper = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [width, setWidth] = useState(0);

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
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </SwiperWrap>
  );
};

export default Swiper;