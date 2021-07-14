import React from 'react';
import styled from 'styled-components';

const ArrowWrap = styled.img`
  position: absolute;
  top: ${props => props.top}%;
  height: ${props => props.height}%;
  cursor: pointer;
  left: ${props => props.side === 'prev' && 5}%;
  right: ${props => props.side === 'next' && 5}%;
`;


function Arrow({ leftArrow, rightArrow, height, top, handleClickPrev, handleClickNext }) {
  return (
    <>
      <ArrowWrap
        height={height}
        top={top}
        src={leftArrow}
        side="prev"
        onClick={handleClickPrev}
      />
      <ArrowWrap
        height={height}
        top={top}
        src={rightArrow}
        side="next"
        onClick={handleClickNext}
      />
    </>
  );
}

export default Arrow;