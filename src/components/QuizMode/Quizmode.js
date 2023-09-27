// QuizMode.js

import React, { useState } from 'react';
import Flashcard from '../FlashCard/Flashcard';
import CompletionModal from '../modals/CompletionModal';

const QuizMode = ({ cards, onDone }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const nextCard = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            toggleModal();
        }
    };

    return (
        <div>
            {showModal && (
                <CompletionModal
                    onClose={() => {
                        toggleModal();
                        onDone();
                    }}
                />
            )}

            {cards.length ? (
                <>
                    <Flashcard {...cards[currentIndex]} />
                    <div className="flex mt-2.5 justify-end">
                        <button
                            className="mr-2 px-8 py-3.5 text-lg bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-700"
                            onClick={nextCard}
                        >
                            Next
                        </button>

                        <button
                            onClick={() => {
                                onDone();
                            }}
                            className="px-8 py-3.5 text-lg bg-red-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700"
                        >
                            Back
                        </button>
                    </div>
                </>
            ) : (
                <p>No cards available for the selected category.</p>
            )}
        </div>
    );
};

export default QuizMode;
