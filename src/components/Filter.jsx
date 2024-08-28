import React from 'react';
import '../styles/Filter.css';

const Filter = () => {
  return (
    <aside className="filter-section">
      <h4>Filter</h4>
      <div className="filter-group">
        <h5>Materials</h5>
        <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">Cotton</a></li>
          <li><a href="#">Wool</a></li>
          <li><a href="#">Silk</a></li>
        </ul>
      </div>
      <div className="filter-group">
        <h5>Color</h5>
        <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">Mint Green</a></li>
          <li><a href="#">Blue</a></li>
          <li><a href="#">Red</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
