import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import PaginationDot from "./PaginationDot";
import LeftArrow from "assets/img/btn_round_arrow_left_40.svg";
import RightArrow from "assets/img/btn_round_arrow_right_40.svg";

const SwiperContentWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const Slide = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    background-image: url(${props => props.img});
  }
`;

function SwiperContent({ index, images, handleClickPrev, handleClickNext, onClick }) {
  return (
    <SwiperContentWrap>
      <Slide>{images?.map((img, i) => i === index && <img src={img} key={i} alt="" onClick={onClick} />)}</Slide>
      <Arrow
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        top={50}
        zIndex={1}
        height={10}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
      <PaginationDot index={index} imagesLength={images?.length} />
    </SwiperContentWrap>
  );
}

export default SwiperContent;
