import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Header = ({ title, value, onClick, text }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
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
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
      >
        {value}
      </Typography>
      {text && (
        <Button
          sx={{
            mx: 2,
            backgroundColor: "#46a0e2",
            color: "#ffffff",
            "&:hover": {
              color: "#46a0e2",
              backgroundColor: "#000000",
            },
          }}
          onClick={onClick}
        >
          {text}
        </Button>
      )}
    </Box>
  );
};

export default Header;
