import React, { useState } from 'react';
import styled from 'styled-components';
import SwiperContent from './SwiperContent';

const SwiperWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const Swiper = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <SwiperWrap>
      <SwiperContent
        index={index}
        images={images}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </SwiperWrap>
  );
};

export default Swiper;