import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { captureUtmParams } from "./lib/utm";
import { initMetaPixel } from "./lib/pixel";
import "./styles/global.css";

captureUtmParams();
initMetaPixel();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
