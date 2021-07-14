import React from 'react';
import styled from 'styled-components';
import BackgroundImg from 'assets/img/img_InfoHeader_background.png';
import DogImg from 'assets/img/img_InfoHeader_dog.png';
import Question1 from 'assets/img/question-1.png';
import Question2 from 'assets/img/question-2.png';
import Question3 from 'assets/img/question-3.png';
import Question4 from 'assets/img/question-4.png';

const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    margin-top: 8.8rem;
    margin-left: calc(-50vw + 50%);
    margin-bottom: 46rem;
    padding-top: 12rem;
    padding-bottom: 18.6rem;
    background: url(${BackgroundImg}) center;
    background-size: cover;

    .content-area {
        position: relative;
        width: 1080px;
        margin: 0 auto;

        .title {
          font: ${({ theme }) => theme.font.display2};
          color: #FFFFFF;
          margin-bottom: 4rem;
        }

        .description {
          font: ${({theme}) => theme.font.body3};
          color: #FFFFFF;
        }

        .qna-area {
          position: absolute;
          top: calc(100% + 2.6rem);
          margin-left: -17px;
          .qna {
            display: block;
            height: 11rem;

            &.right {
              margin-left: 34.4rem;
            }
          }
        }

        .dog-img {
          position: absolute;
          top: 0;
          right: -12.2rem;
          width: 44.4rem;
          height: 66.2rem;
        }
      }
  `,
};

const InfoHeader = () => {
  return (
    <Styled.Wrapper>
      <section className="content-area">
          <h1 className="title">
          입양이 확정된 아이들은 어떻게 해외에 있는 <br />
          평생 가족의 품에 안길 수 있을까요?
        </h1>
        <p className="description">
          국내에서 입양이 잘 이루어지지 않는 믹스견 등의 아이들은 해외입양이 이루어지곤 합니다. <br />
          운좋게 해외입양이 확정되어 안락사를 피하거나 보호소 생활에서 벗어난 아이들은 먼 바다를 건너야 해요. <br />
          이 멀고도 긴 여정을 TAKEUS와 TAKERS가 함께합니다 : )
        </p>
        <div className="qna-area">
          <img className="qna" src={Question1} alt="이동봉사 절차가 어떻게 되나요?" />
          <img className="qna right" src={Question2} alt="이동봉사를 할 때 신경 써야 하는 것은 어떤 것이 있나요?" />
          <img className="qna" src={Question3} alt="보호소/단체와는 어떻게 컨텍을 하나요?" />
          <img className="qna" src={Question4} alt="이동봉사는 왜 필요한 것인가요?" />
        </div>
        <img className="dog-img" src={DogImg} alt="dog"/>
      </section>
    </Styled.Wrapper>
  );
};

export default InfoHeader;
