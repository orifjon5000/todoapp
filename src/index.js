import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App";
import "./Styles/normilize.css";
import GlobalStyles from "./Styles/Index.js";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />{" "}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
