import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardCart from "./CardCart";
import { useGlobalContext } from "../services/context";

const Cart = () => {
  const [cart, total, clearCart] = useGlobalContext();
  console.log("Cart:", cart);
  return (
    <Grid
      container
      maxWidth="md"
      sx={{
        mt: 4,
      }}
    >
      <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant="h2" fontWeight="bold">
          Your Bag
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "500px",
        }}
      >
        {cart.map((item) => {
          return <CardCart key={item.id} {...item} />;
        })}
      </Grid>
      <Grid item xs={12}>
        <Divider
          sx={{
            borderBottomWidth: 5,
            borderBottomColor: "#000000",
          }}
        />
        <Box
          justifyContent="space-between"
          display="flex"
          alignItems="center"
          p={2}
        >
          <Typography fontWeight="bold" variant="h6">
            Total
          </Typography>
          <Typography fontWeight="bold" variant="h6">
            ${total}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cart;
