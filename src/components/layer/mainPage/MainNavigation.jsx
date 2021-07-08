import React from 'react';
import styled from 'styled-components';

import Searchbar from 'components/atoms/Searchbar';
import backgroundBeachImg from 'assets/img/img_main_dogonthebeach.png';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 63.7rem;
    background-image: url(${backgroundBeachImg});
    background-size: cover;
    background-position: bottom center;
    padding-top: 19rem;

    .text {
      text-align: center;
      font: ${({ theme }) => theme.font.body2};
      color: ${({ theme }) => theme.color.gray3};
      margin-top: 3.6rem;
      line-height: 2.6rem;
    }
  `,
};

const MainNavigation = () => {
  return (
    <Styled.Wrapper>
      <Searchbar />
      <p className="text">
        새로운 삶을 찾아 먼 바다를 건너야하는 생명에게 <br />
        새로운 삶을 선물해주는 이들을 우리는 Takers라고 부릅니다.
      </p>
    </Styled.Wrapper>
  );
};

export default MainNavigation;