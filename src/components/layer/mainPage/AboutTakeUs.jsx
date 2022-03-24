import React from "react";
import styled from "styled-components";
import { Button } from "components";
import { Link } from "react-router-dom";

import ClockImg from "assets/img/img_clock.svg";
import HeartImg from "assets/img/img_heart.svg";
import SearchImg from "assets/img/img_search.svg";

const Styled = {
  Wrapper: styled.div`
    .title {
      font: ${({ theme }) => theme.font.headline};
      text-align: center;
      margin-bottom: 1.6rem;
      color: #fdcb02;
    }

    p {
      font: ${({ theme }) => theme.font.body3};
      line-height: 2.1rem;
      text-align: center;
      color: #303030;
    }

    button {
      display: block;
      margin: 0 auto;
    }
  `,
  ContentArea: styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 7.2rem;
    margin-bottom: 9rem;
  `,
  Content: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24rem;

    img {
      margin-bottom: 1.8rem;
    }

    p {
      font: ${({ theme }) => theme.font.body1};
      line-height: 1.9rem;
      font-weight: 400;
      color: #6f6f6f;
      word-break: keep-all;
    }
  `,
};

const AboutTakeUs = () => {
  return (
    <Styled.Wrapper>
      <h2 className="title">ABOUT TAKE US</h2>
      <p>
        테이커스는 2021년부터 지금까지 해외로 입양이 확정된 대상견과 이동봉사자를 위한 서비스를 운영하고 있습니다.
        <br/>
        새로운 삶을 찾아 떠나는 강아지들의 여행을 테이커스와 함께 응원해주세요!
      </p>
      <Styled.ContentArea>
        <Styled.Content>
          <img src={ClockImg} alt="clock" />
          <p>
            TAKE US는 2021년부터 단체 및 개인구조자와 이동봉사자의 보다 원할한
            봉사의 진행을 위해 서비스를 운영하고 있습니다.
          </p>
        </Styled.Content>
        <Styled.Content>
          <img src={SearchImg} alt="clock" />
          <p>
            이동봉사자는 다양한 채널을 통해 대상견 정보를 탐색하는 대신
            TAKEUS에서 쉽게 대상견 정보를 탐색 할 수 있습니다.
          </p>
        </Styled.Content>
        <Styled.Content>
          <img src={HeartImg} alt="clock" />
          <p>
            단체/개인구조자는 TAKEUS를 통해 이동봉사자를 모집하는 과정에서
            들이는 시간과 수고를 줄일 수 있습니다.
          </p>
        </Styled.Content>
      </Styled.ContentArea>
      <Link to="/about">
        <Button primary rounded padding="12px 30px">
          테이커스에 문의하기
        </Button>
      </Link>
    </Styled.Wrapper>
  );
};

export default AboutTakeUs;
