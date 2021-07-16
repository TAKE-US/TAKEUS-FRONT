import React from "react";
import styled from "styled-components";

import NoResult from "assets/img/loading.gif";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,
};

const Empty = () => {
  return (
    <Styled.Wrapper>
      <img src={NoResult} alt="" />
    </Styled.Wrapper>
  );
};

export default Empty;
