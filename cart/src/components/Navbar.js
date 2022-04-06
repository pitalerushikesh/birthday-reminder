import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Badge, Grid } from "@mui/material";
import { GiShoppingBag } from "react-icons/gi";
import { makeStyles } from "@mui/styles";
import { useGlobalContext } from "../services/context";

const useStyles = makeStyles({
  appBar: {
    alignItems: "center",
  },
  badge: {
    fontSize: "1.2rem",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const { amount } = useGlobalContext();
  return (
    <AppBar
      sx={{
        backgroundColor: colorChange ? "white" : "#2680c0",
        p: 1,
      }}
      className={classes.appBar}
      position="sticky"
      elevation={5}
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
                fontSize="2rem"
                component="div"
                fontWeight="bold"
                sx={{
                  mr: 1,
                  display: { xs: "none", md: "flex" },
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  color: "#ffffff",
                }}
              >
                UseReducer
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
                <Badge
                  badgeContent={amount}
                  overlap="circular"
                  classes={{ badge: classes.badge }}
                  color="primary"
                >
                  <GiShoppingBag size="35" />
                </Badge>
              </Box>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.7rem"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  textShadow: "0px 3px 4px  #000000",
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  color: "#000000",
                }}
              >
                UseReducer
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
