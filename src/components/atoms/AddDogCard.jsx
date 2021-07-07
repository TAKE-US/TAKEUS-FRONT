import React, { useState } from "react";
import styled from "styled-components";
import plus from "assets/img/ic_plus.svg";

const Styled = {
  Wrapper: styled.section`
    display: flex;
    align-items: center;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    background-color: #f8f8f8;
    margin-right: 1.5rem;
    .card {
      position: relative;
      &__img {
        position: absolute;
        left: 3.8rem;
        max-width: 2rem;
        max-height: 2rem;
      }
      &__content {
        position: absolute;
        width: 12rem;
        left: 6.2rem;
        font: ${({ theme }) => theme.font.button};
        color: ${({ theme }) => theme.color.primary};
      }
      &__input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        :hover {
          cursor: pointer;
        }
      }
    }
    .image_area > img {
      width: 20rem;
      height: 20rem;
      border-radius: 1rem;
    }
  `,
};

const AddDogCard = ({ count, setCount }) => {
  const [imgfile, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const setImageFromFile = ({ file, setImageUrl }) => {
    let reader = new FileReader();
    reader.onload = () => {
      setImageUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Styled.Wrapper>
      {!imgfile ? (
        <div className="card">
          <img className="card__img" src={plus} alt="plus" />
          <p className="card__content">사진 추가하기</p>
          <input
            className="card__input"
            type="file"
            id="detail_image"
            accept="image/*"
            onChange={({ target: { files } }) => {
              if (files.length) {
                setImageFromFile({
                  file: files[0],
                  setImageUrl: ({ result }) => {
                    setImage(files[0]);
                    setUrl(result);
                  },
                });
              }
              setCount(count + 1);
            }}
          />
        </div>
      ) : (
        <div className="image_area">
          <img src={url} alt={imgfile.name} />
        </div>
      )}
    </Styled.Wrapper>
  );
};

export default AddDogCard;
