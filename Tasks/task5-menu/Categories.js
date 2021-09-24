import React from 'react';
import './index.css';

const Categories = ({ categories, filterFood }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button key={index} className="filter-btn" onClick={() => filterFood(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
