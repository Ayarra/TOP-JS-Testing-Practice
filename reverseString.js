function reverseString(str) {
  if (!str) return "Empty string";
  return str.split("").reverse().join("");
}

module.exports = reverseString;
