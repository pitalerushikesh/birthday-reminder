import { Chip, Typography, Grid } from "@mui/material";
import { HiChevronDoubleRight } from "react-icons/hi";
import React from "react";

const TabContent = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
        }}
      >
        Full Stack Web Developer
      </Typography>
      <Chip
        label="TOMMY"
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
        December 2015 - Present
      </Typography>
      <Grid container rowSpacing={3}>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>
            Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
            leggings offal cold-pressed brunch neutra. Hammock photo booth
            live-edge disrupt.
          </Typography>
        </Grid>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>
            Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
            leggings offal cold-pressed brunch neutra. Hammock photo booth
            live-edge disrupt.
          </Typography>
        </Grid>
        <Grid item lg={1}>
          <HiChevronDoubleRight color="#2caeba" />
        </Grid>
        <Grid item lg={11}>
          <Typography>
            Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
            leggings offal cold-pressed brunch neutra. Hammock photo booth
            live-edge disrupt.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default TabContent;
