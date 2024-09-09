import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logoImage from "../../images/white-logo.png";
import AdbIcon from "@mui/icons-material/Adb";


const pages = ["Home", "Dashboard", "Tools", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
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

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingTop: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu Dropdown */}
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
          </Box>

          {/* Centered Logo on Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="GLP Training Logo"
              sx={{
                height: "auto",
                width: { xs: "120px", sm: "150px" },
              }}
            />
          </Box>

          {/* Centered Logo on Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="GLP Training Logo"
              sx={{
                height: "auto",
                width: { xs: "160px", sm: "200px" },
              }}
            />
          </Box>

          {/* Menu Items for Desktop */}
          <Box
            sx={{
              flexGrow: 0, // Do not let it take extra space
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start", // Align to the left after logo
              alignContent:"center",
              ml: 'auto' // Push the menu items to the right
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User Settings Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
