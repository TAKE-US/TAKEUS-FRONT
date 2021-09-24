import React from "react";
import styled from "styled-components";
import { EnrollPrecaution, EnrollInfo } from "components";

const PageStyle = styled.div`
  margin-top: 18.7rem;
  margin-bottom: 30rem;
`;

const DogEnrollPage = ({ edit }) => {
  return (
    <PageStyle className="dog-enroll-page">
      <EnrollPrecaution />
      <EnrollInfo edit={edit ? true : false} />
    </PageStyle>
  );
};

export default DogEnrollPage;
