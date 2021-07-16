import React from 'react';
import styled from 'styled-components';
import backgroundAboutusImg from 'assets/img/img_AboutUsTop.png';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    height: 79.9rem;
    background-image: url(${backgroundAboutusImg});
    background-size: cover;
    padding-top: 19rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
      font: ${({ theme }) => theme.font.headline};
      color: ${({ theme }) => theme.color.white};
      margin-top: 3.6rem;
      line-height: 4.1rem;
    }
    .subtitle {
      text-align: center;
      font: ${({ theme }) => theme.font.display1};
      color: ${({ theme }) => theme.color.white};
      margin-top: 0.8rem;
      line-height: 4.3rem;
    }
    .contour {
      width: 3.8rem;
      height: 0.1rem;
      background-color: ${({ theme }) => theme.color.white};
      border: 2px none;
      margin: 5.6rem 0;
    }
    .content {
      display: flex;
      height: 11.4rem;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      line-height: 2.6rem;
      font: ${({ theme }) => theme.font.body2};
      color: ${({ theme }) => theme.color.white};
      p:nth-child(2) {
        padding-top: 2.8rem;
      }
    }
  `,
};

const AboutUsTop = () => {
  return (
    <Styled.Wrapper>
      <div className="title">TAKE US, TAKERS!</div>
      <div className="subtitle">유기견들의 새로운 삶을 향한 첫 발자국을 함께합니다.</div>
      <div className="contour"></div>
      <div className="content">
        <p>TAKE US는 유기견 해외이동봉사를 보다 널리 알리자는 목적과 함께 탄생한 웹 서비스입니다.</p>
        <p>다양한 카페와 블로그, SNS 등 여러 채널에 대상견의 정보가 산개되어있는 탓에 이동봉사를 하고자 하는</p>
        <p>봉사자가 대상견의 정보를 탐색하는 것에 어려움을 겪는다는 것에서부터 착안하여 탄생하였습니다.</p>
      </div>
    </Styled.Wrapper>
  );
};

export default AboutUsTop;
