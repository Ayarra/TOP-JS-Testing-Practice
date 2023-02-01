const calculator = {
  testArguments(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return true;
  },

  add(a, b) {
    if (this.testArguments(a, b)) return "One of the argument is not a number";
    else return a + b;
  },

  substract(a, b) {
    if (this.testArguments(a, b)) return "One of the argument is not a number";
    else return a - b;
  },

  multiply(a, b) {
    if (this.testArguments(a, b)) return "One of the argument is not a number";
    else return a * b;
  },

  divide(a, b) {
    if (this.testArguments(a, b)) return "One of the argument is not a number";
    else return a / b;
  },
};

module.exports = calculator;
