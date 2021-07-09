import React from "react";
import styled from "styled-components";
import Team from "assets/img/img_AboutUsTeam.png";

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    height: 43.9rem;
    background-image: url(${Team});
    background-size: cover;
    /* opacity: 0.3; */
    background-color: ${({ theme }) => theme.color.gray1};
    padding-top: 8.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font: ${({ theme }) => theme.font.headline};
      color: ${({ theme }) => theme.color.darkgray2};
    }
    .content {
      opacity: 1;
      width: 94.5rem;
      height: 6.8rem;
      margin-top: 6.8rem;
      display: flex;
      justify-content: space-between;
      &__part {
        width: 20rem;
        display: flex;
        justify-content: space-around;
        &-name {
          font: ${({ theme }) => theme.font.subheading};
          color: #1a1a1a;
        }
        &-member {
          font: ${({ theme }) => theme.font.body2};
          display: flex;
          flex-direction: column;
          line-height: 2.5rem;
        }
      }
    }
  `,
};

const AboutUsTeam = () => {
  return (
    <Styled.Wrapper>
      <article className="title">Our Team</article>
      <article className="content">
        <section className="content__part">
          <div className="content__part-name">PLAN</div>
          <div className="content__part-member">
            <p>이남걸</p>
            <p>김진원</p>
          </div>
        </section>
        <section className="content__part">
          <div className="content__part-name">DESIGN</div>
          <div className="content__part-member">
            <p>장이주</p>
            <p>오미나</p>
          </div>
        </section>
        <section className="content__part">
          <div className="content__part-name">WEB</div>
          <div className="content__part-member">
            <p>안채린</p>
            <p>이인송</p>
            <p>박문호</p>
          </div>
          <div className="content__part-member">
            <p>최호진</p>
            <p>홍준엽</p>
          </div>
        </section>
        <section className="content__part">
          <div className="content__part-name">SERVER</div>
          <div className="content__part-member">
            <p>박정무</p>
            <p>강한희</p>
          </div>
        </section>
      </article>
    </Styled.Wrapper>
  );
};

export default AboutUsTeam;
