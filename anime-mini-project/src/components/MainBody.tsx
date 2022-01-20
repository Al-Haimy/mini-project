import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
} from "@mui/material";

type Props = {
  mainCard: any;
  pages: number;
  page: number;
  callback: any;
};

const MainBody: React.FC<Props> = ({ mainCard, pages, page, callback }) => {
  console.log(pages);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columns={16}
        className="hi"
      >
        {mainCard.map((card: any, index: number) => (
          <Grid key={index} item xs={8} sm={4}>
            <Link to={`/anime/${card.slug}`} state={card.mal_id}>
              <Card sx={{ width: 225, marginBottom: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={card.image_url}
                    alt="anime"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={pages}
        page={page}
        onChange={callback}
        color="primary"
      />
    </Container>
  );
};
export default MainBody;
