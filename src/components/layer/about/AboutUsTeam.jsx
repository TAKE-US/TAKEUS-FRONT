import React from "react";
import styled from "styled-components";
import Team from "assets/img/img_AboutUsTeam.png";

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    height: 73rem;
    background-image: url(${Team});
    background-size: cover;
    padding-top: 19rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const AboutUsTeam = () => {
  return <Styled.Wrapper></Styled.Wrapper>;
};

export default AboutUsTeam;
