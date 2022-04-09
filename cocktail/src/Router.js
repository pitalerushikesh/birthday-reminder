import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import DetailPage from "./pages/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
