/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AddDogCard from "components/atoms/AddDogCard";

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
    max-width: 120rem;

    .card {
      display: flex;
      align-items: center;
      width: 20rem;
      height: 20rem;
      border-radius: 1rem;
      background-color: #f8f8f8;
      margin-right: 1.5rem;
      img {
        width: 20rem;
        height: 20rem;
        border-radius: 1rem;
      }
      p {
        z-index: 0;
      }
      input {
        width: 20rem;
        height: 20rem;
        opacity: 0;
      }
      input:hover {
        cursor: pointer;
      }
    }
  `,
};

const AddDogCardContainer = () => {
  const [photo, setPhoto] = useState(null);
  const [photoArray, setPhotoArray] = useState([]);
  let modifiedPhotos =
    photoArray.slice(1).length > 0
      ? photoArray.slice(1).concat([1, 0, 0, 0])
      : [1, 0, 0, 0, 0];
  let slicedPhotos = modifiedPhotos.slice(0, 5);

  const photoHandle = (e) => {
    const newFile = e.target.files;
    (async () => {
      setPhoto(newFile);
    })();
  };

  const nextId = useRef(0);
  const arrayHandle = (photo) => {
    const idPhoto = {
      id: nextId.current,
      photo,
    };
    setPhotoArray([...photoArray, idPhoto]);
    nextId.current += 1;
  };

  function deleteImage(e) {
    e.preventDefault();
    const deletedKey = e.target.nextSibling.dataset.key;
    // setImage(undefined);
    // setUrl("");
    // window.location.reload();
  }
  useEffect(() => {
    arrayHandle(photo);
  }, [photo]);

  //todo 일부러 남겨놓은 console 입니다
  return (
    <Styled.Wrapper>
      <>
        {slicedPhotos.map((value, i) => (
          // console.log(`value : ${value}`),
          <AddDogCard
            key={i}
            value={value}
            photoHandle={photoHandle}
            deleteHandle
          />
        ))}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
