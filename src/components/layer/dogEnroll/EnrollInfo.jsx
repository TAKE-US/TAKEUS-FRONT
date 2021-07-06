import React from "react";
import styled from "styled-components";
import DogEnrollInput from "components/atoms/DogEnrollInput";

const EnrollInfoWrap = styled.section`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    margin-top: 5.7rem;
    label {
      min-width: 18.2rem;
      font: ${({ theme }) => theme.font.headline};
    }
  }
`;

const EnrollInfo = () => {
  return (
    <EnrollInfoWrap>
      <div>
        <label>출국정보</label>
      </div>
      <div>
        <label>대상견 이름</label>
        <DogEnrollInput placeholder="ex 멍멍이" maxLength="30" />
      </div>
      <div>
        <label>대상견 성별</label>
      </div>
      <div>
        <label>대상견 나이</label>
        <DogEnrollInput placeholder="ex 1살 , 2개월 등" maxLength="10" />
      </div>
      <div>
        <label>대상견 무게</label>
      </div>
      <div>
        <label>중성화 여부</label>
      </div>
      <div>
        <label>건강상태</label>
        <DogEnrollInput placeholder="ex 접종내역, 건강상태, 유의할 점 등" maxLength="50" />
      </div>
      <div>
        <label>소속여부</label>
        <DogEnrollInput placeholder="단체명을 입력해주세요." maxLength="15" />
      </div>
    </EnrollInfoWrap>
  );
};

export default EnrollInfo;
