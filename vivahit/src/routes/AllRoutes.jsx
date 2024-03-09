import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
