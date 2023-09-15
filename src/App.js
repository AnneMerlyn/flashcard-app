// App.js

import React, { useState } from 'react';
import './App.css';
import sampleFlashcards from './sampleData';
import QuizMode from './components/QuizMode/Quizmode';
import CategoryList from './components/CategorySelector/CategoryList';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const uniqueCategories = Array.from(
        new Set(sampleFlashcards.map((card) => card.category))
    );

    const filteredCards = selectedCategory
        ? sampleFlashcards.filter((card) => card.category === selectedCategory)
        : [];

    return (
        <div className="font-sans text-center bg-gray-600 h-screen flex flex-col items-center justify-center">
            <header className="w-3/5 min-h-[50vh] bg-gray-800 p-10 text-white rounded-lg shadow-md">
                <h1 className="text-7xl mb-5 mt-[-10px]">Flashcard App</h1>
                {selectedCategory ? (
                    <QuizMode cards={filteredCards} />
                ) : (
                    <CategoryList
                        categories={uniqueCategories}
                        onSelect={setSelectedCategory}
                    />
                )}
            </header>
        </div>
    );
}

export default App;
