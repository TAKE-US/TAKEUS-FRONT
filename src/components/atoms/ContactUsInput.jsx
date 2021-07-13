import React from 'react';
import styled from 'styled-components';

import { Input, Button } from 'components';
import useInput from "hooks/useInput";
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
      .name, .email {
        text-align: center;
        width: 7rem;
        font: ${({ theme }) => theme.font.body2};
        color: ${({ theme }) => theme.color.gray3};
        border-right: 1px solid ${({ theme }) => theme.color.lightgray2};
        padding-right: 2rem;
        white-space: nowrap;
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
};

const ContactUsInput = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [text, setText] = useInput("");

  const onClickHandler = async () => {
    await postMail(name, email, text);
  };

  return (
    <Styled.Wrapper>
      <div className="inputinner">
        <div>
          <Input
            placeholder="이름을 입력해주세요."
            font="body2"
            value={name}
            onChange={setName}
          >
            <span className="name">name</span>
          </Input>
        </div>
        <div>
          <Input
            placeholder="이메일을 입력해주세요."
            font="body2"
            value={email}
            onChange={setEmail}
            >
            <span className="email">e-mail</span>
          </Input>
        </div>
        <textarea
          className="text"
          value={text}
          placeholder="내용을 입력해주세요."
          onChange={setText}
        >
          {text}
        </textarea>
        <div
          onClick={onClickHandler}
        >
          <Button
            primary
            rounded
            full
            padding="1.2rem 0"
          >
            TAKEUS에 보내기
          </Button>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default ContactUsInput;