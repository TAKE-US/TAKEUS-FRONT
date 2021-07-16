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

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-family: "Noto Sans kr", "Spoqa Han Sans Neo",
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    padding: 0;
    margin: 0;
    max-height: 100vh;
    overflow: overlay;
    -ms-overflow-style: none;
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: rgba(223, 223, 223, 0.6);
    
      &:hover {
        background-color: rgba(193, 193, 193, 0.6);
      }
    }

  };

  a { color: #fff; text-decoration: none; outline: none }
  a:hover, a:active { text-decoration: none; color:#fff; background-color: transparent; }
  button{ outline: none; background: none; border: none; cursor: pointer; };
  input { border: none; outline: none; }
`;

export default GlobalStyle;
