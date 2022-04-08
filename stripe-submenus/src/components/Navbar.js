import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { makeStyles } from "@mui/styles";
import LightTip from "./LightTip";
import ContentCard from "./ContentCard";
import data from "./Item";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = makeStyles({
  appBar: {
    alignItems: "center",
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: colorChange ? "white" : "transparent",
      }}
      className={classes.appBar}
      position="fixed"
      elevation={0}
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
              lg={4}
              md={4}
              sm={4}
              xs={4}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Typography
                variant="h6"
                noWrap
                fontSize="2.3rem"
                fontWeight="bold"
                component="div"
                sx={{
                  mr: 1,
                  display: { xs: "none", md: "flex" },
                  textShadow: "0px 3px 4px  #000000",
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  color: "#ffffff",
                }}
              >
                stripe
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <GiHamburgerMenu color="#49a6e9" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key="Home" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                      textTransform="none"
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Shop" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                      textTransform="none"
                    >
                      About
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                      textTransform="none"
                    >
                      Projects
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Shop" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                      textTransform="none"
                    >
                      Contact
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                      textTransform="none"
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={4}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {data.map((item) => {
                  return (
                    <LightTip
                      content={
                        <ContentCard
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          submenu1={item.submenu1}
                          submenu2={item.submenu2}
                          submenu3={item.submenu3}
                          submenu4={item.submenu4}
                        />
                      }
                    >
                      <Button
                        key={item.id}
                        sx={{
                          my: 2,
                          display: "block",
                          textTransform: "none",
                          fontSize: "1.4rem",
                          letterSpacing: "0.5px",
                          color: "#ffffff",
                        }}
                      >
                        {item.title}
                      </Button>
                    </LightTip>
                  );
                })}
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
                stripe
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              xs={4}
              sm={4}
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#222222",
                    textTransform: "none",
                    color: "#ffffff",
                    px: 2,
                    fontSize: "0.8rem",
                    py: 0.5,
                  }}
                >
                  Sign in
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
