import { Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const SearchCard = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <Card
      elevation={7}
      sx={{
        width: "650px",
        p: 3,
        my: 7,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: "#476a2e",
          }}
          variant="h6"
          fontWeight="bold"
          lineHeight="1px"
          letterSpacing="1.2px"
        >
          Search Your Favorite Cocktail Here!
        </Typography>
        <TextField
          fullWidth
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mt: 4,
            backgroundColor: "#f1f5f8",
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SearchCard;
