import React from 'react';
import styled from 'styled-components';

const Styled = {
  Button: styled.button`
    margin-top: 3%;
    width: 40.3rem;
    height: 4.8rem;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    text-decoration: underline;
    text-underline-position: under;
  `
};

function CopyLinkButton() {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(function () {
    }, function (err) {
      alert('링크 복사에 실패하였습니다');
    });
  };

  return (
    <Styled.Button onClick={copyLink}>
      링크 복사
    </Styled.Button>
  );
}

export default CopyLinkButton;
