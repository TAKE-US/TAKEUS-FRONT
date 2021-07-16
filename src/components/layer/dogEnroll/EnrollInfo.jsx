/* eslint-disable max-len */
/* eslint-disable arrow-parens */

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  RadioButton,
  Counter,
  TextField,
  AddDogLayer,
  Input,
  Button,
  EnrollSearchbar,
  Dropdown,
} from "components";
import { ReactComponent as Kakao } from "assets/icon/ic_kakao_24.svg";
import { ReactComponent as Call } from "assets/icon/ic_call_24.svg";
import { ReactComponent as Instagram } from "assets/icon/ic_instar_24.svg";
import { ReactComponent as Twitter } from "assets/icon/ic_twitter_24.svg";
import { ReactComponent as Facebook } from "assets/icon/ic_facebook_24.svg";
import { ReactComponent as Plus } from "assets/icon/ic_plus_24.svg";
import useEnrollData from "hooks/useEnrollData";
import { postEnroll } from "lib/api/sample";
import { withRouter } from "react-router-dom";

const EnrollInfoWrap = styled.section`
  .wrap {
    margin-top: 6rem;
    padding: 0 12rem;
    height: 3.2rem;
    label {
      min-width: 15.2rem;
      font: ${({ theme }) => theme.font.title2};
    }

    &:last-child {
      margin-top: 8rem;
      margin-bottom: 18rem;
    }
    &--flex {
      display: flex;
      align-items: center;
    }

    &--add {
      width: 100%;
      height: 20rem;
    }
    &.contact {
      .contact-layer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 3.2rem;
        column-gap: 1.9rem;
        row-gap: 1.2rem;
        margin-top: 2.4rem;
      }
      .contact__btn {
        svg {
          width: calc(2.4rem - 0.2rem);
          height: calc(2.4rem - 0.2rem);
          margin-right: 0.8rem;
          stroke: ${({ theme }) => theme.color.primary};
        }
        &:hover {
          svg {
            stroke: ${({ theme }) => theme.color.white};
          }
        }
      }
    }
  }
  .dropdown {
    position: relative;
    display: flex;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.gray3};
    &::after {
      content: "";
      width: 0;
      top: 0;
      right: 0;
      margin: 0 1rem;
      border-right: solid 1px ${({ theme }) => theme.color.lightgray2};
    }
  }
`;

const ContactsList = [
  {
    img: <Kakao />,
    type: "카카오톡",
  },
  {
    img: <Call />,
    type: "전화번호",
  },
  {
    img: <Instagram />,
    type: "인스타그램",
  },
  {
    img: <Twitter />,
    type: "트위터",
  },
  {
    img: <Facebook />,
    type: "페이스북",
  },
];

