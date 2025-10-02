const convertToCelsius = function (fTemp) {
  if (fTemp === -40) {
    return fTemp;
  } else return Math.round((fTemp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (cTemp) {
  if (cTemp === -40) {
    return cTemp;
  } else return Math.round((cTemp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
