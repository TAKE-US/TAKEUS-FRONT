import React from "react";
import CarouselDogContainer from "../components/molecules/CarouselDogContainer";
import CarouselReviewContainer from "../components/molecules/CarouselReviewContainer";

import Searchbar from '../components/common/Searchbar';

const MainPage = () => {
  return (
    <>
      <Searchbar />
      <CarouselDogContainer />
      <CarouselReviewContainer />
    </>
  );
};

export default MainPage;
