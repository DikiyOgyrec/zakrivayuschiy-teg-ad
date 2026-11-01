const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

/** Verifies the complete story and the native save dialog. */
test("The document contains eight cards and a closable save dialog", () => {
  const html = readFileSync(join(__dirname, "../index.html"), "utf8");
  assert.ok(
    (html.match(/<article\b/g) || []).length === 8 &&
      (html.match(/class="like-icon"/g) || []).length === 8 &&
      /<dialog\b/.test(html) &&
      /method="dialog"/.test(html),
    "The story lacks cards or an accessible save dialog",
  );
});
