import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const [singleAnime, SetSingleAnime] = useState([]);
  const GetTopAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json());
    SetTopAnime(temp.top.slice(0, 5));
  };
  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };
  // const api = 1535;
  // const FetchSingleAnime = async () => {
  //   const temp = await fetch(`http://api.jikan.moe/v3/anime/${api}/`).then(
  //     (res) => res.json()
  //   );

  //   console.log(temp.results);
  //   SetSingleAnime(temp.results);
  // };
  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
    FetchSingleAnime();
  }, []);
  console.log(topAnime);
  console.log(singleAnime);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList}
          SetSearch={SetSearch}
        />
      </div>
    </div>
  );
}

export default App;
//1521
