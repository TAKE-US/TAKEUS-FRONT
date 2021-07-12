/* eslint-disable arrow-parens */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KakaotalkIcon from "assets/img/ic_kakaotalk.svg";
import { withRouter, useHistory } from "react-router-dom";

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
  const { Kakao } = window;
  const [isLogin, setLogin] = useState(false);
  const history = useHistory();
  console.log(isLogin);
  const LoginClickHandler = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("There is No instance");
        }
        Kakao.Auth.login({
          success: (res) => {
            localStorage.setItem("token", res.access_token);
            setLogin(true);
            history.push("/");
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (Kakao.Auth.getAccessToken()) {
      setLogin(true);
    }
  }, [Kakao.Auth]);

  return (
    <Styled.Button type="button" color={"#FEE500"}>
      <img
        className="kakaotalkIcon"
        src={KakaotalkIcon}
        onClick={LoginClickHandler}
        alt="kakakotalk"
      />
      카카오톡으로 시작하기
    </Styled.Button>
  );
};

export default withRouter(LoginKakao);
