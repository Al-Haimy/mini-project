import React from "react";

import { styled, alpha } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  color: alpha(theme.palette.common.black, 0.25),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "70ch",
      },
    },
  },
}));

interface Props {
  callback: any;
  query: string;
}

const SearchBar = (props: Props) => {
  return (
    <Grid
      container
      columns={16}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: 3,
      }}
    >
      <Grid item sm={12} xs={12}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={props.query}
              onChange={props.callback}
              placeholder="Search For An Anime..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
