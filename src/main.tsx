import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/routes/App.tsx";
import "./shared/styles/index.css";
import { AppProviders } from "./app/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
