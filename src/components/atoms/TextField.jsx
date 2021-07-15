import React from "react";
import styled from "styled-components";
//hooks
import useInput from "hooks/useInput";

const TextFieldWrap = styled.section`
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
  const [text, setText] = useInput(initial);
  const onBlurHandler = () => {
    setEnrollData(name, text);
  };
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
      <textarea
        placeholder={placeholder}
        value={initial ? initial : ""}
        onChange={setText}
        onBlurCapture={onBlurHandler}
      />
    </TextFieldWrap>
  );
};

export default TextField;
