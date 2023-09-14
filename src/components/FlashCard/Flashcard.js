import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer, category, subcategory }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div onClick={() => setShowAnswer(!showAnswer)}>
            <p className="flash-card-category">{category}</p>
            <p className="flash-card-subcategory">{subcategory}</p>
            <p className="flash-card-info">{showAnswer ? answer : question}</p>
        </div>
    );
};

export default Flashcard;
