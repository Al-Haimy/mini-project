import React, { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleAnime from "./pages/SingleAnime";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/*" element={<SingleAnime />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
