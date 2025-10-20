const palindromes = function (str1) {
  let alphanumerics = "abcdefghijklmnopqrstuvwxyz0123456789";
  let palindrome = str1
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerics.includes(character))
    .join("");
  let reverse = palindrome.split("").reverse().join("");
  if (reverse == palindrome) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
