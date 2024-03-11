import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { CoinPage } from "../pages/CoinPage";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>
    </div>
  );
};
