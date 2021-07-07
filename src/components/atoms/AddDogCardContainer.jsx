/* eslint-disable default-case */
import React, {useState} from 'react';
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
    }
  `
};


const AddDogCardContainer = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <Styled.Wrapper>
      {count === 0 ? 
        <>
          <AddDogCard count={count} setCount={setCount} />
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </> : ( count === 1 ?
          <>
            <AddDogCard count={count} setCount={setCount} />
            <AddDogCard count={count} setCount={setCount} />
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </> : (count === 2 ?
            <>
              <AddDogCard count={count} setCount={setCount} />
              <AddDogCard count={count} setCount={setCount} />
              <AddDogCard count={count} setCount={setCount} />
              <div className="card"></div>
              <div className="card"></div>
            </> : (
              count === 3 ? 
              <>
                <AddDogCard count={count} setCount={setCount} />
                <AddDogCard count={count} setCount={setCount} />
                <AddDogCard count={count} setCount={setCount} />
                <AddDogCard count={count} setCount={setCount} />
                <div className="card"></div>
                </> : <>
                  <AddDogCard count={count} setCount={setCount} />
                  <AddDogCard count={count} setCount={setCount} />
                  <AddDogCard count={count} setCount={setCount} />
                  <AddDogCard count={count} setCount={setCount} />
                  <AddDogCard count={count} setCount={setCount} />
                </>
            )
          )
        )
      }
        
        
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
