/* eslint-disable no-unused-vars */
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

const AddDogCard = ({ count, setCount }) => {
  const [imgfile, setImage] = useState(null);
  const [url, setUrl] = useState(null);

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
    setCount(count + 1);
  }

  function deleteImage(e) {
    e.preventDefault();
    setImage(undefined);
    setUrl("");
    window.location.reload();
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
      {!imgfile ? (
        <div className="card">
          <img className="card__img" src={plus} alt="plus" />
          <p className="card__content">사진 추가하기</p>
          <input
            className="card__input"
            type="file"
            multiple
            id="detail_image"
            accept="image/*"
            onChange={function (e) {
              return createImagePreview(e);
            }}
          />
        </div>
      ) : (
        <div className="image__area">
          <img className="image__area-delete" src={deleteBtn} alt={"delete"} />
          <img className="image__area-img" src={url} alt={imgfile.name} />
        </div>
      )}
    </Styled.Wrapper>
  );
};

export default AddDogCard;
