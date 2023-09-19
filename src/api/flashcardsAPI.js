const BASE_URL = 'http://localhost:4000';

export const fetchFlashcards = () => {
    return fetch(`${BASE_URL}/flashcards`).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
};
