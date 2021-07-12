/* eslint-disable arrow-parens */
import React, { useState } from "react";
import styled from "styled-components";
import plus from "assets/icon/ic_plus_24.svg";
import deleteBtn from "assets/icon/btn_delete.svg";

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
      width: 20rem;
      height: 20rem;
      position: relative;
      &__img {
        position: absolute;
        top: 5rem;
        left: 3.8rem;
        width: 2rem;
        height: 2rem;
        /* max-width: 2rem;
        max-height: 2rem; */
      }
      &__content {
        position: absolute;
        width: 12rem;
        left: 5rem;
        top: 9.5rem;
        font: ${({ theme }) => theme.font.button};
        color: ${({ theme }) => theme.color.primary};
      }
      &__input {
        position: absolute;
        top: 0;
        left: 0;
        width: 20rem;
        height: 20rem;
        opacity: 0;
        :hover {
          cursor: pointer;
        }
      }
    }
    .image__area {
      position: relative;
      &-img {
        width: 20rem;
        height: 20rem;
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

const AddDogCard = ({ value, photoHandle, deleteHandle }) => {
  const [imgfile, setImage] = useState("");
  const [url, setUrl] = useState("");
  function createImagePreview(e) {
    const files = e.target.files;
    if (files.length) {
      setImageFromFile({
        file: files[0],
        setImageUrl: ({ result }) => {
          setImage(files[0]);
          setUrl(result);
        },
      });
    }
  }

  function setImageFromFile({ file, setImageUrl }) {
    let reader = new FileReader();
    reader.onload = () => {
      setImageUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  }

  return (
    <Styled.Wrapper>
      {value.id !== undefined ? (
        <div className="image__area">
          <img
            className="image__area-delete"
            onClick={(e) => {
              deleteHandle(e);
            }}
            src={deleteBtn}
            alt={"delete"}
          />
          <img
            className="image__area-img"
            data-key={value.id}
            src={url}
            alt={imgfile.name}
          />
        </div>
      ) : value ? (
        <div className="card">
          <img className="card__img" src={plus} alt="plus" />
          <p className="card__content">사진 추가하기</p>
          <input
            className="card__input"
            type="file"
            multiple
            id="detail_image"
            accept="image/*"
            onChange={(e) => {
              photoHandle(e);
              createImagePreview(e);
            }}
          />
        </div>
      ) : null}
    </Styled.Wrapper>
  );
};

export default AddDogCard;

// console.log(newphotoArray);
