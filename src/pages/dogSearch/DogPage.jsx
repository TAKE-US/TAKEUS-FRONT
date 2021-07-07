import React, { useEffect, useState } from "react";
import { DogCardContainer, PaginationNav, DogFilter, DogSearchNavigation } from "../../components";
import styled from "styled-components";
//api
import { getDogs } from "lib/api/sample";

const DogPageWrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  .container-div {
    padding-bottom: 9.7rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgray2};
  }
`;

const DogPage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDogs();
      setDogs(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
    <DogSearchNavigation />
      <DogFilter />
      <div className="container-div">
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav />
    </>
  );
};

export default DogPage;
