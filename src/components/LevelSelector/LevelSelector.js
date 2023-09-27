// LevelSelector.js

import React from 'react';

//const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

const LevelSelector = ({ levels, onSelectLevel }) => {
    return (
        <div>
            <h2 className="text-2xl mb-5 mt-2">Select a Level</h2>
            <ul className="list-none p-0 mx-auto max-w-xs bg-gray-800 rounded-lg overflow-hidden">
                {levels.map((level) => (
                    <li
                        key={level.level_id}
                        className="py-2.5 px-2.5 my-2 border-b border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out text-white animate-pulse"
                        onClick={() => onSelectLevel(level.level_id)}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = '#3d4048')
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = '#282c34')
                        }
                    >
                        {level.level_description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LevelSelector;
