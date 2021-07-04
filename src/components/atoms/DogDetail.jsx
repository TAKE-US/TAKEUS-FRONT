import React from 'react';
import styled from 'styled-components';

import { Swiper } from "../../components";
import { DogDetailInfo } from '../../components';

const DogDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 107.7rem;

  .line {
    width: 100%;
    height: 0rem;
    left: 18.1rem;
    top: 14rem;
    border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
  }

  .dog
    &--title{
      p {
        font-size: 3.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.color.black};
      }
      
      &--info {
        margin: 1.5rem 1.2rem;
        font-size: 1.8rem;
        font-weight: 400;
      }
    }

    &--detail {
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
      width: 100%;
      color: ${({ theme }) => theme.color.gray3};
    }

    &--description {
      width: 93.6rem;
      height: 11.2rem;
      padding: 4.8rem 7.2rem;
      text-align: left;
      background-color: ${({ theme }) => theme.color.bg_gray};
      font: ${({ theme }) => theme.font.description};
      border-radius: 1.7rem;
      line-height: 154%;
    }

`;

function DogDetail() {
  return (
    <DogDetailWrap>
      <div className="dog--title">
        <p>멍멍이</p>
        <div className="dog--title--info">
          여 | 7살 | 9kg
        </div>
      </div>
      <div className="line"></div>
      <div className="dog--detail">
        <Swiper />
        <DogDetailInfo />
      </div>
      <div className="dog--description">
        멍멍이는 인천 남동구에서 구조된 멍멍이에요. 멍멍이는 어쩌구 저쩌고 그런 강아진데요,<br />
        좋은 기회로 해외에 입양을 가게 되었답니다. 멍멍이가 좋은 가족을 만나서 행복한 삶을 살 수 있도록 도와주세요. 도움의 손길 어<br />
        쩌구 저쩌구 저희도 어쩌구 저쩌구 멍멍이는 인천 남동구에서 구조된 멍멍이에요. 멍멍이는 어쩌구 저쩌고 그런 강아진데요, 좋은<br />
        기회로 해외에 입양을 가게 되었답니다.
      </div>
    </DogDetailWrap>
  );
}

export default DogDetail;
