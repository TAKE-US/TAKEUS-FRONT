import React from "react";
import styled from "styled-components";
import review_Img from "../../assets/img/review_Img.svg";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34rem;
  height: 45rem;
  border: 0.1rem solid #DFDFDF;
  border-radius: 1rem;
  img {
    width: 34.2rem;
    height: 25rem;
    border-radius: 1rem 1rem 0 0;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
    
      &__title {
        font: ${({ theme }) => theme.font.title1};
        width: 30rem;
        height: 3rem;
        margin-right: 0.6rem;
        margin-bottom: 1.2rem;
      }
      &__content {
        font: ${({ theme }) => theme.font.body2};
        width: 30rem;
        height: 10rem;
        margin-right: 0.6rem;
        line-height: 2.6rem;
      }
    }
  }

  
`;

const CarouselReviewCard = () => {
  return (
    <Card>
      <img src={review_Img} alt='review_Img' />
      <section className='cardInfo'>
        <div className='cardInfo__title'>귀여운 강아지들 안녕</div>
        <div className='cardInfo__content'>
          그렇지 않아도 부족한 입양자 중에서 믹스견, 백구, 황구는 국내 입양자가
          거의 없어 해외 입양이 유일한 방법이라고 합니다. 그런 이유로 제가...
        </div>
      </section>
    </Card>
  );
};

export default CarouselReviewCard;
