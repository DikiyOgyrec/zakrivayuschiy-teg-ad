const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies the layered heart and spark animations required by the like interaction. */
test("The animation stylesheet animates the heart and sparks after a like", () => {
  const css = readFileSync(join(__dirname, "../styles/animations.css"), "utf8");
  assert.ok(
    /\.like-icon\.is-liked \.heart/.test(css) &&
      /\.like-icon\.is-liked \.sparks/.test(css) &&
      (css.match(/@keyframes/g) || []).length >= 2,
    "The liked heart lacks its scale or spark animation",
  );
});
