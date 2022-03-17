import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data/people.json";

function App() {
  const [index, setIndex] = useState(0);
  const [people] = useState(data.reviews);

  const surprise = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    console.log(random);
    setIndex(checkNumber(random));
  };

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Card
        sx={{
          width: "50%",
        }}
      >
        <CardContent
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Badge
            badgeContent={
              <FaQuoteRight
                style={{
                  backgroundColor: "#49adef",
                  padding: "5px",
                  borderRadius: "40%",
                  color: "#fff",
                }}
              />
            }
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Box
              component="img"
              src={people[index].img}
              width="100px"
              height="100px"
              alt="Susan Smith"
              sx={{
                borderRadius: "50%",
                objectFit: "cover",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "4px -2px 0px 2px #49a6e9",
              }}
            />
          </Badge>

          <Typography
            fontFamily="Ubuntu"
            fontWeight="bold"
            fontSize="1rem"
            sx={{
              mt: 2,
            }}
          >
            {people[index].name}
          </Typography>
          <Typography
            sx={{
              color: "#49adef",
            }}
          >
            {people[index].role}
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              color: "#617d98",
              mt: 2,
            }}
          >
            {people[index].desc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <IconButton sx={{ ml: 4 }} onClick={prev}>
              <AiOutlineLeft size="22" color="#49adef" />
            </IconButton>
            <IconButton sx={{ mr: 4 }} onClick={next}>
              <AiOutlineRight size="22" color="#49adef" />
            </IconButton>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              color: "#49adef",
              backgroundColor: "#ebf7ff",
              py: 0,
              mt: 1,
              mb: 2,
            }}
            onClick={() => {
              surprise();
            }}
          >
            Surprise Me
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default App;
