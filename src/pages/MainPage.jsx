import React from "react";
import styled from 'styled-components';
import AboutTakeUs from 'components/layer/mainPage/AboutTakeUs';
import BeforeVolunteer from '../components/layer/mainPage/BeforeVolunteer';

const Styled = {
  Wrapper: styled.div`
    & > * {
      margin-bottom: 120px;
    }
  `
};

const MainPage = () => {
  return (
    <Styled.Wrapper>
      <BeforeVolunteer />
      <AboutTakeUs />
    </Styled.Wrapper>
  );
};

export default MainPage;
