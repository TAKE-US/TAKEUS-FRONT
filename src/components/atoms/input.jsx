import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const Styled = {
  InputWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 4px 20px;
    padding-left: 20px;
    border: solid 1px ${({ theme }) => theme.color.lightgray2};
    border-radius: 54px;
  `,
  Input: styled.input`
    flex: 1;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.darkgray1};
    line-height: 23px;
    border: none;

    &::placeholder {
      line-height: 26px;
      color: ${({ theme }) => theme.color.gray1};
    }
  `,
  Desc: styled.p`
    margin-left: 6px;
    font-size: 12px;
    line-height: 17px;
    color: ${({ theme }) => theme.color.gray3};
    &.error {
      color: #F2754E;
    }
  `,
  Child: styled.div``,
  Divider: styled.div`
    margin: 0 16px;
    width: 0;
    border-right: solid 1px ${({ theme }) => theme.color.lightgray2};
  `
};

const Input = ({ children, placeholder, description, max, childPos }) => {
  const [word, setWord] = useState("");
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!max) return;

    if (word.length > max) setError(true);
    else setError(false);
  }, [word, max]);

  const hasLeftChild = useMemo(() => children && childPos !== 'right' ? true : false, [children, childPos]);

  const changeWord = evt => {
    setWord(evt.target.value);
  };

  return (
    <>
      <Styled.InputWrapper hasLeftChild={hasLeftChild}
      >
        {
          children && childPos !== 'right' ?
            (<>
              <Styled.Child className="test">{children}</Styled.Child>
              <Styled.Divider></Styled.Divider>
            </>) : ''
        }
        <Styled.Input
          placeholder={placeholder}
          value={word}
          onChange={changeWord}
        />
        {
          children && childPos === 'right' ?
            (<>
              <Styled.Divider></Styled.Divider>
              <Styled.Child className="test">{children}</Styled.Child>
            </>) : ''
        }
      </Styled.InputWrapper>
      <Styled.Desc className={isError ? "error" : ""}>{description}</Styled.Desc>
    </>
  );
};

export default Input;
