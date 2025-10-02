const removeFromArray = function (arr, ...toRemove) {
  // Create a new array to avoid mutating the original
  return arr.filter((item) => {
    // Keep the item only if it's NOT in the valuesToRemove array
    // Using strict equality (===) to match exact type and value
    return !toRemove.includes(item);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
