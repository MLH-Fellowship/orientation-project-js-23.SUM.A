import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ResumeContextProvider } from "./store/resume-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResumeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResumeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
