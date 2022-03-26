import React from "react";
import { Box, Typography } from "@mui/material";

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
        TIRED OF BORING LOREM IPSUM?
      </Typography>
    </Box>
  );
};

export default Header;
