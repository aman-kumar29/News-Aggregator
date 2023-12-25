// SearchOverlay.js
import React, { useState } from 'react';

const SearchOverlay = ({ onClose, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <input
          type="text"
          placeholder="Enter search keyword..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <div className="overlay-btns">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
