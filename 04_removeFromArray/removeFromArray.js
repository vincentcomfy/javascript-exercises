const removeFromArray = function(array, ...valuesToRemove) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!valuesToRemove.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
