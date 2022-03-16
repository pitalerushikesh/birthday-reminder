import "./App.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : text}
      <span
        onClick={toggleReadMore}
        style={{
          cursor: "pointer",
          color: "#49a6e9",
        }}
      >
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
};

export const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 500, minHeight: 430 }}>
      <CardMedia component="img" height="250" image={img} alt="paris" />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            pr: 2,
          }}
        >
          <Typography gutterBottom fontFamily="Roboto" fontWeight="bold">
            {title}
          </Typography>
          <Typography
            gutterBottom
            fontWeight="bold"
            sx={{
              backgroundColor: "#ebf7ff",
              borderRadius: "5px",
              p: "2px",
              color: "#49adef",
            }}
          >
            ${price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <ReadMore>{desc}</ReadMore>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          pb: 3,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#bb2525",
            borderColor: "#bb2525", // border color for button
            py: 0,
            px: 5,
          }}
        >
          Not Interested
        </Button>
      </CardActions>
    </Card>
  );
};

function App() {
  return (
    <div>
      <Typography
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Ubuntu"
        sx={{
          my: 5,
          borderBottom: "5px solid #000",
        }}
      >
        Our Tours
      </Typography>

      <TourCard />
    </div>
  );
}

export default App;
