import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router";

import Searchbar from 'components/atoms/Searchbar';
import RegisterDefault from 'assets/img/btn_register_default.svg';
import RegisterHover from 'assets/img/btn_register_hover.svg';
import backgroundImg from 'assets/img/img_bg_explore.png';

const Styled = {
  Wrapper: styled.section`
  
    .empty {
      background-color: ${({ theme }) => theme.color.white};
      height: 14.6rem;
    }
    
    .img {
      background-image: url(${backgroundImg});
      height: 24rem;
      width: 100vw;
      margin-left: calc(-50vw + 50%);

      p {
        font: ${({ theme }) => theme.font.display2};
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
    };
  `,

  Button: styled.button`
  
  `,
};

const DogSearchNavigation = () => {
  const buttonRef = useRef(null);
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <div className="empty"></div>
      <div className="img">
        <p>도움을 기다리는 입양견들을 만나보세요.</p>
        <div className="searchbar">
          <Searchbar />
          <Styled.Button>
            <img
              src={RegisterDefault}
              alt=""
              ref={buttonRef}
              onMouseEnter={() => buttonRef.current.src = RegisterHover}
              onMouseLeave={() => buttonRef.current.src = RegisterDefault}
              onClick={() => history.push("/dogEnroll")}
            />
          </Styled.Button>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default DogSearchNavigation;