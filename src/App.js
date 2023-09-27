// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
//import sampleFlashcards from './sampleData';
import QuizMode from './components/QuizMode/Quizmode';
import CategoryList from './components/CategorySelector/CategoryList';
import { fetchCategoriesByLevel } from './api/categories';
import { fetchFlashCardsByLevel } from './api/flashCards';
import { fetchLevels } from './api/levels';
import LevelSelector from './components/LevelSelector/LevelSelector';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [flashCards, setFlashCards] = useState([]);
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        fetchLevels()
            .then((data) => setLevels(data))
            .catch((error) => console.error('Error fetching levels:', error));
    }, []);

    useEffect(() => {
        if (selectedLevel) {
            fetchCategoriesByLevel(selectedLevel)
                .then((data) => setCategories(data))
                .catch((error) =>
                    console.log('Error fetching categories:', error)
                );
        }
    }, [selectedLevel]);

    useEffect(() => {
        if (selectedCategory) {
            fetchFlashCardsByLevel(selectedCategory)
                .then((data) => setFlashCards(data))
                .catch((error) =>
                    console.log('Error fetching flashcards:', error)
                );
        }
    }, [selectedCategory]);

    const resetCategory = () => {
        setSelectedCategory(null);
    };

    const resetLevel = () => {
        setSelectedLevel(null);
    };

    const renderBackButton = (callback) => (
        <button
            onClick={callback}
            className="mt-6 px-8 py-3.5 text-lg bg-red-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-700"
        >
            Back
        </button>
    );

    return (
        <div className="font-sans text-center bg-gray-600 h-screen flex flex-col items-center justify-center">
            <header className="w-3/5 min-h-[50vh] bg-gray-800 p-10 text-white rounded-lg shadow-md">
                <h1 className="text-7xl mb-5 mt-[-10px]">Flashcard App</h1>
                {!selectedLevel ? (
                    <LevelSelector
                        levels={levels}
                        onSelectLevel={setSelectedLevel}
                    />
                ) : selectedCategory ? (
                    <>
                        <QuizMode cards={flashCards} onDone={resetCategory} />
                    </>
                ) : (
                    <>
                        <CategoryList
                            categories={categories}
                            onSelect={setSelectedCategory}
                        />
                        {renderBackButton(resetLevel)}
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
