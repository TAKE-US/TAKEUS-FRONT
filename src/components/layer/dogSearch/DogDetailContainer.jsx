import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import DeleteIcon from '../../../assets/icon/Delete.svg';
import EditIcon from '../../../assets/icon/Edit.svg';

import {
  Swiper,
  DogDetailInfo,
  GetLinkButton
} from "../..";

const DogDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto;
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

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    &--post {
      margin-top: 2.4rem;
      display: flex;
      flex-direction: row;

      .delete, .edit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 8.6rem;
        height: 4rem;
        border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
        box-sizing: border-box;
        border-radius: 0.8rem;
        font: ${({ theme }) => theme.font.button_middle};

        div {
          width: 3rem;
          height: 1.5rem;
        }
      }

      .edit {
        margin-right: 0.8rem;
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
      line-height: 1rem;
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
          <header>
            <div className="dog--title">
              <h1>{dogData.name}</h1>
              <h2>단체 | {dogData.organization}</h2>
            </div>
            <div className="dog--post">
              <button className="edit">
                <img src={EditIcon} alt="edit"></img>
                <div>수정</div>
              </button>
              <button className="delete">
                <img src={DeleteIcon} alt="delete"></img>
                <div>삭제</div>
              </button>
            </div>
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
