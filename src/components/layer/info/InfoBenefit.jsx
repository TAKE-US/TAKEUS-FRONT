import React from "react";
import styled from "styled-components";
import { ReactComponent as DogIcon } from "assets/img/img_puppy.svg";
import { ReactComponent as MoneyIcon } from "assets/img/img_money.svg";
import { ReactComponent as HeartIcon } from "assets/img/img_handslove.svg";

const Styled = {
  Wrapper: styled.section`
    margin-bottom: 10rem;
    .title {
      font: ${({ theme }) => theme.font.headline};
      color: ${({ theme }) => theme.color.primary};
      &::first-letter {
        font-size: 3.2rem;
      }
    }
    .content-area {
      margin-top: 4rem;
      margin-left: 7.2rem;
      .sub-title {
        margin-bottom: 1rem;
        font: ${({ theme }) => theme.font.title2};
        color: ${({ theme }) => theme.color.darkgray1};
        line-height: 2.9rem;
      }
      .description {
        margin-bottom: 8rem;
        font: ${({ theme }) => theme.font.body3};
        color: ${({ theme }) => theme.color.gray3};
        line-height: 2.1rem;
      }

      .card-area {
        display: flex;
        justify-content: space-between;
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6.7rem 7.7rem;
          width: calc((100% / 3) - 2.75rem);
          box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
          border-radius: 10px;

          svg {
            width: 11.6rem;
            height: 12.5rem;
          }

          .desc {
            margin-top: 3.1rem;
            font: ${({ theme }) => theme.font.subheading};
            color: ${({ theme }) => theme.color.darkgray1};
            white-space: nowrap;
          }
        }
      }
    }
  `,
};
const InfoBenefit = () => {
  return (
    <Styled.Wrapper>
      <h2 className="title">Q. 이동봉사는 무엇이고 왜 필요한가요?</h2>
      <div className="content-area">
        <p className="sub-title">
          해외입양이 확정된 대상견을 해외에 있는 입양자에게 인계해주는 활동을 해외 이동봉사라고 합니다. <br />
          일체의 비용 없이 약간의 시간을 들이는 것만으로도 입양견의 소중한 첫걸음을 도울 수 있습니다.
        </p>
        <p className="description">
          강아지는 특수 화물로 분류되기 때문에 강아지 단독으로 비행기를 탑승할 경우 체고에 따라 약 200-300만원의 비용이
          발생합니다. 하지만 출국하는 승객 편에 대리 수속으로 함께 나간다면 20-60만원의 비용만 있으면 된다고 합니다.
          이동비가 최대 1/10까지 줄어드는 것이죠. 또한 봉사자 없이 아이들만 카고로 이동하게 되는 경우 이동봉사자와의
          이동에 비해 4시간 이상 켄넬에 있는 시간이 길어져 아이들이 더욱 지치고 힘들어합니다.
        </p>
        <section className="card-area">
          <article className="card">
            <MoneyIcon />
            <p className="desc">이동비 최대 1/10 감소</p>
          </article>
          <article className="card">
            <DogIcon />
            <p className="desc">입양견 켄낼 체류 시간 감소</p>
          </article>
          <article className="card">
            <HeartIcon />
            <p className="desc">입양견의 새로운 삶 응원</p>
          </article>
        </section>
      </div>
    </Styled.Wrapper>
  );
};

export default InfoBenefit;
