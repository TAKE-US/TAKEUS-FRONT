import React from "react";
import styled from "styled-components";
//components
import { Hashtag } from "components";
//img
// import dogImage from "assets/img/ReviewCard_sample.png";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #c4c4c4;
    padding: 2.8rem 3.5rem;
    border-radius: 1rem;
    .text {
      .tags {
        display: flex;
        .hashtag {
          margin-right: 0.9rem;
        }
      }
      article {
        padding: 1.8rem 0 2.5rem 0;
        border-bottom: 1px solid #c4c4c4;
        h1 {
          font: ${({ theme }) => theme.font.headline2};
        }
        p {
          padding-top: 1.4rem;
          font: ${({ theme }) => theme.font.body3};
          line-height: 2.4rem;
          color: ${({ theme }) => theme.color.gray3};
        }
      }
      .description {
        display: flex;
        justify-content: space-between;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.color.gray2};
        padding-top: 1.3rem;
        .button-wrap {
          & > * {
            font: ${({ theme }) => theme.font.body1};
            color: ${({ theme }) => theme.color.gray2};
          }
          &__edit {
            ::after {
              content: "|";
              padding-left: 1rem;
            }
          }
        }
      }
    }
    .image {
      max-width: 21.2rem;
      min-width: 21.2rem;
      height: 21.2rem;
      object-fit: cover;
      margin-left: 2.4rem;
      border-radius: 0.6rem;
    }
  `,
};

const ReviewCard = ({ review }) => {
  return (
    <Styled.Wrapper>
      <section className="text">
        <section className="tags">
          {review.hashtags.map(tag => (
            <div className="hashtag" key={tag}>
              <Hashtag tag={tag} primary />
            </div>
          ))}
        </section>
        <article>
          <h1>{review.title}</h1>
          <p>{review.crawlingData[0].desc}</p>
        </article>
        <section className="description">
          <p>
            작성일ㅣ{review.writeDate} &nbsp;&nbsp;지역ㅣ시카고 &nbsp;&nbsp;봉사단체ㅣ{review.institutionName}
          </p>
          <div className="button-wrap">
            <button className="button-wrap__edit">수정</button>
            <button>삭제</button>
          </div>
        </section>
      </section>
      <img className="image" src={review.crawlingData[0].image} alt="review_img" />
    </Styled.Wrapper>
  );
};

export default ReviewCard;
