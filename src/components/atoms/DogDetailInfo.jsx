import React from 'react';
import styled from 'styled-components';

import LocationIcon from "../../assets/icon/Location.svg";
import CallIcon from "../../assets/icon/Call.svg";
import InstagramIcon from "../../assets/icon/Instagram.svg";
import KakaotalkIcon from "../../assets/icon/Kakaotalk.svg";
import TwitterIcon from "../../assets/icon/Twitter.svg";
import FacebookIcon from "../../assets/icon/Facebook.svg";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 62.2rem;
    height: 46.7rem;
    margin: 0rem 0rem 3.2rem 5.5rem;
  `,

  Departure: styled.section`
    display: flex;
    flex-direction: column;

    p {
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 1.2rem;
    }
    `,

  DepartureRow: styled.div`
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
      font: ${({ theme }) => theme.font.description};
      line-height: 2.2rem;
    }
  `,

  DogInfo: styled.section`
    p {
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 1.3rem;
    }

    .info--main {
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }
  `,

  DogInfoRow: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.7rem;
    width: 31.1rem;
    height: 2.9rem;
    font: ${({ theme }) => theme.font.description};
    color: ${({ theme }) => theme.color.black};
    
    img {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1.84rem;
    }
    
    p{
      font: ${({ theme }) => theme.font.description};
      color: ${({ theme }) => theme.color.gray3};
      width: 9.9rem;
    }
  `,

  Contact: styled.section`
    p {
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 1.3rem;
    }

    .contact--main {
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }

  `,

  ContactRow: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.7rem;
    width: 31.1rem;
    height: 2.9rem;
    color: ${({ theme }) => theme.color.black};

    img {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1.84rem;
    }

    p{
      font: ${({ theme }) => theme.font.description};
      line-height: 2.2rem;
    }
  `
};

function DogDetailInfo({ dogData }) {
  return (
    <Styled.Wrapper>
      <Styled.Departure>
        <p>출국 정보</p>
        <Styled.DepartureRow>
          <img src={LocationIcon} alt="card_image" />
          <p>{dogData.destination}</p>
        </Styled.DepartureRow>
      </Styled.Departure>

      <Styled.DogInfo>
        <p>대상견 정보</p>
        <div className="info--main">
          <Styled.DogInfoRow>
            <p>성별</p>{dogData.gender}
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>나이</p>{dogData.age}살
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>무게</p>{dogData.weight}kg
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>중성화</p>{dogData.neutralization}
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>건강상태</p>{dogData.vaccination}
          </Styled.DogInfoRow>
        </div>
      </Styled.DogInfo>

      <Styled.Contact>
        <p>연락처</p>
        <div className="contact--main">
          <Styled.ContactRow>
            <img src={KakaotalkIcon} alt="card_image" />
            <p>lovedog</p>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <img src={TwitterIcon} alt="card_image" />
            <p>lovedog</p>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <img src={InstagramIcon} alt="card_image" />
            <p>takers_lovedog</p>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <img src={FacebookIcon} alt="card_image" />
            <p>takers_lovedog</p>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <img src={CallIcon} alt="card_image" />
            <p>010 9292 9292</p>
          </Styled.ContactRow>
        </div>
      </Styled.Contact>
    </Styled.Wrapper>
  );
}

export default DogDetailInfo;
