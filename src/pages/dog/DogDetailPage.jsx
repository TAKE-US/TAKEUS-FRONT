import React from "react";
import styled from 'styled-components';
import { Swiper } from "../../components";

import LocationImg from "../../assets/img/img_Location.svg";
import CalendarImg from "../../assets/img/img_Calendar.svg";
import CallImg from "../../assets/img/img_Call.svg";
import InstagramImg from "../../assets/img/img_Instagram.svg";
import KakaotalkImg from "../../assets/img/img_Kakaotalk.svg";
import TwitterImg from "../../assets/img/img_Twitter.svg";
import FacebookImg from "../../assets/img/img_Facebook.svg";

const DogDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 180px;
  .dog--title {
    display: flex;
    flex-direction: row;
    font-size: 32px;
    color: #000000;
    font-weight: 700;
    &--info {
      margin: 15px 12px;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .line {
    position: absolute;
    width: 1077px;
    height: 0px;
    left: 181px;
    top: 140px;
    border: 1px solid #DFDFDF;
  }
  .dog--detail {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    width 100%;
    color: #6F6F6F;
    margin: 60px 0px;

    .details {
      margin: 0px 94px 37px 94px;

      .departure {
        display: flex;
        flex-direction: column;
        margin-bottom: 62px;
        
        p {
          margin-bottom: 12px;
        }

        &--airport, &--calendar {
          display: flex;
          flex-direction: row;
          margin-top: 7px;
          height: 29px;
          color: #000000;

          img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }

          p{
            line-height: 22px;
          }
        }
      }

      .contact {
        p {
          margin-bottom: 13px;
        }
        &-main {
          display: grid;
          grid-template-columns: 2;
          column-gap: 161.6px;
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
          margin-top: 7px;
          height: 29px;
          color: #000000;

          img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }

          p{
            line-height: 22px;
          }
        }
      }
    }
  }
  
  .dog--description {
    width: 936px;
    height: 112px;
    padding: 48px 72px;
    font-size: 18px;
    text-align: left;
    background: #F8F8F8;
    border-radius: 17px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 154%;
  }
`;

const DogDetailPage = () => {
  return (
    <DogDetailWrap>
      <div className="dog--title">
        멍멍이
        <div className="dog--title--info">
          여 | 7살 | 9kg
        </div>
      </div>
      <div className="line"></div>
      <div className="dog--detail">
        <Swiper />
        <div className="details">
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
        </div>
      </div>
      <div className="dog--description">
        멍멍이는 인천 남동구에서 구조된 멍멍이에요. 멍멍이는 어쩌구 저쩌고 그런 강아진데요,<br />
        좋은 기회로 해외에 입양을 가게 되었답니다. 멍멍이가 좋은 가족을 만나서 행복한 삶을 살 수 있도록 도와주세요. 도움의 손길 어<br />
        쩌구 저쩌구 저희도 어쩌구 저쩌구 멍멍이는 인천 남동구에서 구조된 멍멍이에요. 멍멍이는 어쩌구 저쩌고 그런 강아진데요, 좋은<br />
        기회로 해외에 입양을 가게 되었답니다.
      </div>
    </DogDetailWrap>
  );
};

export default DogDetailPage;
