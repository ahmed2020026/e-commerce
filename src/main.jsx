import { createRoot } from "react-dom/client";
import App from "./App";
import './App.css'
import { HashRouter } from "react-router-dom";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)