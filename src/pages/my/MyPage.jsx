import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
};

const MyPage = () => {
  return (
    <Styled.Wrapper>
      <div>mypage</div>
    </Styled.Wrapper>
  );
};

export default MyPage;
