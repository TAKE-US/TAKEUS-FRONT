import React from 'react';
import styled from 'styled-components';

import LocationImg from "../../assets/img/img_Location.svg";
import CalendarImg from "../../assets/img/img_Calendar.svg";
import CallImg from "../../assets/img/img_Call.svg";
import InstagramImg from "../../assets/img/img_Instagram.svg";
import KakaotalkImg from "../../assets/img/img_Kakaotalk.svg";
import TwitterImg from "../../assets/img/img_Twitter.svg";
import FacebookImg from "../../assets/img/img_Facebook.svg";

const DetailInfoWrap = styled.div`
  width: 30rem;
  margin-left: 9.4rem;
  
  .departure {
    display: flex;
    flex-direction: column;
    margin-bottom: 6.2rem;
    p {
      margin-bottom: 1.2rem;
    }
    &--airport, &--calendar {
      display: flex;
      flex-direction: row;
      margin-top: 0.7rem;
      height: 2.9rem;
      color: ${({ theme }) => theme.color.black};
      img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.9rem;
      }
      p{
        line-height: 2.2rem;
      }
    }
  }
  .contact {
    p {
      margin-bottom: 1.3rem;
    }
    &-main {
      display: grid;
      grid-template-columns: 2;
      column-gap: 16.16rem;
    }
    &--kakaotalk {
      grid-column: 1;
      grid-row: 1;
    }
    &--instagram {
      grid-column: 1;
      grid-row: 2;
    }
    &--call {
      grid-column: 1;
      grid-row: 3;
    }
    &--twitter {
      grid-column: 2;
      grid-row: 1;
    }
    &--facebook {
      grid-column: 2;
      grid-row: 2;
    }
    &--kakaotalk, &--call, &--instagram, &--twitter, &--facebook {
      display: flex;
      flex-direction: row;
      margin-top: 0.7rem;
      height: 2.9rem;
      color: ${({ theme }) => theme.color.black};
      img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.84rem;
      }
      p{
        line-height: 2.2rem;
      }
    }
  }
  }
  .dog--description {
    width: 93.6rem;
    height: 11.2rem;
    padding: 4.8rem 7.2rem;
    text-align: left;
    background: ${({ theme }) => theme.color.bg_gray};
    font: ${({ theme }) => theme.font.description};
    border-radius: 1.7rem;
    line-height: 154%;
  }
`;

function DogDetailInfo() {
  return (
    <DetailInfoWrap>
      <div className="departure">
        <p>출국 정보</p>
        <div className="departure--airport">
          <img src={LocationImg} alt="card_image" />
          <p>어쩌고 공항, 시카고, 미국, 아메리카</p>
        </div>
        <div className="departure--calendar">
          <img src={CalendarImg} alt="card_image" />
          <p>2021년 9월 21일 ~ 10월 29일</p>
        </div>
      </div>

      <div className="contact">
        <p>연락처</p>
        <div className="contact-main">
          <div className="contact--kakaotalk">
            <img src={KakaotalkImg} alt="card_image" />
            <p>lovedog</p>
          </div>
          <div className="contact--instagram">
            <img src={InstagramImg} alt="card_image" />
            <p>takers_lovedog</p>
          </div>
          <div className="contact--call">
            <img src={CallImg} alt="card_image" />
            <p>010 9292 9292</p>
          </div>
          <div className="contact--twitter">
            <img src={TwitterImg} alt="card_image" />
            <p>lovedog</p>
          </div>
          <div className="contact--facebook">
            <img src={FacebookImg} alt="card_image" />
            <p>takers_lovedog</p>
          </div>
        </div>
      </div>
    </DetailInfoWrap>
  );
}

export default DogDetailInfo;
