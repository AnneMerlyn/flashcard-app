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
                    <button
                        className="mt-2.5 px-8 py-3.5 text-lg bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-700"
                        onClick={nextCard}
                    >
                        Next
                    </button>
                </>
            ) : (
                <p>No cards available for the selected category.</p>
            )}
        </div>
    );
};

export default QuizMode;
