import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { FavoriteBorderRounded, Mode } from "@mui/icons-material";
import { useNavigate } from "react-router";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Badge } from "@mui/material";
import Model from "./Model";
import NotificationsContent from "./NotificationsContent";
import styled from "styled-components";

const StatusCircle = styled.div`
  display: inline-block;
  border-radius: 50%;
  max-width: 10px;
  max-height: 10px;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
`;

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const [openNotifications, updateOpenNotifications] = React.useState(false);

  return (
    <>
      <Model
        title={
          <Typography variant="h6" style={{ display: "flex" }}>
            Recent Changes{" "}
            <Typography
              variant="body1"
              style={{ display: "flex", margin: "5px", marginLeft: "15px" }}
            >
              <div>
                <StatusCircle color="red" style={{ marginLeft: "5px" }} />{" "}
                Negavite
              </div>
              <div>
                <StatusCircle color="green" style={{ marginLeft: "5px" }} />{" "}
                Positive
              </div>
              <div>
                <StatusCircle color="yellow" style={{ marginLeft: "5px" }} />{" "}
                Neutral
              </div>
            </Typography>
          </Typography>
        }
        open={openNotifications}
        onClose={() => updateOpenNotifications(false)}
        renderComponent={<NotificationsContent />}
      />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ background: "#fafafa" }}
      >
        <>
          <Toolbar disableGutters>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <img
                  src="./cslogo.png"
                  alt="Creditsafe"
                  style={{ width: "185px", height: "50px" }}
                />
              </IconButton>
              <div
                variant="body1"
                style={{
                  color: "red",
                  alignSelf: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FavoriteBorderRounded />
                </div>
                <Typography onClick={() => navigate("/whishlisted")}>
                  Watchlist
                </Typography>
                <div
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Badge
                    badgeContent={4}
                    color="secondary"
                    onClick={() => updateOpenNotifications(true)}
                  >
                    <NotificationsActiveIcon />
                  </Badge>
                </div>
              </div>
            </div>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            <IconButton sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img
                src="./cslogo.png"
                alt="Creditsafe"
                style={{ width: "185px", height: "50px" }}
              />
            </IconButton>

            {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
