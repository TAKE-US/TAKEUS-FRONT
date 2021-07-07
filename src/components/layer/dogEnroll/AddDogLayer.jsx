import React from "react";
import styled from "styled-components";
import AddDogCardContainer from "components/atoms/AddDogCardContainer";

const Styled = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5.6rem 0;
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

const AddDogLayer = () => {
  return (
    <Styled.Wrapper>
      <section className="title">대상견 사진을 올려주세요.(최대 5개)</section>
      <AddDogCardContainer />
    </Styled.Wrapper>
  );
};

export default AddDogLayer;
