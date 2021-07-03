import React, { useRef } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";

import Logo_black from "../../assets/img/ic_logo_wordmark_black_small.svg";
import Logo_yellow from "../../assets/img/ic_logo_wordmark_small.svg";

const Head = {
  Wrap: styled.nav`
    position: sticky;
    top: 2.3rem;

    .inner {
      background-color: white;
      margin-top: 6.1rem;
      margin-bottom: 2.3rem;
      margin-left: 18rem;
      margin-right: 18rem;
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
    font: ${({ theme }) => theme.font.gnb};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
    color: ${props => props.value === props.location && '#FDCB02'};
    text-emphasis: filled;
    text-emphasis-style: dot;
    text-emphasis-position: under;
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

  return (
    <>
      {location.pathname !== "/login" && (
        <Head.Wrap>
          <div className="inner">
            <img
              src={
                location.pathname === "/"
                  ? Logo_black
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
                value="/info"
                location={location.pathname}
                onClick={() => { history.push("/info"); }}
              >
                이동봉사정보
              </Head.Content>
              <Head.Content
                value="/dog"
                location={location.pathname}
                onClick={() => { history.push("/dog"); }}>
                대상견 찾기
              </Head.Content>
              <Head.Content
                value="/dog/enroll"
                location={location.pathname}
                onClick={() => { history.push("/dog/enroll"); }}>
                대상견 등록
              </Head.Content>
              <Head.Content
                value="/review"
                location={location.pathname}
                onClick={() => { history.push("/review"); }}>
                이동봉사 후기
              </Head.Content>
              <Head.Content
                value="/contact"
                location={location.pathname}
                onClick={() => { history.push("/contact"); }}>
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