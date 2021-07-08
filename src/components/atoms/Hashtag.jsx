import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    border: 1px solid ${({ theme }) => theme.color.primary};
  `,
};

const Hashtag = ({ tag, sort }) => {
  return (
    <Styled.Wrapper>
      <p>{tag}</p>
    </Styled.Wrapper>
  );
};

export default Hashtag;
