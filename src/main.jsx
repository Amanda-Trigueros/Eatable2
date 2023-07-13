import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { reset, global } from "./styles/global.js";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
