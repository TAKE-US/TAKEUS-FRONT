import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const Styled = {
  InputWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 0 2rem;
    border: solid 1px ${({ theme }) => theme.color.lightgray2};
    border-radius: 5.4rem;
  `,
  Input: styled.input`
    flex: 1;
    padding-left: 1rem;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.darkgray1};
    line-height: 2.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray1};
    }
  `,
  Desc: styled.p`
    margin-left: 0.6rem;
    font-size: 1.2rem;
    line-height: 1.7rem;
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

const Input = ({ children, placeholder, description, maxLength }) => {
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
      else setValue(value.slice(0, maxLength).concat(newValue[maxLength + 1]));
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
      </Styled.InputWrapper>
      <Styled.Desc className={isError ? "error" : ""}>{description}</Styled.Desc>
    </>
  );
};

export default Input;
