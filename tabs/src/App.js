import { Box, Container } from "@mui/material";
import React from "react";
import "./App.css";
import VerticalTabs from "./components/VerticalTabs";

function App() {
  return (
    <Container justifyContent="center" alignItems="center" display="flex">
      <VerticalTabs />
    </Container>
  );
}

export default App;
