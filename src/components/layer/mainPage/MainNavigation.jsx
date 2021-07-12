import React from 'react';
import styled from 'styled-components';

import Searchbar from 'components/atoms/Searchbar';
import backgroundBeachImg from 'assets/img/img_main_dogonthebeach.png';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 60.1rem;
    background-image: url(${backgroundBeachImg});
    background-size: cover;
    background-position: bottom center;
    padding-top: 19rem;
  `,
};

const MainNavigation = () => {
  return (
    <Styled.Wrapper>
      <Searchbar />
    </Styled.Wrapper>
  );
};

export default MainNavigation;