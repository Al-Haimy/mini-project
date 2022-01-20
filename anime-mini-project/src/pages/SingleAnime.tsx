import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSingleAnime, SingleAnimeData } from "../API";
import {
  Grid,
  Box,
  LinearProgress,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderBar from "../components/HeaderBar";

interface Props {}

export const LoadingSection = () => {
  return (
    <Grid
      container
      columns={16}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ paddingTop: 3 }}
    >
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </Grid>
    </Grid>
  );
};

const SingleAnime = (props: Props) => {
  const [loading, SetLoading] = useState(true);

  const [animeTitle, SetAnimeTitle] = useState<string>("");
  const [animeStatus, SetAnimeStatus] = useState<SingleAnimeData[]>([]);
  const [animeSynopsis, SetAnimeSynopsis] = useState<string>();
  const [animeImage, SetAnimeImage] = useState<string>();

  const location = useLocation();

  const getAnime = async () => {
    SetLoading(true);

    const result = await fetchSingleAnime(location.state);

    SetAnimeStatus(result.status);
    SetAnimeTitle(result.title);
    SetAnimeSynopsis(result.synopsis);
    SetAnimeImage(result.image);

    SetLoading(false);
  };
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <div className="dart">
        <HeaderBar title="Anime Search App" />
        {loading && <LoadingSection />}
        {!loading ? (
          <Container
            maxWidth="lg"
            sx={{
              marginTop: 3,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              columns={16}
            >
              <Grid item xs={5}>
                <Card sx={{ width: 250, marginBottom: 1 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={animeImage}
                    alt="anime"
                  />
                </Card>
              </Grid>
              <Grid item xs={11}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  columns={16}
                  spacing={1}
                >
                  <Grid item xs={16}>
                    <Typography gutterBottom variant="h5" component="div">
                      {animeTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="synopsis"
                    >
                      {animeSynopsis}
                    </Typography>
                  </Grid>
                  {animeStatus.map((data: SingleAnimeData, index: number) => (
                    <Grid key={index} item xs={4}>
                      <Box
                        className="boxes"
                        sx={{
                          p: 2,
                          border: `1px solid ${data.secondColor}`,
                          width: "150px",
                          padding: 0,
                          backgroundColor: data.backColor,
                        }}
                      >
                        <h3 style={{ color: data.mainColor }}>{data.title}</h3>
                        <p style={{ color: data.secondColor }}>
                          {data.subTitle}
                        </p>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={16}>
                <Button
                  variant="contained"
                  startIcon={<ArrowBackIosIcon />}
                  href="/"
                >
                  BACK
                </Button>
              </Grid>
            </Grid>
          </Container>
        ) : null}
      </div>
    </>
  );
};
export default SingleAnime;
