import { Box, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ColorCard = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Box
      sx={{
        backgroundColor: `rgb(${bcg})`,
        height: "280px",
        cursor: "pointer",
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: index > 10 ? "#fff" : "#000",
          }}
        >
          {weight}%
        </Typography>
        <Typography
          sx={{
            color: index > 10 ? "#fff" : "#000",
          }}
        >
          {hexValue}
        </Typography>
        {alert && (
          <Typography
            sx={{
              color: index > 10 ? "#fff" : "#000",
            }}
          >
            COPIED TO CLIPBOARD
          </Typography>
        )}
      </CardContent>
    </Box>
  );
};

export default ColorCard;
