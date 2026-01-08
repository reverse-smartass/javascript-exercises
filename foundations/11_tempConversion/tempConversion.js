const convertToCelsius = function(f) {
  return parseFloat(((f-32)/1.8).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  return parseFloat(((1.8 * celcius) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
