import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const Styled = {
  InputWrapper: styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    border: solid 1px ${({ theme }) => theme.color.lightgray2};
    border-radius: 5.4rem;
  `,
  Input: styled.input`
    flex: 1;
    padding: 0.8rem 0 0.8rem 1rem;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.darkgray1};
    line-height: 2.6rem;
    &::placeholder {
      color: ${({ theme }) => theme.color.gray1};
    }
  `,
  Caption: styled.p`
    position: absolute;
    left: 0.6rem;
    bottom: -2rem;
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.gray3};

    &.error {
      color: #F2754E;
    }
  `
};


const isValidLength = (text, maxLength) => {
  if (!maxLength) return true;

  return text.length > maxLength ? false : true;
};

const Input = ({ children, placeholder, caption, maxLength }) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const isValid = useMemo(() => {
    switch (true) {
      case !isValidLength(value, maxLength):
        break;
      default:
        return true;
    }

    return false;
  }, [value, maxLength]);

  useEffect(() => {
    if (isValid) setError(false);
    else setError(true);
  }, [isValid]);

  const changeValue = evt => {
    const newValue = evt.target.value;

    if (isValid) setValue(newValue);
    else {
      if (isValidLength(newValue, maxLength)) setValue(newValue);
      else setValue(value.slice(0, maxLength).concat(newValue[newValue.length - 1]));
    }
  };

  return (
    <>
      <Styled.InputWrapper>
        {children}
        <Styled.Input
          placeholder={placeholder}
          value={value}
          onChange={changeValue}
        />
        <Styled.Caption className={isError ? "error" : ""}>{caption}</Styled.Caption>
      </Styled.InputWrapper>
    </>
  );
};

export default Input;
