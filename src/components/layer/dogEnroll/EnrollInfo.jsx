import React, { useState } from "react";
import styled from "styled-components";
import { RadioButton, Counter, TextField, AddDogLayer, Input, Button } from "components";
// import { DogEnrollInput } from 'components';
import plusIcon from 'assets/icon/ic_plus_24.svg';

const EnrollInfoWrap = styled.section`
  .wrap {
    margin-top: 6rem;
    
    &:last-child {
      margin-bottom: 18rem;
    }
    &--flex {
      display: flex;
      align-items: center;
    }

    &.contact {
      .contact-layer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: calc(4.2rem + 2px);
        column-gap: 1.9rem;
        row-gap: 1.2rem;
        margin-top: 2.4rem;
      }
    }

    label {
      min-width: 18.2rem;
      font: ${({ theme }) => theme.font.headline};
    }
  }
  .dropdown {
    position: relative;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.gray3};
    &::after {
      content: '';
      width: 0;
      top: 0;
      right: 0;
      margin: 0 1rem;
      border-right: solid 1px ${({ theme }) => theme.color.lightgray2};
    }
  }
`;

const EnrollInfo = () => {
  const [contacts, setContacts] = useState([{ type: 'phone' }]);

  const addContact = () => {
    setContacts(contacts.concat({ type: 'kakaotalk' }));
  };

  return (
    <EnrollInfoWrap>
      <AddDogLayer />
      <div className="wrap wrap--flex">
        <label>출국정보</label>
      </div>
      <div className="wrap wrap--flex">
        <label>대상견 이름</label>
        {/* <DogEnrollInput placeholder="ex 멍멍이" maxLength="30" /> */}
        <Input placeholder="ex 멍멍이" maxLength={30} caption="30자 이내로 적어주세요." />
      </div>
      <div className="wrap wrap--flex">
        <label>대상견 성별</label>
        <RadioButton
          items={[
            { value: "여", select: true },
            { value: "남", select: false },
            { value: "선택안함", select: false },
          ]}
        />
      </div>
      <div className="wrap wrap--flex">
        <label>대상견 나이</label>
        {/* <DogEnrollInput placeholder="ex 1살 , 2개월 등" maxLength="10" /> */}
        <Input placeholder="ex 멍멍이" maxLength={10} caption="10자 이내로 적어주세요." />
      </div>
      <div className="wrap wrap--flex">
        <label>대상견 무게</label>
        <Counter />
      </div>
      <div className="wrap wrap--flex">
        <label>중성화 여부</label>
        <RadioButton
          items={[
            { value: "완료", select: true },
            { value: "미완료", select: false },
          ]}
        />
      </div>
      <div className="wrap wrap--flex">
        <label>건강상태</label>
        {/* <DogEnrollInput placeholder="ex 접종내역, 건강상태, 유의할 점 등" maxLength="50" /> */}
        <Input placeholder="ex 멍멍이" maxLength={50} caption="50자 이내로 적어주세요." />
      </div>
      <div className="wrap wrap--flex">
        <label>소속여부</label>
        <RadioButton
          items={[
            { value: "개인구조자", select: true },
            { value: "단체", select: false },
          ]}
        />
        {/* <DogEnrollInput placeholder="단체명을 입력해주세요." maxLength="15" /> */}
        <Input placeholder="ex 멍멍이" maxLength={15} caption="15자 이내로 적어주세요." />
      </div>
      <div className="wrap contact">
        <label>연락처</label>
        <div className="contact-layer">
          {contacts.map((contact, i) => (
            <Input placeholder={"연락처를 입력해 주세요"} key={`contact-${i}`}>
              <div className="dropdown">{contact.type}</div>
            </Input>
          ))}
          <div onClick={addContact}>
            <Button rounded full padding="8px 0"><img src={plusIcon} alt="plus"/>연락처 추가하기</Button>
          </div>
        </div>
      </div>
      <TextField />
      <div className="wrap">
        <Button rounded full font="headline" padding="15px">대상견 등록하기</Button>
      </div>
    </EnrollInfoWrap>
  );
};

export default EnrollInfo;
