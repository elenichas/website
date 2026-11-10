# Vinted Bundle Decisions

Research reviewed: 10 November 2026. Independent product-design concept; not affiliated with Vinted.

## The actual sequence

1. The existing Smart Local Bundling project was speculative. It combined full-cost discovery, nearby listings and same-seller recommendations.
2. A broad public Reddit scan considered support, search, sizing, fees and shipping. Support recovery, search relevance and sizing confidence were three recurring themes, not a statistically ranked top three.
3. A focused audit investigated the existing concept before replacing it. It found accounts of buyers bundling to justify postage, difficulty finding suitable additions in a wardrobe, and shipping increases that could outweigh discounts.
4. The project was narrowed to relevant same-seller discovery and transparent bundle costs. Local rankings, environmental claims and guaranteed savings were removed.
5. A working interaction prototype and a proposed evaluation protocol were built. Participant testing and business-impact measurement have not happened.

## Evidence register

The source of truth for cited threads, dates, limitations and exact excerpts is `src/data/vintedResearch.js`. Eight selected Reddit threads and five official product/visual references are cited in the page. The selection is purposive and English-language; not representative of Vinted users or all markets. Some direct Reddit retrieval failed; indexed text was used and marked in the register.

Search families included support/automated replies, irrelevant search results, size filters, shipping costs for inexpensive items, wardrobe filters, bundles and parcel-price changes. Sources were checked for counterexamples: bundling does not always make a purchase worthwhile, buyers do not necessarily want additional items, and the product already supports bundles.

Public comments are reproduced with source links and dates. No usernames, profiles or private conversations were collected. Original quotes stay in English on the Greek page. Source dates follow indexed thread metadata; official guidance is described as reviewed, rather than given an invented publication date.

## What is observed vs inferred

- **Observed accounts:** some buyers describe bundling to justify shipping and struggling to locate relevant same-seller items. A buyer reports a delivery increase despite a discount.
- **Documented baseline:** Vinted supports same-seller bundles, favourites-first selection and a running bundle price. Shipping and the fee join the order after Buy now. Fee information already appears during browsing. Parcel handling can require seller approval.
- **Design inference:** category/label-size controls plus a delivery-inclusive running estimate may improve decision quality.
- **Unvalidated:** prevalence, causal effect on abandonment, preference for filters versus recommendations, quote-service feasibility, and whether people perceive pressure to overspend.

The screenshots in `public/images/vinted-research/` were downloaded from the official Vinted Google Play listing as observed on 10 November 2026. They are publisher promotional artwork, credited to Vinted and used only as visual reference. They are not a capture of an authenticated UK bundle checkout. The current flow must be inspected on participants' devices before a comparative usability study.

## Prototype contract

The route remains `/products/vinted-smart-bundling` so existing links keep working. The displayed title and homepage preview have been updated to Bundle Decisions.

The working prototype includes:

- An original item with a full illustrative estimate and a single-item continuation.
- A same-seller wardrobe with category and label-size filtering; filtering does not remove selected items.
- Adding and removing products, including removal in review.
- A budget selector, live totals and explicit over-budget feedback.
- Pickup and home delivery estimates, parcel-band changes, and an unavailable-pickup recovery path.
- A comparison against the original item using the same delivery method.
- An optional, explicitly scripted walkthrough with pause/reset and unmount cleanup.
- A simulated review completion, never a payment or real purchase.

The original imagery is reused as fictional catalogue content. Listings and sellers are illustrative. No Vinted backend or tracking/analytics service is connected.

### Pricing assumptions

`src/data/vintedPricing.mjs` is the single calculation source. All amounts are integer pence. This is a demonstrator, not a claim about Vinted pricing.

- Seller discount: 10% of the item subtotal at two or more items, rounded once.
- Illustrative fee: 5% of the discounted subtotal, rounded once, plus 50p.
- Illustrative parcel bands: up to 500g; 501–1,000g; above 1,000g.
- Pickup estimates: £2.49 / £3.99 / £5.99. Home delivery: £3.49 / £4.99 / £6.99.
- Tee: £5, 150g. Light shirt: £3, 120g. Jeans: £13, 600g. Other catalogue entries are similarly fictional.

Tee alone with pickup: £5 + £0.75 + £2.49 = **£8.24**.
Tee + shirt: £8 − £0.80 + £0.86 + £2.49 = **£10.55**. Additional spending: **£2.31**, not “£2.31 saved”.
Tee + jeans: £18 − £1.80 + £1.31 + £3.99 = **£21.50**. Delivery increases by **£1.50**.

Unavailable delivery must not produce a usable quote or allow completion. The user has to choose the available alternative. Production would require server-issued quotes, destination/eligibility, expiration, stock checks and renewed consent after any total changes.

## Proposed research and evaluation

No participant results or testing videos are claimed. A scripted demonstration is not user evidence.

### Discovery

Recruit 6–8 recent UK buyers covering low-price purchases, frequent bundling and bundle avoidance. Observe real examples; ask about price expectations before showing the concept. Review the process with 3–4 sellers to understand parcel sizing, optional discounts and workload. Obtain informed consent before recording or collecting examples.

### Moderated comparison

Verify the live UK baseline first. Counterbalance current/proposed flow order and use comparable product sets to reduce learning effects. Tasks: locate a relevant addition within £15; explain all charges and incremental spending; recognise a delivery increase; remove an item; choose the single item; recover from an unavailable delivery method.

Record unaided task completion, steps/time, irrelevant products inspected, comprehension errors, budget awareness and perceived pressure. Report participants and denominators rather than presenting a small study as conversion proof. Repeated confusion between discounts and lower total spending is a revision trigger, not an acceptable trade-off for higher order values.

### Live evaluation, only if shipped

Randomise eligible buyers, not visits. Define eligibility before exposure. Primary proposed metric: completed eligible orders per exposed buyer. Diagnostics: bundle and original-item completions, estimate-to-final-price differences, comprehension and abandonment by step. Guardrails: cancellations, returns, cost-related support, unwanted-item pressure, seller workload and margin. Set minimum detectable effect, power, duration and stopping rules using actual baseline data. Do not invent numeric targets without those baselines.

## Verification

Run `node --test tests/*.test.mjs` and `npm run build`.

The managed preview service reported `preview relay unavailable` in this environment. Browser-based layout, keyboard and touch QA could not be completed. Server rendering, source checks, calculation tests, simulated-DOM Vue interaction tests and production compilation passed. Simulated-DOM checks cover light/heavy bundles, filters retaining selection, budget changes, unavailable-delivery recovery, the single-item path and Greek label round-trips. They do not verify layout or assistive-technology behaviour. Before merge, inspect desktop/mobile, dark/light themes, English/Greek, screen-reader announcements, keyboard navigation and all three prototype scenarios in a working preview.
