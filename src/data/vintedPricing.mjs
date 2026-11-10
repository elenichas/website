// Illustrative UK domestic quotes. These are NOT Vinted's production tariffs.
// Store money in pence; round each charge once, at order level.
export const deliveryRates = {
  pickup: { small: 249, medium: 399, large: 599 },
  home: { small: 349, medium: 499, large: 699 },
};

export function priceOrder(items, delivery = "pickup") {
  if (!items.length) throw new Error("An order needs at least one item");
  if (!deliveryRates[delivery]) throw new Error("Unknown delivery option");
  if (new Set(items.map((item) => item.seller)).size !== 1)
    throw new Error("Bundles must use one seller");
  if (new Set(items.map((item) => item.id)).size !== items.length)
    throw new Error("Duplicate item");
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const weight = items.reduce((sum, item) => sum + item.grams, 0);
  const parcel = weight <= 500 ? "small" : weight <= 1000 ? "medium" : "large";
  const discount = items.length >= 2 ? Math.round(subtotal * 0.1) : 0;
  const discounted = subtotal - discount;
  const fee = 50 + Math.round(discounted * 0.05);
  const shipping = deliveryRates[delivery][parcel];
  return {
    subtotal,
    discount,
    discounted,
    fee,
    shipping,
    parcel,
    total: discounted + fee + shipping,
  };
}

export const money = (pence) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    pence / 100,
  );
