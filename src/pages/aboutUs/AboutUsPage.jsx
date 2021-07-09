import React from "react";
import styled from "styled-components";
import { AboutUsTop, AboutUsMission, AboutUsTeam, ContactUs } from "components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 10rem;
    }
  `,
};

const AboutPage = () => {
  return (
    <Styled.Wrapper>
      <AboutUsTop />
      <AboutUsMission />
      <AboutUsTeam />
      <ContactUs />
    </Styled.Wrapper>
  );
};

export default AboutPage;
