import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';
import search_icon from './search-icon-image.png';
import SearchOverlay from './SearchOverlay';

const Header = ({ onSearch }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  
  const handleCategory = (category) => {
    onSearch(category);
  };

  const handleSearchIconClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <Navbar expand="lg" className=" navbar mb-4">
      {/* Removed Container */}
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" className='logo-image' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleCategory('infographics')}>Infographics News</Nav.Link>
          <Nav.Link onClick={() => handleCategory('technology')}>Technology News</Nav.Link>
          <Nav.Link onClick={() => handleCategory('market')}>Market News</Nav.Link>
          <Nav.Link onClick={() => handleCategory('indian')}>Indian News</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="search-bar">
        <img
          src={search_icon}
          alt="Search"
          className="search-icon-image ml-2"
          onClick={handleSearchIconClick}
        />
      </div>

      {overlayVisible && (
        <SearchOverlay onClose={handleCloseOverlay} onSearch={onSearch} />
      )}
    </Navbar>
  );
};

export default Header;
