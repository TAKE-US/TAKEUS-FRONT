import React from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";

import Logo_black from "../../assets/img/ic_logo_small.svg";

const HeaderWrap = styled.nav`
  padding-top: 3.8rem;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 18rem;
  margin-right: 18rem;
  height: 8.8.rem;
`;

const HeaderGnb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10.3rem;
  margin-right: 13.1rem;
  width: 58.6rem;
`;

const HeaderContent = styled.span`
  font: ${({ theme }) => theme.font.gnb};
  display: flex;
  align-items: center;
`;

const HeaderLogin = styled.span`
  font: ${({ theme }) => theme.font.gnb};
  display: flex;
  align-items: center;
`;

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      {location.pathname !== "/login" && (
        <HeaderWrap>
          <HeaderInner>
            <img
              src={Logo_black}
              alt=""
              onClick={() => {
                history.push("/");
              }}
            />
            <HeaderGnb>
              <HeaderContent onClick={() => { history.push("/info"); }}>이동봉사란?</HeaderContent>
              <HeaderContent onClick={() => { history.push("/dog"); }}>대상견 탐색</HeaderContent>
              <HeaderContent onClick={() => { history.push("/dog/enroll"); }}>대상견 등록</HeaderContent>
              <HeaderContent onClick={() => { history.push("/"); }}>이동봉사 후기</HeaderContent>
              <HeaderContent onClick={() => { history.push("/contact"); }}>About us</HeaderContent>
            </HeaderGnb>
            <HeaderLogin onClick={() => { history.push("/login"); }}>로그인·회원가입</HeaderLogin>
          </HeaderInner>
        </HeaderWrap>
      )}
    </>
  );
};

export default Header;