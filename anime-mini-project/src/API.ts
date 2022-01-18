export const fetchAnimeQuerySearch = async () => {
  const endpoint =
    "https://api.jikan.moe/v3/search/anime?q=&order_by=title&sort=asc&limit=10";
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
