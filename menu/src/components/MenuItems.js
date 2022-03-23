import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";

const MenuItems = ({ img, name, price, desc }) => {
  return (
    <>
      <Grid container columnSpacing={2}>
        <Grid
          item
          xl={4}
          lg={4}
          sm={4}
          xs={4}
          justifyContent="end"
          display="flex"
        >
          <Box
            component="img"
            src={img}
            height="115px"
            sx={{
              border: "2px solid #c59d5f",
            }}
          />
        </Grid>
        <Grid item xl={6} lg={6} sm={6} xs={6}>
          <Box
            justifyContent="space-between"
            display="flex"
            sx={{
              pr: 2,
            }}
          >
            <Typography fontWeight="bold" fontFamily="Blinker">
              {name}
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{
                color: "#c59d5f",
              }}
            >
              ${price}
            </Typography>
          </Box>
          <Divider
            sx={{
              color: "#c59d5f",
              mx: 1,
              borderBottomWidth: 2,
              borderBottomStyle: "dotted",
            }}
          />
          <Typography
            fontSize="0.8rem"
            sx={{
              color: "#707070",
              mt: 2,
            }}
          >
            {desc}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuItems;
