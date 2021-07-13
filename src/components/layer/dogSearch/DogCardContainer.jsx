import React from "react";
import styled from "styled-components";
//components
import { DogCard } from "components";

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 25.5rem);
  gap: 3.9rem 2.1rem;
  margin-top: 2.8rem;
`;

const DogCardContainer = ({ dogs }) => {
  return (
    <Wrapper>
      <Container>
        {dogs?.map(dog => (
          <DogCard key={dog.id} id={dog.id} dog={dog} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default DogCardContainer;
