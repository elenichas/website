import test from "node:test";
import assert from "node:assert/strict";
import { priceOrder } from "../src/data/vintedPricing.mjs";
const tee = { id: "tee", seller: "nora", price: 500, grams: 150 };
const shirt = { id: "shirt", seller: "nora", price: 300, grams: 120 };
const jeans = { id: "jeans", seller: "nora", price: 1300, grams: 600 };
test("single item includes fee and delivery, without a bundle discount", () => {
  assert.deepEqual(priceOrder([tee]), {
    subtotal: 500,
    discount: 0,
    discounted: 500,
    fee: 75,
    shipping: 249,
    parcel: "small",
    total: 824,
  });
});
test("light addition changes the total by £2.31, not its £3 sticker price", () => {
  const quote = priceOrder([tee, shirt]);
  assert.equal(quote.total, 1055);
  assert.equal(quote.total - priceOrder([tee]).total, 231);
  assert.equal(quote.shipping, 249);
});
test("heavier addition crosses a parcel band and recalculates fee and total", () => {
  const quote = priceOrder([tee, jeans]);
  assert.equal(quote.parcel, "medium");
  assert.equal(quote.shipping, 399);
  assert.equal(quote.total, 2150);
  assert.equal(priceOrder([tee, jeans], "home").total, 2250);
});
test("removing an addition restores the original quote", () => {
  const selected = [tee, jeans];
  selected.pop();
  assert.equal(priceOrder(selected).total, 824);
});
test("parcel boundaries are inclusive and money rounds at order level", () => {
  for (const [grams, parcel] of [
    [500, "small"],
    [501, "medium"],
    [1000, "medium"],
    [1001, "large"],
  ]) {
    assert.equal(priceOrder([{ ...tee, grams }]).parcel, parcel);
  }
  assert.equal(
    priceOrder([
      { ...tee, price: 501 },
      { ...shirt, price: 304 },
    ]).total,
    1059,
  );
});
test("rejects invalid delivery options, duplicates, empty and mixed-seller orders", () => {
  assert.throws(() => priceOrder([]));
  assert.throws(() => priceOrder([tee], "teleport"));
  assert.throws(() => priceOrder([tee, tee]));
  assert.throws(() => priceOrder([tee, { ...shirt, seller: "someone-else" }]));
});
