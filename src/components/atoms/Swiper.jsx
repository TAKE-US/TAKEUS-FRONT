import React, { useState } from "react";
import styled from "styled-components";
import SwiperContent from "./SwiperContent";
import ImageModal from "components/layer/dogDetail/ImageModal";

const SwiperWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const Swiper = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);

  const handleClickPrev = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };

  const handleClickNext = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handleOnClick = () => {
    displayModal ? setDisplayModal(false) : setDisplayModal(true);
  };

  return (
    <SwiperWrap>
      <SwiperContent
        index={index}
        images={images}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        onClick={handleOnClick}
      />
      {displayModal && (
        <ImageModal
          onClick={handleOnClick}
          img={images[index]}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
      )}
    </SwiperWrap>
  );
};

export default Swiper;
