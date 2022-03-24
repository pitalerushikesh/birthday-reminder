import { Chip, Typography, Grid } from "@mui/material";
import { HiChevronDoubleRight } from "react-icons/hi";
import React from "react";

const TabContent = ({ title, name, active, desc1, desc2, desc3, desc4 }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Chip
        label={`${name}`}
        sx={{
          borderRadius: "0%",
          color: "#74b0dc",
          fontWeight: "bold",
          backgroundColor: "#dae2ec",
          mb: 2,
        }}
      />
      <Typography
        sx={{
          color: "#617d98",
          mb: 2,
        }}
      >
        {active}
      </Typography>
      <Grid container rowSpacing={3}>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>{desc1}</Typography>
        </Grid>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>{desc2}</Typography>
        </Grid>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>{desc3}</Typography>
        </Grid>
        {desc4 && (
          <Grid item lg={1}>
            <HiChevronDoubleRight color="#2caeba" />
          </Grid>
        )}
        {desc4 && (
          <Grid item lg={11}>
            <Typography>{desc4}</Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default TabContent;
