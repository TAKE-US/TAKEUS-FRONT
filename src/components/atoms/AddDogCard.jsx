/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import styled from 'styled-components';
import btn_plus from 'assets/icon/btn_plus.svg';
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

const AddDogCard = ({ value, photoHandle, deleteHandle, URLArray, setURLArray, photoId, imageList, setImageList }) => {
  const [imgfile, setImage] = useState('');
  const setImageFromFile = ({ file, setImageUrl }) => {
    let reader = new FileReader();
    reader.onload = () => {
      setImageUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const createImagePreview = e => {
    const files = e.target.files;
    console.log(e.target.files);

    // if (imageList?.length === 0) setImageList([{ id: 0, image: e.target.files[0] }]);
    // if (imageList?.length > 0) setImageList(prev => prev.concat({ id: photoId, image: e.target.files[0] }));

    if (files.length) {
      setImageFromFile({
        file: files[0],
        setImageUrl: ({ result }) => {
          setImage(files[0]);
          // setURLArray(URLArray.concat(result));
        },
      });
    }
  };

  return (
    <Styled.Wrapper>
      {value.id !== undefined ? (
        <div className='image__area'>
          <img
            className='image__area-delete'
            onClick={e => {
              deleteHandle(e);
            }}
            src={deleteBtn}
            alt={'delete'}
          />
          <img className='image__area-img' data-key={value.id} src={URLArray[value.id]} alt={imgfile.name} />
        </div>
      ) : value ? (
        <div className='card'>
          <img className='card__img' src={btn_plus} alt='plus' />
          <p className='card__content'>사진 추가하기</p>
          <input
            className='card__input'
            type='file'
            id='detail_image'
            accept='image/*'
            onChange={e => {
              // photoHandle(e);
              createImagePreview(e);
            }}
          />
        </div>
      ) : null}
    </Styled.Wrapper>
  );
};

export default AddDogCard;
