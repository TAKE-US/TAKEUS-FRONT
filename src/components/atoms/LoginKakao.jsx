/* eslint-disable arrow-parens */
import React from "react";
import styled from "styled-components";
import KakaotalkIcon from "assets/img/ic_kakaotalk.svg";

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
  const kakaoApi = `https://kauth.kakao.com/oauth/authorize?response_
  type=code&client_id=f67ac346de494c1931b31d6ec8ea192e&redirect_uri=
  http://localhost:3000/signin`;

  const kakaoLoginHandler = () => {
    window.location.assign(kakaoApi);
  };

  return (
    <Styled.Button type="button" color={"#FEE500"}>
      <img
        className="kakaotalkIcon"
        src={KakaotalkIcon}
        onClick={kakaoLoginHandler}
        alt="kakakotalk"
      />
      카카오톡으로 시작하기
    </Styled.Button>
  );
};

export default LoginKakao;
