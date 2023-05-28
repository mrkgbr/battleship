const myFunction = require("../src/myFunction");

test("my test", () => {
  expect(myFunction("test")).toBe("test");
});
