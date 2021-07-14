import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/icon/ic_close_white_24.svg';
import LeftArrow from 'assets/icon/btn_round_arrow_left_56.svg';
import RightArrow from 'assets/icon/btn_round_arrow_right_56.svg';
import Arrow from 'components/atoms/Arrow';

const Styled = {
  Wrapper: styled.div`
    position: absolute;
    top: -100%;
    width: 100vw;
    height: 360%;
    z-index: 15;

    @media screen and (max-width: 1440px) {
      left: -90%;
    }

    @media screen and (min-width: 1441px) and (max-width: 1920px) {
      left: -105%;
    }

    button {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      top: 12%;
      left: 70%;
      width: 4.4%;
      height: 1.65%;
      font: ${({ theme }) => theme.font.body2};
      color: white;
    }
  `,

  ImageWrapper: styled.div`
    top: 15%;
    right: 0%;
    width: 100vw;
    height: 40%;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 15;

    .imageContainer {
      width: 45%;
      display: flex;
      justify-content: center;
      background-color: black;
    }

    .dogImage {
      display: block;
      width: auto;
      height: auto;
    }
  `,

  Background: styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  `
};

function ImageModal({ onClick, img, handleClickPrev, handleClickNext }) {
  return (
    <Styled.Wrapper>
      <Styled.Background />
      <button onClick={onClick}>닫기<CloseIcon /></button>
      <Styled.ImageWrapper>
        <div className="imageContainer">
          <img className="dogImage" src={img} alt="dog" />
        </div>
      </Styled.ImageWrapper>
      <Arrow
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        top={30}
        zIndex={19}
        height={5}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </Styled.Wrapper>
  );
}

export default ImageModal;