const EnrollInfo = ({ history }) => {
  const [enrollData, setEnrollData] = useEnrollData({});
  const [dropArray, setDrop] = useState([]);
  const [contacts, setContacts] = useState([{ type: "phone", value: "" }]);
  const [createdContact, setCreatedContact] = useState({});
  const [createImage, setCreateImage] = useState([]);

  const setEnrollDataCallback = useCallback(
    (name, value) => {
      setEnrollData(name, value);
    },
    [setEnrollData]
  );
  const onDrop = (dropArray, value, id) => {
    if (dropArray.key === id) {
      setDrop(
        Array.from(dropArray).map(val =>
          val.id === id ? { key: id, type: value } : val
        )
      );
    } else {
      setDrop(dropArray => dropArray.concat({ key: id, type: value }));
    }
  };
  const addContact = e => {
    e.preventDefault();
    setContacts(contacts.concat({ type: "kakaotalk", value: "" }));
  };

  useEffect(() => {
    if (Object.keys(createdContact).length !== 0) {
      setEnrollData(
        Object.keys(createdContact),
        ...Object.values(createdContact)
      );
    }
  }, [createdContact, setEnrollData]);

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("endingCountry", enrollData.endingCountry);
    formData.append("endingAirport", enrollData.endingAirport);
    formData.append("name", enrollData.name);
    formData.append("gender", enrollData.gender);
    formData.append("age", enrollData.age);
    formData.append("weight", enrollData.weight);
    formData.append(
      "neutralization",
      enrollData?.neutralization === "완료" ? true : false
    );
    formData.append("health", enrollData.health);
    formData.append(
      "isInstitution",
      enrollData?.isInstitution === "단체" ? true : false
    );
    formData.append("institutionName", enrollData?.institutionName);
    formData.append("kakaotalkId", enrollData?.카카오톡);
    formData.append("phoneNumber", enrollData?.전화번호);
    formData.append("facebook", enrollData?.카카오톡);
    formData.append("instagram", enrollData?.인스타그램);
    formData.append("twitter", enrollData?.트위터);
    formData.append("detail", enrollData?.detail);
    for (let i = 0; i < Array.from(createImage).length; i++) {
      formData.append("photos", createImage[i]["image"]);
    }
    await postEnroll(formData);
    history.push("/dog/search");
  };

  console.log(enrollData);
  console.log(createdContact);
  return (
    <EnrollInfoWrap>
      <form onSubmit={handleSubmit}>
        <div className="wrap wrap--add">
          <AddDogLayer
            createImage={createImage}
            setCreateImage={setCreateImage}
            setEnrollData={setEnrollDataCallback}
            name="photos"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>출국정보</label>
          <EnrollSearchbar enroll setEnrollData={setEnrollDataCallback} />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 이름</label>
          <Input
            placeholder="ex 멍멍이"
            maxLength={30}
            caption="30자 이내로 적어주세요."
            setEnrollData={setEnrollDataCallback}
            name="name"
            font="body3"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 성별</label>
          <RadioButton
            items={[
              { value: "여", select: true },
              { value: "남", select: false },
              { value: "선택안함", select: false },
            ]}
            setEnrollData={setEnrollDataCallback}
            name="gender"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 나이</label>
          <Input
            placeholder="ex 1살 , 2개월 등"
            maxLength={10}
            caption="10자 이내로 적어주세요."
            setEnrollData={setEnrollDataCallback}
            name="age"
            font="body3"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 무게</label>
          <Counter setEnrollData={setEnrollDataCallback} name="weight" />
        </div>
        <div className="wrap wrap--flex">
          <label>중성화 여부</label>
          <RadioButton
            items={[
              { value: "완료", select: true },
              { value: "미완료", select: false },
            ]}
            setEnrollData={setEnrollDataCallback}
            name="neutralization"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>건강상태</label>
          <Input
            placeholder="ex 접종내역, 건강상태, 유의할 점 등"
            maxLength={50}
            caption="50자 이내로 적어주세요."
            setEnrollData={setEnrollDataCallback}
            name="health"
            font="body3"
          />
        </div>
        <div className="wrap wrap--flex">
          <label>소속여부</label>
          <RadioButton
            items={[
              { value: "개인구조자", select: true },
              { value: "단체", select: false },
            ]}
            setEnrollData={setEnrollDataCallback}
            name="isInstitution"
          />
          <Input
            placeholder="단체명을 입력해주세요."
            maxLength={15}
            caption="15자 이내로 적어주세요."
            setEnrollData={setEnrollDataCallback}
            name="institutionName"
            font="body3"
          />
        </div>
        <div className="wrap contact">
          <label>연락처</label>
          <div className="contact-layer">
            {contacts.map((contact, i) => (
              <Input
                placeholder={"연락처를 입력해 주세요"}
                key={`contact-${i}`}
                font="body3"
                name={dropArray[i]}
                createdContact={createdContact}
                setCreatedContact={setCreatedContact}
                setEnrollData={setEnrollDataCallback}
              >
                <div className="dropdown">
                  <Dropdown
                    item={ContactsList}
                    placeholder="연락처"
                    rounded
                    small
                    font="body3"
                    dropArray={dropArray}
                    onDrop={onDrop}
                    id={i}
                  />
                </div>
              </Input>
            ))}
            <div className="contact__btn" onClick={addContact}>
              <Button rounded full padding="1rem 0" font="gnb">
                <Plus />
                연락처 추가하기
              </Button>
            </div>
          </div>
        </div>
        <div className="wrap">
          <TextField
            label="내용을 작성해주세요"
            maxLength={500}
            setEnrollData={setEnrollDataCallback}
            name="detail"
          />
        </div>
        <div className="wrap">
          <div className="wrap__button">
            <Button rounded full font="button" padding="1.5rem">
              대상견 등록하기
            </Button>
          </div>
        </div>
      </form>
    </EnrollInfoWrap>
  );
};

export default withRouter(EnrollInfo);
