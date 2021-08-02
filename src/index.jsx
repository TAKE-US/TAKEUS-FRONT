import React from "react";
import {hydrate, render} from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import store from "redux/store";


const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>, rootElement);
} else {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Provider>,
    rootElement
  );
  
}