import React, { FC, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { fetchAnimeQuerySearch } from "./API";
const App: FC = () => {
  useEffect(() => {
    fetchAnimeQuerySearch();
  }, [250]);
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

export default App;
