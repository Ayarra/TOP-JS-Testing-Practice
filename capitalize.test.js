import capitalize from "./capitalize";

test("empty string", () => {
  expect(capitalize()).toBe("Array shouldn't be empty");
});

test("one letter array", () => {
  expect(capitalize("l")).toBe("L");
});

test("one word array", () => {
  expect(capitalize("lame")).toBe("Lame");
});

test("white space before first letter array", () => {
  expect(capitalize("       lame")).toBe("Lame");
});
