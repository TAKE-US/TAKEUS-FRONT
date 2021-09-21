import React, { useEffect } from "react";
import styled from "styled-components";
//hooks
import useInput from "hooks/useInput";

const TextFieldWrap = styled.section`
  width: 100%;
  article {
    display: flex;
    justify-content: space-between;
    .count {
      margin-bottom: 2.4rem;
      font: ${({ theme }) => theme.font.title1};
      font-size: 22px;
      font-weight: 500;
      color: ${({ theme }) => theme.color.darkgray1};
      &--gray {
        color: ${({ theme }) => theme.color.gray1};
      }
    }
    label {
      margin-bottom: 2.4rem;
      font: ${({ theme }) => theme.font.headline};
    }
  }
  textarea {
    width: 100%;
    height: 29.7rem;
    border: 1px solid #dfdfdf;
    border-radius: 1rem;
    padding: 2.4rem 3rem;
    font: ${({ theme }) => theme.font.body3};
    line-height: 2.6rem;
    color: ${({ theme }) => theme.color.darkgray1};
    :focus {
      outline: none;
    }
    &::placeholder {
      font: ${({ theme }) => theme.font.body3};
      color: ${({ theme }) => theme.color.gray1};
    }
  }
`;

const TextField = ({ label, maxLength, placeholder, setEnrollData, name, initial }) => {
  const [text, onChange, setText] = useInput("");
  const onBlurHandler = () => {
    console.log(initial);
    setEnrollData(name, text);
  };
  useEffect(() => {
    setText(initial);
  }, [initial, setText]);
  return (
    <TextFieldWrap hasTitle={label || maxLength}>
      <article>
        {label ? <label>{label}</label> : ""}
        {maxLength ? (
          <div className="count">
            {text.length}/<span className="count--gray">{maxLength}</span>
          </div>
        ) : (
          ""
        )}
      </article>

      <textarea value={text} placeholder={placeholder} onChange={onChange} onBlurCapture={onBlurHandler} />
    </TextFieldWrap>
  );
};

export default TextField;
