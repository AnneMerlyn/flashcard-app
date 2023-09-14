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
        <div className="App">
            <header className="App-header">
                <h1>Flashcard App</h1>
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
