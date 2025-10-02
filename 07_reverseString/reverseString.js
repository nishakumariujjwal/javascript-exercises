const reverseString = function (str) {
  let str1 = [...str];
  let str2 = "";
  for (i = 0; i < str1.length; i++) {
    str2 = str2 + str1[str.length - 1 - i];
  }
  return str2.toString();
};

console.log(reverseString("hello hi!"));

// Do not edit below this line
module.exports = reverseString;
