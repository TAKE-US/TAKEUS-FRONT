import React from "react";
import styled from "styled-components";
//components
import { FindDogCard } from "../";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 25.5rem);
  gap: 3.9rem 2.1rem;
`;

const DogCardContainer = ({ dogs }) => {
  return (
    <Container>
      {dogs.map((dog, key) => (
        <FindDogCard key={key} dog={dog} />
      ))}
    </Container>
  );
};

export default DogCardContainer;
