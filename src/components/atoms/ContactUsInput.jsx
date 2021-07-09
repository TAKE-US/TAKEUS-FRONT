import React from 'react';
import styled from 'styled-components';

import useInput from "hooks/useInput";

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

      .button {
        height: 4.2rem;
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        font: ${({ theme }) => theme.font.button};
        border-radius: 5.4rem;
        margin-top: 2.6rem;
      }

      .text{
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
          font: ${({theme}) => theme.font.body2};
        }
      }
    }
  `,
  InputWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 0.7rem 2rem;
    padding-left: 2rem;
    border: solid 0.1rem ${({ theme }) => theme.color.lightgray2};
    border-radius: 5.4rem;
  `,
  Input: styled.input`
    flex: 1;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.darkgray1};
    line-height: 2.3rem;
    border: none;

    &::placeholder {
      line-height: 2.6rem;
      color: ${({ theme }) => theme.color.gray1};
    }
    `,
  
  Info: styled.div`
    width: 5rem;
    height: 2.6rem;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  Divider: styled.div`
  margin: 0 1.6rem;
  width: 0;
  border-right: solid 0.1rem ${({ theme }) => theme.color.lightgray2};
  `,
};

const ContactUsInput = () => {
  const [text, setText] = useInput("");
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");

  return (
    <Styled.Wrapper>
      <div className="inputinner">
        <Styled.InputWrapper>
          <Styled.Info>name</Styled.Info>
          <Styled.Divider></Styled.Divider>
          <Styled.Input
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={setName}
          ></Styled.Input>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.Info>e-mail</Styled.Info>
          <Styled.Divider></Styled.Divider>
          <Styled.Input
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={setEmail}
          ></Styled.Input>
        </Styled.InputWrapper>
        <textarea
          className="text"
          value={text}
          placeholder="내용을 입력해주세요."
          onChange={setText}
        >
          {text}
        </textarea>
        <button className="button">
          TAKE US에 보내기
        </button>
      </div>
    </Styled.Wrapper>
  );
};

export default ContactUsInput;