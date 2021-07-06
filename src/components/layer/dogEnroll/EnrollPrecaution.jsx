import React from 'react';
import styled from 'styled-components';

const EnrollInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header{
    width:100%;
    text-align: center;
    padding: 4.8rem;
    border-bottom: 1.5px solid #DFDFDF;
    p{
      font:${({ theme }) => theme.font.display1};
    }
  }
  section{
    width:107.9rem;
    margin-top: 5.6rem;
    h3{
      font:${({ theme }) => theme.font.headline};
    }
    article{
        background: ${({ theme }) => theme.color.bg_gray} ;
        margin-top: 2.4rem;
        border-radius: 1rem;
        ul{
          list-style: disc;
          padding: 4rem 6.4rem;
          li{
            font-family: "Noto Sans KR";
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
        }
      }
  }

`;

const EnrollInfo = () => {
  return (
    <EnrollInfoWrap>
      <header>
        <p>대상견을 등록하고 봉사자를 만나세요.</p>
      </header>
      <section>
        <h3>대상견 등록 작성 요령</h3>
        <article>
          <ul>
            <li>대상견의 기본적인 정보와 함께 정확한 출국 지역(공항) 정보를 입력해주세요</li>
            <li>대상견의 건강 상태와 중성화, 접종 여부 등의 의료처치 여부에 대해 자세히 작성해주세요.</li>
            <li>봉사자분들이 알아야 할 주의 사항, 필요한 정보 등에 대해 작성해주세요</li>
            <li>영주권자, 시민권자이거나 특정 비자가 필요한 경우 해당 내용에 대해서 작성해 주세요.</li>
            <li>국가별로 특정 조건(항공사등)이 필요한 경우 이에 대해 작성해 주세요</li>
          </ul>
        </article>
      </section>
    </EnrollInfoWrap>
  );
};

export default EnrollInfo;