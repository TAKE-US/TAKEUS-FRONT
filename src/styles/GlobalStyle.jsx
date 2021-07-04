import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 10px;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-family: "Noto Sans kr", "Spoqa Han Sans Neo",
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    padding: 0;
    margin: 0;
  };

  button{
    outline: none;
    background: none;
    border: none;
    cursor:pointer;
  };

  input{
    display: flex;
    outline: none;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
