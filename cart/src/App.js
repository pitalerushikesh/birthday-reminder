import { Box, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./services/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          mt: 8,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Cart />
    </Box>
  );
}

export default App;
