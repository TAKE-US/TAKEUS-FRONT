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
  const [photoArray, setPhotoArray] = useState([1, 0, 0, 0, 0]);
  console.log(photoArray);
  // let modifiedPhotos =
  //   photoArray.slice(1).length > 0
  //     ? photoArray.slice(1).concat([1, 0, 0, 0])
  //     : [1, 0, 0, 0, 0];

  // console.log(`modifiedPhotos : ${modifiedPhotos}`);
  // let slicedPhotos = modifiedPhotos.slice(0, 5);

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
    if (photo !== null) {
      setPhotoArray([idPhoto, ...photoArray]);
    }
    nextId.current += 1;
  };

  const deleteHandle = (e) => {
    const deletedKey = e.target.nextSibling.dataset.key;
    console.log(deletedKey);
    const filteredArray = photoArray.filter(
      (photo) => parseInt(photo.id, 10) !== parseInt(deletedKey, 10)
    );
    setPhotoArray(filteredArray);
  };

  useEffect(() => {
    arrayHandle(photo);
  }, [photo]);

  //todo 일부러 남겨놓은 console 입니다
  return (
    <Styled.Wrapper>
      <>
        {photoArray.map(
          (value, i) =>
            i < 5 ? (
              <AddDogCard
                key={i}
                value={value}
                photoHandle={photoHandle}
                deleteHandle={deleteHandle}
              />
            ) : null
          // console.log(`value : ${value}`),
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
