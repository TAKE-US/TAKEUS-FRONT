import React from "react";
import styled from "styled-components";

import NoResult from "assets/img/img_noresult.png";

const Styled = {
  Wrapper: styled.div`
    .inner {
      margin-top: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .h2 {
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.darkgray2};
      }
      .text {
        margin-top: 0.5rem;
        margin-bottom: 1.6rem;
        font: ${({ theme }) => theme.font.caption};
        color: ${({ theme }) => theme.color.gray3};
      }
    }
  `,
};

const Empty = () => {
  return (
    <Styled.Wrapper>
      <div className="inner">
        <h2 className="h2">앗! 검색결과가 없어요😢</h2>
        <p className="text">다시 검색해주세요.</p>
        <img src={NoResult} alt="" />
      </div>
    </Styled.Wrapper>
  );
};

export default Empty;
