import React from "react";
import styled from "styled-components";
//components
import { EnrollPrecaution, EnrollInfo } from "components";

const PageWrap = styled.section`
  margin-top: 14rem;
`;

const DogEnrollPage = () => {
  return (
    <PageWrap>
      <EnrollPrecaution />
      <EnrollInfo />
    </PageWrap>
  );
};

export default DogEnrollPage;
