import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./components/context";
import Navbar from "./components/Navbar";
import Router from "./Router";
import ThemeConfig from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Router />
        </AppProvider>
      </BrowserRouter>
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
