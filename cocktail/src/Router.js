import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DetailPage from "./pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
