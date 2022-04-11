import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title }) => {
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
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
