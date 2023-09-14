// CategoryList.js

import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories, onSelect }) => {
    return (
        <div>
            <h2>Select a Category</h2>
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onSelect(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
