/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import btn_plus from 'assets/icon/btn_plus.svg';

const Styled = {
  Wrapper: styled.section`
    display: flex;
    align-items: center;
    width: 15.4rem;
    height: 15.4rem;
    border-radius: 1rem;
    background-color: #f8f8f8;
    margin-right: 1.5rem;
    .card {
      width: 15.4rem;
      height: 15.4rem;
      position: relative;
      &__img {
        position: absolute;
        top: 6.5rem;
        left: 2.5rem;
        max-width: 2rem;
        max-height: 2rem;
      }
      &__content {
        position: absolute;
        width: 9rem;
        height: 2rem;
        left: 4.5rem;
        top: 6.5rem;
        font: ${({ theme }) => theme.font.gnb};
        color: ${({ theme }) => theme.color.primary};
      }
      &__description {
        position: absolute;
        width: 9rem;
        height: 2rem;
        left: 4.5rem;
        top: 8.5rem;
        font: ${({ theme }) => theme.font.gnb};
        color: ${({ theme }) => theme.color.primary};
      }
      &__input {
        position: absolute;
        top: 0;
        left: 0;
        width: 15.4rem;
        height: 15.4rem;
        opacity: 0;
        :hover {
          cursor: pointer;
        }
      }
    }
    .image__area {
      position: relative;
      &-img {
        width: 15.4rem;
        height: 15.4rem;
        border-radius: 1rem;
      }
      &-delete {
        position: absolute;
        right: 1rem;
        top: 1rem;
        :hover {
          cursor: pointer;
        }
      }
    }
  `,
};

const extractLastId = (array) => {
  if (array.length === 0) return 0;
  return array.sort((a, b) => b.id - a.id)[0].id;
};

const AddDogCard = ({ setImgPreviewList, imageList, setImageList }) => {
  const setImagePreview = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = () => {
      setImageList((prev) => [{ id: extractLastId(imageList) + 1, file: file, imgURL: e.target.files[0] }, ...prev]);
      setImgPreviewList((prev) => [{ id: extractLastId(imageList) + 1, file: file, imgURL: reader.result }, ...prev]);
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <Styled.Wrapper>
      <div className="card">
        <img className="card__img" src={btn_plus} alt="plus" />
        <p className="card__content">사진 추가하기</p>
        <p className="card__description">(15MB 이하)</p>
        <input className="card__input" type="file" id="detail_image" accept="image/*" onChange={setImagePreview} />
      </div>
    </Styled.Wrapper>
  );
};

export default AddDogCard;
