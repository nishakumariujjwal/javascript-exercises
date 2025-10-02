const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  // Check if both parameters are integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  // Check if both parameters are non-negative
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  // Determine the start and end of the range
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const n = end - start + 1;
  const sum = (n * (start + end)) / 2;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
