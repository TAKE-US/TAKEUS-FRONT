import React from "react";
import styled from "styled-components";
import { DogEnrollInput, RadioButton, Counter, TextField } from "components";
import Input from "components/atoms/input";

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
        <RadioButton
          items={[
            { value: "여", select: true },
            { value: "남", select: false },
            { value: "선택안함", select: false },
          ]}
        />
      </div>
      <div>
        <label>대상견 나이</label>
        <DogEnrollInput placeholder="ex 1살 , 2개월 등" maxLength="10" />
      </div>
      <div>
        <label>대상견 무게</label>
        <Counter />
      </div>
      <div>
        <label>중성화 여부</label>
        <RadioButton
          items={[
            { value: "완료", select: true },
            { value: "미완료", select: false },
          ]}
        />
      </div>
      <div>
        <label>건강상태</label>
        <DogEnrollInput placeholder="ex 접종내역, 건강상태, 유의할 점 등" maxLength="50" />
      </div>
      <div>
        <label>소속여부</label>
        <RadioButton
          items={[
            { value: "개인구조자", select: true },
            { value: "단체", select: false },
          ]}
        />
        <DogEnrollInput placeholder="단체명을 입력해주세요." maxLength="15" />
      </div>

      {/* 준엽님이 작업할 부분 */}
      <Input placeholder={"test"} description={"최대 10 글자"} max={10} childPos={"left"}>
        <div>dropdown slot</div>
      </Input>
      <Input placeholder={"test"} description={"최대 10 글자"} max={10} childPos={"right"}>
        <div>dropdown slot</div>
      </Input>
      {/* 준엽님이 작업할 부분 */}

      <TextField />
    </EnrollInfoWrap>
  );
};

export default EnrollInfo;
