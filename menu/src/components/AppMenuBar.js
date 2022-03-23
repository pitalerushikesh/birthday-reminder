import { Box, Button } from "@mui/material";
import React from "react";

const AppMenuBar = ({ categories, filterItems }) => {
  return (
    <Box justifyContent="center" display="flex">
      {categories.map((category, index) => {
        return (
          <Button
            key={index}
            size="small"
            onClick={() => filterItems(category)}
            sx={{
              my: 2,
              mx: 2,
              color: "#c59d5f",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#c59d5f",
              },
            }}
          >
            {category}
          </Button>
        );
      })}
    </Box>
  );
};

export default AppMenuBar;
