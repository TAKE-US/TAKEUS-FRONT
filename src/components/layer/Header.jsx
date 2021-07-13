import React, { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { ReactComponent as LogoBlack } from "../../assets/img/ic_logo_wordmark_black_small.svg";

const Head = {
  Notice: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.darkgray1};
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.white};
    text-decoration: underline;
    height: 3.6rem;

    a {
      &:hover {
        cursor: pointer;
      }
    }
  `,

  Wrap: styled.nav`
    position: sticky;
    top: 0px;
    z-index: 15;
    height: 8.8rem;

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 9.2rem;
      background: ${props => (props.isScrolling ? "#FFFFFF" : "transparent")};
      box-shadow: ${props => props.isScrolling && "0rem 0rem 1.6rem 0.1rem rgba(0, 0, 0, 0.08)"};
      transition: background-color .6s;
      svg {
        &:hover {
          fill: #FDCB02;
          cursor: pointer;
        }
      }
      .gnb {
        display: flex;
        justify-content: space-between;
        margin-left: 18rem;
        margin-right: 42.2rem;
        width: 58.6rem;
      }
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font: ${({ theme }) => theme.font.gnb};
    color: ${props => props.isSelect && "#FDCB02"};
    
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }

    &::after {
      content: "";
      position: relative;
      top: 0.5rem;
      display: ${props => (props.isSelect ? "block" : "none")};
      width: 0.4rem;
      height: 0.4rem;
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 50%;
    }
  `,

  Login: styled.div`
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.font.gnb};
    white-space: nowrap;
    
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
  `,
};

const Header = () => {
  const noticeElement = useRef();
  const location = useLocation();
  const history = useHistory();
  const [isScrolling, setIsScrolling] = useState(false);
  const isLogin = localStorage.getItem("token");

  const scrollHandler = useCallback(() => {
    if (isLogin) {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    } else {
      if (window.scrollY > noticeElement.current.clientHeight) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  }, [isLogin]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [scrollHandler]);


  if (location.pathname === '/login') return '';
  
  return (
    <>
      {!isLogin &&
        <Head.Notice ref={noticeElement}>
          <Link to="login" >회원가입을 하시면 대상견 등록이 가능합니다:)</Link>
        </Head.Notice>
      }
      
      <Head.Wrap isScrolling={isScrolling} isLogin={isLogin}>
        <div className="inner">
          <Link to="/">
            <LogoBlack fill={(isScrolling || location.pathname !== "/") ? "#FDCB02" : "#1A1A1A"} />
          </Link>
          <div className="gnb">
            <Head.Content
              isSelect={location.pathname === "/info"}
              onClick={() => {
                history.push("/info");
              }}
            >
              이동봉사정보
            </Head.Content>
            <Head.Content
              isSelect={location.pathname === "/dogSearch"}
              onClick={() => {
                history.push("/dogSearch");
              }}
            >
              대상견 찾기
            </Head.Content>
            <Head.Content
              isSelect={location.pathname === "/review"}
              onClick={() => {
                history.push("/review");
              }}
            >
              이동봉사 후기
            </Head.Content>
            <Head.Content
              isSelect={location.pathname === "/about"}
              onClick={() => {
                history.push("/about");
              }}
            >
              About us
            </Head.Content>
          </div>
          {isLogin ? (
            <Head.Login
              onClick={() => {
                history.push("/mypage");
              }}
            >
              내가 작성한 글
            </Head.Login>
          ) : (
            <Head.Login
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인·회원가입
            </Head.Login>
          )}
        </div>
      </Head.Wrap>
    </>
  );
};

export default Header;
