const convertToCelsius = function(fahrenheit) {
    let celcius = 0;
    let rounded = 0;
    celcius = ((fahrenheit - 32) / 1.8)
    rounded = Math.round(celcius * 10) / 10;
    return rounded;
};

const convertToFahrenheit = function(celcius) {
    let fahrenheit = 0;
    let rounded = 0;
    fahrenheit = ((celcius * 1.8) + 32);
    rounded = Math.round(fahrenheit * 10) / 10;
    return rounded;
};


// C = 5/9(F - 32)
// Fahrenheit = (Celsius × 1.8) + 32



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
