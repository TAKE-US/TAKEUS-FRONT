import React, { useEffect } from "react";
import styled from "styled-components";
//hooks
import useInput from "hooks/useInput";

const EnrollInput = styled.section`
  width: 100%;
  input {
    -webkit-box-sizing: border-box;
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 5.4rem;
    padding: 0.8rem 2rem;
    ::placeholder {
      font: ${({ theme }) => theme.font.body2};
      line-height: 2.6rem;
      color: ${({ theme }) => theme.color.gray1};
    }
  }
  p {
    position: relative;
    left: 0.8rem;
    top: 0.8rem;
    font: ${({ theme }) => theme.font.caption};
    color: ${({ theme }) => theme.color.gray3};
  }
`;

const DogEnrollInput = ({ placeholder, maxLength }) => {
  const [infoState, setInfoState] = useInput("");

  useEffect(() => console.log(infoState), [infoState]);
  return (
    <EnrollInput>
      <input onChange={setInfoState} placeholder={placeholder} />
      <p>{maxLength}자 이내로 적어주세요.</p>
    </EnrollInput>
  );
};

export default DogEnrollInput;
