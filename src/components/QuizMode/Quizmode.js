// QuizMode.js

import React, { useState } from 'react';
import Flashcard from '../FlashCard/Flashcard';

const QuizMode = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            {cards.length ? (
                <>
                    <Flashcard {...cards[currentIndex]} />
                    <button onClick={nextCard}>Next</button>
                </>
            ) : (
                <p>No cards available for the selected category.</p>
            )}
        </div>
    );
};

export default QuizMode;
