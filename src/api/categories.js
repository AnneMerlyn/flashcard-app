// const BASE_URL = 'http://localhost:4000';

// export const fetchFlashcards = (categoryId) => {
//     return fetch(`${BASE_URL}/categories`).then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Extract category names from the API response
//         const categories = data.map((category) => category.category_name);
//         return categories;
//     });
// };

const BASE_URL = 'http://localhost:4000';

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching flashcards: ${error.message}`);
    }
};
