/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AddDogCard from "components/atoms/AddDogCard";

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
  `,
};

const AddDogCardContainer = ({ setEnrollData, name }) => {
  const [photo, setPhoto] = useState("");
  const [urlArray, setUrlArray] = useState([]);
  const [photoArray, setPhotoArray] = useState([1, 0, 0, 0, 0]);
  const [photoFile, setPhotoFile] = useState([]);
  function photoHandle(e) {
    const newFile = e.target.files;
    (async () => {
      setPhoto(newFile);
    })();
    (async () => {
      arrayHandle(newFile);
    })();
  }
  console.log(urlArray, "urlArray");

  function photoStore(e) {
    const formData = new FormData();
    formData.append("image", e.target.files);
    setPhotoFile([...photoFile, formData]);
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
      photoArray.filter((photo) => photo.id !== parseInt(deletedKey, 10))
    );
  }

  useEffect(() => {
    setEnrollData(name, photoFile);
  }, [photoFile]);

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
              photoStore={photoStore}
              urlArray={urlArray}
              setUrlArray={setUrlArray}
            />
          ) : null
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
