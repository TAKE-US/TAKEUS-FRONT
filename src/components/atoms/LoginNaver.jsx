/* eslint-disable arrow-parens */
import React, { useEffect } from "react";
import styled from "styled-components";
import NaverIcon from "../../assets/img/ic_naver.svg";
import { withRouter } from "react-router-dom";

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

    .naverIcon {
      right: 2.4rem;
    }
  `,
};

const LoginNaver = ({ handleSuccess }) => {
  const API = "http://13.124.44.122";
  const { naver } = window;
  const Makelogin = () => {
    Naver();
    UserProfile();
  };

  useEffect(Makelogin, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "6R8wLk9Dd9xVp9RDilRh",
      callbackUrl: "http://localhost:3000/",
      isPopup: true,
      loginButton: { color: "green", type: 1, height: 30 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const UserProfile = () => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("token :", token);
      fetch(`${API}/account/sign-in`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("access_token", res.token);
        })
        .catch((err) => console.log("err : ", err));
    }
  };

  return (
    <Styled.Button type="button" color={"#1EC800"}>
      <img
        className="NaverIcon"
        src={NaverIcon}
        // onClick={Makelogin}
        alt="Naver"
      />
      네이버로 시작하기
    </Styled.Button>
  );
};

export default withRouter(LoginNaver);
