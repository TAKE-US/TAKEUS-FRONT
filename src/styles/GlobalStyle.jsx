import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 10px;

  }
@media screen and (max-width: 1440px) {
  html {
    font-size: 8px;
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 6px;
  }
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
    overflow: overlay;
    -ms-overflow-style: none;
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: #ccc;
      
      &:hover {
        background: #aaa;
      }
    }

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
