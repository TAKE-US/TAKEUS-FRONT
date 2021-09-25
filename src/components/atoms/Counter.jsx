/* eslint-disable arrow-parens */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//assets
import minus from "assets/icon/btn_round_minus_40.svg";
import minusHover from "assets/icon/btn_round_minus_hover_40.svg";
import plus from "assets/icon/btn_round_plus_40.svg";
import plusHover from "assets/icon/btn_round_plus_hover_40.svg";

const CounterWrap = styled.section`
  display: flex;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.6rem;
    margin: 0 2.4rem;
    font: ${({ theme }) => theme.font.description};
    color: ${({ theme }) => theme.color.darkgray1};
    border: 1px solid #dfdfdf;
    border-radius: 5.4rem;
  }
`;

const WeightBtn = styled.button`
  width: 4rem;
  height: 4rem;
  background-image: url(${props => props.bg});
  :hover {
    background-image: url(${props => props.hover});
  }
`;

const Counter = ({ name, setEnrollData, initial }) => {
  const [num, setNum] = useState(0);
  const plusHandler = e => {
    e.preventDefault();
    setNum(prev => prev + 1);
  };
  const minusHandler = e => {
    e.preventDefault();
    if (num > 0) {
      setNum(prev => prev - 1);
    }
  };
  useEffect(() => {
    if (initial) setNum(initial);
    setEnrollData(name, num);
  }, [num, name, setEnrollData, initial]);
  return (
    <CounterWrap>
      <WeightBtn bg={minus} hover={minusHover} onClick={minusHandler}></WeightBtn>
      <p>{num} Kg</p>
      <WeightBtn bg={plus} hover={plusHover} onClick={plusHandler}></WeightBtn>
    </CounterWrap>
  );
};

export default Counter;
