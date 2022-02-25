/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RadioButton, Counter, TextField, AddDogLayer, Input, Button, EnrollSearchbar, Dropdown } from 'components';
import { ReactComponent as Kakao } from 'assets/icon/ic_kakao_24.svg';
import { ReactComponent as Call } from 'assets/icon/ic_call_24.svg';
import { ReactComponent as Instagram } from 'assets/icon/ic_instar_24.svg';
import { ReactComponent as Twitter } from 'assets/icon/ic_twitter_24.svg';
import { ReactComponent as Facebook } from 'assets/icon/ic_facebook_24.svg';
import { ReactComponent as Plus } from 'assets/icon/ic_plus_24.svg';
import useEnrollData from 'hooks/useEnrollData';
import { postEnroll, putDog } from 'lib/api/sample';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import EnrollInfoWrap from './EnrollInfoStyle';
import ERROR_MESSAGE from 'lib/message/error';

const ContactsList = [
  {
    img: <Kakao />,
    type: '카카오톡',
  },
  {
    img: <Call />,
    type: '전화번호',
  },
  {
    img: <Instagram />,
    type: '인스타그램',
  },
  {
    img: <Twitter />,
    type: '트위터',
  },
  {
    img: <Facebook />,
    type: '페이스북',
  },
];

const contactKoreanToEnglishMap = {
  카카오톡: 'kakaotalkId',
  전화번호: 'phoneNumber',
  페이스북: 'facebook',
  인스타그램: 'instagram',
  트위터: 'twitter',
};

