/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import deleteBtn from 'assets/icon/btn_delete.svg';

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
        top: 7.2rem;
        left: 2.5rem;
        max-width: 2rem;
        max-height: 2rem;
      }
      &__content {
        position: absolute;
        width: 9rem;
        height: 2rem;
        left: 4.5rem;
        top: 7.2rem;
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

const ImageCard = ({ setImgPreviewList, setImageList, value, imageList, imagePreviewList }) => {
  const deleteHandle = e => {
    const deletedKey = e.target.nextSibling.dataset.key;
    setImgPreviewList(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
    setImageList(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
  };

  let imgSrc;
  const isHaveImg =
    imagePreviewList.filter(value => typeof value !== 'number').filter(element => element.id === value.id).length > 0;

  if (isHaveImg) imgSrc = imagePreviewList.filter(element => element.id === value.id)[0]['imgURL'];

  return (
    <Styled.Wrapper>
      {isHaveImg ? (
        <div className='image__area'>
          <img
            className='image__area-delete'
            onClick={e => {
              deleteHandle(e);
            }}
            src={deleteBtn}
            alt={'delete'}
          />
          <img className='image__area-img' data-key={value.id} src={imgSrc} alt='img' />
        </div>
      ) : null}
    </Styled.Wrapper>
  );
};

export default ImageCard;
