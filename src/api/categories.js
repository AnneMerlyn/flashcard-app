export const fetchCategories = async () => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/categories`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching categories: ${error.message}`);
    }
};

export const fetchCategoriesByLevel = async (levelId) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/categories/level/${levelId}`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching categories: ${error.message}`);
    }
};
