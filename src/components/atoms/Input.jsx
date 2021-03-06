/* eslint-disable arrow-parens */
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';

const Styled = {
  InputWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    border: solid 1px ${({ theme }) => theme.color.lightgray2};
    border-radius: 5.4rem;

    &.disabled {
      background-color: ${({ theme }) => theme.color.bg_gray};
      &:hover {
        cursor: default;
      }

      input {
        &::placeholder {
          color: ${({ theme }) => theme.color.gray1};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.color.bg_gray};
        }
      }
      p {
        color: ${({ theme }) => theme.color.gray1};
      }
    }
  `,
  Input: styled.input`
    flex: 1;
    font: ${({ theme, fontStyle }) => (fontStyle ? theme.font[fontStyle] : theme.font.button)};
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
      color: #f2754e;
    }
  `,
};

const isValidLength = (text, maxLength) => {
  if (!maxLength) return true;

  return text.length > maxLength ? false : true;
};

const Input = ({
  children,
  placeholder,
  caption,
  maxLength,
  font,
  disabled,
  setEnrollData,
  contactList,
  name,
  setContactList,
  initial,
  index,
  isContact,
}) => {
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

  const setEnrollDataCallback = useCallback(
    (name, value) => {
      setEnrollData(name, value);
    },
    [setEnrollData],
  );

  useEffect(() => {
    if (isValid) setError(false);
    else setError(true);
    if (initial && !isContact) {
      setValue(initial);
      setEnrollDataCallback(name, initial);
    }
    if (isContact && initial.type) {
      setValue(initial.value);
    }
  }, [isValid, initial, isContact, setEnrollDataCallback, name]);

  const changeValue = (evt) => {
    const newValue = evt.target.value;

    if (isValid) setValue(newValue);
    else {
      if (isValidLength(newValue, maxLength)) setValue(newValue);
      else setValue(value.slice(0, maxLength).concat(newValue[newValue.length - 1]));
    }
  };

  const onBlurHandler = ({ target }) => {
    if (isContact) {
      const toBeChangeContact = { type: contactList[index].type, value: [target.value] };
      const newContactListState = contactList.map((value, i) => {
        if (index !== i) return value;
        else return toBeChangeContact;
      });
      setContactList(newContactListState);
    } else {
      if (name) {
        const newVal = {};
        newVal[name['type']] = value;
        setEnrollData(name, value);
      }
    }
  };

  return (
    <>
      <Styled.InputWrapper className={disabled ? 'disabled' : ''}>
        {children}
        <Styled.Input
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          fontStyle={font}
          onChange={changeValue}
          onBlurCapture={onBlurHandler}
        />
        <Styled.Caption className={isError ? 'error' : ''}>{caption}</Styled.Caption>
      </Styled.InputWrapper>
    </>
  );
};

export default Input;
