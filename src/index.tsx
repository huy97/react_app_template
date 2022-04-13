import "./index.less";

import { Auth } from "aws-amplify";
import config from "aws-exports";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "routes";
import { store } from "store";
import { GlobalStyle } from "styles/globalStyle";

import * as serviceWorker from "./serviceWorker";

Auth.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
