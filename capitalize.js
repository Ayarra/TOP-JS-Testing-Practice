function capitalize(array) {
  if (!array) return "Array shouldn't be empty";

  array = array.trimStart();
  return array.charAt(0).toUpperCase() + array.slice(1);
}

module.exports = capitalize;
