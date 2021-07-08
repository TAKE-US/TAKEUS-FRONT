import React from "react";
import styled from "styled-components";
import { AboutUsTop } from "../../components";

const Styled = {
  Wrapper: styled.div`
    & > * {
      margin-bottom: 120px;
    }
  `,
};

const AboutPage = () => {
  return (
    <Styled.Wrapper>
      <AboutUsTop />
    </Styled.Wrapper>
  );
};

export default AboutPage;
