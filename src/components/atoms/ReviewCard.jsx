import React, { useState } from 'react';
import styled from 'styled-components';
//components
import { Hashtag, ReviewDeleteModal } from 'components';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #c4c4c4;
    padding: 2.8rem 3.5rem;
    border-radius: 1rem;
    cursor: pointer;
    .text {
      width: 100%;
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
          min-height: 8.2rem;
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
              content: '|';
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

const ReviewCard = ({ review, editHandler, deleteHandler }) => {
  const isLogin = review.user === localStorage.getItem('ID');
  const [availableImg, setAvailableImg] = useState(true);
  const formatDate = (rawDate) => {
    const [date] = rawDate.split('T');
    return `${date.replaceAll('-', '.')}`;
  };

  return (
    <Styled.Wrapper onClick={() => window.open(review.content)}>
      <section className="text">
        <section className="tags">
          {review.hashtags.map((tag) => (
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
            작성일ㅣ{formatDate(review.writeDate)} &nbsp;&nbsp;지역ㅣ{review.endingAirport.split(' ')[0]} &nbsp;&nbsp;
            {review.isInstitution}ㅣ{review.institutionName}
          </p>
          {isLogin && (
            <div className="button-wrap">
              <button className="button-wrap__edit" onClick={(evt) => editHandler(evt, review._id)}>
                수정
              </button>
              <button className="button-wrap__delete" onClick={(e) => e.stopPropagation()}>
                <ReviewDeleteModal deleteHandler={deleteHandler} id={review._id} />
              </button>
            </div>
          )}
        </section>
      </section>
      {availableImg && review?.crawlingData[0]?.image && (
        <img
          className="image"
          src={review?.crawlingData[0]?.image}
          alt="review_img"
          onError={(e) => setAvailableImg(false)}
        />
      )}
    </Styled.Wrapper>
  );
};

export default ReviewCard;
