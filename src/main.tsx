import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/space-grotesk";
import "./index.css";
import App from "./App";

if (window.location.pathname === "/") {
  window.history.replaceState({}, "", "/id");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
