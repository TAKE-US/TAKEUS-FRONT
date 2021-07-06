/* eslint-disable default-case */
import React, {useState} from 'react';
import styled from "styled-components";

const Styled = {
  Wrapper: styled.section`
    display: flex;
    justify-content: space-around;
    .card {
      width: 20rem;
      height: 20rem;
      border-radius: 1rem;
      background-color: #F8F8F8;
    }
  `
};

const AddDogCard = () => {
  //detailImageFile
  const [imgfile, setImage] = useState(null);
  // detailImageUrl
  const [url, setUrl] = useState(null);

  const setImageFromFile = ({ file, setImageUrl }) => {
    let reader = new FileReader();
    reader.onload = () => {
      setImageUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  };
  console.log(imgfile, url);
  return (
      <Styled.Wrapper>
      <div className="card">
        { !imgfile ? 
          <input
          type="file"
          id="detail_image"
          accept="image/*"
          onChange={({ target: { files } }) => {
            if (files.length) {
              setImageFromFile({
                file: files[0],
                setImageUrl: ({ result }) => { setImage(files[0]); setUrl(result); } });
              }
            }
          }
          /> :
          ( imgfile && 
            <div className="image_area">
              <img src={url} alt={imgfile.name} />
            </div>
          )
        }

        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </Styled.Wrapper>
  );
};

export default AddDogCard;