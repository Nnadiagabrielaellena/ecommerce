import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import { borderBottom } from '@mui/system';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../contex/CartContext';

const categorias = ['negro', 'marron', "estrella"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const {countInCart}= useContext(CartContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCategoryClick = (categoria) => {
    handleCloseNavMenu();
    navigate(`/productos/${categoria}`);
  };

  return (
    <AppBar position="static"
      sx={{
        backgroundColor: "#F5F0EA",
        color: "#3B2F2F",
        boxShadow: "none",
        borderBottom: "1px solid #E0DAD2"
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO DESKTOP */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            MOOM
          </Typography>

          {/* MENU MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="#3B2F2F">
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {categorias.map((page) => (
                <MenuItem key={page} onClick={() => handleCategoryClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO MOBILE */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            onClick={() => navigate("/")}
            variant="h6"

            component="div"
            sx={{
              mr: 2,
              fontWeight: 600,
              cursoir: "pointer",
              color: "#3B2F2F",
              "&:hover": {
                color: "#C89F6A"
              },
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
              cursor: "pointer"
            }}
          >
            MOOM
          </Typography>

          {/* CATEGORÍAS DESKTOP */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categorias.map((page) => (
              <Button
                key={page}
                onClick={() => handleCategoryClick(page)}
                sx={{
                  my: 2,
                  color: '#3B2F2F',
                  "&:hover": {
                    backgroundColor: "#F1E8DC",
                    color: "#8B5E3C"
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* AVATAR */}
          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={ countInCart()} color="error">
             <ShoppingCartIcon onClick={() => navigate("/cart")} />
            </Badge>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
