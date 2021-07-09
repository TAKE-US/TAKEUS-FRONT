import React from "react";
import styled from "styled-components";
//components
import { Hashtag } from "components";
//img
import dogImage from "assets/img/ReviewCard_sample.png";

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
      margin-left: 2.4rem;
    }
  `,
};

const ReviewCard = () => {
  return (
    <Styled.Wrapper>
      <section className="text">
        <section className="tags">
          {tags.map(tag => (
            <Hashtag key={tag} tag={tag} sort="card" />
          ))}
        </section>
        <article>
          <h1>[시카고 공항 정보 공유] 보람 있는 징징이 이동봉사 후기 공유합니다</h1>
          <p>
            징징이를 LA공항에 데려다 주었어요. 이렇게 데려다 주니 기분이 어쩌고 저쩌고 그랬고 뿌듯함을 많이 느꼈어요.
            다음에 또 어쩌고 공항 정보는 어쩌고 언제 도착하는게 좋구요 대기 시간은 이정도가 소요되었구요 어쩌고 저쩌고
            어쩌고 저...
          </p>
        </article>
        <section className="description">
          <p>작성일ㅣ2021.06.24 &nbsp;&nbsp;지역ㅣ시카고 &nbsp;&nbsp;봉사단체ㅣ웰컴독코리아</p>
          <div className="button-wrap">
            <button className="button-wrap__edit">수정</button>
            <button>삭제</button>
          </div>
        </section>
      </section>
      <img className="image" src={dogImage} alt="review_img" />
    </Styled.Wrapper>
  );
};

//mock data
const tags = ["이동봉사과정", "도착공항정보", "봉사국가"];

export default ReviewCard;
