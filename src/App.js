import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import data from "./data/birthday.json";

import React from "react";

const BirthCard = ({ name, age, number }) => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Avatar
              alt="Remy Sharp"
              src={`https://i.pravatar.cc/150?img=${number}`}
              sx={{
                width: 100,
                height: 100,
                boxShadow: "0 5px 10px grey",
              }}
            />
          </Grid>
          <Grid item xs={8} alignItems="center" display="flex">
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {name}
              </Typography>
              <Typography variany="subtitle1">{age} years</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function App() {
  const birthData = data.Birthdays;
  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 3,
          width: "100%",
        }}
      >
        <Typography variant="h3">{birthData.length} birthdays today</Typography>
        {birthData.map((person, index) => {
          return (
            <BirthCard
              key={index}
              name={person.name}
              age={person.age}
              number={index}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default App;
