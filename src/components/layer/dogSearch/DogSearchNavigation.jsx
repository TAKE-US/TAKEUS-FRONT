import React from "react";
import styled from "styled-components";

import { Searchbar } from "components";
import backgroundImg from "assets/img/img_bg_explore.png";

const Styled = {
  Wrapper: styled.section`
    .empty {
      background-color: ${({ theme }) => theme.color.white};
      height: 8.8rem;
    }

    .img {
      background: url(${backgroundImg}) center;
      background-size: cover;
      height: 24rem;
      width: 100vw;
      margin-left: calc(-50vw + 50%);

      p {
        font: ${({ theme }) => theme.font.display1};
        line-height: 4.3rem;
        color: ${({ theme }) => theme.color.black};
        text-align: center;
        padding-top: 5rem;
        padding-bottom: 2rem;
      }

      .searchbar {
        display: flex;
        margin: 0 auto;
        width: 84.6rem;
      }
    }
  `,
};

const DogSearchNavigation = () => {
  return (
    <Styled.Wrapper>
      <div className="empty"></div>
      <div className="img">
        <p>도움을 기다리는 입양견들을 만나보세요.</p>
        <div className="searchbar">
          <Searchbar />
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default DogSearchNavigation;
