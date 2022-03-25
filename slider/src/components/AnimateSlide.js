import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FaQuoteRight } from "react-icons/fa";

const AnimateSlide = ({ name, role, image, desc }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        p: 4,
        width: "60%",
      }}
    >
      <Box
        component="img"
        src={image}
        height="150px"
        width="150px"
        sx={{
          objectFit: "cover",
          borderRadius: "50%",
          border: "4px solid #bcccdc",
          boxShadow: "0px 5px 15px #bcccdc",
        }}
      />
      <Typography
        fontWeight="bold"
        fontSize="1.2rem"
        sx={{
          pt: 2,
          color: "#ba5d2c",
        }}
      >
        {name.toUpperCase()}
      </Typography>
      <Typography>{role}</Typography>
      <Typography
        sx={{
          pt: 2,
          color: "#617d98",
        }}
        textAlign="center"
      >
        {desc}
      </Typography>
      <FaQuoteRight
        color="#ba5d2c"
        size="40"
        style={{
          paddingTop: "30px",
        }}
      />
    </Container>
  );
};

export default AnimateSlide;
