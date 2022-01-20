import { convertToSlug, convertToAray } from "../config/utils";
//type for the search result
export type AnimeResult = {
  airing: boolean;
  end_date: string;
  episodes: number;
  image_url: string;
  mal_id: number;
  members: number;
  rated: string;
  score: number;
  start_date: string;
  synopsis: string;
  title: string;
  type: string;
  url: string;
};
// a type for the single anime fetch result
export type SingleAnimeData = {
  title: string;
  subTitle: string;
  mainColor: string;
  secondColor: string;
  backColor: string;
};
// same type but I added the slug
export type ResultData = AnimeResult & { slug: string };
// function to fethc the search
export const fetchAnimeQuerySearch = async (query: string) => {
  const endpoint = `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((res: AnimeResult) => ({
    ...res,
    slug: convertToSlug(res.title),
  }));
};
// function to fetch the single anime
export const fetchSingleAnime = async (ids: any) => {
  const endpoint = `https://api.jikan.moe/v3/anime/${ids}`;
  const data = await (await fetch(endpoint)).json();

  return {
    title: data.title,
    synopsis: data.synopsis,
    image: data.image_url,
    status: convertToAray(data),
  };
};
