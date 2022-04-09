import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ name, image, info, glass, id }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        mt: 4,
        "&:hover": {
          boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia component="img" height="100%" image={image} alt={name} />
      <CardContent>
        <Typography
          sx={{
            color: "#222222",
          }}
          fontWeight="bold"
          letterSpacing="1.2px"
          variant="h4"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#222222",
          }}
          fontSize="1.5rem"
          letterSpacing="3px"
          fontWeight="bold"
          gutterBottom
        >
          {glass}
        </Typography>
        <Typography
          fontSize="1rem"
          sx={{
            color: "#476a2e",
          }}
        >
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: "#476a2e",
            color: "#ffffff",
            px: 2,
            py: 0.5,
            "&:hover": {
              backgroundColor: "#d4e6a5",
              color: "#476a2e",
            },
          }}
          onClick={() => navigate(`/detail/${id}`)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
