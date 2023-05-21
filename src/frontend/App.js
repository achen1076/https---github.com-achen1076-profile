import React, { useState } from "react";
import "./style.css";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { IndexPage } from "./pages.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}
