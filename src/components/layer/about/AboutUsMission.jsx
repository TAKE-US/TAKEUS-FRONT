import React from "react";
import styled from "styled-components";
import Missionimg from "assets/img/img_AboutUsMission.png";
const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    height: 73rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      padding: 0 18rem;
    }
    .title {
      width: 90%;
      display: flex;
      justify-content: space-between;
      &__main {
        width: 16.3rem;
        height: 4.1rem;
        font: ${({ theme }) => theme.font.headline};
        color: ${({ theme }) => theme.color.darkgray1};
      }
      &__contour {
        width: 0.2rem;
        height: 4.2rem;
        background-color: #dfdfdf;
      }
      &__sub {
        width: 81.5rem;
        height: 5.2rem;
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.darkgray1};
        line-height: 2.3rem;
      }
    }
    .contents {
      width: 100%;
      margin-top: 8.8rem;
      padding-left: 26rem;
      display: flex;
      img {
        width: 62.1rem;
        height: 36.4rem;
      }
      &__right {
        width: 41.8rem;
        height: 36.4rem;
        padding-left: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top {
          width: 41.8rem;
          height: 12.6rem;
          &__title {
            font: ${({ theme }) => theme.font.body2};
            color: ${({ theme }) => theme.color.darkgray2};
          }
          &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 41.8rem;
            height: 10rem;
            font: ${({ theme }) => theme.font.body2};
            color: ${({ theme }) => theme.color.gray2};
            line-height: 2.4rem;
          }
        }
        .bottom {
          width: 41.8rem;
          height: 12.6rem;
          &__title {
            font: ${({ theme }) => theme.font.body2};
            color: ${({ theme }) => theme.color.darkgray2};
          }
          &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 41.8rem;
            height: 10rem;
            font: ${({ theme }) => theme.font.body2};
            color: ${({ theme }) => theme.color.gray2};
            line-height: 2.4rem;
          }
        }
      }
    }
  `,
};

const AboutUsMission = () => {
  return (
    <Styled.Wrapper>
      <article className="title">
        <section className="title__main">Our Mission</section>
        <section className="title__contour"></section>
        <section className="title__sub">
          우리의 목표는 이동봉사를 하고자하는 봉사자도, 봉사를 요하는 대상견도
          있지만 정보가 닿지 못해 이동봉사가
          <br /> 진행되지 못하는 일이 없게 하는 것입니다.
        </section>
      </article>
      <article className="contents">
        <img src={Missionimg} alt="DogImgage" />
        <section className="contents__right">
          <div className="top">
            <div className="top__title">이동봉사를 원하는 봉사자</div>
            <div className="top__content">
              이동봉사를 원하는 봉사자는 출국 예정지역에 따라 이동봉사 대상견의
              정보를 쉽게 탐색할 수 있고, 주의사항이나 후기와 같은 정보를
              간편하게 얻을 수 있습니다.
            </div>
          </div>
          <div className="bottom">
            <div className="bottom__title">
              봉사자를 찾고자 하는 단체 및 개인 봉사자
            </div>
            <div className="bottom__content">
              봉사자를 찾고자 하는 단체 및 개인 봉사자는 다양한 채널에 봉사자
              모집 게시물을 게시하던 기존의 방식 대신 TAKE US를 통해 봉사자를
              모집하여 시간과 수고를 덜 수 있습니다.
            </div>
          </div>
        </section>
      </article>
    </Styled.Wrapper>
  );
};

export default AboutUsMission;
