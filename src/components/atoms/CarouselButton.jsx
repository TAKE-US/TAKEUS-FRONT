import styled from "styled-components";
import React from "react";
import rightarrow from "../../assets/img/btn_round_arrow_right_40.svg";
import leftarrow from "../../assets/img/btn_round_arrow_left_40.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  btn__left + btn__right {
    position: absolute;
    top: 50%;
    width: 3rem;
    height: 3rem;
    z-index: 1001;
    all: unset;
    width: 4rem;
    height: 3.5rem;
    &:hover {
      cursor: pointer;
    }
    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default function CarouselButton() {
  return (
    <Container>
      <div className='btn__left'>
        <img src={leftarrow} alt='leftarrow' />
      </div>
      <div className='btn__right'>
        <img src={rightarrow} alt='rightarrow' />
      </div>
    </Container>
  );
}
