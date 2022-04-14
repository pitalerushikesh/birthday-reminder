import React from "react";
import "./App.css";
import { VocabList } from "./components/VocabList";
import { Container, Typography } from "@mui/material";

function App() {
  const randNum = Math.floor(Math.random() * Math.floor(VocabList.length));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        p: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#C0E218",
        }}
      >
        {VocabList[randNum].FIELD1}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#D2E603",
        }}
      >
        {VocabList[randNum].FIELD2}
      </Typography>
    </Container>
  );
}

export default App;
