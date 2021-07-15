/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
import React, { useState, useRef } from "react";
import styled from "styled-components";
import AddDogCard from "components/atoms/AddDogCard";

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
  `,
};

const AddDogCardContainer = ({ name, createImage, setCreateImage }) => {
  const [photo, setPhoto] = useState("");
  const [urlArray, setUrlArray] = useState([]);
  const [photoArray, setPhotoArray] = useState([1, 0, 0, 0, 0]);
  function photoHandle(e) {
    const newFile = e.target.files;
    (async () => {
      setPhoto(newFile);
    })();
    (async () => {
      arrayHandle(newFile);
    })();
  }

  const nextId = useRef(0);
  function arrayHandle(photo) {
    const idPhoto = {
      id: nextId.current,
      photo: photo,
      url: urlArray,
    };
    if (photo !== null) {
      setPhotoArray([idPhoto, ...photoArray]);
    }
    nextId.current += 1;
  }

  function deleteHandle(e) {
    const deletedKey = e.target.nextSibling.dataset.key;
    setPhotoArray(
      photoArray.filter(photo => photo.id !== parseInt(deletedKey, 10))
    );
  }

  return (
    <Styled.Wrapper>
      <>
        {photoArray.map((value, i) =>
          i < 5 ? (
            <AddDogCard
              key={i}
              value={value}
              photoHandle={photoHandle}
              deleteHandle={deleteHandle}
              urlArray={urlArray}
              setUrlArray={setUrlArray}
              createImage={createImage}
              setCreateImage={setCreateImage}
            />
          ) : null
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
