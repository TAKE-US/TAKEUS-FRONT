import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 10px;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 10px;
  };
  button{
    display: flex;
    cursor: pointer;
    outline: none;
  };
  input{
    display: flex;
    outline: none;
    padding-left: 10px;
  }
  p{
    margin:0;
    padding:0;
  }
`;

export default GlobalStyle;
