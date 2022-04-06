import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useGlobalContext } from "../services/context";

const CardCart = ({ id, title, price, img, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      pt={2}
    >
      <Grid item xs={2}>
        <Box component="img" src={img} alt={title} width="70%" />
      </Grid>
      <Grid item xs={9} flexDirection="column">
        <Typography variant="h5">{title}</Typography>
        <Typography
          sx={{
            color: "#8bbac9",
          }}
        >
          {price}
        </Typography>
        <Button
          sx={{
            color: "#82c7f8",
            textTransform: "none",
          }}
          onClick={() => remove(id)}
        >
          remove
        </Button>
      </Grid>
      <Grid
        item
        xs={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <IconButton onClick={() => toggleAmount(id, "inc")}>
          <BsChevronUp />
        </IconButton>
        {amount}
        <IconButton onClick={() => toggleAmount(id, "dec")}>
          <BsChevronDown />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardCart;
