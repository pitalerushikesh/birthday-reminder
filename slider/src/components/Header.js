import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
        sx={{
          color: "#ba5d2c",
          pr: 2,
        }}
      >
        /
      </Typography>
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
      >
        Reviews
      </Typography>
    </Box>
  );
};

export default Header;
