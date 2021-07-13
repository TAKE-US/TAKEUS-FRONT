/* eslint-disable arrow-parens */
import React from "react";
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
  // const { Kakao } = window;
  // const LoginClickHandler = () => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       if (!Kakao) {
  //         reject("There is No instance");
  //       }
  //       Kakao.Auth.login({
  //         success: (res) => {
  //           console.log("token", res);
  //           handleSuccess(res.access_token, "kakao");
  //           // history.push("/");
  //         },
  //         fail: (err) => {
  //           console.error(err);
  //         },
  //       });
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Styled.Button type="button" color={"#1EC800"}>
      <img
        className="NaverIcon"
        src={NaverIcon}
        // onClick={LoginClickHandler}
        alt="Naver"
      />
      네이버로 시작하기
    </Styled.Button>
  );
};

export default withRouter(LoginNaver);
