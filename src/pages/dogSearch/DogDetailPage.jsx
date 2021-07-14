import React, { useState, useEffect } from "react";
import { DogDetail } from "../../components";
import { getDogDetail } from "lib/api/sample";
import styled from "styled-components";
import { useRouteMatch } from "react-router";

const Styled = {
  Wrapper: styled.div`
    width: 108rem;
    margin: 18rem auto;
    display: flex;
    justify-content: center;
  `,
};

const DogDetailPage = () => {
  const [dog, setDog] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    (async () => {
      const data = await getDogDetail(match.params.id);
      setDog(data);
    })();
  }, []);

  return (
    dog &&
    (
      <Styled.Wrapper>
        <DogDetail dog={dog} />
      </Styled.Wrapper>
    )
  );
};

export default DogDetailPage;
