import React, { useState } from "react";
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
  //state 100 + 20
  const [position, setPosition] = useState(0);

  const LeftScroll = () => {
    if (position > 0) {
      setPosition(position - movingValue);
    } else {
      setPosition(0);
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        left: position - movingValue,
        behavior: "smooth",
      });
    }
  };

  const RightScroll = () => {
    if (position < 7000) {
      setPosition(position + movingValue);
    } else {
      setPosition(7073);
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        left: position + movingValue,
        behavior: "smooth",
      });
    }
  };
  // // setRight(0);
  // function RightScroll(count) {
  //   let totalMoved = parseInt(movingValue, 10) * count;
  //   if (listRef.current) {
  //     listRef.current.scrollBy({
  //       top: 0,
  //       left: totalMoved,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  return (
    <Styled.Wrapper>
      <div className="left" onClick={LeftScroll}>
        <img src={leftarrow} alt="leftarrow" />
      </div>
      <div className="right" onClick={RightScroll}>
        <img src={rightarrow} alt="rightarrow" />
      </div>
    </Styled.Wrapper>
  );
};

export default Carousel;
