import React from 'react';
import styled from 'styled-components';

import { Input } from 'components';
import useInput from "hooks/useInput";

const Styled = {
  Input: styled.section`
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

      .name {
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.darkgray1};
      }

      .email {
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.darkgray1};
      }

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
};

const ContactUsInput = () => {
  const [text, setText] = useInput("");

  return (
    <Styled.Input>
      <div className="inputinner">
        <Input placeholder={"이름을 입력해주세요."}>
          <span className="name">name</span>
        </Input>
        <Input placeholder={"이메일을 입력해주세요."}>
          <span className="email">e-mail</span>
        </Input>
        <textarea
          className="text"
          placeholder="내용을 입력해주세요."
          onChange={setText}
        >
          {text}
        </textarea>
        <button className="button">
          TAKE US에 보내기
        </button>
      </div>
    </Styled.Input>
  );
};

export default ContactUsInput;