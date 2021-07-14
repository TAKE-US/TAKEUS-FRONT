import React, { useState } from 'react';
import styled from "styled-components";

import { Input, Button, Hashtag, RadioButton, TextField } from 'components';

const ReviewInfoStyle = styled.section`
  .wrap {
    margin-top: 6rem;

    &--flex {
      display: flex;
    }
    
    &:last-child {
      margin-bottom: 18rem;
    }

    label {
      display: inline-block;
      min-width: 18.2rem;
      margin-bottom: 2.4rem;
      font: ${({ theme }) => theme.font.headline};
    }

    .hashtag {
      margin-right: 1.6rem;
    }
  }
`;
  
const ReviewPostInfo = () => {
  const [hashtags, setHashtags] = useState([
    { tag: '이동봉사과정', active: true },
    { tag: '도착공항정보', active: false },
    { tag: '보호단체관련', active: false },
    { tag: '이동봉사준비', active: false },
    { tag: '봉사국가', active: false },
    { tag: '주의사항', active: false },
    { tag: '입국심사', active: false },
    { tag: '대상견케어', active: false }
  ]);

  const toggleHashtag = idx => {
    setHashtags(
      [...hashtags]
        .map((hashtag, i) => i !== idx ? hashtag : Object.assign(hashtag, { active: !hashtag.active }))
    );
  };

  return (
    <ReviewInfoStyle>
      <div className="wrap">
        <label>출국정보</label>
        <Input placeholder="어떤 제목으로 후기를 등록하고 싶나요?" caption="30자 이내로 적어주세요." maxLength={30}/>
      </div>

      <div className="wrap">
        <label>봉사 지역</label>
      </div>

      <div className="wrap">
        <label>해시 태그</label>
        <div className="wrap--flex">
          {hashtags.map((hashtag, i) => (
            <div className="hashtag" onClick={() => toggleHashtag(i)} key={`hashtag-${i}`}> 
              <Hashtag tag={hashtag.tag} primary={hashtag.active} rounded />
            </div>)
          )}
        </div>
      </div>

      <div className="wrap">
        <label>진행 단체</label>
        <div className="wrap--flex">
          <RadioButton
            items={[
              { value: "선택 안함", select: true },
              { value: "개인 구조자", select: false },
              { value: "단체", select: false },
            ]}
          />
          <Input placeholder="단체명을 입력해주세요." caption="15자 이내로 적어주세요." maxLength={15} />
        </div>
      </div>

      <div className="wrap">
        <TextField
          label="후기 글 링크를 붙여 넣어주세요"
          placeholder="블로그나 카페 혹은 페이스북 링크 등 후기 글의 링크를 ctrl+c, ctrl+v 하여 붙여넣기 해주세요 :)"
        />
      </div>
      <div className="wrap">
        <Button full rounded padding="15px 0" font="headline" >후기 등록하기</Button>
      </div>

    </ReviewInfoStyle>
  );
};

export default ReviewPostInfo;
