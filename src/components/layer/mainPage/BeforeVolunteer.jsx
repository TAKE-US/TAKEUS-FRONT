import React from 'react';
import styled from 'styled-components';
import backgroundImg from 'assets/img/img_before_volunteer.png';

const Styled = {
  Wrapper: styled.section`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;
    padding: 117px 92px 90px 92px;
    color: #fff;

    .title {
      margin-bottom: 28px;
      font: ${({ theme }) => theme.font.display2};
    }
    .desc {
      margin-bottom: 47px;
      font: ${({ theme }) => theme.font.subheading};
      line-height: 26px;
      white-space: pre-line;
    }
  `
};
const BeforeVolunteer = () => {
  return (
    <Styled.Wrapper>
      <h2 className="title">Q. 이동봉사전, 알아두어야 할 것은 무엇인가요?</h2>
      <p className="desc">해외 이동 봉사, 처음이라 걱정 되신다구요? 걱정하지마세요!<br />
        해외이동봉사 정보와 주의사항, 테이커스가 차근차근 알려드릴게요.
      </p>
      <button>자세히보기 - 버튼은 컴포넌트!</button>
    </Styled.Wrapper>
  );
};

export default BeforeVolunteer;
