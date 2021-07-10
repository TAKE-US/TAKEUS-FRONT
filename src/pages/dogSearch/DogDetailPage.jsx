import React, { useState, useEffect } from "react";
import { DogDetail } from '../../components';
import { getDogs } from "lib/api/sample";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 18rem;
    width: 100%;
    display: flex;
    justify-content: center;
  `
};
 
const DogDetailPage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDogs();
      setDogs(data);
    })();
  }, []);

 return (
   <Styled.Wrapper>
     <DogDetail dogs={dogs} />
   </Styled.Wrapper>
 );
};
 
export default DogDetailPage;