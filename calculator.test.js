import calculator from "./calculator";

describe("Test function", () => {
  test("wrong arguments 1", () => {
    expect(calculator.add("2", 3)).toBe("One of the argument is not a number");
  });

  test("wrong arguments 3", () => {
    expect(calculator.add(2, "3")).toBe("One of the argument is not a number");
  });

  test("wrong arguments 2", () => {
    expect(calculator.add("2", "3")).toBe(
      "One of the argument is not a number"
    );
  });
});

describe("Add function", () => {
  test("normal addition 1", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("normal addition 2", () => {
    expect(calculator.add(-2, 5643)).toBe(5641);
  });
});

describe("Substract function", () => {
  test("normal substraction", () => {
    expect(calculator.substract(2, 3)).toBe(-1);
  });
});

describe("Multiply function", () => {
  test("normal multiplication 1", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("normal multiplication 2", () => {
    expect(calculator.multiply(0, 3)).toBe(0);
  });
});

describe("Division function", () => {
  test("normal division 1", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("normal division 2", () => {
    expect(calculator.divide(0, 3)).toBe(0);
  });

  test("normal division 3", () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
  });
});
