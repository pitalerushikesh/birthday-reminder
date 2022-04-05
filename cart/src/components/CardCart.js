import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useGlobalContext } from "../services/context";

const CardCart = ({ id, prodName, prodPrice, prodImg, prodQuantity }) => {
  const { removeItem, increaseItem, decreaseItem, toggleAmount } =
    useGlobalContext();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      display="flex"
    >
      <Grid item xs={2}>
        <Box component="img" src={prodImg} alt={prodName} width="90%" />
      </Grid>
      <Grid item xs={9} flexDirection="column">
        <Typography variant="h5">{prodName}</Typography>
        <Typography
          sx={{
            color: "#8bbac9",
          }}
        >
          {prodPrice}
        </Typography>
        <Button
          sx={{
            color: "#82c7f8",
            textTransform: "none",
          }}
          onClick={() => removeItem(id)}
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
        {prodQuantity}
        <IconButton onClick={() => toggleAmount(id, "dec")}>
          <BsChevronDown />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardCart;
