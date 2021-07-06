/* eslint-disable default-case */
import React, { useState } from 'react';
import styled from "styled-components";
// import plus from "assets/img/plus_icon.svg";

const Styled = {
  Wrapper: styled.section`
      display: flex;
      align-items: center;
      width: 20rem;
      height: 20rem;
      border-radius: 1rem;
      background-color: #F8F8F8;
      margin-right: 1.5rem;
      img{
        width: 20rem;
        height: 20rem;
        border-radius: 1rem;
      }
      p {
        z-index: 0;
      }
      input{
        width: 20rem;
        height: 20rem;
        opacity: 0;
      }
      input:hover{
        cursor: pointer;
      }
  `
};

const AddDogCard = ({count, setCount}) => {
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
        {!imgfile ? 
          <div className="card">
            <input
            type="file"
            id="detail_image"
            accept="image/*"
            onChange={({ target: { files } }) => {
              if (files.length) {
                setImageFromFile({
                  file: files[0],
                  setImageUrl: ({ result }) => { setImage(files[0]); setUrl(result); }
                });
              }
              setCount(count + 1);
              }
            }
            />
            </div>
          
           :
        (imgfile && 
            <div className="image_area">
              <img src={url} alt={imgfile.name} />
            </div>
          )
        }
    </Styled.Wrapper>
  );
};

export default AddDogCard;

{/* <img src={plus} alt="plus" />
            <p>사진 추가하기</p> */}