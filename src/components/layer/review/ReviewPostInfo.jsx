import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import { Input, Button, Hashtag, RadioButton, TextField, EnrollSearchbar } from 'components';
import useEnrollData from 'hooks/useEnrollData';
import { postReview, getReviewDetail, putReview } from 'lib/api/sample';

const ReviewInfoStyle = styled.section`
  .wrap {
    display: flex;
    width: 100%;
    margin-top: 6rem;
    label {
      display: inline-block;
      min-width: 14.2rem;
      margin-bottom: 2.4rem;
      font: ${({ theme }) => theme.font.title2};
    }

    &--flex {
      display: flex;
    }

    &--input {
      width: 100%;
      height: 3.2rem;
    }
    &--institution {
      width: 100%;
      height: 3.2rem;
      width: 35.1rem;
    }

    &:last-child {
      margin-bottom: 18rem;
    }

    .hashtag {
      margin-right: 0.9rem;
    }
  }
`;

const ReviewPostInfo = ({ edit, history, match }) => {
  const [enrollData, setEnrollData] = useEnrollData({});
  const [hashtags, setHashtags] = useState([
    { tag: '이동봉사과정', active: false },
    { tag: '도착공항정보', active: false },
    { tag: '보호단체관련', active: false },
    { tag: '이동봉사준비', active: false },
    { tag: '봉사국가', active: false },
    { tag: '주의사항', active: false },
    { tag: '입국심사', active: false },
    { tag: '대상견케어', active: false },
  ]);
  const [initial, setInitial] = useState();
  const [radioItems, setRadioItems] = useState([
    { value: '선택 안함', select: true },
    { value: '개인 구조자', select: false },
    { value: '단체', select: false },
  ]);

  const toggleHashtag = (value) => {
    setHashtags(
      [...hashtags].map((hashtag) =>
        hashtag.tag !== value ? hashtag : Object.assign(hashtag, { active: !hashtag.active }),
      ),
    );
  };

  useEffect(() => {
    if (edit) {
      (async () => {
        const data = await getReviewDetail(match.params.id);
        setRadioItems((prev) =>
          prev.map((radio) =>
            radio.value === data.isInstitution ? { ...radio, select: true } : { ...radio, select: false },
          ),
        );
        data.hashtags.forEach((value) => toggleHashtag(value));
        setInitial(data);
        setEnrollData('title', data.title);
        setEnrollData('content', data.content);
        setEnrollData('endingAirport', data.endingAirport);
        setEnrollData('endingCountry', data.endingCountry);
        setEnrollData('hashtags', data.hashtags);
        setEnrollData('isInstitution', data.isInstitution);
        setEnrollData('institutionName', data.institutionName);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id, setEnrollData]);

  useEffect(() => {
    const updatedHashtags = [];
    hashtags.forEach((hashtag) => hashtag.active && updatedHashtags.push(hashtag.tag));
    setEnrollData('hashtags', updatedHashtags);
  }, [hashtags, setEnrollData]);

  return (
    <ReviewInfoStyle>
      <div className="wrap">
        <label>후기제목</label>
        <div className="wrap--input">
          <Input
            placeholder="어떤 제목으로 후기를 등록하고 싶나요?"
            caption="30자 이내로 적어주세요."
            maxLength={30}
            setEnrollData={setEnrollData}
            name="title"
            font="body3"
            initial={initial?.title}
          />
        </div>
      </div>

      <div className="wrap">
        <label>봉사 지역</label>
        <EnrollSearchbar
          initialEndingCountry={initial?.endingCountry}
          initialEndingAirport={initial?.endingAirport}
          enroll
          setEnrollData={setEnrollData}
        />
      </div>

      <div className="wrap">
        <label>해시 태그</label>
        <div className="wrap--flex">
          {hashtags.map((hashtag) => (
            <div
              className="hashtag"
              onClick={() => {
                toggleHashtag(hashtag.tag);
              }}
              key={`hashtag-${hashtag.tag}`}
            >
              <Hashtag tag={hashtag.tag} primary={hashtag.active} hasActiveHashtag={true} />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <label>진행 단체</label>
        <div className="wrap--flex">
          <RadioButton items={radioItems} setItems={setRadioItems} setEnrollData={setEnrollData} name="isInstitution" />
          <div className="wrap--institution">
            <Input
              placeholder="단체명을 입력해주세요."
              caption="15자 이내로 적어주세요."
              maxLength={15}
              setEnrollData={setEnrollData}
              name="institutionName"
              initial={initial?.institutionName}
              font="body3"
            />
          </div>
        </div>
      </div>

      <div className="wrap">
        <TextField
          label="후기 글 링크를 붙여 넣어주세요"
          placeholder="블로그나 카페 혹은 페이스북 링크 등 후기 글의 링크를 ctrl+c, ctrl+v 하여 붙여넣기 해주세요 :)"
          setEnrollData={setEnrollData}
          name="content"
          initial={initial?.content}
        />
      </div>
      <div
        className="wrap"
        onClick={async () => {
          try {
            if (edit) {
              await putReview(match.params.id, enrollData);
            } else {
              await postReview(enrollData);
            }
            history.goBack();
          } catch (error) {
            switch (error.response.status) {
              case 401:
                alert('로그인 후 후기 작성이 가능합니다!');
                history.push('/login');
                break;
              case 400:
                alert('필수 요소들을 작성해주세요!');
                break;
              default:
                alert('후기 생성에 실패했습니다!');
                break;
            }
          }
        }}
      >
        <Button full rounded padding="15px 0" font="button">
          {edit ? '후기 수정하기' : '후기 등록하기'}
        </Button>
      </div>
    </ReviewInfoStyle>
  );
};

export default withRouter(ReviewPostInfo);
