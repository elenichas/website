# Smart Local Bundling
## A Product Concept for Vinted

## Executive Summary

This case study explores a connected feature ecosystem designed to reduce the true cost and friction of second-hand shopping.

Rather than focusing solely on item price, the concept helps users make better decisions based on:

- Total purchase cost
- Delivery convenience
- Bundle opportunities
- Sustainability benefits
- Seller privacy protection

The project combines two complementary features:

1. **Smart Discovery** – helping users find the best overall purchase option.
2. **Smart Local Bundling** – helping users maximise value once they decide to buy.

---

# The Problem

Vinted users often evaluate listings based on item price alone.

However, the real purchase decision is influenced by:

- Shipping cost
- Delivery method
- Travel required to collect parcels
- Delivery speed
- Bundle opportunities
- Total transaction cost

Example:

| Item | Price | Shipping | Total |
|--------|--------|--------|--------|
| Yellow T-Shirt A | £4.00 | £4.29 | £8.29 |
| Yellow T-Shirt B | £5.00 | £1.99 | £6.99 |

The cheaper item is not always the better purchase.

At the same time, buyers regularly miss opportunities to bundle multiple items from the same seller because discovering relevant items requires manually browsing an entire wardrobe.

---

# Product Opportunity

Help buyers:

- Spend less overall
- Avoid inconvenient delivery methods
- Discover nearby inventory without exposing seller locations
- Identify bundle opportunities before checkout

---

# Design Challenge

## Privacy vs Convenience

Users want location-aware discovery.

Sellers want privacy.

The challenge is to enable smarter local shopping without revealing:

- Addresses
- Postcodes
- Streets
- Exact map locations
- Precise coordinates

This trade-off became the core design challenge of the project.

---

# Feature 1: Smart Discovery

## Concept

Replace "Sort by Distance" with a more valuable decision tool:

### Sort by Total Purchase Cost

The system considers:

- Item price
- Delivery cost
- Delivery preference
- Approximate distance

Distance becomes a supporting signal rather than the primary ranking factor.

---

## New Filters

### Delivery Preferences

- Home delivery only
- Pickup point only
- Either

Users can also save a preference:

**Prefer Home Delivery**

This preference influences future recommendations.

---

### Distance Filters

Distance remains available but privacy-safe.

Options:

- Any distance
- Under 2 miles
- Under 5 miles
- Under 10 miles
- Greater London

---

## Privacy Model

Instead of exact locations:

- East London
- North London
- West London

Distance indicators:

- 1.8 miles away
- Under 5 miles
- Nearby

The system never exposes precise seller locations.

---

## Result Card Enhancements

Each listing displays:

- Total cost
- Item price
- Delivery cost
- Approximate distance
- Delivery method badges

Example:

Yellow Cotton T-Shirt

£5.00 item
£1.99 shipping

Total: £6.99

✓ Home delivery
✓ 2.1 miles away

---

## Delivery Impact Card

Optional informational module:

This item is:

✓ Nearby
✓ Home delivery available
✓ Estimated delivery tomorrow
✓ Lower delivery impact

The goal is to inform rather than persuade.

---

# Feature 2: Smart Local Bundling

## Concept

When a user is about to buy an item, the system proactively identifies opportunities to maximise value from the same seller.

Instead of generic recommendations:

"People also liked..."

The system focuses on:

"You're already paying for delivery from this seller."

---

## New Module

### Make the Delivery Worth It

Appears on the item detail page.

Example:

You're already purchasing from this seller.

Add another item and pay shipping once.

Potential savings:
- £2.49 shipping saved
- Bundle discount available

---

## Recommendation Sources

The system scores items using:

### Same Seller

Strongest signal.

### User Favourites

Items already liked by the buyer.

### Size Match

Items available in the user's sizes.

### Style Match

Related categories and brands.

### Bundle Discount Availability

Additional incentive.

---

## Recommendation Logic

Example scoring:

score =
sameSeller * 40 +
favourited * 30 +
sizeMatch * 15 +
styleMatch * 10 +
bundleDiscount * 5

---

## Bundle Drawer

When users add recommended items:

### Bundle Summary

Selected items:

- Blue Jeans
- White T-Shirt
- Black Skirt

Benefits:

✓ Single shipment
✓ Bundle discount
✓ Lower total delivery cost

Estimated savings:
£3.20

---

# User Journey

## Step 1

Search:
"Yellow Cotton T-Shirt"

## Step 2

Sort:
"Lowest Total Cost"

## Step 3

Filter:
"Home Delivery Only"

## Step 4

Select Item

## Step 5

Review Delivery Impact

## Step 6

See Smart Bundle Opportunities

## Step 7

Add Additional Items

## Step 8

Checkout

---

# Interactive Prototype Scope

## Route Structure

/portfolio/vinted-case-study

/prototype/search

/prototype/item/:id

/prototype/bundle

---

## Core Components

AppShell.vue

PhoneFrame.vue

SearchResults.vue

TotalCostFilter.vue

DistanceFilter.vue

DeliveryPreferenceSheet.vue

ProductCard.vue

DeliveryImpactCard.vue

ItemDetail.vue

SmartBundleModule.vue

BundleDrawer.vue

CaseStudySection.vue

---

# Success Metrics

### User Metrics

- Increased bundle purchases
- Reduced abandoned carts
- Increased average order value
- Increased home delivery satisfaction

### Business Metrics

- More completed transactions
- Higher bundle adoption
- Increased buyer retention

### Sustainability Metrics

- More local purchases
- Fewer shipments per item purchased

---

# Why This Project Matters

The proposal demonstrates:

- Product thinking
- UX strategy
- Recommendation systems
- Marketplace design
- Privacy-aware design
- Trust and safety considerations

Rather than introducing a completely new behaviour, the concept improves existing shopping decisions by helping users understand the true cost of a purchase and identify valuable bundle opportunities before checkout.
