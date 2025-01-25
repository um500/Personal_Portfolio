import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from the new API
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);