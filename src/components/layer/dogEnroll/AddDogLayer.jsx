/* eslint-disable arrow-parens */
import React from "react";
import styled from "styled-components";
import AddDogCardContainer from "components/atoms/AddDogCardContainer";

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5.6rem;
    height: 28rem;
    .title {
      width: 43.3rem;
      height: 4.1rem;
      font: ${({ theme }) => theme.font.headline};
    }
    .contents {
      display: flex;
    }
  `,
};

const AddDogLayer = ({ setEnrollData, name, createImage, setCreateImage }) => {
  return (
    <Styled.Wrapper>
      <section className="title">대상견 사진을 올려주세요.(최대 5개)</section>
      <AddDogCardContainer
        setEnrollData={setEnrollData}
        name={name}
        createImage={createImage}
        setCreateImage={setCreateImage}
      />
    </Styled.Wrapper>
  );
};

export default AddDogLayer;
