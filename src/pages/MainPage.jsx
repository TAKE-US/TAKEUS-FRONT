import React from "react";
import styled from 'styled-components';
import AboutTakeUs from '../components/layer/mainPage/AboutTakeUs';
import BeforeVolunteer from '../components/layer/mainPage/BeforeVolunteer';
import CarouselDogContainer from "../components/layer/mainPage/CarouselDogContainer";
import CarouselReviewContainer from "../components/layer/mainPage/CarouselReviewContainer";
import Searchbar from '../components/common/Searchbar';

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
      <Searchbar />
      <CarouselDogContainer />
      <CarouselReviewContainer />
      <BeforeVolunteer />
      <AboutTakeUs />
    </Styled.Wrapper>
  );
};

export default MainPage;
