import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// The <Router> is defined inside App.jsx (see theme + routes there)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
