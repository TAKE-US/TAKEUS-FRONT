import React from "react";
import styled from "styled-components";
//img
import sampleImg from "../assets/img/img_card_sample.svg";

const CardWrap = styled.article``;

const findDogCard = () => {
  return (
    <CardWrap>
      <img src={sampleImg} alt="" />
      <article className="cardInfo">
        <p>낑깡</p>
        <p>암컷 9kg</p>
      </article>
    </CardWrap>
  );
};

export default findDogCard;
