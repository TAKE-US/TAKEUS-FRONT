import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Button } from 'components';
import { postMail } from 'lib/api/sample';

const Styled = {
  Wrapper: styled.section`
    width: 64.2rem;
    height: 51.2rem;
    border: 0.5px solid ${({ theme }) => theme.color.gray2};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .inputinner {
      width: 52.9rem;
      height: 42.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .text {
        width: 100%;
        height: 25.4rem;
        border: 1px solid ${({ theme }) => theme.color.lightgray2};
        border-radius: 2.3rem;
        padding: 3rem 2.5rem;
        resize: none;
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.darkgray1};
        :focus {
          outline: none;
        }
        ::placeholder {
          color: ${({ theme }) => theme.color.gray1};
          font: ${({ theme }) => theme.font.body2};
        }
      }
    }
  `,

  Button: styled.div`
    height: 4.2rem;
  `,

  Divider: styled.div`
    margin: 0 1.6rem;
    width: 0;
    border-right: solid 0.1rem ${({ theme }) => theme.color.lightgray2};
  `,

  InputWrapper: styled.div`
    border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
    padding: 1rem 3.1rem;
    border-radius: 5.4rem;
    display: flex;
    align-items: center;

    .nameInput,
    .emailInput {
      color: ${({ theme }) => theme.color.gray3};
      font: ${({ theme }) => theme.font.body2};
      padding-left: 2.3rem;
      &::placeholder {
        color: ${({ theme }) => theme.color.gray1};
        font: ${({ theme }) => theme.font.body2};
      }
    }

    .name,
    .email {
      display: flex;
      align-items: center;
      width: 7rem;
      height: 2.6rem;
      font: ${({ theme }) => theme.font.body2};
      color: ${({ theme }) => theme.color.gray3};
      border-right: 1px solid ${({ theme }) => theme.color.lightgray2};
      padding-right: 2rem;
      white-space: nowrap;
    }
  `,
};

const ContactUsInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onClickHandler = useCallback(async () => {
    await postMail(name, email, text);
    setName('');
    setEmail('');
    setText('');
  }, [name, email, text]);

  const onChangeName = useCallback(e => {
    setName(e.target.value);
  }, []);

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <Styled.Wrapper>
      <div className="inputinner">
        <Styled.InputWrapper>
          <span className="name">name</span>
          <input
            className="nameInput"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={onChangeName}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <span className="email">e-mail</span>
          <input
            className="emailInput"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
          />
        </Styled.InputWrapper>
        <textarea
          className="text"
          value={text}
          placeholder="내용을 입력해주세요."
          onChange={onChangeText}
        >
          {text}
        </textarea>
        <div onClick={onClickHandler}>
          <Button primary rounded full padding="1.2rem 0">
            TAKEUS에 보내기
          </Button>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default ContactUsInput;
