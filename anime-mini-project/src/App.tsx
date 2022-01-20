import React, { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleAnime from "./pages/SingleAnime";
import { fetchSingleAnime } from "./API";
const App: FC = () => {
  const [idNumber, SetIdNumber] = useState<number>(0);
  const [anime, SetAnime] = useState<any>();
  const [animeTitle, SetAnimeTitle] = useState<string>("");
  const getAnime = async () => {
    const result = await fetchSingleAnime(idNumber);
    SetAnime(result);
    SetAnimeTitle(anime.title);
  };
  useEffect(() => {
    console.log(idNumber);
    if (idNumber !== 0) {
      getAnime();
    }
  }, [idNumber]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/anime/*"
            element={<SingleAnime SetIdNumber={SetIdNumber} anime={anime} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
