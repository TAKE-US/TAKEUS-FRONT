import React from 'react';
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
  return (
      <Styled.Wrapper>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </Styled.Wrapper>
  );
};

export default AddDogCard;