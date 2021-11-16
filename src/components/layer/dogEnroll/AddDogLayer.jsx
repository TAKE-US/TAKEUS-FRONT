/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import React from 'react';
import styled from 'styled-components';
import AddDogCardContainer from 'components/atoms/AddDogCardContainer';

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
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

const AddDogLayer = ({ setEnrollData, imageList, setImageList, initial }) => {
  return (
    <Styled.Wrapper>
      <section className='title'>대상견 사진을 올려주세요.(최대 5개)</section>
      <AddDogCardContainer
        setEnrollData={setEnrollData}
        imageList={imageList}
        setImageList={setImageList}
        initial={initial}
      />
    </Styled.Wrapper>
  );
};

export default AddDogLayer;
