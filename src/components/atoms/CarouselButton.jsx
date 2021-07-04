import styled from "styled-components";
import React from "react";
import rightarrow from "../../assets/img/btn_round_arrow_right_40.svg";
import leftarrow from "../../assets/img/btn_round_arrow_left_40.svg";

const styledButton = styled.div`
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  z-index: 1001;
  all: unset;
  width: 4rem;
  height: 3.5rem;
  img {
    &:hover {
      cursor: pointer;
    }
  }

  ${({ prev }) =>
    prev &&
    `
    left:0;
  `}

  ${({ next }) =>
    next &&
    `
    right:0;
  `}
`;

export default function Button({ prev, next, handleSlide }) {
  return (
    <styledButton prev={prev} next={next} onClick={handleSlide}>
      <img src={prev ? leftarrow : rightarrow} alt='arrow' />
    </styledButton>
  );
}
