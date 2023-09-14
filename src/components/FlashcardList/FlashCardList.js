// FlashcardList.js

import React from 'react';
import Flashcard from '../FlashCard/Flashcard';

const FlashCardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => (
                <Flashcard key={card.id} {...card} />
            ))}
        </div>
    );
};

export default FlashCardList;
