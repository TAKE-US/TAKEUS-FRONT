/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import React from 'react';
import styled from 'styled-components';
import NaverIcon from 'assets/img/ic_naver.svg';
import { withRouter } from 'react-router-dom';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: space-between;
    position: absolute;
    left: 0rem;
    width: 144rem;
    height: 102.4rem;
  `,

  Button: styled.button`
    width: 45.2rem;
    height: 4.8rem;
    background-color: ${(props) => props.color};
    border-radius: 2.1rem;
    padding-left: 1rem;
    margin-bottom: 1.7rem;
    color: #363636;
    font: ${({ theme }) => theme.font.gnb};
    line-height: 3rem;

    img {
      position: relative;
      top: 0.4rem;
      right: 2rem;
    }

    .kakaotalkIcon {
      right: 1rem;
    }
  `,
};

const LoginNaver = () => {
  const CALLBACK_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/oauth/callback/naver'
      : process.env.REACT_APP_NAVER_REDIRECT;

  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENTID}&state=${process.env.REACT_APP_NAVER_STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
  const LoginClickHandler = () => window.location.assign(NAVER_AUTH_URL);

  return (
    <Styled.Button type="button" color={'#1EC800'} onClick={LoginClickHandler}>
      <img className="naverIcon" src={NaverIcon} alt="naverLogin" />
      네이버로 시작하기
    </Styled.Button>
  );
};

export default withRouter(LoginNaver);
