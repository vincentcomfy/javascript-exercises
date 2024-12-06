const repeatString = function(string, times) {
    // Handle edge cases
    if (times <= 0) {
        return times === 0 ? '' : 'ERROR'; // Return empty string for 0, 'ERROR' for negative
    }

    // Initialize an empty string to accumulate the result
    let result = '';

    for (let i = 0; i < times; i++) {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
