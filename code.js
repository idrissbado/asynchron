/**
 * Iterates over an array with a delay of 1 second between logs.
 * @param {Array} array - The array of values to iterate over.
 */
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value); // Log the current value
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
/**
 * Simulates fetching data from an API with a delay.
 * Uses `await` to wait for the API response and logs the data.
 */
async function awaitCall() {
    // Simulate an API call with a 2-second delay
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "API response data" }); // Simulated API response
        }, 2000);
    });

    console.log(response.data); // Log the API response
}

// Example usage:
awaitCall();

/**
 * Simulates fetching data from an API with error handling.
 * If the API call fails, logs a user-friendly error message.
 */
async function awaitCall() {
    try {
        // Simulate an API call with a 2-second delay and random success/failure
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // Randomly simulate success or failure
                if (success) {
                    resolve({ data: "API response data" }); // Simulated API response
                } else {
                    reject(new Error("Failed to fetch data from the API")); // Simulated error
                }
            }, 2000);
        });

        console.log(response.data); // Log the API response
    } catch (error) {
        console.error("An error occurred:", error.message); // Log a user-friendly error message
    }
}

// Example usage:
awaitCall();
/**
 * Logs a message after a delay of 1 second.
 */
async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("First function executed");
}

/**
 * Logs a message after a delay of 1 second.
 */
async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("Second function executed");
}

/**
 * Logs a message after a delay of 1 second.
 */
async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("Third function executed");
}

/**
 * Calls three async functions sequentially using `await`.
 */
async function chainedAsyncFunctions() {
    await firstAsyncFunction(); // Call the first function
    await secondAsyncFunction(); // Call the second function
    await thirdAsyncFunction(); // Call the third function
}

// Example usage:
chainedAsyncFunctions();
/**
 * Makes two API calls concurrently using `Promise.all()`.
 * Logs the combined results after both requests have resolved.
 */
async function concurrentRequests() {
    // Simulate two API calls with different delays
    const apiCall1 = new Promise((resolve) => {
        setTimeout(() => resolve("Data from API 1"), 2000); // Simulate a 2-second delay
    });

    const apiCall2 = new Promise((resolve) => {
        setTimeout(() => resolve("Data from API 2"), 1500); // Simulate a 1.5-second delay
    });

    // Use `Promise.all()` to make concurrent requests
    const [response1, response2] = await Promise.all([apiCall1, apiCall2]);

    console.log("Combined results:", response1, response2); // Log the combined results
}

// Example usage:
concurrentRequests();
/**
 * Fetches data from multiple URLs concurrently using `Promise.all()`.
 * Logs the responses once all requests are complete.
 * @param {Array<string>} urls - An array of URLs to fetch data from.
 */
async function parallelCalls(urls) {
    try {
        // Create an array of fetch promises
        const fetchPromises = urls.map(url =>
            fetch(url).then(response => response.json()) // Fetch and parse JSON
        );

        // Use `Promise.all()` to make parallel requests
        const responses = await Promise.all(fetchPromises);

        console.log("All responses:", responses); // Log all responses
    } catch (error) {
        console.error("An error occurred:", error.message); // Handle errors
    }
}

// Example usage:
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];
parallelCalls(urls);