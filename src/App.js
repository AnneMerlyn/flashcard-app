// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
//import sampleFlashcards from './sampleData';
import QuizMode from './components/QuizMode/Quizmode';
import CategoryList from './components/CategorySelector/CategoryList';
import { fetchCategories } from './api/categories';
import { fetchFlashCards } from './api/flashCards';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [flashCards, setFlashCards] = useState([]);

    useEffect(() => {
        fetchCategories()
            .then((data) => setCategories(data))
            .catch((error) => console.log('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchFlashCards(selectedCategory)
                .then((data) => setFlashCards(data))
                .catch((error) =>
                    console.log('Error fetching flashcards:', error)
                );
        }
    }, [flashCards, selectedCategory]);

    const resetCategory = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="font-sans text-center bg-gray-600 h-screen flex flex-col items-center justify-center">
            <header className="w-3/5 min-h-[50vh] bg-gray-800 p-10 text-white rounded-lg shadow-md">
                <h1 className="text-7xl mb-5 mt-[-10px]">Flashcard App</h1>
                {selectedCategory ? (
                    <QuizMode cards={flashCards} onDone={resetCategory} />
                ) : (
                    <CategoryList
                        categories={categories}
                        onSelect={setSelectedCategory}
                    />
                )}
            </header>
        </div>
    );
}

export default App;
