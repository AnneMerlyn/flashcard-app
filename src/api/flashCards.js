export const fetchFlashCards = async (categoryId) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/flashcards/${categoryId}`
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
};
