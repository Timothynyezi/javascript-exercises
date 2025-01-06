const convertToCelsius = function(c) {
  return Math.round(c - 32) * 5 / 9;
};

const convertToFahrenheit = function(f) {
  return Math.round(f * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
