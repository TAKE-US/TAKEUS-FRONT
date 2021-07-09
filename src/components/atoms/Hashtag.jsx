import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    &.primary {
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.primary};
    }
    &.reverse {
      border: 1px solid ${({ theme }) => theme.color.gray1};
      color: ${({ theme }) => theme.color.gray1};
    }
    border-radius: ${props => (props.rounded ? "2.4rem" : "0.7rem")};
    font: ${props => (props.rounded ? props.theme.font.button : props.theme.font.body1)};
    line-height: 2.2rem;
    padding: ${props => (props.rounded ? "0.6rem 1.7rem" : "0.4rem 1.1rem")};
    margin-right: 0.9rem;
  `,
};

//<Hashtag tag={tag} primary> 리뷰카드 노란색 해시태그
//<Hashtag tag={tag}> 리뷰카드 회색 해시태그
//<Hashtag tag={tag} primary rounded> 리뷰 등록 노란색 해시태그
//<Hashtag tag={tag} rounded> 리뷰 등록 회색 해시태그
const Hashtag = ({ tag, primary, rounded }) => {
  return (
    <Styled.Wrapper className={primary ? "primary" : "reverse"} rounded={rounded}>
      <p>{tag}</p>
    </Styled.Wrapper>
  );
};

export default Hashtag;