const EnrollInfo = ({ edit }) => {
  const history = useHistory();
  const [enrollData, setEnrollData] = useEnrollData({});
  const [dropArray, setDrop] = useState([]);
  const [contactList, setContactList] = useState([{ type: '', value: '' }]);
  const [selectedContact, setContact] = useState({});
  const [imageList, setImageList] = useState([]);
  const [genderItems, setGenderItems] = useState([
    { value: '여', select: false },
    { value: '남', select: false },
    { value: '선택안함', select: true },
  ]);
  const [isNeutering, setIsNeutering] = useState([
    { value: '완료', select: true },
    { value: '미완료', select: false },
  ]);
  const [isInstitution, setIsInstitution] = useState([
    { value: '개인구조자', select: true },
    { value: '단체', select: false },
  ]);
  const [initial, setInitial] = useState({});

  const setEnrollDataCallback = React.useCallback(
    (name, value) => {
      setEnrollData(name, value);
    },
    [setEnrollData],
  );

  const onDrop = (dropArray, type, id) => {
    const targetIndex = contactList.findIndex((_, index) => index === id);
    let withOutTargetList = [
      ...contactList.slice(0, targetIndex),
      { ...contactList[targetIndex], type },
      ...contactList.slice(targetIndex + 1),
    ];
    setContactList(withOutTargetList);

    if (dropArray.key === id) {
      setDrop(Array.from(dropArray).map((val) => (val.id === id ? { key: id, type } : val)));
    } else {
      setDrop((dropArray) => dropArray.concat({ key: id, type }));
    }
  };

  const addContactList = (e) => {
    e.preventDefault();
    setContactList(contactList.concat({ type: '', value: '' }));
  };

  useEffect(() => {
    (async () => {
      if (!edit) return;

      const data = history.location.state ? history.location.state.dog : null;
      setInitial(data);
      setGenderItems((prev) => {
        return prev.map((item) => {
          return item.value === data.gender
            ? { value: item.value, select: true }
            : { value: item.value, select: false };
        });
      });
      setEnrollDataCallback('gender', genderItems.find((value) => value.select === true).value);
      setIsNeutering((prev) =>
        prev.map((item) => {
          const isNeutralized = data.neutralization ? '완료' : '미완료';
          return item.value === isNeutralized ? { ...item, select: true } : { ...item, select: false };
        }),
      );
      setIsInstitution((prev) =>
        prev.map((item) => {
          const isGroup = data.isInstitution ? '단체' : '개인구조자';
          return item.value === isGroup ? { ...item, select: true } : { ...item, select: false };
        }),
      );

      const existedContactList = [
        { 페이스북: data.facebook },
        { 인스타그램: data.instagram },
        { 전화번호: data.phoneNumber },
        { 트위터: data.twitter },
        { 카카오톡: data.kakaotalkId },
      ];
      setContactList([]);
      existedContactList.forEach((contact) => {
        if (Object.values(contact)[0].length === 1) {
          let newValue = {};
          newValue.type = Object.keys(contact)[0];
          newValue.value = Object.values(contact)[0];
          setContactList((prev) => prev.concat(newValue));
        } else if (Object.values(contact)[0].length > 1) {
          Object.values(contact)[0].forEach((repeated) => {
            let newValue = {};
            newValue.type = Object.keys(contact)[0];
            newValue.value = repeated;
            setContactList((prev) => prev.concat(newValue));
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('endingCountry', enrollData.endingCountry);
    formData.append('endingAirport', enrollData.endingAirport);
    formData.append('name', enrollData.name ? enrollData.name : '이름없음');
    formData.append('gender', enrollData.gender ? enrollData.gender : '선택안함');
    formData.append('age', enrollData.age ? enrollData.age : '모름');
    formData.append('weight', enrollData.weight);
    formData.append('neutralization', enrollData?.neutralization === '완료' ? true : false);
    formData.append('health', enrollData.health ? enrollData.health : '특이사항 없음');
    formData.append('isInstitution', enrollData?.isInstitution === '단체' ? true : false);
    formData.append('institutionName', enrollData?.institutionName ? enrollData.institutionName : '');
    formData.append('detail', enrollData?.detail ? enrollData.detail : initial.detail);

    contactList.forEach(({ type, value }) => {
      if (value !== undefined && value.length !== 0) formData.append(contactKoreanToEnglishMap[type], value[0]);
    });

    if (edit) formData.append('photo_link', []);
    for (let i = 0; i < Array.from(imageList).length; i++) {
      if (imageList[i]['imgURL']?.length < 1) continue;
      if (typeof imageList[i]['imgURL'] === 'string') formData.append('photo_link', imageList[i]['imgURL']);
      else formData.append('photos', imageList[i]['imgURL']);
    }

    try {
      if (enrollData.endingCountry.length === 0) throw ERROR_MESSAGE.NO_COUNTRY_SELECTED;
      else if (enrollData.endingAirport.length === 0) throw ERROR_MESSAGE.NO_AIRPORT_SELECTED;
      else if (enrollData.isInstitution === '단체' && enrollData.institutionName.length === 0) {
        throw ERROR_MESSAGE.NO_INSTITUTION_SELECTED;
      } else if (enrollData.isInstitution === '개인구조자' && enrollData.institutionName.length > 0) {
        throw ERROR_MESSAGE.REMOVE_INSTITUTION_NAME;
      } else if (contactList.length === 0 || contactList.map((contact) => contact.value).join('').length === 0)
        throw ERROR_MESSAGE.NO_CONTACT_SELECTED;
    } catch (e) {
      toast.error(e);
      return;
    }

    if (edit) await putDog(history.location.state?.dog._id, formData);
    else await postEnroll(formData);
    history.push('/dog/enroll/confirm');
  };

  return (
    <EnrollInfoWrap>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="wrap wrap--add">
          <AddDogLayer
            imageList={imageList}
            setImageList={setImageList}
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
            {contactList?.map((contact, i) => (
              <Input
                placeholder={'연락처를 입력해 주세요'}
                key={`contact-${i}`}
                font="body3"
                name={dropArray[i]}
                index={i}
                contactList={contactList}
                setContactList={setContactList}
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
              대상견 {edit ? '수정' : '등록'}하기
            </Button>
          </div>
        </div>
      </form>
    </EnrollInfoWrap>
  );
};

export default withRouter(EnrollInfo);
