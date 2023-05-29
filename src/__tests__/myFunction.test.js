const myFunction = require("../myFunction");

test("expected text is test", () => {
  expect(myFunction("test")).toBe("test");
});
