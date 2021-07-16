import React, { useState } from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    padding: ${props => (props.rounded ? "0.6rem 1.7rem" : "0.4rem 1.1rem")};
    border-radius: ${props => (props.rounded ? "2.4rem" : "0.7rem")};
    font: ${props => (props.rounded ? props.theme.font.button : props.theme.font.body1)};
    line-height: 2.2rem;
    white-space: nowrap;

    &.primary {
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.primary};
    }
    &.reverse {
      border: 1px solid ${({ theme }) => theme.color.gray1};
      color: ${({ theme }) => theme.color.gray1};
    }

    &:hover {
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.primary};
    }
  `,
};

//<Hashtag tag={tag} primary> 리뷰카드 노란색 해시태그
//<Hashtag tag={tag}> 리뷰카드 회색 해시태그
//<Hashtag tag={tag} primary rounded> 리뷰 등록 노란색 해시태그
//<Hashtag tag={tag} rounded> 리뷰 등록 회색 해시태그
const Hashtag = ({ tag, primary, rounded, hasActiveHashtag }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    hasActiveHashtag
    ? (
      <Styled.Wrapper
        className={primary ? "primary" : "reverse"}
        rounded={rounded}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        <p>{tag}</p>
      </Styled.Wrapper>
    ): (
      <Styled.Wrapper
        className={primary || isSelected ? "primary" : "reverse"}
        rounded={rounded}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      >
        <p>{tag}</p>
      </Styled.Wrapper> 
    )
  );
};

export default Hashtag;

Hashtag.defaultProps = {
  hasActiveHashtag: false
};
