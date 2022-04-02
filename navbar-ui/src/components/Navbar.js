import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Grid, Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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
                fontSize="1.7rem"
                component="div"
                sx={{
                  mr: 1,
                  display: { xs: "none", md: "flex" },
                  textShadow: "0px 3px 4px  #000000",
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  color: "#000000",
                }}
              >
                Coding
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.7rem"
                component="div"
                sx={{
                  mr: 1,
                  display: { xs: "none", md: "flex" },
                  textShadow: "0px 4px 3px  #000000",
                  lineHeight: "1.5",
                  color: "#49a6e9",
                  letterSpacing: "0.5px",
                }}
              >
                Addict
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
                <Button
                  key="Home"
                  sx={{
                    my: 2,

                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#324d67",
                  }}
                >
                  Home
                </Button>
                <Button
                  key="Shop"
                  sx={{
                    my: 2,

                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#324d67",
                  }}
                >
                  About
                </Button>
                <Button
                  key="Blog"
                  sx={{
                    my: 2,

                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#324d67",
                  }}
                >
                  Projects
                </Button>
                <Button
                  key="Shop"
                  sx={{
                    my: 2,

                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#324d67",
                  }}
                >
                  Contact
                </Button>
                <Button
                  key="Blog"
                  sx={{
                    my: 2,

                    display: "block",
                    textTransform: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    color: "#324d67",
                  }}
                >
                  Profile
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
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  color: "#000000",
                }}
              >
                Coding
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontSize="1.7rem"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  textShadow: "0px 4px 3px  #000000",
                  lineHeight: "1.5",
                  color: "#49a6e9",
                  letterSpacing: "0.5px",
                }}
              >
                Addict
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
                <BsFacebook color="#49a6e9" size="22" />
                <BsTwitter
                  color="#49a6e9"
                  style={{
                    marginRight: "1rem",
                    marginLeft: "1rem",
                  }}
                  size="22"
                />
                <BsLinkedin
                  style={{
                    marginRight: "1rem",
                  }}
                  color="#49a6e9"
                  size="22"
                />
                <AiFillInstagram color="#49a6e9" size="28" />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
