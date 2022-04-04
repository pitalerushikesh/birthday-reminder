import "./App.css";

import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { GiCancel } from "react-icons/gi";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#707070",
            color: "#fff",
          },
        }}
        onClick={handleOpen}
      >
        Show Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "200px",
            backgroundColor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid>
            <Box item justifyContent="end" alignItems="center" display="flex">
              <IconButton onClick={handleClose}>
                <GiCancel color="#bb2525" />
              </IconButton>
            </Box>
            <Box
              justifyContent="center"
              sx={{
                height: "120px",
              }}
              alignItems="center"
              display="flex"
            >
              <Typography
                textAlign="center"
                variant="h4"
                fontWeight="bold"
                letterSpacing="1px"
                id="modal-modal-title"
              >
                Modal Content
              </Typography>
            </Box>
          </Grid>
        </Card>
      </Modal>
    </>
  );
}

export default App;
