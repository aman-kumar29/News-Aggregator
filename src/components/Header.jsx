import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';

import { useRef } from 'react';

import FitbitIcon from '@mui/icons-material/Fitbit';
import SearchIcon from '@mui/icons-material/Search';

function Header({ onSearch }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchText, setSearchText] = useState('');
  // const [isSearchFocused, setIsSearchFocused] = useState(false);

  
  const overlayRef = useRef();
  
  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };
  
  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCategory = (category) => {
    console.log(category);
    onSearch(category);
    handleCloseNavMenu();
    closeSearch();
  };
  const handleSearch = () => {
    onSearch(searchText);
    closeSearch();
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSearch();
  };

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #64b5f6, #1976d2)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FitbitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem', color: '#ffffff' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              NewZera
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={() => handleCategory('top')}>
                  <Typography textAlign="center" color="#333333">
                    Trending News
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCategory('top')}>
                  <Typography textAlign="center" color="#333333">
                    Top News
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCategory('sports')}>
                  <Typography textAlign="center" color="#333333">
                    Sports News
                  </Typography>
                </MenuItem>
                {/* Add more menu items as needed */}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#ffffff', fontSize: '1.5rem' }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              NewZera
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="top"
                onClick={() => handleCategory('top')}
                sx={{ my: 2, color: '#ffffff', display: 'block', fontSize: '1rem' }}
              >
                Trending News
              </Button>
              <Button
                key="top1"
                onClick={() => handleCategory('top')}
                sx={{ my: 2, color: '#ffffff', display: 'block', fontSize: '1rem' }}
              >
                Top News
              </Button>
              <Button
                key="sports"
                onClick={() => handleCategory('sports')}
                sx={{ my: 2, color: '#ffffff', display: 'block', fontSize: '1rem' }}
              >
                Sports News
              </Button>
              {/* Add more buttons as needed */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open search">
                <IconButton onClick={openSearch} sx={{ p: 0 }} size="large">
                  <SearchIcon sx={{ fontSize: '1.8rem', color: '#ffffff' }} />
                </IconButton>
              </Tooltip>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div ref={overlayRef} className="overlay">
        <button className="close-button" onClick={closeSearch}>
          &times;
        </button>
        <div className="overlay-content">
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                sx={{ width: '30%',marginLeft:'35%', marginRight: '1%', borderRadius: '30px 0px 0px 30px' }}
                type="text"
                placeholder="Enter your search keyword..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                onClick={handleSearch}
                sx={{
                  padding: '12px 15px',
                  borderRadius: '0px 30px 30px 0px',
                  transition: '0.3s',
                  background: '#007BFF',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0056b3',
                  },
                }}
                variant="contained"
              >
                Search
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
