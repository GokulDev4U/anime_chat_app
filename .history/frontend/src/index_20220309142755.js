import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import Template from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  // offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={Template} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
