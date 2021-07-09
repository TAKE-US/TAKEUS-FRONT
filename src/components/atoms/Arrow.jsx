import React from 'react';
import styled from 'styled-components';
import leftArrow from '../../assets/img/btn_round_arrow_left_40.svg';
import rightArrow from '../../assets/img/btn_round_arrow_right_40.svg';

const ArrowWrap = styled.img`
  position: absolute;
  top: 50%;
  width: 10%;
  cursor: pointer;
  left: ${props => props.side === 'prev' && 10}px;
  right: ${props => props.side === 'next' && 10}px;
`;


function Arrow({ handleClickPrev, handleClickNext }) {
  return (
    <>
      <ArrowWrap src={leftArrow} side="prev" onClick={handleClickPrev} />
      <ArrowWrap src={rightArrow} side="next" onClick={handleClickNext} />
    </>
  );
}

export default Arrow;