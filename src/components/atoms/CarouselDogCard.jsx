/* eslint-disable arrow-parens */
import React from "react";
import styled from "styled-components";
import sampleImg from "../../assets/img/img_card_sample.svg";
import locationIcon from "../../assets/img/ic_location_blue_18.svg";

const Card = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
  img {
    width: 25.5rem;
    height: 25.5rem;
    border-radius: 1rem;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
    &-main {
      display: flex;
      justify-content: center;
      &__name {
        font: ${({ theme }) => theme.font.title2};
        margin-right: 0.6rem;
      }
      &__location {
        display: flex;
        align-items: center;
        width: 7.9rem;
        height: 2.4rem;
        border: 0.1rem solid ${({ theme }) => theme.color.primary_darker};
        border-radius: 3.5rem;
        img {
          width: 1.8rem;
          height: 1.8rem;
          margin-left: 1rem;
        }
        p {
          font: ${({ theme }) => theme.font.body1};
          color: ${({ theme }) => theme.color.primary_darker};
        }
      }
    }
    &-sub {
      text-align: center;
      margin-top: 0.9rem;
      font: ${({ theme }) => theme.font.body1};
      line-height: 2rem;
      color: ${({ theme }) => theme.color.gray3};
    }
  }
`;

const CarouselDogCard = ({ item }) => {
  return (
    <Card>
      <img src={sampleImg} alt='sampleImg' />
      <section className='cardInfo'>
        <article className='cardInfo-main'>
          <p className='cardInfo-main__name'></p>
          <div className='cardInfo-main__location'>
            <img src={locationIcon} alt='' />
            <p>{item.location}</p>
          </div>
        </article>
        <article className='cardInfo-sub'>{item.info}</article>
      </section>
    </Card>
  );
};

export default CarouselDogCard;
