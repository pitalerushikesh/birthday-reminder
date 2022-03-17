import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        my: 5,
      }}
    >
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
      >
        Our Reviews
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: 5,
          borderBottomColor: "#49adef",
          mx: 5,
        }}
      />
    </Box>
  );
};

export default Header;
