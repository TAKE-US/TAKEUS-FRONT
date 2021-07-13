import React from "react";
import styled from "styled-components";
import { MypageHeader } from "components";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
};

const MyPage = () => {
  return (
    <Styled.Wrapper>
      <MypageHeader />
    </Styled.Wrapper>
  );
};

export default MyPage;
