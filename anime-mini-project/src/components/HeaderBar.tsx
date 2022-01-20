import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
}

const HeaderBar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="searchbar">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HeaderBar;
