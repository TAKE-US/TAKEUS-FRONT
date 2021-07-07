import React from "react";
import rightarrow from "assets/img/btn_round_arrow_right_40.svg";
import leftarrow from "assets/img/btn_round_arrow_left_40.svg";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.section`
    position: relative;
    display: flex;
    width: 10rem;
    .left {
      all: unset;
      left: 0;
      width: 4rem;
      height: 3.5rem;
      position: absolute;
    }
    .right {
      all: unset;
      right: 0;
      width: 4rem;
      height: 3.5rem;
      position: absolute;
    }
  `,
};

const Carousel = ({ listRef, movingValue }) => {
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -parseInt(movingValue, 10),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: parseInt(movingValue, 10),
        behavior: "smooth",
      });
    }
  };

  return (
    <Styled.Wrapper>
      <div className="left" onClick={scrollLeft}>
        <img src={leftarrow} alt="leftarrow" />
      </div>
      <div className="right" onClick={scrollRight}>
        <img src={rightarrow} alt="rightarrow" />
      </div>
    </Styled.Wrapper>
  );
};

export default Carousel;
