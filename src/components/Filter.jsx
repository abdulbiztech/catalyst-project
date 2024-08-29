import React, { useState } from "react";
import "../styles/Filter.css";

const Filter = ({ setPriceRange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPriceRange(value);
    setPriceRange(value);
  };

  return (
    <aside className="filter-section">
      <h4>Filter</h4>

      <div className="filter-group">
        <h5>Materials</h5>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Cotton</a>
          </li>
          <li>
            <a href="#">Wool</a>
          </li>
          <li>
            <a href="#">Silk</a>
          </li>
        </ul>
      </div>

      <div className="filter-group">
        <h5>Color</h5>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Mint Green</a>
          </li>
          <li>
            <a href="#">Blue</a>
          </li>
          <li>
            <a href="#">Red</a>
          </li>
        </ul>
      </div>

      <div className="filter-group">
        <h5>Price</h5>
        <div className="select-dropdown">
          <select value={selectedPriceRange} onChange={handlePriceChange}>
            <option value="">All</option>
            <option value="0-500">0 - 500</option>
            <option value="500-1000">500 - 1000</option>
            <option value="1000-2000">1000 - 2000</option>
            <option value="2000-5000">2000 - 5000</option>
            <option value="5000+">5000+</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
