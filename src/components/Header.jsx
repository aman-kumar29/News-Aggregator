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
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country
  const [selectedTimeframe, setSelectedTimeframe] = useState(''); // State for selected timeframe
  const [selectedLanguage, setSelectedLanguage] = useState(''); // State for selected language
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
    const searchOptions = {
      category: category,
      country: selectedCountry,
      timeframe: selectedTimeframe,
      language: selectedLanguage,
    };
  
    onSearch('', searchOptions);
    handleCloseNavMenu();
    closeSearch();
  };
  const handleSearch = () => {
    const searchOptions = {
      category: selectedCategory,
      country: selectedCountry,
      timeframe: selectedTimeframe,
      language: selectedLanguage,
    };

    onSearch(searchText, searchOptions);
    closeSearch();
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSearch(searchText, {
      category: selectedCategory,
      country: selectedCountry,
      timeframe: selectedTimeframe,
      language: selectedLanguage,
    });
  };
  

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #393E46, #242629)',color:'#F7F7F7' }}>
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
                fontFamily: 'Georgia, serif',
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
                fontFamily: 'Georgia, serif',
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
                Top News
              </Button>
              <Button
                key="top1"
                onClick={() => handleCategory('sports')}
                sx={{ my: 2, color: '#ffffff', display: 'block', fontSize: '1rem' }}
              >
                Sports News
              </Button>
              <Button
                key="sports"
                onClick={() => handleCategory('top')}
                sx={{ my: 2, color: '#ffffff', display: 'block', fontSize: '1rem' }}
              >
                Trending News
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
          <Box>
            {/* Existing TextField and Button components */}
            <TextField
              InputProps={{ sx: { borderRadius: 20 } }}
              sx={{ width: '40%', marginLeft: '5%', '@media (max-width: 1200px)': { width: '50%', marginLeft: '25%' }, '@media (max-width: 768px)': { width: '70%', marginLeft: '15%' }, marginRight: '1%' }}
              type="text"
              placeholder="Enter your search keyword..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={handleSearch}
              sx={{
                padding: '12px 25px',
                borderRadius: '30px 30px 30px 30px',
                transition: '0.3s',
                background: '#393E46',
                color: '#F7F7F7',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
          <Box>
          <TextField
              InputProps={{ sx: { borderRadius: 20 } }}
              select
              label="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{ marginLeft: '1%', width: '8%' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="top">Top</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              {/* Add more categories as needed */}
            </TextField>

            <TextField
              InputProps={{ sx: { borderRadius: 20 } }}
              select
              label="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{ marginLeft: '1%', width: '8%' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="in">India</MenuItem>
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="gb">United Kingdom</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
            </TextField>

            <TextField
              InputProps={{ sx: { borderRadius: 20 } }}
              select
              label="Timeframe"
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              sx={{ marginLeft: '1%', width: '8%' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1 Hour</MenuItem>
              <MenuItem value="6">6 Hours</MenuItem>
              <MenuItem value="24">24 Hours</MenuItem>
            </TextField>

            <TextField
              InputProps={{ sx: { borderRadius: 20 } }}
              select
              label="Language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              sx={{ marginLeft: '1%', width: '8%' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
              <MenuItem value="jp">Japanese</MenuItem>
            </TextField>
          </Box>
        </form>
        </div>
      </div>
    </>
  );
}

export default Header;
