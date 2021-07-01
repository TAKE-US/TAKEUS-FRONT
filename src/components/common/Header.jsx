import React from "react";
import { useLocation } from "react-router";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

import Logo_black from '../../assets/img/ic_logo_small.svg';

const HeaderWrap = styled.nav`
  padding-top: 3.8rem;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content : space-between;
  margin-left : 18rem;
  margin-right: 18rem;
  height: 8.8.rem;
`;

const HeaderGnb = styled.div`
  display: flex;
  justify-content : space-between;
  margin-left: 10.3rem;
  margin-right: 13.1rem;
  width: 58.6rem;
`;

const HeaderContent = styled.span`
  font: ${({ theme }) => theme.font.body2};
  display: flex;
  align-items: center;
`;

const HeaderLogin = styled.span`
  font: ${({ theme }) => theme.font.body2};
  display: flex;
  align-items: center;
`;

const Header = ({ history }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" &&
        <HeaderWrap>
          <HeaderInner>
            <img src={Logo_black} alt="" onClick={() => { history.push("/"); }} />
            <HeaderGnb>
              <HeaderContent>이동봉사란?</HeaderContent>
              <HeaderContent>대상견 탐색</HeaderContent>
              <HeaderContent>대상견 등록</HeaderContent>
              <HeaderContent>이동봉사 후기</HeaderContent>
            </HeaderGnb>
            <HeaderLogin>로그인·회원가입</HeaderLogin>
          </HeaderInner>
        </HeaderWrap>
      }
    </>

  );
};


export default withRouter(Header);