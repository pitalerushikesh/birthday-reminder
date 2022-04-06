import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardCart from "./CardCart";
import { useGlobalContext } from "../services/context";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  console.log("Cart:", cart);

  if (cart.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          mt: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Your cart is empty
        </Typography>
      </Box>
    );
  }

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
        <Typography
          sx={{
            mt: 4,
          }}
          variant="h3"
          fontWeight="bold"
          fontFamily="Open Sans"
        >
          YOUR BAG
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "550px",
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
      <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Button
          variant="outlined"
          sx={{
            color: "#bb2525",
            borderColor: "#bb2525",
            px: 4,
            letterSpacing: "0.2rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#e66b6b",
              borderColor: "#e66b6b",
            },
          }}
          onClick={() => clearCart()}
        >
          Clear Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
