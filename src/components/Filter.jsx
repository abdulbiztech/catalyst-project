// Filter.js
import React from 'react';
import './styles.css';

const Filter = () => {
  return (
    <aside className="filter-section">
      <h4>Filter</h4>
      <div className="filter-group">
        <h5>Materials</h5>
        <ul>
          <li><input type="checkbox" /> Cotton</li>
          <li><input type="checkbox" /> Wool</li>
          <li><input type="checkbox" /> Silk</li>
        </ul>
      </div>
      <div className="filter-group">
        <h5>Colors</h5>
        <ul>
          <li><input type="checkbox" /> Mint Green</li>
          <li><input type="checkbox" /> Blue</li>
          <li><input type="checkbox" /> Red</li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
