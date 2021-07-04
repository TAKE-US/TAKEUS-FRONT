/* eslint-disable arrow-parens */
import React from "react";
import styled from "styled-components";
import sampleImg from "../../assets/img/img_card_sample.svg";
import locationIcon from "../../assets/img/ic_location_blue_18.svg";

const CardWrap = styled.article`
  display: flex;
  justify-content: space-between;
  opacity: 0;
  /* width: 25%; */
  transition: transform 0.5s, opacity 0.5s, z-index 0.5s;
  transform: ${(props) => (props.prev ? "translateX(-100%)" : "")};
  transform: ${(props) => (props.next ? "translateX(100%)" : "")};
  z-index: ${(props) => (props.prev || props.next ? 800 : "")};

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    position: relative;
    z-index: 900;
  `}

  img {
    width: 25.5rem;
    height: 25.5rem;
    border-radius: 1rem;
  }
`;

const Card = styled.section`
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

const CarouselDogCard = ({ id, slicedDogs, active, prev, next }) => {
  let first = slicedDogs[0];
  let second = slicedDogs[1];
  let third = slicedDogs[2];
  let fourth = slicedDogs[3];

  return (
    <>
      <CardWrap key={id} active={active} prev={prev} next={next}>
        <Card>
          <img src={sampleImg} alt='sampleImg' />
          <section className='cardInfo'>
            <article className='cardInfo-main'>
              <p className='cardInfo-main__name'>{first.name}</p>
              <div className='cardInfo-main__location'>
                <img src={locationIcon} alt='' />
                <p>{first.location}</p>
              </div>
            </article>
            <article className='cardInfo-sub'>{first.info}</article>
          </section>
        </Card>
      </CardWrap>
      <CardWrap key={id} active={active} prev={prev} next={next}>
        <Card>
          <img src={sampleImg} alt='sampleImg' />
          <section className='cardInfo'>
            <article className='cardInfo-main'>
              <p className='cardInfo-main__name'>{second.name}</p>
              <div className='cardInfo-main__location'>
                <img src={locationIcon} alt='' />
                <p>{second.location}</p>
              </div>
            </article>
            <article className='cardInfo-sub'>{second.info}</article>
          </section>
        </Card>
      </CardWrap>
      <CardWrap key={id} active={active} prev={prev} next={next}>
        <Card>
          <img src={sampleImg} alt='sampleImg' />
          <section className='cardInfo'>
            <article className='cardInfo-main'>
              <p className='cardInfo-main__name'>{third.name}</p>
              <div className='cardInfo-main__location'>
                <img src={locationIcon} alt='' />
                <p>{third.location}</p>
              </div>
            </article>
            <article className='cardInfo-sub'>{third.info}</article>
          </section>
        </Card>
      </CardWrap>
      <CardWrap key={id} active={active} prev={prev} next={next}>
        <Card>
          <img src={sampleImg} alt='sampleImg' />
          <section className='cardInfo'>
            <article className='cardInfo-main'>
              <p className='cardInfo-main__name'>{fourth.name}</p>
              <div className='cardInfo-main__location'>
                <img src={locationIcon} alt='' />
                <p>{fourth.location}</p>
              </div>
            </article>
            <article className='cardInfo-sub'>{fourth.info}</article>
          </section>
        </Card>
      </CardWrap>
    </>
  );
};

export default CarouselDogCard;
