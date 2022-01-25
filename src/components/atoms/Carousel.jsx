import React, { useState } from "react";
import { ReactComponent as RightArrow } from "assets/icon/btn_round_arrow_right_40.svg";
import { ReactComponent as LeftArrow } from "assets/icon/btn_round_arrow_left_40.svg";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.section`
    display: flex;
    justify-content: space-between;
    width: 10rem;
    .left {
      width: 4rem;
      height: 3.5rem;
    }
    .right {
      width: 4rem;
      height: 3.5rem;
    }
  `,
};

const Carousel = ({ listRef, movingValue }) => {
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
    if (position < 1361) {
      setPosition(position + movingValue);
    } else {
      setPosition(1360);
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        left: position + movingValue,
        behavior: "smooth",
      });
    }
  };

  return (
    <Styled.Wrapper>
      <div className="left" onClick={LeftScroll}>
        <LeftArrow />
      </div>
      <div className="right" onClick={RightScroll}>
        <RightArrow />
      </div>
    </Styled.Wrapper>
  );
};

export default Carousel;
