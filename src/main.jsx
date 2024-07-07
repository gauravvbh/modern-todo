import React from "react";
import ReactDOM from "react-dom/client";
import Background from "./Background.jsx";
import Foreground from "./Foreground.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background />
    <Foreground />
  </React.StrictMode>
);
