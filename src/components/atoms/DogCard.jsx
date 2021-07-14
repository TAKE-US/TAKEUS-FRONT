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
    flex-direction: column;
    margin-top: 1.6rem;
    &-main {
      display: flex;
      justify-content: center;
      &__name {
        max-width: 11.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: ${({ theme }) => theme.font.title2};
        margin-right: 0.6rem;
      }
      &__location {
        display: flex;
        align-items: center;
        min-width: 7.9rem;
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

const DogCard = ({ dog, history }) => {
  const cardClickHandler = () => {
    history.push(`/dogSearch/${dog._id}`);
  };
  return (
    <CardWrap onClick={cardClickHandler}>
      <img src={dog.photos[0]} alt="" />
      <section className="card-info">
        <article className="card-info-main">
          <p className="card-info-main__name">{dog.name}</p>
          <div className="card-info-main__location">
            <img src={locationIcon} alt="card_image" />
            <p>{dog.endingAirport}</p>
          </div>
        </article>
        <article className="card-info-sub">
          <p>단체 | {dog.institutionName}</p>
        </article>
      </section>
    </CardWrap>
  );
};

export default withRouter(DogCard);
