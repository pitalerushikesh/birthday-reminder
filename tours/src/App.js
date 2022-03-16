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
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import data from "./data/tour.json";
import Loading from "./first/Loading";

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

const TourCard = ({ img, title, price, desc, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 500, minHeight: 430, mb: 3 }}>
      <CardMedia component="img" height="230" image={img} alt="paris" />
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
          onClick={onDelete}
        >
          Not Interested
        </Button>
      </CardActions>
    </Card>
  );
};

function App() {
  const [tour, setTour] = useState(data.tour);
  const [loading, setLoading] = useState(true);
  const deleteTour = (id) => {
    console.log(id);
    setTour(tour.filter((tour) => tour.id !== id));
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          my: 5,
        }}
      >
        <Typography
          textAlign="center"
          fontSize="2.5rem"
          fontWeight="bold"
          fontFamily="Ubuntu"
        >
          Our Tours
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 5,
            borderBottomColor: "#49adef",
            mx: 5,
          }}
        />
      </Box>
      {tour.length === 0 ? (
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderColor: "#bb2525", // border color for button
            py: 0,
            px: 5,
            width: "50%",
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </Button>
      ) : (
        <>
          {tour.map((tour) => {
            return (
              <TourCard
                key={tour.id}
                title={tour.title}
                price={tour.price}
                img={tour.img}
                desc={tour.desc}
                onDelete={() => deleteTour(tour.id)}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
