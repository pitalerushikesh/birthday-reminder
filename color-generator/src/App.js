import React from "react";
import "./App.css";
import { Box, Button, FormLabel, TextField } from "@mui/material";

function App() {
  return (
    <>
      <Box display="flex" justifyContent="space-evenly">
        <FormLabel
          sx={{
            fontSize: "1.25rem",
            color: "#063251",
            letterSpacing: "0.1rem",
          }}
        >
          Color Generator
        </FormLabel>
        <TextField
          sx={{
            mx: 2,
          }}
          type="number"
          size="small"
          autoComplete="off"
          placeholder="#f15025"
        />
        <Button
          sx={{
            backgroundColor: "#49a6e9",
            color: "#063251",
            letterSpacing: "0.1rem",
            px: 2,
          }}
        >
          Generate
        </Button>
      </Box>
    </>
  );
}

export default App;
