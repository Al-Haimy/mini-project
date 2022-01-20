import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSingleAnime } from "../API";
interface Props {
  SetIdNumber: any;
  anime: any;
}

const SingleAnime = (props: Props) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof location.state !== "undefined") {
      props.SetIdNumber(location.state);
    }
    // getAnime();
  }, [location.state]);
  console.log(props.anime);

  return (
    <>
      <div className="dart">
        <h1>{props.anime.title}</h1>
      </div>
    </>
  );
};
export default SingleAnime;
