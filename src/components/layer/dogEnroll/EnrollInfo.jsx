/* eslint-disable max-len */
/* eslint-disable arrow-parens */

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { RadioButton, Counter, TextField, AddDogLayer, Input, Button, EnrollSearchbar, Dropdown } from "components";
import { ReactComponent as Kakao } from "assets/icon/ic_kakao_24.svg";
import { ReactComponent as Call } from "assets/icon/ic_call_24.svg";
import { ReactComponent as Instagram } from "assets/icon/ic_instar_24.svg";
import { ReactComponent as Twitter } from "assets/icon/ic_twitter_24.svg";
import { ReactComponent as Facebook } from "assets/icon/ic_facebook_24.svg";
import { ReactComponent as Plus } from "assets/icon/ic_plus_24.svg";
import useEnrollData from "hooks/useEnrollData";
import { postEnroll, putDog } from "lib/api/sample";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

const EnrollInfoWrap = styled.section`
  .wrap {
    margin-top: 6rem;
    padding: 0 12rem;
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

const EnrollInfo = ({ edit }) => {
  const history = useHistory();
  const [enrollData, setEnrollData] = useEnrollData({});
  const [dropArray, setDrop] = useState([]);
  const [contactList, setContactList] = useState([{ type: "", value: "" }]);
  const [selectedContact, setContact] = useState({});
  const [createdImage, setCreatedImage] = useState([]);
  const [genderItems, setGenderItems] = useState([
    { value: "여", select: true },
    { value: "남", select: false },
    { value: "선택안함", select: false },
  ]);
  const [isNeutering, setIsNeutering] = useState([
    { value: "완료", select: true },
    { value: "미완료", select: false },
  ]);
  const [isInstitution, setIsInstitution] = useState([
    { value: "개인구조자", select: true },
    { value: "단체", select: false },
  ]);
  const [initial, setInitial] = useState();

  const setEnrollDataCallback = useCallback(
    (name, value) => {
      setEnrollData(name, value);
    },
    [setEnrollData]
  );

  const onDrop = (dropArray, value, id) => {
    if (dropArray.key === id) {
      setDrop(Array.from(dropArray).map(val => (val.id === id ? { key: id, type: value } : val)));
    } else {
      setDrop(dropArray => dropArray.concat({ key: id, type: value }));
    }
  };

  const addContactList = e => {
    e.preventDefault();
    setContactList(contactList.concat({ type: "", value: "" }));
  };

  useEffect(() => {
    (async () => {
      if (!edit) return;
      const data = history.location.state ? history.location.state.dog : null;
      setInitial(data);

      setGenderItems(prev => {
        return prev.map(item => {
          return item.value === data.gender
            ? { value: item.value, select: true }
            : { value: item.value, select: false };
        });
      });
      setEnrollDataCallback("gender", genderItems.find(value => value.select === true).value);
      setIsNeutering(prev =>
        prev.map(item => {
          const isNeutralized = data.neutralization ? "완료" : "미완료";
          return item.value === isNeutralized ? { ...item, select: true } : { ...item, select: false };
        })
      );

      setIsInstitution(prev =>
        prev.map(item => {
          const isGroup = data.isInstitution ? "단체" : "개인구조자";
          return item.value === isGroup ? { ...item, select: true } : { ...item, select: false };
        })
      );

      const existedContactList = [
        { 페이스북: data.facebook },
        { 인스타그램: data.instagram },
        { 전화번호: data.phoneNumber },
        { 트위터: data.twitter },
        { 카카오톡: data.kakaotalkId },
      ];

      setContactList([]);
      existedContactList.forEach(contact => {
        if (Object.values(contact)[0].length === 1) {
          let newValue = {};
          newValue.type = Object.keys(contact)[0];
          newValue.value = Object.values(contact)[0];
          setContactList(prev => prev.concat(newValue));
        } else if (Object.values(contact)[0].length > 1) {
          Object.values(contact)[0].forEach(repeated => {
            let newValue = {};
            newValue.type = Object.keys(contact)[0];
            newValue.value = repeated;
            setContactList(prev => prev.concat(newValue));
          });
        }
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(selectedContact).length !== 0) {
      setEnrollData(Object.keys(selectedContact), ...Object.values(selectedContact));
    }
  }, [selectedContact, setEnrollData]);

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("endingCountry", enrollData.endingCountry);
    formData.append("endingAirport", enrollData.endingAirport);
    formData.append("name", enrollData.name);
    formData.append("gender", enrollData.gender);
    formData.append("age", enrollData.age);
    formData.append("weight", enrollData.weight);
    formData.append("neutralization", enrollData?.neutralization === "완료" ? true : false);
    formData.append("health", enrollData.health);
    formData.append("isInstitution", enrollData?.isInstitution === "단체" ? true : false);
    formData.append("institutionName", enrollData?.institutionName ? enrollData.institutionName : "");
    formData.append("detail", enrollData?.detail ? enrollData.detail : "");
    if (enrollData?.카카오톡) formData.append("kakaotalkId", enrollData?.카카오톡);
    if (enrollData?.전화번호) formData.append("phoneNumber", enrollData?.전화번호);
    if (enrollData?.페이스북) formData.append("facebook", enrollData?.페이스북);
    if (enrollData?.인스타그램) formData.append("instagram", enrollData?.인스타그램);
    if (enrollData?.트위터) formData.append("twitter", enrollData?.트위터);

    for (let i = 0; i < Array.from(createdImage).length; i++) {
      formData.append("photos", createdImage[i]["image"]);
    }

    try {
      edit ? await putDog(history.location.state?.dog._id, formData) : await postEnroll(formData);
      history.push("enroll/confirm");
    } catch (e) {
      alert(`[ 대상견 ${edit ? "수정" : "등록"} 실패 ]\n필수 내용을 입력해주세요.`);
    }
  };

  return (
    <EnrollInfoWrap>
      <form onSubmit={handleSubmit}>
        <div className="wrap wrap--add">
          <AddDogLayer
            createdImage={createdImage}
            setCreatedImage={setCreatedImage}
            setEnrollData={setEnrollDataCallback}
            initial={initial?.photos}
          />
        </div>
        <div className="wrap wrap--flex">
          <label>출국정보</label>
          <EnrollSearchbar
            enroll
            setEnrollData={setEnrollDataCallback}
            initialEndingCountry={initial?.endingCountry}
            initialEndingAirport={initial?.endingAirport}
          />
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
            initial={initial?.name}
          />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 성별</label>
          <RadioButton
            items={genderItems}
            setItems={setGenderItems}
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
            initial={initial?.age}
          />
        </div>
        <div className="wrap wrap--flex">
          <label>대상견 무게</label>
          <Counter setEnrollData={setEnrollDataCallback} name="weight" initial={initial?.weight} />
        </div>
        <div className="wrap wrap--flex">
          <label>중성화 여부</label>
          <RadioButton
            items={isNeutering}
            setItems={setIsNeutering}
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
            initial={initial?.health}
          />
        </div>
        <div className="wrap wrap--flex">
          <label>소속여부</label>
          <RadioButton
            items={isInstitution}
            setItems={setIsInstitution}
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
            initial={initial?.institutionName}
          />
        </div>
        <div className="wrap contact">
          <label>연락처</label>
          <div className="contact-layer">
            {contactList.map((contact, i) => (
              <Input
                placeholder={"연락처를 입력해 주세요"}
                key={`contact-${i}`}
                font="body3"
                name={dropArray[i]}
                selectedContact={selectedContact}
                setContact={setContact}
                setEnrollData={setEnrollDataCallback}
                initial={contact}
                isContact={true}
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
                    initial={contact}
                  />
                </div>
              </Input>
            ))}
            <div className="contact__btn" onClick={addContactList}>
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
            initial={initial?.detail}
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
