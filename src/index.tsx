import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <h1>Hello World</h1>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
