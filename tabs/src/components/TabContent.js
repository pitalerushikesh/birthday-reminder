import { Button, Card, Chip, Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

const TabContent = () => {
  return (
    <>
      <Typography>Full Stack Web Developer</Typography>
      <Chip
        label="TOMMY"
        sx={{
          borderRadius: "0%",
          color: "#74b0dc",
          fontWeight: "bold",
          backgroundColor: "#dae2ec",
        }}
      />
      <Typography
        sx={{
          color: "#617d98",
        }}
      >
        December 2015 - Present
      </Typography>

      <Grid container>
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
