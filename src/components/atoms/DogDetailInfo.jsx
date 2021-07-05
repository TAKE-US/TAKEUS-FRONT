import React from 'react';
import styled from 'styled-components';

import LocationIcon from "../../assets/icon/Location.svg";
import CalendarIcon from "../../assets/icon/Calendar.svg";
import CallIcon from "../../assets/icon/Call.svg";
import InstagramIcon from "../../assets/icon/Instagram.svg";
import KakaotalkIcon from "../../assets/icon/Kakaotalk.svg";
import TwitterIcon from "../../assets/icon/Twitter.svg";
import FacebookIcon from "../../assets/icon/Facebook.svg";

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
      grid-template-columns: repeat(2,1fr);
      column-gap: 8.4rem;
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

function DogDetailInfo({ dogData }) {
  return (
    <DetailInfoWrap>
      <section className="departure">
        <p>출국 정보</p>
        <div className="departure--airport">
          <img src={LocationIcon} alt="card_image" />
          <p>{dogData.destination}</p>
        </div>
        <div className="departure--calendar">
          <img src={CalendarIcon} alt="card_image" />
          <p>2021년 9월 21일 ~ 10월 29일</p>
        </div>
      </section>

      <section className="contact">
        <p>연락처</p>
        <div className="contact-main">
          <div className="contact--kakaotalk">
            <img src={KakaotalkIcon} alt="card_image" />
            <p>lovedog</p>
          </div>
          <div className="contact--twitter">
            <img src={TwitterIcon} alt="card_image" />
            <p>lovedog</p>
          </div>
          <div className="contact--instagram">
            <img src={InstagramIcon} alt="card_image" />
            <p>takers_lovedog</p>
          </div>
          <div className="contact--facebook">
            <img src={FacebookIcon} alt="card_image" />
            <p>takers_lovedog</p>
          </div>
          <div className="contact--call">
            <img src={CallIcon} alt="card_image" />
            <p>010 9292 9292</p>
          </div>
        </div>
      </section>
    </DetailInfoWrap>
  );
}

export default DogDetailInfo;
