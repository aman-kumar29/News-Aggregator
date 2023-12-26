import React, { useState } from 'react';

const FilterButton = ({ onFilter }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    country: '',
    language: '',
    category: '',
    timeframe: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter(filters);
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Filter News</button>
      {modalVisible && (
        <div className="modal">
          <form>
            <label>
              Country:
              <select name="country" value={filters.country} onChange={handleInputChange}>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                {/* Add more country options */}
              </select>
            </label>

            <label>
              Language:
              <select name="language" value={filters.language} onChange={handleInputChange}>
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                {/* Add more language options */}
              </select>
            </label>

            <label>
              Category:
              <select name="category" value={filters.category} onChange={handleInputChange}>
                <option value="">Select Category</option>
                <option value="general">General</option>
                <option value="technology">Technology</option>
                {/* Add more category options */}
              </select>
            </label>

            <label>
              Timeframe:
              <select name="timeframe" value={filters.timeframe} onChange={handleInputChange}>
                <option value="">Select Timeframe</option>
                <option value="1h">Last 1 Hour</option>
                <option value="6h">Last 6 Hours</option>
                {/* Add more timeframe options */}
              </select>
            </label>

            <button type="button" onClick={handleFilter}>
              Apply Filters
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
