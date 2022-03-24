import { Box, Container } from "@mui/material";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import VerticalTabs from "./components/VerticalTabs";

function App() {
  return (
    <Container justifyContent="center" alignItems="center" display="flex">
      <Header />
      <VerticalTabs />
    </Container>
  );
}

export default App;
