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

const AddDogCardContainer = ({ createdImage, setCreatedImage, initial }) => {
  const [boxList, setBoxList] = useState([1, 0, 0, 0, 0]);
  const [URLArray, setURLArray] = useState([]);
  const [photoId, setPhotoId] = useState(0);
  const nextId = useRef(0);

  const photoHandle = e => {
    const photoFile = e.target.files;
    (async () => {
      arrayHandle(photoFile);
    })();
  };

  const arrayHandle = photoFile => {
    const idPhoto = {
      id: nextId.current,
      photoFile: photoFile,
      url: URLArray,
    };
    if (photoFile !== null) setBoxList([idPhoto, ...boxList]);
    nextId.current += 1;
    setPhotoId(nextId.current);
  };

  const deleteHandle = e => {
    const deletedKey = e.target.nextSibling.dataset.key;
    setBoxList(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
    setCreatedImage(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
  };

  useEffect(() => {
    initial?.length > 0 && initial.map(URL => setURLArray(prev => prev.concat(URL)));
    if (initial?.length > 0) {
      const initialList = initial.map((URL, index) => {
        return {
          id: index,
          photoFile: URL,
        };
      });
      setBoxList(boxList => [...initialList, ...boxList]);
      nextId.current = initialList.length;
      setPhotoId(nextId.current);
    }
  }, [initial]);

  return (
    <Styled.Wrapper>
      <>
        {boxList.map((value, i) =>
          i < 5 ? (
            <AddDogCard
              key={i}
              value={value}
              photoId={photoId}
              photoHandle={photoHandle}
              deleteHandle={deleteHandle}
              URLArray={URLArray}
              setURLArray={setURLArray}
              createdImage={createdImage}
              setCreatedImage={setCreatedImage}
            />
          ) : null
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
