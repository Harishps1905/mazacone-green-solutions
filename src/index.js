import React from "react";
import ReactDOM from "react-dom";
import "./reset/reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Dosis/Dosis-Bold.ttf";
import "./fonts/Dosis/Dosis-ExtraBold.ttf";
import "./fonts/Dosis/Dosis-Light.ttf";
import "./fonts/Dosis/Dosis-Regular.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
