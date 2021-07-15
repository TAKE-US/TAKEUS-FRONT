import React from "react";
import styled from "styled-components";
import review_Img from "../../assets/img/review_Img.svg";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34.6rem;
  height: 45rem;
  border: 0.1rem solid #dfdfdf;
  border-radius: 1rem;
  img {
    width: 34.6rem;
    height: 25rem;
    border-radius: 1rem 1rem 0 0;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;

    &__title {
      font: ${({ theme }) => theme.font.title1};
      font-size: 1.7rem;
      width: 30rem;
      height: 3rem;
      margin-right: 0.6rem;
    }
    &__content {
      font: ${({ theme }) => theme.font.body2};
      width: 30rem;
      height: 10rem;
      margin-right: 0.6rem;
      line-height: 2.6rem;
    }
  }
`;

const CarouselReviewCard = ({ review }) => {
  const defaultText =
    "그렇지 않아도 부족한 입양자 중에서 믹스견, 백구, 황구는 국내 입양자가 거의 없어 해외 입양이 유일한 방법이라고 합니다. 그런 이유로 제가...";

  console.log(typeof review.title.length);
  return (
    <Card>
      <img
        src={
          review.crawlingData[0].image
            ? review.crawlingData[0].image
            : review_Img
        }
        alt="review_Img"
      />
      <section className="cardInfo">
        <div className="cardInfo__title">
          {review.title.length < 21
            ? review.title
            : review.title.slice(0, 21).concat("...")}
        </div>
        <div className="cardInfo__content">
          {review.crawlingData[0].desc
            ? review.crawlingData[0].desc
            : defaultText}
        </div>
      </section>
    </Card>
  );
};

export default CarouselReviewCard;
