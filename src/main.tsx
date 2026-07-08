import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}