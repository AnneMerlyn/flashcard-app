import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer, category_name, subcategory_name }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div
            className="bg-gray-300 rounded-lg p-5 transition-transform duration-300 hover:scale-105 "
            onClick={() => setShowAnswer(!showAnswer)}
        >
            <p className="text-5xl mt-10 text-blue-700 font-bold">
                {category_name}
            </p>
            <p className="text-3xl mt-[-30px] text-blue-900 font-light border-b-2 border-blue-700 pb-2.5 pt-10">
                {subcategory_name}
            </p>
            <p className="text-2xl mt-2.5 text-blue-800 bg-gray-200 p-2.5 rounded-lg shadow-md">
                {showAnswer ? answer : question}
            </p>
        </div>
    );
};

export default Flashcard;
