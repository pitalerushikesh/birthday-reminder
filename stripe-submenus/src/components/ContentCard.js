import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import data from "./Item";
console.log(data);

const ContentCard = ({ id, title, submenu1, submenu2, submenu3, submenu4 }) => {
  if (id === 1) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          minWidth: "350px",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          {title}
        </Typography>
        <Grid container padding={2}>
          <Grid item xs={4}>
            <Typography>{submenu1}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{submenu2}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{submenu3}</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  } else if (id === 2) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          minWidth: "350px",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          {title}
        </Typography>
        <Grid container padding={2}>
          <Grid item xs={3}>
            <Typography>{submenu1}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{submenu2}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{submenu3}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{submenu4}</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          minWidth: "350px",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          {title}
        </Typography>
        <Grid container padding={2}>
          <Grid item xs={6}>
            <Typography>{submenu1}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{submenu2}</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default ContentCard;
