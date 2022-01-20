import React, { FC, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MainBody from "../components/MainBody";
import { fetchAnimeQuerySearch, ResultData } from "../API";
type Timer = ReturnType<typeof setTimeout>;
let timeid: Timer;

interface Props {}

function HomePage(props: Props) {
  const [searchResults, SetSearchResults] = useState<ResultData[]>([]);
  const [query, SetQuery] = useState<string>("");
  const [pages, SetPages] = useState<number>(0);
  const [currentPage, SetCurrentPage] = useState<number>(1);
  const [itemsPerPage, SetItemsPerPage] = useState(8);
  const [currentData, SetCurrentData] = useState<ResultData[]>([]);

  const startQuery = async (query: string) => {
    const results = await fetchAnimeQuerySearch(query);
    SetSearchResults(results);
    SetPages(Math.ceil(results.length / itemsPerPage));
    SetCurrentPage(1);
    handlePagination(results);
  };
  useEffect(() => {
    handlePagination();
  }, [currentPage]);

  const handlePagination = (data?: any) => {
    const rdata = data ? data : searchResults;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    SetCurrentData(rdata.slice(indexOfFirstItem, indexOfLastItem));
  };

  const handleNextPage = (e: React.ChangeEvent<unknown>, page: number) => {
    SetCurrentPage(page);
  };
  const fetchSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    SetQuery(e.currentTarget.value);

    clearTimeout(timeid);
    if (query !== "") {
      timeid = setTimeout(() => {
        console.log("triggered");
        startQuery(query);
      }, 500);
    }
  };

  return (
    <>
      <SearchBar callback={fetchSearch} query={query} />
      {searchResults.length !== 0 && pages > 0 ? (
        <MainBody
          mainCard={currentData}
          pages={pages}
          page={currentPage}
          callback={handleNextPage}
        />
      ) : null}
    </>
  );
}

export default HomePage;
