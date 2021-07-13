/* eslint-disable arrow-parens */
import React from "react";
import styled from "styled-components";
import LoginImg from "../../../assets/img/img_Login.png";
import NaverIcon from "../../../assets/img/ic_naver.svg";
import GoogleIcon from "../../../assets/img/ic_google.svg";
import KakaoLogin from "components/atoms/LoginKakao";
import { GoogleLogin } from "react-google-login";
//api
import { postToken } from "lib/api/sample";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: space-between;
    position: absolute;
    left: 0rem;
    width: 144rem;
    height: 102.4rem;
  `,

  Image: styled.img`
    height: 100%;
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 16.7rem;
    padding-top: 34.7rem;

    h1 {
      height: 4.9rem;
      margin-bottom: 0.7rem;
      font: ${({ theme }) => theme.font.display2};
      color: ${({ theme }) => theme.color.black};
    }

    h2 {
      height: 2.2rem;
      margin-bottom: 7rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.gray3};
    }

    .google {
      border: 1px solid #dfdfdf;
    }
  `,

  Button: styled.button`
    width: 45.2rem;
    height: 4.8rem;
    background-color: ${props => props.color};
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

    .googleIcon {
      right: 3.1rem;
    }
  `,
};

const LoginLayer = () => {
  const handleSuccess = async (token, social) => {
    console.log(token);
    const data = await postToken(token, social);
    localStorage.setItem("token", data);
    // window.open("http://localhost:3000", "_self");
  };

  // 로그인 실패 시
  const handleFailure = error => {
    console.log(error);
  };
  return (
    <Styled.Wrapper>
      <Styled.Image src={LoginImg} alt="dogs" />
      <Styled.Section>
        <h1>Takeus 시작하기</h1>
        <h2>SNS 계정으로 손쉽게 가입하고 Takers가 될 수 있어요 :)</h2>
        <KakaoLogin handleSuccess={handleSuccess} />
        <Styled.Button type="button" color={"#1EC800"}>
          <img className="naverIcon" src={NaverIcon} alt="naver" />
          네이버로 시작하기
        </Styled.Button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
          render={renderProps => (
            <Styled.Button className="google" type="button" color={"white"} onClick={renderProps.onClick}>
              <img className="googleIcon" src={GoogleIcon} alt="google" />
              구글로 시작하기
            </Styled.Button>
          )}
          onSuccess={res => handleSuccess(res.accessToken, "google")}
          onFailure={handleFailure}
        />
      </Styled.Section>
    </Styled.Wrapper>
  );
};

export default LoginLayer;
