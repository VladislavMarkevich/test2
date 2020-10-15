import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";

import theme from "styled/theme";
import configureStore from "./store";
import App from "./App";

const rootElement = document.getElementById("root");

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  rootElement
);
