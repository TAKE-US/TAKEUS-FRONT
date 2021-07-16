import React from "react";
import styled from "styled-components";
import { EnrollPrecaution, EnrollInfo } from "components";

const PageStyle = styled.div`
  margin-top: 18.7rem;
  margin-bottom: 30rem;
`;

const DogEnrollPage = () => {
  return (
    <PageStyle className="dog-enroll-page">
      <EnrollPrecaution />
      <EnrollInfo />
    </PageStyle>
  );
};

export default DogEnrollPage;
