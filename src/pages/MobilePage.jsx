import React from 'react';
import styled from 'styled-components';
import mobilePreparingImg from 'assets/img/img_mobile_preparing.png';

const MobilePage = () => {
  const handleLinkCopy = () => {
    navigator.clipboard.writeText(document.location.href);
    alert('링크가 복사되었습니다!');
  };

  return (
    <MobilePageWrapper>
      <img src={mobilePreparingImg} alt="mobile icon" />
      <p className="title">PC버전으로 접속해주세요</p>
      <p className="description">
        아쉽게도 모바일은 지원하지 않아요😥 <br />
        PC환경에서 테이커스를 이용해주세요!
      </p>
      <button className="link-copy-button" onClick={handleLinkCopy}>
        링크 복사하기
      </button>
    </MobilePageWrapper>
  );
};

const MobilePageWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 172px;
  }
  & > .title {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
  }
  & > .description {
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #6f6f6f;
  }
  & > .link-copy-button {
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    background: #fdcb02;
  }
`;

export default MobilePage;
