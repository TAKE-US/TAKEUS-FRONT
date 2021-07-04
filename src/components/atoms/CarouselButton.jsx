import styled from "styled-components";
import React from "react";

const ButtonStyle = styled.div`
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 1001;
  border: 1px solid black;

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
  return <ButtonStyle prev={prev} next={next} onClick={handleSlide} />;
}
