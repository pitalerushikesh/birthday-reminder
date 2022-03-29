import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
      >
        Grocery Bud
      </Typography>
    </Box>
  );
};

export default Header;
