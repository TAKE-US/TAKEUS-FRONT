import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";

import { ReactComponent as LogoBlack } from "../../assets/img/ic_logo_wordmark_black_small.svg";

const Head = {
  Wrap: styled.nav`
    position: sticky;
    top: ${props => ( props.isLogin || props.location !== "/") ? '0' : '-3.6rem'};
    z-index: 15;

    .aside {
      display: ${props => ( props.isLogin || props.location !== "/") ? 'none' : 'flex'};
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.color.darkgray1};
      font: ${({ theme }) => theme.font.caption};
      color: ${({ theme }) => theme.color.white};
      text-decoration: underline;
      height: 3.6rem;
    }

    .inner {
      padding: 2.3rem 9.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${props => (props.isScrolling ? "#ffffff" : "none")};
      box-shadow: ${props => props.isScrolling && "0rem 0rem 1.6rem 0.1rem rgba(0, 0, 0, 0.08)"};

      .gnb {
        display: flex;
        justify-content: space-between;
        margin-left: 18rem;
        margin-right: 42.2rem;
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
    color: ${props => props.isSelect && "#FDCB02"};
    ::after {
      content: "";
      display: ${props => (props.isSelect ? "block" : "none")};
      background-color: ${({ theme }) => theme.color.primary};
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
  const [imgHover, setImgHover] = useState(false);
  const isLogin = localStorage.getItem("token");

  const scrollHandler = () => {
    if (isLogin || location !== "/") {
      if (window.scrollY !== 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    } else {
      if (window.scrollY >= 38) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      {location.pathname !== "/login" && (
        <Head.Wrap isScrolling={isScrolling} isLogin={isLogin} location={location.pathname}>
          <aside className="aside">
            회원가입을 하시면 대상견 등록이 가능합니다:)
          </aside>
          <div className="inner">
            <LogoBlack
              onClick={() => {
                history.push("/");
              }}
              fill={(isScrolling || imgHover || location.pathname !== "/") ? "#FDCB02" : "#1A1A1A"}
              onMouseEnter={() => {
                setImgHover(true);
                hoverImg.current.style.cursor = "pointer";
              }}
              onMouseLeave={() => setImgHover(false)}
              ref={hoverImg}
            />
            <div className="gnb">
              <Head.Content
                isSelect={location.pathname === "/info" ? true : false}
                onClick={() => {
                  history.push("/info");
                }}
              >
                이동봉사정보
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/dogSearch" ? true : false}
                onClick={() => {
                  history.push("/dogSearch");
                }}
              >
                대상견 찾기
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/review" ? true : false}
                onClick={() => {
                  history.push("/review");
                }}
              >
                이동봉사 후기
              </Head.Content>
              <Head.Content
                isSelect={location.pathname === "/about" ? true : false}
                onClick={() => {
                  history.push("/about");
                }}
              >
                About us
              </Head.Content>
            </div>
            <Head.Login
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인·회원가입
            </Head.Login>
          </div>
        </Head.Wrap>
      )}
    </>
  );
};

export default Header;
