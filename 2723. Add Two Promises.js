/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
        // Await the results of both promises
        const result1 = await promise1;
        const result2 = await promise2;
        
        // Return the sum of the results
        return result1 + result2;
    } catch (error) {
        // Handle errors if needed
        throw error;
    }
};

/**
 * Example usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */