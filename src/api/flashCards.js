const BASE_URL = 'http://localhost:4000';

export const fetchFlashCards = async (categoryId) => {
    const response = await fetch(`${BASE_URL}/flashcards/${categoryId}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
};
