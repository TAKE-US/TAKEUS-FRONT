import React, { useEffect } from "react";
import styled from "styled-components";
//hooks
import useInput from "hooks/useInput";

const TextFieldWrap = styled.section`
  padding: 5.6rem 0;
  article {
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Spoqa Han Sans Neo";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      color: ${({ theme }) => theme.color.darkgray1};
    }
    label {
      min-width: 18.2rem;
      font: ${({ theme }) => theme.font.headline};
    }
  }
  textarea {
    width: 100%;
    height: 29.7rem;
    border: 1px solid #dfdfdf;
    border-radius: 1rem;
    padding: 2.4rem 3rem;
    margin-top: 2.4rem;
    -webkit-box-sizing: border-box;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.darkgray1};
    :focus {
      outline: none;
    }
  }
`;

const TextField = () => {
  const [text, setText] = useInput("");
  useEffect(() => console.log(text), [text]);
  return (
    <TextFieldWrap>
      <article>
        <label>내용을 작성해주세요</label>
        <p>{text.length}/500</p>
      </article>
      <textarea onChange={setText} />
    </TextFieldWrap>
  );
};

export default TextField;
