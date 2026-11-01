const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies the fluid layout, fixed gradient, text outline fallback, and image filters. */
test("The stylesheet provides the responsive decorated card layout", () => {
  const css = readFileSync(join(__dirname, "../styles/style.css"), "utf8");
  assert.ok(
    /background-attachment:\s*fixed/.test(css) &&
      /@supports/.test(css) &&
      /width\s*<=\s*375px/.test(css) &&
      (css.match(/filter:/g) || []).length >= 7,
    "The cards lack adaptive styling, filters, or the outline fallback",
  );
});
