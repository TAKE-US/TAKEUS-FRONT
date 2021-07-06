import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

import {
  Swiper,
  DogDetailInfo,
  GetLinkButton
} from "../..";

const DogDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.3rem auto;
  width: 108rem;

  .goBack {
    width: 13rem;
    height: 2.4rem;
    margin-bottom: 3.2rem;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    text-align: left;
    text-decoration: underline;
    text-underline-position: under;
  }

  .line {
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
  }

  .dog {
    &--title{
      display: flex;
      flex-direction: column;
      margin: 2.7rem 0rem;
      
      h1 {
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.black};
      }

      h2 {
        margin-top: 1.8rem;
        width: 30rem;
        height: 2.6rem;
        font: ${({ theme }) => theme.font.subheading};
        color: ${({ theme }) => theme.color.darkgray1};
      }
    }

    &--detail {
      display: flex;
      flex-direction: row;
      font-size: 1.6rem;
      width: 100%;
      color: ${({ theme }) => theme.color.gray3};

      .swiperAndLink{
        display: flex;
        flex-direction: column;
      }
    }

    &--description {
      width: 101.6rem;
      height: 17.6rem;
      padding: 2.4rem 3.2rem;
      margin-bottom: 4rem;
      text-align: left;
      border: 1px solid ${({ theme }) => theme.color.lightgray1};
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.darkgray1};
      border-radius: 1.7rem;
      line-height: 154%;
    }
  }
`;

const getDogData = async () => {
  const data = await axios.get(`http://localhost:4000/data`);
  return data.data;
};

function DogDetail({ match, history }) {
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    (async () => {
      const dog = await getDogData();
      setDogData(dog[match.params.id - 1]);
    })();
  }, [match.params.id]);

  return (
    <DogDetailWrap>
      {dogData &&
        <>
          <button
            className="goBack"
            type="button"
            onClick={history.goBack}
          >
            다시 목록으로
          </button>
          <div className="line"></div>
          <header className="dog--title">
            <h1>{dogData.name}</h1>
            <h2>단체 | {dogData.organization}</h2>
          </header>
          <section className="dog--detail">
            <div className="swiperAndLink">
              <Swiper images={dogData.images} />
              <GetLinkButton />
            </div>
            <DogDetailInfo dogData={dogData} />
          </section>
          <article className="dog--description">
            {dogData.description}
          </article>
        </>
      }
    </DogDetailWrap>
  );
}

export default withRouter(DogDetail);
