import reverseString from "./reverseString";

test("empty string", () => {
  expect(reverseString("")).toBe("Empty string");
});

test("one letter string", () => {
  expect(reverseString("5")).toBe("5");
});

test("one word string", () => {
  expect(reverseString("houssam")).toBe("massuoh");
});

test("one word string with special characters", () => {
  expect(reverseString("Ahoussam#lg34")).toBe("43gl#massuohA");
});

test("long strings", () => {
  expect(reverseString("houssam        test")).toBe("tset        massuoh");
});
