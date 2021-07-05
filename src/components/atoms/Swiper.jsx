/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import SwiperContent from './SwiperContent';

const SwiperWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 36.4rem;
  height: 34.2rem;
  border-radius: 1rem;
  z-index: -1;
`;

const Swiper = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1608831540955-35094d48694a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
    'https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1610244130620-fd348aa7854e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1608831540955-35094d48694a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
  ];

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