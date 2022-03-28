import React, { useState } from "react";
import "./App.css";
import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";
import Values from "values.js";
import ColorCard from "./components/ColorCard";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let newColor = new Values(color).all(10);
      setList(newColor);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        justifyContent="start"
        alignItems="center"
        display="flex"
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          sx={{
            my: 3,
            ml: 3,
          }}
        >
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
              borderRadius: "5%",
              border: error ? "1px solid red" : null,
            }}
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
            onClick={handleSubmit}
          >
            Generate
          </Button>
        </Box>
      </Grid>

      {list.map((item, index) => {
        return (
          <Grid item lg={2}>
            <ColorCard
              key={index}
              {...item}
              index={index}
              hexColor={item.hex}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
