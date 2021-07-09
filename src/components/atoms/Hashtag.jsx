import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 0.7rem;
    font: ${({ theme }) => theme.font.body1};
    line-height: 2.2rem;
    color: ${({ theme }) => theme.color.primary};
    padding: 0.4rem 1.1rem;
    margin-right: 0.9rem;
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
