import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import locationIcon from "../../assets/img/ic_location_blue_18.svg";

const CardWrap = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  img {
    width: 25.5rem;
    height: 25.5rem;
    border-radius: 1rem;
    object-fit: cover;
  }
  .card-info {
    display: flex;
    flex-direction: ${props => (props.isMine ? "raw" : "column")};
    margin-top: ${props => (props.isMine ? "0.8rem" : "1.6rem")};
    justify-content: space-between;
    &-main {
      display: flex;
      justify-content: ${props => (props.isMine ? "flex-start" : "center")};
      align-items: center;
      &__name {
        max-width: 11.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: ${({ theme }) => theme.font.title2};
        margin-right: 0.6rem;
      }
      &__info {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #040404;
        :last-child {
          display: flex;
          justify-content: center;
          align-items: center;
          ::before {
            content: "";
            display: block;
            width: 2px;
            height: 2px;
            margin: 3px;
            border-radius: 100%;
            background-color: #040404;
          }
        }
      }
      &__location {
        display: flex;
        align-items: center;
        min-width: 6.8rem;
        height: 2.4rem;
        border: 0.1rem solid ${({ theme }) => theme.color.primary_darker};
        border-radius: 3.5rem;
        img {
          display: absolute;
          left: 0;
          width: 1.8rem;
          height: 1.8rem;
          margin-left: 1rem;
        }
        p {
          font: ${({ theme }) => theme.font.body1};
          color: ${({ theme }) => theme.color.primary_darker};
          text-align: center;
          padding-right: 1.1rem;
        }
      }
    }
    &-sub {
      text-align: center;
      margin-top: 0.9rem;
      font: ${({ theme }) => theme.font.body1};
      line-height: 2rem;
      color: ${({ theme }) => theme.color.gray3};
      max-width: 24.7rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
const DogStateTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 4.8rem;
  font: ${({ theme }) => theme.font.body1};
  background-color: ${props => (props.done ? "rgba(253,203,2,0.2)" : "rgba(115, 172, 255, 0.2)")};
  border-radius: 3.5rem;
  padding: 0 1.1rem;
  p {
    font: ${({ theme }) => theme.font.body1};
    color: ${props => (props.done ? props.theme.color.primary : props.theme.color.sky_blue)};
  }
`;

const DogCard = ({ dog, history, match }) => {
  const cardClickHandler = () => {
    history.push(`/dog/search/${dog._id}`);
  };
  const isMine = match.path === '/mypage' ? true : false;
  const airport = (dog.endingAirport || '').split(' ');
  return (
    <CardWrap onClick={cardClickHandler} isMine={isMine}>
      <img src={dog.photos.filter(v => v.length > 0)[0]} alt='' />
      {isMine ? (
        <section className='card-info'>
          <article className='card-info-main'>
            <p className='card-info-main__name'>{dog.name}</p>
            <p className='card-info-main__info'>{dog.gender === 'Male' ? '수컷' : '암컷'}</p>
            <p className='card-info-main__info'>{dog.weight + 'kg'}</p>
          </article>
          <DogStateTag done={dog.status === "waiting" ? false : true}>
            <p>{dog.status === "waiting" ? "미완료" : "완료"}</p>
          </DogStateTag>
        </section>
      ) : (
        <section className='card-info'>
          <article className='card-info-main'>
            <p className='card-info-main__name'>{dog.name}</p>
            <div className='card-info-main__location'>
              <img src={locationIcon} alt='card_image' />
              <p>{airport[0]}</p>
            </div>
          </article>
          <article className='card-info-sub'>
            <p>{dog.isInstitution ? `단체 | ${dog.institutionName}` : '개인구조자'}</p>
          </article>
        </section>
      )}
    </CardWrap>
  );
};

export default withRouter(DogCard);
