import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from '@i.b/react';
import '@i.b/scss/lib/Button.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1><Button label="amazing" /></h1>
  </React.StrictMode>
);
