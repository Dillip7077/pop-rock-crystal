import React from 'react';
import '../styles/Filters.css';

const Filters = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="container4" style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '5px' }}>
      <h1 className="headline">All Products</h1>
      <hr />
      <div className="filters">
        <div className="filter-group">
          <span>Filter: </span>
          <div className="select-container">
            <select className="filter" onChange={(e) => onFilterChange(e.target.value)}>
              <option value="all">All Products</option>
              <option value="best-selling">Best Selling</option>
              <option value="new">New Arrivals</option>
            </select>
            <img src={`${process.env.PUBLIC_URL}/assets/Polygon 5.svg`} alt="Down Arrow" className="arrow" />
          </div>
        </div>
        <div className="filter-group">
          <span>Sort: </span>
          <div className="select-container">
            <select className="filter" onChange={(e) => onSortChange(e.target.value)}>
              <option value="best-selling">Best Selling</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="price-low-high">Price: Low to High</option>
            </select>
            <img src={`${process.env.PUBLIC_URL}/assets/Polygon 5.svg`} alt="Down Arrow" className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
