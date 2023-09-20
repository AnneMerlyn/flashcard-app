// CategoryList.js

import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories, onSelect }) => {
    return (
        <div>
            <h2 className="text-2xl mb-5 mt-2">Select a Category</h2>
            <ul className="list-none p-0 mx-auto max-w-xs bg-gray-800 rounded-lg overflow-hidden">
                {categories.map((category) => (
                    <li
                        key={category.category_id}
                        className="py-2.5 px-2.5 my-2 border-b border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out text-white animate-pulse"
                        onClick={() => onSelect(category.category_id)}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = '#3d4048')
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = '#282c34')
                        }
                    >
                        {category.category_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
