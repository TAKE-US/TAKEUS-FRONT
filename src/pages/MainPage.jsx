import React from "react";
import styled from 'styled-components';
import {
  AboutTakeUs,
  BeforeVolunteer,
  CarouselDogContainer,
  CarouselReviewContainer,
  MainNavigation,
} from '../components';

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
      <MainNavigation />
      <CarouselDogContainer />
      <CarouselReviewContainer />
      <BeforeVolunteer />
      <AboutTakeUs />
    </Styled.Wrapper>
  );
};

export default MainPage;
