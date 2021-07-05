import React from "react";
import styled from 'styled-components';
import { Searchbar, AboutTakeUs, BeforeVolunteer, CarouselDogContainer, CarouselReviewContainer } from '../components';

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
