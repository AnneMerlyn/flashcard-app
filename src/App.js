import React from 'react';

import './App.css';
import sampleFlashcards from './sampleData';
//import FlashCardList from './FlashcardList/FlashCardList';
import QuizMode from './components/QuizMode/Quizmode';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Flashcard App</h1>
                {/* FlashCardList is not yet realized for now*/}
                {/* <FlashCardList cards={sampleFlashcards} /> */}
                <QuizMode cards={sampleFlashcards} />
            </header>
        </div>
    );
}

export default App;
