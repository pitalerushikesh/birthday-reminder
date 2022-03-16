import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import data from "./data/birthday.json";
import React, { useState } from "react";

const BirthCard = ({ name, age, number }) => {
  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          p: 0,
        }}
      >
        <Grid container spacing={11}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src={`https://i.pravatar.cc/150?img=${number}`}
              sx={{
                width: 80,
                height: 80,
                boxShadow: "0 5px 10px grey",
              }}
            />
          </Grid>
          <Grid item xs={10} alignItems="center" display="flex">
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {name}
              </Typography>
              <Typography
                variany="subtitle1"
                sx={{
                  color: "#707070",
                }}
              >
                {age} years
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function App() {
  const birthData = data.Birthdays;

  const [birthdays, setBirthdays] = useState(birthData);

  const onDelete = (data) => {
    console.log(data);
    setBirthdays([]);
  };

  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 3,
          minWidth: 450,
          boxShadow: "0 5px 10px grey",
          borderRadius: 2,
        }}
      >
        <Typography
          fontFamily="Ubuntu"
          sx={{
            pb: 2,
            fontSize: "1.8rem",
          }}
        >
          {birthdays.length} birthdays today
        </Typography>
        {birthdays.map((person, index) => {
          return (
            <BirthCard
              key={index}
              name={person.name}
              age={person.age}
              number={index}
            />
          );
        })}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            backgroundColor: "#f28ab2",
            "&:hover": {
              backgroundColor: "#f28ab2",
            },
          }}
          onClick={() => {
            onDelete(birthdays);
          }}
        >
          Clear All
        </Button>
      </Box>
    </div>
  );
}

export default App;
