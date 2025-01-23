async function fetchAndProcessData(apiUrl) {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Filter: Keep only items with a specific condition
        const filteredData = data.filter(item => item.active);

        // Map: Transform the filtered data
        const processedData = filteredData.map(item => ({
            id: item.id,
            name: item.name.toUpperCase(), // Convert name to uppercase
            status: item.active ? "Active" : "Inactive",
        }));

        // Return the processed data
        return processedData;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
        return [];
    }
}

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/users"; // Example placeholder API
fetchAndProcessData(apiUrl).then(result => {
    console.log("Processed Data:", result);
});
