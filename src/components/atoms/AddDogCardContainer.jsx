/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AddDogCard from 'components/atoms/AddDogCard';

const Styled = {
  Wrapper: styled.section`
    width: 100%;
    display: flex;
  `,
};

const extractLastId = array => {
  if (array.length === 0) return 0;
  return array.sort((a, b) => b.id - a.id)[0].id;
};

const AddDogCardContainer = ({ imageList, setImageList, initial }) => {
  const [boxList, setBoxList] = useState([1, 0, 0, 0, 0]);
  // const [URLArray, setURLArray] = useState([]);
  // const [photoId, setPhotoId] = useState(0);
  // const nextId = useRef(extractLastId(boxList));

  // const photoHandle = e => {
  //   const photoFile = e.target.files;
  //   (async () => {
  //     arrayHandle(photoFile);
  //   })();
  // };

  // const arrayHandle = photoFile => {
  //   const idPhoto = {
  //     id: nextId.current,
  //     photoFile: photoFile,
  //     url: URLArray,
  //   };
  //   if (photoFile !== null) setBoxList([idPhoto, ...boxList]);
  //   nextId.current += 1;
  //   setPhotoId(nextId.current);
  // };

  const deleteHandle = e => {
    const deletedKey = e.target.nextSibling.dataset.key;
    setBoxList(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
    setImageList(prev => prev.filter(photo => photo.id !== Number(deletedKey)));
  };

  useEffect(() => {
    // if (initial?.length > 0) initial.map(URL => setURLArray(prev => prev.concat(URL)));
    if (initial?.length > 0) {
      setImageList(initial.map((v, i) => (v = { id: i, photoFile: v })));
    }
    // if (initial?.length > 0) {
    //   const initialList = initial.map((URL, index) => {
    //     return {
    //       id: index,
    //       photoFile: URL,
    //     };
    //   });
    //   setBoxList(boxList => [...initialList, ...boxList]);
    //   nextId.current = initialList.length;
    //   setPhotoId(nextId.current);
    // }
  }, [initial, setImageList]);

  return (
    <Styled.Wrapper>
      <>
        {boxList.map((value, i) =>
          i < 5 ? (
            <AddDogCard
              key={i}
              value={value}
              deleteHandle={deleteHandle}
              imageList={imageList}
              setImageList={setImageList}
              // photoId={photoId}
              // photoHandle={photoHandle}
              // URLArray={URLArray}
              // setURLArray={setURLArray}
            />
          ) : null
        )}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
