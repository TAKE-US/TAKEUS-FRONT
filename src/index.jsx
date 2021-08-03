import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import store from "redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Provider>, rootElement);
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