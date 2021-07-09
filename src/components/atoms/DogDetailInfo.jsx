import React from 'react';
import styled from 'styled-components';

import LocationIcon from "../../assets/icon/ic_location_24.svg";
import CallIcon from "../../assets/img/img_Call.svg";
import InstagramIcon from "../../assets/img/img_Instagram.svg";
import KakaotalkIcon from "../../assets/img/img_Kakaotalk.svg";
import TwitterIcon from "../../assets/img/img_Twitter.svg";
import FacebookIcon from "../../assets/img/img_Facebook.svg";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 43%;
    margin: 0rem 0rem 3.2rem 5.5rem;
  `,

  Departure: styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;

    p {
      height: 2.3rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
    }
    `,

  DepartureRow: styled.div`
    display: flex;
    flex-direction: row;
    height: 10%;
    padding: 3% 0% 3% 0%;
    color: ${({ theme }) => theme.color.black};

    img {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1.5rem;
    }

    p{
      font: ${({ theme }) => theme.font.description};
      line-height: 2.2rem;
    }
  `,

  DogInfo: styled.section`
    margin-bottom: 10%;
    p {
      height: 2.3rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
    }

    .info--main {
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }
  `,

  DogInfoRow: styled.div`
    display: flex;
    flex-direction: row;
    width: 31.1rem;
    height: 10%;
    padding: 3% 0% 3% 0%;
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
    margin-bottom: 10%;
    p {
      height: 2.3rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
    }

    .contact--main {
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }

  `,

  ContactRow: styled.div`
    display: flex;
    flex-direction: row;
    width: 31.1rem;
    height: 10%;
    padding: 3% 0% 3% 0%;
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

function DogDetailInfo({ dog }) {
  return (
    <Styled.Wrapper>
      <Styled.Departure>
        <p>출국 정보</p>
        <Styled.DepartureRow>
          <img src={LocationIcon} alt="card_image" />
          <p>{dog.endingCountry}, {dog.endingAirport}</p>
        </Styled.DepartureRow>
      </Styled.Departure>

      <Styled.DogInfo>
        <p>대상견 정보</p>
        <div className="info--main">
          <Styled.DogInfoRow>
            <p>성별</p>{dog.gender}
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>나이</p>{dog.age}살
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>무게</p>{dog.weight}kg
          </Styled.DogInfoRow>
          
          {(dog.neutralization === true)
            ? (<Styled.DogInfoRow>
              <p>중성화</p>완료
            </Styled.DogInfoRow>)
            : (<Styled.DogInfoRow>
              <p>중성화</p>미완료
            </Styled.DogInfoRow>)}
          <Styled.DogInfoRow>
            <p>건강상태</p>{dog.health}
          </Styled.DogInfoRow>
        </div>
      </Styled.DogInfo>

      <Styled.Contact>
        <p>연락처</p>
        <div className="contact--main">
          {dog.kakaotalkId && 
            (
              <Styled.ContactRow>
                <img src={KakaotalkIcon} alt="card_image" />
                <p>{dog.kakaotalkId}</p>
              </Styled.ContactRow>
            )}
          {dog.twitter && 
            (
              <Styled.ContactRow>
                <img src={TwitterIcon} alt="card_image" />
                <p>{dog.twitter}</p>
              </Styled.ContactRow>
          )}
          {dog.instagram && 
            (
              <Styled.ContactRow>
                <img src={InstagramIcon} alt="card_image" />
                <p>{dog.instagram}</p>
              </Styled.ContactRow>
            )}
          {dog.facebook && 
            (
              <Styled.ContactRow>
                <img src={FacebookIcon} alt="card_image" />
                <p>{dog.facebook}</p>
              </Styled.ContactRow>
            )}
          {dog.phoneNumber && 
            (
              <Styled.ContactRow>
                <img src={CallIcon} alt="card_image" />
                <p>{dog.phoneNumber}</p>
              </Styled.ContactRow>
          )}
        </div>
      </Styled.Contact>
    </Styled.Wrapper>
  );
}

export default DogDetailInfo;
