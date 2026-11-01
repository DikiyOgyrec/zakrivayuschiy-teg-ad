const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that the course checker can identify the original repository. */
test("The readme identifies the exact project repository", () => {
  const text = readFileSync(join(__dirname, "../README.md"), "utf8");
  assert.match(
    text,
    /^https:\/\/github\.com\/DikiyOgyrec\/zakrivayuschiy-teg-ad\r?$/m,
    "The readme lacks the original repository URL",
  );
});
