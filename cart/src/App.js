import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./services/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
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
