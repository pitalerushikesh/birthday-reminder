import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    alignItems: "center",
  },
  badge: {
    fontSize: "1.2rem",
    backgroundColor: "#85c6f4",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <AppBar
      sx={{
        backgroundColor: colorChange ? "white" : "#ffffff",
        mb: 4,
      }}
      className={classes.appBar}
      position="sticky"
      elevation={7}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Typography
                variant="h6"
                noWrap
                fontSize="1.5rem"
                component="div"
                fontFamily="Cantarell"
                letterSpacing="1.4px"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "#222222",
                }}
              >
                The
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.5rem"
                component="div"
                fontFamily="Cantarell"
                fontWeight="bold"
                letterSpacing="1.4px"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "#476a2e",
                }}
              >
                Cocktail
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.5rem"
                component="div"
                fontFamily="Cantarell"
                letterSpacing="1.4px"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "#222222",
                }}
              >
                DB
              </Typography>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#000000",
                  }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#000000",
                  }}
                >
                  About
                </Button>
              </Box>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.7rem"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  textShadow: "0px 3px 4px  #000000",
                  letterSpacing: "0.5px",
                  color: "#000000",
                }}
              >
                Cocktail
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
