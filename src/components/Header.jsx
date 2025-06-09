import React, { useRef, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Drawer,
  TextField,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FitbitIcon from "@mui/icons-material/Fitbit";
import SearchIcon from "@mui/icons-material/Search";

function Header({ onSearch }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCategory = (category) => {
    onSearch("", {
      category,
      country: selectedCountry,
      timeframe: selectedTimeframe,
      language: selectedLanguage,
    });
    handleCloseNavMenu();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText, {
      category: selectedCategory,
      country: selectedCountry,
      timeframe: selectedTimeframe,
      language: selectedLanguage,
    });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" elevation={2} color="primary">
        <Toolbar>
          {/* MOBILE HAMBURGER */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {[
                { label: "Top", value: "top" },
                { label: "Sports", value: "sports" },
              ].map((item) => (
                <MenuItem
                  key={item.value}
                  onClick={() => handleCategory(item.value)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO */}
          <FitbitIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            NewZera
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
            <Button color="inherit" onClick={() => handleCategory("top")}>
              Top
            </Button>
            <Button color="inherit" onClick={() => handleCategory("sports")}>
              Sports
            </Button>
          </Box>

          {/* SEARCH BUTTON */}
          <Tooltip title="Search">
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* SLIDE‑DOWN SEARCH PANEL */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { p: 3, backgroundColor: "background.default" } }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <TextField
              fullWidth
              size="small"
              label="Keyword…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <TextField
              select
              size="small"
              label="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="top">Top</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
            </TextField>
            <TextField
              select
              size="small"
              label="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="in">India</MenuItem>
              <MenuItem value="us">USA</MenuItem>
              <MenuItem value="gb">UK</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" sx={{ px: 4 }}>
              Go
            </Button>
          </Box>
        </form>
      </Drawer>
    </>
  );
}

export default Header;
