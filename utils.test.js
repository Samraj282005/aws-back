const test = require("node:test");
const assert = require("node:assert");
const { add, greet } = require("./utils");

test("add sums two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("greet uses default and custom names", () => {
  assert.strictEqual(greet(), "Hello, World!");
  assert.strictEqual(greet("Sam"), "Hello, Sam!");
});
