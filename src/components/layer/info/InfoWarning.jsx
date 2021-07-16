import React from "react";
import styled from "styled-components";
import { ReactComponent as WarnIcon } from "assets/icon/ic_attention-triangle.svg";

const Styled = {
  Wrapper: styled.div`
    margin-left: calc(-50vw + 50%);
    margin-bottom: 10rem;
    width: 100vw;
    background-color: rgba(255, 239, 175, 0.17);

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem 0 9rem 0;

      svg {
        width: 6.6rem;
        height: 6.6rem;
      }

      .title {
        margin: 1.5rem 0 1rem 0;
        font: ${({ theme }) => theme.font.headline};
        color: ${({ theme }) => theme.color.primary};
      }

      .description {
        width: 93.6rem;
        font: ${({ theme }) => theme.font.body3};
        color: ${({ theme }) => theme.color.gray3};
        text-align: center;
        word-break: keep-all;
        line-height: 2.5rem;
        strong {
          color: ${({ theme }) => theme.color.darkgray2};
        }
      }
    }
  `,
};

const InfoWarning = () => {
  return (
    <Styled.Wrapper>
      <section className="content">
        <WarnIcon />
        <h3 className="title">이동봉사 진행 전 주의하세요!</h3>
        <p className="description">
          최근 정상적으로 서류절차를 거치지 않고 &apos;본인의 반려견으로
          등록하여 강아지를 데려가 달라&apos;는 식의 거짓말을 필요로 하는
          이동봉사자를 모집하는 경우가 있습니다. 이러한 내용의 이동봉사를 진행
          할 시 입국 심사 과정에서 봉사자에게 불이익이 생길 수도 있습니다. 특히,
          <strong>
            단체나 개인구조자가 아닌 개인이 찾는 대가성 이동봉사에 주의 하시고
            봉사자님께 불이익이 가지 않도록 Permit과 Entry Number, 검역 확인증,
            이동봉사자임을 확인하는 레터 등의 서류를 확인 하시기 바랍니다.
          </strong>
        </p>
      </section>
    </Styled.Wrapper>
  );
};

export default InfoWarning;
