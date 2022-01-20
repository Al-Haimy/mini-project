export const convertToSlug = (title: string) => {
  return title.replace(/\s+/g, "-").replace(":", "").toLowerCase();
};

// const fromNumberToString = (num: number) => {};
export const convertToAray = (data: any) => {
  return [
    {
      title: data.score.toLocaleString(),
      subTitle: data.scored_by.toLocaleString() + " USERS",
      mainColor: "#134a9f",
      secondColor: "#5998fb",
      backColor: "#e3f2fc",
    },
    {
      title: "#" + data.rank,
      subTitle: "RANKED",
      mainColor: "#4f238d",
      secondColor: "#e374f7",
      backColor: "#f3e5f5",
    },
    {
      title: "#" + data.popularity,
      subTitle: "POPULARITY",
      mainColor: "#86134f",
      secondColor: "#fb79a5",
      backColor: "#fbe4ec",
    },
    {
      title: data.members.toLocaleString(),
      subTitle: "MEMBERS",
      mainColor: "#0e695c",
      secondColor: "#4ecab6",
      backColor: "#e1f2f1",
    },
  ];
};
