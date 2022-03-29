import React from "react";
import { Card, CardContent, IconButton, Typography, Box } from "@mui/material";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const ItemCard = ({ title, removeItem, editItem }) => {
  return (
    <Box justifyContent="space-between" display="flex" alignItems="center">
      <Typography>{title}</Typography>
      <Box>
        <IconButton onClick={editItem}>
          <BiEdit color="#0080ff" />
        </IconButton>
        <IconButton onClick={removeItem}>
          <MdDelete color="#FF0000" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ItemCard;
