const reverseString = function(string) {
    if (string === "") {
        return string;
    }

    let reversedString = '';

    for (let currentCharacterIndex = string.length - 1; currentCharacterIndex >= 0; currentCharacterIndex--) {
        reversedString += string[currentCharacterIndex];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
