import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { applyTheme, getInitialTheme } from "./lib/theme";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/sections.css";
import "./styles/pages.css";

// Apply the saved/system theme before the first paint to avoid a flash.
applyTheme(getInitialTheme());

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root was not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
