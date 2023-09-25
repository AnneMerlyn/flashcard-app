export const fetchLevels = async () => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/levels`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('wth', data);
        return data;
    } catch (error) {
        throw new Error(`Error fetching levels: ${error.message}`);
    }
};
