/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ImageCard, AddDogCard } from 'components';

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
  `,
};

const AddDogCardContainer = ({ imageList, setImageList, initial }) => {
  const [imagePreviewList, setImgPreviewList] = useState([1, 0, 0, 0, 0]);

  useEffect(() => {
    initial?.forEach((value, index) => {
      setImageList(prev => [{ id: index, imgURL: value }, ...prev]);
      setImgPreviewList(prev => [{ id: index, imgURL: value }, ...prev]);
    });
  }, [initial, setImageList]);

  return (
    <Styled.Wrapper>
      {imagePreviewList.map((value, i) =>
        i < 5 ? (
          value === 1 ? (
            <AddDogCard
              key={i}
              value={value}
              imagePreviewList={imagePreviewList}
              imageList={imageList}
              setImgPreviewList={setImgPreviewList}
              setImageList={setImageList}
            />
          ) : (
            <ImageCard
              key={i}
              value={value}
              imagePreviewList={imagePreviewList}
              setImgPreviewList={setImgPreviewList}
              imageList={imageList}
              setImageList={setImageList}
            />
          )
        ) : null
      )}
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
