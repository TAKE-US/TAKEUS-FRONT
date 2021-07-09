import React, { useState } from "react";
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
  const [count, setCount] = useState(0);
  const full = Array.from({ length: count + 1 }, () => 0);
  const empty = Array.from({ length: 4 - count }, () => 0);

  return (
    <Styled.Wrapper>
      <>
        {full.map((_, i) =>
          full.length !== 6 || i !== 5 ? (
            <AddDogCard key={i} count={count} setCount={setCount} />
          ) : null
        )}
        {empty.map((_, i) => (
          <div className="card" key={i}></div>
        ))}
      </>
    </Styled.Wrapper>
  );
};

export default AddDogCardContainer;
