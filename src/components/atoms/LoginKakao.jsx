/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import React from 'react';
import styled from 'styled-components';
import KakaotalkIcon from 'assets/img/ic_kakaotalk.svg';
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
      right: 1rem;
    }

    .kakaotalkIcon {
      right: 1rem;
    }
  `,
};

const LoginKakao = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENTID;
  const REDIRECT_URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/oauth/callback/kakao'
      : process.env.REACT_APP_KAKAO_REDIRECT;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const LoginClickHandler = () => window.location.assign(KAKAO_AUTH_URL);

  return (
    <Styled.Button type="button" color={'#FEE500'} onClick={LoginClickHandler}>
      <img className="kakaotalkIcon" src={KakaotalkIcon} alt="kakakotalk" />
      카카오톡으로 시작하기
    </Styled.Button>
  );
};

export default withRouter(LoginKakao);
