import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleAnime from "./pages/SingleAnime";
import HeaderBar from "./components/HeaderBar";
/*
 Imported page views and hooks from react router dome 
 for navigation and for the second page

*/
const App: FC = () => {
  return (
    <div className="App">
      <HeaderBar title="Anime Search App" />
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
