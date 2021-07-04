import React from "react";
import styled from 'styled-components';
import AboutTakeUs from 'components/layer/mainPage/AboutTakeUs';
import BeforeVolunteer from '../components/layer/mainPage/BeforeVolunteer';
import CarouselDogContainer from "../components/molecules/CarouselDogContainer";
import CarouselReviewContainer from "../components/molecules/CarouselReviewContainer";

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
      <CarouselDogContainer />
      <CarouselReviewContainer />
      <BeforeVolunteer />
      <AboutTakeUs />
    </Styled.Wrapper>
  );
};

export default MainPage;
