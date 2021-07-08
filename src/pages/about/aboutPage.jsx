import React from "react";
import styled from "styled-components";
import { AboutUsTop } from "../../components";
import { AboutUsMission } from "../../components";
import { AboutUsTeam } from "../../components";
const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 120px;
    }
  `,
};

const AboutPage = () => {
  return (
    <Styled.Wrapper>
      <AboutUsTop />
      <AboutUsMission />
      <AboutUsTeam />
    </Styled.Wrapper>
  );
};

export default AboutPage;
