import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LocationIcon } from 'assets/icon/ic_location_24.svg';
import { ReactComponent as CallIcon } from 'assets/icon/ic_Call.svg';
import { ReactComponent as InstagramIcon } from 'assets/icon/ic_Instagram.svg';
import { ReactComponent as KakaotalkIcon } from 'assets/icon/ic_Kakaotalk.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon/ic_Twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icon/ic_Facebook.svg';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 56.5%;
    margin-left: 5.5%;
  `,

  Departure: styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 5.5%;

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

    p {
      margin-left: 1rem;
      font: ${({ theme }) => theme.font.description};
      line-height: 150%;
    }
  `,

  DogInfo: styled.section`
    margin-bottom: 5.5%;

    p {
      height: 2.3rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
    }

    .info--main {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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

    p {
      font: ${({ theme }) => theme.font.description};
      color: ${({ theme }) => theme.color.gray3};
      width: 9.9rem;
    }
  `,

  Contact: styled.section`
    margin-bottom: 5.5%;

    p {
      height: 2.3rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.black};
    }

    .contact--main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  `,

  ContactRow: styled.div`
    display: flex;
    flex-direction: row;
    width: 31.1rem;
    height: 10%;
    padding: 3% 0% 3% 0%;
    color: ${({ theme }) => theme.color.black};

    p {
      margin-left: 2rem;
      font: ${({ theme }) => theme.font.description};
      line-height: 150%;
    }
  `,
};

function DogDetailInfo({ dog }) {
  return (
    <Styled.Wrapper>
      <Styled.Departure>
        <p>출국 정보</p>
        <Styled.DepartureRow>
          <LocationIcon width="23" height="23" />
          <p>
            {dog.endingCountry}, {dog.endingAirport}
          </p>
        </Styled.DepartureRow>
      </Styled.Departure>

      <Styled.DogInfo>
        <p>대상견 정보</p>
        <div className="info--main">
          <Styled.DogInfoRow>
            <p>성별</p>
            {dog.gender}
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>나이</p>
            {dog.age}
          </Styled.DogInfoRow>
          <Styled.DogInfoRow>
            <p>무게</p>
            {dog.weight}kg
          </Styled.DogInfoRow>

          {dog.neutralization === true ? (
            <Styled.DogInfoRow>
              <p>중성화</p>완료
            </Styled.DogInfoRow>
          ) : (
            <Styled.DogInfoRow>
              <p>중성화</p>미완료
            </Styled.DogInfoRow>
          )}

          <Styled.DogInfoRow>
            <p>건강상태</p>
            {dog.health}
          </Styled.DogInfoRow>
        </div>
      </Styled.DogInfo>

      <Styled.Contact>
        <p>연락처</p>
        <div className="contact--main">
          {dog.kakaotalkId && (
            <Styled.ContactRow>
              <KakaotalkIcon width="21" height="21" fill="black" />
              <p>{dog.kakaotalkId}</p>
            </Styled.ContactRow>
          )}
          {dog.twitter && (
            <Styled.ContactRow>
              <TwitterIcon width="21" height="21" />
              <p>{dog.twitter}</p>
            </Styled.ContactRow>
          )}
          {dog.instagram && (
            <Styled.ContactRow>
              <InstagramIcon width="21" height="21" />
              <p>{dog.instagram}</p>
            </Styled.ContactRow>
          )}
          {dog.facebook && (
            <Styled.ContactRow>
              <FacebookIcon width="21" height="21" />
              <p>{dog.facebook}</p>
            </Styled.ContactRow>
          )}
          {dog.phoneNumber && (
            <Styled.ContactRow>
              <CallIcon width="21" height="21" />
              <p>{dog.phoneNumber}</p>
            </Styled.ContactRow>
          )}
        </div>
      </Styled.Contact>
    </Styled.Wrapper>
  );
}

export default DogDetailInfo;
