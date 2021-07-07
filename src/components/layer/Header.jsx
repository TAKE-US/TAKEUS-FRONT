import React, { useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";

import Logo_black from "../../assets/img/ic_logo_wordmark_black_small.svg";
import Logo_yellow from "../../assets/img/ic_logo_wordmark_small.svg";

const Head = {
  Wrap: styled.nav`
    position: sticky;
    top: 0;
    z-index: 15;

    .inner {
      background-color: white;
      margin-top: 3.8rem;
      margin-left: 18rem;
      margin-right: 18rem;
      padding-top: 2.3rem;
      padding-bottom: 2.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 14.4rem;
        height: 4.2rem;
        &:hover {
        cursor: pointer; 
        }
      }

      .gnb {
        display: flex;
        justify-content: space-between;
        margin-left: 10.3rem;
        margin-right: 13.1rem;
        width: 58.6rem;
      }
    }
  `,

  Content: styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    font: ${({ theme }) => theme.font.gnb};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
    color: ${props => props.isSelect && '#FDCB02'};
    ::after {
      content: "";
      display: ${props => props.isSelect ? "block" : "none"};
      background-color: ${({ theme }) => (theme.color.primary)};
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      position: relative;
      top: 0.5rem;
    }
  `,

  Login: styled.span`
    font: ${({ theme }) => theme.font.gnb};
    display: flex;
    align-items: center;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
  `,
};

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const hoverImg = useRef();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", e => {
      setIsScrolling(true);
      if (window.scrollY === 0) {
        setIsScrolling(false);
      }
    });
    console.log(isScrolling);
  }, [isScrolling]);

  return (
    <>
      {location.pathname !== "/login" && (
        <Head.Wrap>
          <div className="inner">
            <img
              src={
                location.pathname === "/"
                  ? isScrolling ? Logo_yellow : Logo_black
                  : Logo_yellow
              }
              alt=""
              onClick={() => {
                history.push("/");
              }}
              onMouseEnter={() => (hoverImg.current.src = Logo_yellow)}
              onMouseLeave={() => (hoverImg.current.src = Logo_black)}
              onScroll={() => (hoverImg.current.src = Logo_yellow)}
              ref={hoverImg}
            />
            <div className="gnb">
              <Head.Content
                isSelect={location.pathname === "/info" ? true : false}
                onClick={() => { history.push("/info"); }}
              >
                이동봉사정보
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/dogSearch" ? true : false}
                onClick={() => { history.push("/dogSearch"); }}>
                대상견 찾기
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/dogEnroll" ? true : false}
                onClick={() => { history.push("/dogEnroll"); }}>
                대상견 등록
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/review" ? true : false}
                onClick={() => { history.push("/review"); }}>
                이동봉사 후기
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/about" ? true : false}
                onClick={() => { history.push("/about"); }}>
                About us
              </Head.Content>
            </div>
            <Head.Login onClick={() => { history.push("/login"); }}>로그인·회원가입</Head.Login>
          </div>
        </Head.Wrap>
      )
      }
    </>
  );
};

export default Header;
