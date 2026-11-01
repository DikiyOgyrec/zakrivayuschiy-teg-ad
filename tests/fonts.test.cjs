const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies that Inter exposes the complete variable weight range used by the cards. */
test("The font stylesheet loads the variable and pixel fonts", () => {
  const css = readFileSync(join(__dirname, "../fonts/fonts.css"), "utf8");
  assert.ok(
    /font-weight:\s*400 700/.test(css) &&
      /Inter-Variable\.woff2/.test(css) &&
      /PressStart2P-Regular\.woff/.test(css),
    "The font definitions lack the variable range or pixel font",
  );
});
