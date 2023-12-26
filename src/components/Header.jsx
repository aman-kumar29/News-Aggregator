// import React, { useState } from 'react';
// import { Grid, IconButton, Typography, Button, Stack } from '@mui/material';
// import FitbitIcon from '@mui/icons-material/Fitbit';
// import SearchIcon from '@mui/icons-material/Search';
// import { useRef } from 'react';

// const Header = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState('');
//   const [isSearchFocused, setIsSearchFocused] = useState(false); // Track whether the search input is focused

//   const handleSearch = () => {
//     onSearch(searchText);
//     closeSearch();
//   };

//   const overlayRef = useRef();

//   const openSearch = () => {
//     overlayRef.current.style.width = '100%';
//     setIsSearchFocused(true); // Set the flag to true when opening the search
//   };

//   const closeSearch = () => {
//     overlayRef.current.style.width = '0%';
//     setIsSearchFocused(false); // Reset the flag when closing the search
//   };

//   const handleCategory = (category) => {
//     onSearch(category);
//   };

//   return (
//     <>
//       <Grid container alignItems="center">
//         <Grid item>
//           <IconButton size="large" edge="start" aria-label="logo">
//             <FitbitIcon />
//           </IconButton>
//         </Grid>
//         <Grid item>
//           <Typography variant="h6" component="div">
//             NewZera
//           </Typography>
//         </Grid>
//         <Grid item xs={8} md={6}>
//           <Stack direction="row" spacing={2}>
//             <Button color="inherit" onClick={() => handleCategory('top')}>
//               Top News
//             </Button>
//             <Button color="inherit" onClick={() => handleCategory('sports')}>
//               Sports News
//             </Button>
//             <Button color="inherit" onClick={() => handleCategory('entertainment')}>
//               Entertainment News
//             </Button>
//           </Stack>
//         </Grid>
//         <Grid item xs={false} md={4} />

//         <Grid item>
//           <IconButton size="large" edge="end" aria-label="search-icon-img" onClick={openSearch}>
//             <SearchIcon />
//           </IconButton>
//         </Grid>
//         <Grid item>
//           <Button variant="contained" color="primary">
//             Subscribe
//           </Button>
//         </Grid>
//       </Grid>

//       <div ref={overlayRef} className="overlay">
//         <button className="close-button" onClick={closeSearch}>
//           &times;
//         </button>
//         <div className="overlay-content">
//           <form>
//             <input
//               className="search-input"
//               type="text"
//               placeholder="Enter your search keyword..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSearch();
//                 }
//               }}
//               onFocus={() => setIsSearchFocused(true)}
//               onBlur={() => setIsSearchFocused(false)}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
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
import { useRef } from 'react';

import FitbitIcon from '@mui/icons-material/Fitbit';
import SearchIcon from '@mui/icons-material/Search';

function Header({ onSearch }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchText, setSearchText] = useState('');
  // const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = () => {
    onSearch(searchText);
    closeSearch();
  };

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
    onSearch(category);
    handleCloseNavMenu(); // Close the menu after selecting a category
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
          <form>
            <input
              className="search-input"
              type="text"
              placeholder="Enter your search keyword..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              // onFocus={() => setIsSearchFocused(true)}
              // onBlur={() => setIsSearchFocused(false)}
              // style={{ fontSize: '1rem', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
            />
            <button
              className="search-button"
              onClick={handleSearch}
              // style={{
              //   fontSize: '1rem',
              //   padding: '8px',
              //   borderRadius: '4px',
              //   border: 'none',
              //   backgroundColor: '#007BFF',
              //   color: '#ffffff',
              //   cursor: 'pointer',
              // }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;