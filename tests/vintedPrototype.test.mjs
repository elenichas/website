import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { Window } from "happy-dom";

// A simulated DOM checks real Vue event handlers; it does not replace visual,
// device or assistive-technology QA in a browser.
const window = new Window({ url: "https://example.test" });
for (const name of [
  "window",
  "document",
  "Node",
  "NodeFilter",
  "Element",
  "HTMLElement",
  "SVGElement",
  "MutationObserver",
]) {
  globalThis[name] = name === "window" ? window : window[name];
}
window.HTMLElement.prototype.scrollTo = function () {};
const { createApp, nextTick } = await import("vue");
const { parse, compileScript } = await import("vue/compiler-sfc");
const { translateCaseStudy, translateText } =
  await import("../src/caseStudyTranslations.js");
const { descriptor } = parse(
  fs.readFileSync(
    new URL("../src/components/VintedBundlePrototype.vue", import.meta.url),
    "utf8",
  ),
);
let compiled = compileScript(descriptor, {
  id: "vinted-flow-test",
  inlineTemplate: true,
}).content;
compiled = compiled.replace(
  /import (\w+) from ['"]@\/images\/[^'"]+['"];?/g,
  'const $1 = "/illustrative-product.png";',
);
compiled = compiled.replace(
  /from ['"]vue['"]/g,
  `from ${JSON.stringify(import.meta.resolve("vue"))}`,
);
compiled = compiled.replace(
  /from ['"]lucide-vue-next['"]/g,
  `from ${JSON.stringify(import.meta.resolve("lucide-vue-next"))}`,
);
compiled = compiled.replace(
  /from ['"]@\/data\/vintedPricing.mjs['"]/g,
  `from ${JSON.stringify(new URL("../src/data/vintedPricing.mjs", import.meta.url).href)}`,
);
const { default: Prototype } = await import(
  "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
);
function mount(t) {
  const root = document.createElement("div");
  document.body.append(root);
  const app = createApp(Prototype);
  app.mount(root);
  t.after(() => {
    app.unmount();
    root.remove();
  });
  return root;
}
async function click(root, selector) {
  const element = root.querySelector(selector);
  assert.ok(element, selector);
  element.click();
  await nextTick();
}
async function choose(root, selector, value) {
  const element = root.querySelector(selector);
  assert.ok(element, selector);
  element.value = value;
  element.dispatchEvent(new window.Event("change", { bubbles: true }));
  await nextTick();
}
const total = (root) =>
  root.querySelector(".live-total strong").textContent.trim();

test("buyer can add a relevant shirt, review its full cost and keep the original item", async (t) => {
  const root = mount(t);
  assert.equal(total(root), "£8.24");
  await click(root, ".phone-primary");
  await choose(root, ".filter-row label:first-child select", "Tops");
  await choose(root, ".filter-row label:last-child select", "M");
  assert.equal(root.querySelectorAll(".wardrobe-item").length, 1);
  await click(root, '[aria-label="Add Blue cotton shirt"]');
  assert.equal(total(root), "£10.55");
  await click(root, ".phone-primary");
  assert.match(root.querySelector(".delta-panel").textContent, /£2.31 more/);
  assert.equal(root.querySelector(".receipt-total dd").textContent, "£10.55");
  await click(root, ".keep-single");
  assert.equal(total(root), "£8.24");
  assert.equal(root.querySelectorAll(".selected-items article").length, 1);
});

test("filtering to an empty result keeps selected items and supports recovery", async (t) => {
  const root = mount(t);
  await click(root, ".scenario-list button:first-child");
  assert.equal(total(root), "£10.55");
  await choose(root, ".filter-row label:last-child select", "L");
  assert.ok(root.querySelector(".empty-wardrobe"));
  assert.equal(total(root), "£10.55");
  await click(root, ".empty-wardrobe button");
  assert.equal(root.querySelectorAll(".wardrobe-item").length, 4);
  assert.equal(
    root
      .querySelector('[aria-label="Remove Blue cotton shirt"]')
      .getAttribute("aria-pressed"),
    "true",
  );
});

test("heavy item explains parcel increase and budget feedback; removal reverses it", async (t) => {
  const root = mount(t);
  await click(root, ".scenario-list button:nth-child(2)");
  assert.equal(total(root), "£21.50");
  assert.match(root.querySelector(".cost-warning").textContent, /£1.50/);
  assert.match(
    root.querySelector(".budget-feedback").textContent,
    /Over budget by £6.50/,
  );
  await choose(root, "#bundle-budget", "2500");
  assert.match(
    root.querySelector(".budget-feedback").textContent,
    /Within budget by £3.50/,
  );
  await click(root, '.selected-items [aria-label="Remove Straight-leg jeans"]');
  assert.equal(total(root), "£8.24");
  assert.equal(root.querySelector(".cost-warning"), null);
});

test("unavailable pickup blocks completion and hides the invalid quote until recovery", async (t) => {
  const root = mount(t);
  await click(root, ".scenario-list button:nth-child(3)");
  assert.equal(total(root), "Choose delivery");
  assert.equal(root.querySelector(".phone-primary").disabled, true);
  assert.equal(
    root.querySelector(".receipt-total dd").textContent,
    "Not available",
  );
  await click(root, 'input[value="home"]');
  assert.equal(total(root), "£22.50");
  assert.equal(root.querySelector(".phone-primary").disabled, false);
  await click(root, ".phone-primary");
  assert.match(
    root.querySelector(".demo-complete").textContent,
    /No order placed/,
  );
});

test("single item is a first-class path and review never claims a real purchase", async (t) => {
  const root = mount(t);
  await click(root, ".single-link");
  assert.equal(total(root), "£8.24");
  await click(root, ".phone-primary");
  assert.match(
    root.querySelector(".demo-complete").textContent,
    /No payment taken/,
  );
  assert.equal(root.querySelectorAll("form[action]").length, 0);
});

test("Greek dynamic totals and accessible action labels translate and round-trip", async (t) => {
  const root = mount(t);
  await click(root, ".scenario-list button:first-child");
  const path = "/products/vinted-smart-bundling";
  translateCaseStudy(root, path, "el");
  assert.equal(
    root
      .querySelector('[aria-pressed="true"][aria-label]')
      .getAttribute("aria-label"),
    "Αφαίρεση Γαλάζιο βαμβακερό πουκάμισο",
  );
  assert.match(
    root.querySelector(".budget-feedback").textContent,
    /Κάτω από το όριο/,
  );
  assert.equal(
    translateText("£2.31 more than the tee alone", path),
    "£2.31 επιπλέον από το T-shirt μόνο του",
  );
  translateCaseStudy(root, path, "en");
  assert.ok(root.querySelector('[aria-label="Remove Blue cotton shirt"]'));
});
