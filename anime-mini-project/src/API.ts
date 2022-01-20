import { convertToSlug } from "./utils";
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

export type ResultData = AnimeResult & { slug: string };

export const fetchAnimeQuerySearch = async (query: string) => {
  const endpoint = `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((res: AnimeResult) => ({
    ...res,
    slug: convertToSlug(res.title),
  }));
};

export const fetchSingleAnime = async (ids: any) => {
  const endpoint = `https://api.jikan.moe/v3/anime/${ids}`;
  const data = await (await fetch(endpoint)).json();
  console.log("data");
  return data;
};
