import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MainBody from "../components/MainBody";
import { fetchAnimeQuerySearch, ResultData } from "../config/API";

// adding type for the timer to delay the api call
type Timer = ReturnType<typeof setTimeout>;
let timeid: Timer;
//adding initial items per page which is 8
const itemsPerPage: number = 8;
interface Props {}

function HomePage(props: Props) {
  const [searchResults, SetSearchResults] = useState<ResultData[]>([]);
  const [query, SetQuery] = useState<string>("");
  const [pages, SetPages] = useState<number>(0);
  const [currentPage, SetCurrentPage] = useState<number>(1);
  const [currentData, SetCurrentData] = useState<ResultData[]>([]);
  //function to fetch the data
  const startQuery = async (query: string) => {
    const results = await fetchAnimeQuerySearch(query);
    SetSearchResults(results);
    SetPages(Math.ceil(results.length / itemsPerPage));
    SetCurrentPage(1);
    handlePagination(results);
  };
  /*
 useEffect will treger when ever the user change the number of a page so it update the content
*/
  useEffect(() => {
    handlePagination();
  }, [currentPage]);
  // function to devide the data between pages
  const handlePagination = (data?: any) => {
    const rdata = data ? data : searchResults;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    SetCurrentData(rdata.slice(indexOfFirstItem, indexOfLastItem));
  };
  // function for the event listener of the pagination
  const handleNextPage = (e: React.ChangeEvent<unknown>, page: number) => {
    SetCurrentPage(page);
  };
  //function for the on change event and a delay for the fetch api call
  const fetchSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    SetQuery(e.currentTarget.value);

    clearTimeout(timeid);
    if (query !== "") {
      timeid = setTimeout(() => {
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
