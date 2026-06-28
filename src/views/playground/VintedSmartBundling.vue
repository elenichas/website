<template>
  <app-navbar />

  <main class="vinted-case">
    <section class="vinted-hero">
      <div class="hero-story">
        <router-link class="back-link" to="/playground">
          <ArrowLeft :size="15" />
          Playground
        </router-link>
        <p class="project-label">Independent speculative prototype</p>
        <h1>Smart Local Bundling for Vinted</h1>
        <p class="hero-copy">
          A marketplace interaction that helps buyers understand the full value
          of a pre-loved find: item price, delivery, distance, and bundle
          opportunities in one confident decision.
        </p>
        <p class="disclaimer">
          Independent speculative prototype. Not affiliated with Vinted. Play with
          the prototype to explore the new features.
        </p>
      </div>

      <section class="prototype-stage" aria-label="Interactive Vinted-inspired prototype">
        <div class="prototype-device">
          <div class="annotation-layer" aria-label="Prototype annotations">
            <article
              v-for="annotation in activeAnnotations"
              :key="annotation.id"
              class="annotation-note"
              :class="annotation.position"
            >
              <span>{{ annotation.kicker }}</span>
              <strong>{{ annotation.title }}</strong>
              <p>{{ annotation.copy }}</p>
            </article>
          </div>

          <div class="phone-frame">
            <div class="phone-status">
              <span>9:41</span>
              <span>Interactive prototype</span>
            </div>

            <div class="app-screen">
              <header class="market-header">
                <div class="search-bar">
                  <Search :size="16" />
                  <span>yellow cotton t-shirt</span>
                  <Camera class="camera-icon" :size="17" />
                </div>
                <button type="button" aria-label="Open filters">
                  <SlidersHorizontal :size="18" />
                </button>
              </header>

              <div v-if="screen === 'results'" class="control-panel">
                <div class="control-group">
                  <span class="control-label">Sort</span>
                  <nav class="sort-segment" aria-label="Sort listings">
                    <button
                      v-for="option in sortOptions"
                      :key="option.id"
                      type="button"
                      :class="{ active: sortMode === option.id }"
                      @click="sortMode = option.id"
                    >
                      {{ option.label }}
                    </button>
                  </nav>
                </div>

                <div class="control-group delivery-group">
                  <span class="control-label">Delivery</span>
                  <div class="delivery-filter" aria-label="Delivery filters">
                    <button
                      v-for="option in deliveryOptions"
                      :key="option.id"
                      type="button"
                      :class="{ active: deliveryFilter === option.id }"
                      @click="deliveryFilter = option.id"
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </div>
              </div>

              <section v-if="screen === 'results'" class="results-view" aria-label="Search results">
              <div class="results-summary">
                <strong>{{ filteredListings.length }} results</strong>
                <span>{{ sortSummary }}</span>
              </div>

              <div class="listing-grid">
                <article
                  v-for="listing in filteredListings"
                  :key="listing.id"
                  class="listing-card"
                  :class="{ selected: selectedListingId === listing.id }"
                >
                  <button type="button" @click="openListing(listing.id)">
                    <span class="listing-photo" :style="productImageStyle(listing)">
                      <img :src="productImageSrc(listing)" :alt="productImageAlt(listing)" loading="lazy" />
                      <span class="heart-badge">
                        <Heart :size="14" />
                        <span>{{ likeCount(listing) }}</span>
                      </span>
                    </span>
                    <span class="listing-meta">
                      <strong>{{ listing.brand }}</strong>
                      <span class="item-line">{{ listing.title }}</span>
                      <span class="detail-line">{{ listing.size }} · {{ listing.condition }}</span>
                      <span class="price-comparison" aria-label="Price comparison">
                        <span>
                          <small>Item</small>
                          <b>{{ money(listing.itemPrice) }}</b>
                        </span>
                        <span class="fee-price">
                          <small>
                            + fee
                            <ShieldCheck :size="9" />
                          </small>
                          <b>{{ money(appPrice(listing)) }}</b>
                        </span>
                        <span class="full-total">
                          <small>Full total</small>
                          <b>{{ money(totalCost(listing)) }}</b>
                        </span>
                      </span>
                      <span class="delivery-line">
                        {{ listing.delivery }} · {{ listing.distanceLabel }}
                      </span>
                    </span>
                  </button>
                </article>
              </div>
              </section>

              <section v-else class="detail-view" aria-label="Item detail">
              <button class="back-to-results" type="button" @click="screen = 'results'">
                <ArrowLeft :size="14" />
                Back to results
              </button>

              <div class="detail-photo" :style="productImageStyle(selectedListing, 'detail')">
                <img :src="productImageSrc(selectedListing)" :alt="productImageAlt(selectedListing)" />
                <span>{{ selectedListing.brand }}</span>
              </div>

              <div class="detail-content">
                <div>
                  <h2>{{ selectedListing.title }}</h2>
                  <p>{{ selectedListing.size }} · {{ selectedListing.condition }} · {{ selectedListing.area }}</p>
                </div>
                <button type="button" class="heart-button" :aria-label="selectedListing.favourite ? 'Favorite item' : 'Add to favorites'">
                  <Heart :size="17" :fill="selectedListing.favourite ? 'currentColor' : 'none'" />
                </button>
              </div>

              <article class="full-total-callout">
                <span>Full total</span>
                <strong>{{ money(totalCost(selectedListing)) }}</strong>
                <small>Item + buyer fee + delivery</small>
              </article>

              <dl class="price-breakdown">
                <div>
                  <dt>Item</dt>
                  <dd>{{ money(selectedListing.itemPrice) }}</dd>
                </div>
                <div>
                  <dt>Buyer fee</dt>
                  <dd>{{ money(buyerFee(selectedListing)) }}</dd>
                </div>
                <div>
                  <dt>Item + fee</dt>
                  <dd>{{ money(appPrice(selectedListing)) }}</dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>{{ money(selectedListing.shipping) }}</dd>
                </div>
                <div class="price-breakdown-total">
                  <dt>Full total</dt>
                  <dd>{{ money(totalCost(selectedListing)) }}</dd>
                </div>
              </dl>

              <article class="bundle-module">
                <div>
                  <p>Make delivery work smarter</p>
                  <h3>{{ selectedListing.seller }} also has items from your favorites.</h3>
                  <span>Blue jeans and shoes in your size can ship with this order.</span>
                </div>
                <button type="button" @click="bundleOpen = true">
                  View bundle
                  <PackagePlus :size="15" />
                </button>
              </article>

              <article class="impact-card">
                <div class="impact-icon"><Leaf :size="17" /></div>
                <div>
                  <strong>Delivery impact</strong>
                  <span>{{ selectedListing.delivery }} · {{ selectedListing.distanceLabel }} · approximate location only</span>
                </div>
              </article>
              </section>

              <transition name="drawer">
              <section v-if="bundleOpen" class="bundle-drawer" aria-label="Bundle recommendations">
                <div class="drawer-top">
                  <div>
                    <p>Smart bundle</p>
                    <h2>From the same seller</h2>
                    <span class="drawer-context">
                      Based on items in your favorites.
                    </span>
                  </div>
                  <button type="button" aria-label="Close bundle drawer" @click="bundleOpen = false">
                    <X :size="17" />
                  </button>
                </div>

                <div class="recommendation-list">
                  <article
                    v-for="item in bundleRecommendations"
                    :key="item.id"
                    :class="{ selected: selectedBundleIds.includes(item.id) }"
                  >
                    <span class="bundle-thumb" :style="productImageStyle(item)">
                      <img :src="productImageSrc(item)" :alt="productImageAlt(item)" loading="lazy" />
                    </span>
                    <div>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.reason }}</span>
                      <small>{{ item.matchLabel }} · {{ money(item.itemPrice) }}</small>
                    </div>
                    <button
                      type="button"
                      :class="{ active: selectedBundleIds.includes(item.id) }"
                      @click="toggleBundleItem(item.id)"
                    >
                      {{ selectedBundleIds.includes(item.id) ? "Added" : "Add" }}
                    </button>
                  </article>
                </div>

                <div class="bundle-summary">
                  <div class="bundle-summary-copy">
                    <span>{{ selectedBundleItems.length ? "Bundle savings" : "No bundle savings yet" }}</span>
                    <strong>{{ selectedBundleItems.length ? money(estimatedSavings) : "Add an item to unlock savings" }}</strong>
                  </div>
                  <div v-if="selectedBundleItems.length" class="bundle-summary-row">
                    <span>{{ selectedBundleItems.length }} add-on{{ selectedBundleItems.length === 1 ? "" : "s" }} selected</span>
                    <strong>{{ money(bundleTotal) }} total</strong>
                  </div>
                </div>

                <button
                  type="button"
                  class="fake-buy-button"
                  :disabled="selectedBundleItems.length === 0"
                  @click="completePurchase"
                >
                  {{ selectedBundleItems.length ? `Buy bundle for ${money(bundleTotal)}` : "Add an item to buy bundle" }}
                  <ShoppingBag :size="15" />
                </button>
              </section>
              </transition>

              <transition name="purchase">
              <section v-if="purchaseComplete" class="purchase-complete" aria-live="polite">
                <CheckCircle2 :size="34" />
                <p>Prototype purchase complete</p>
                <h2>{{ 1 + selectedBundleItems.length }} items from {{ selectedListing.seller }}</h2>
                <button type="button" @click="resetPurchase">Keep exploring</button>
              </section>
              </transition>

              <nav class="bottom-nav" aria-label="Prototype mobile navigation">
                <button type="button"><Home :size="18" /><span>Home</span></button>
                <button type="button" class="active"><Grid2X2 :size="18" /><span>Browse</span></button>
                <button type="button" class="sell-button"><Plus :size="18" /><span>Sell</span></button>
                <button type="button" class="inbox-button"><Mail :size="18" /><i aria-hidden="true"></i><span>Inbox</span></button>
                <button type="button"><UserRound :size="18" /><span>Profile</span></button>
              </nav>
            </div>
          </div>

          <aside class="prototype-notes">
            <p class="project-label">Live mock data</p>
            <h2>{{ noteTitle }}</h2>
            <p>{{ noteCopy }}</p>
          </aside>
        </div>
      </section>

      <div class="feature-brief" aria-label="Designed prototype features">
        <article>
          <span>Feature 1</span>
          <strong>Full-value discovery</strong>
          <p>Annotate the normal search flow with total price, delivery, and distance signals.</p>
        </article>
        <article>
          <span>Feature 2</span>
          <strong>Smart same-seller bundles</strong>
          <p>Use favorites and size signals to suggest different items from the same seller.</p>
        </article>
      </div>
    </section>

    <section class="story-section problem-section">
      <div>
        <p class="project-label">Problem</p>
        <h2>The item price is only part of what the buyer pays.</h2>
      </div>
      <p>
        Delivery, distance, and bundle opportunities can all change the final
        amount. The prototype makes those signals visible before a pre-loved find
        becomes a decision.
      </p>
    </section>

    <section class="story-section">
      <div>
        <p class="project-label">Reflection</p>
        <h2>Small additions can solve real product problems.</h2>
      </div>
      <p>
        The prototype does not reimagine the marketplace from scratch. It works
        within a familiar product flow and adds the missing signals that help
        buyers understand what they will pay before choosing a pre-loved find.
      </p>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Grid2X2,
  Heart,
  Home,
  Leaf,
  Mail,
  MapPin,
  PackagePlus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  UserRound,
  X,
} from "lucide-vue-next";
import { useHead } from "@vueuse/head";
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

const listings = [
  {
    id: "yellow-a",
    title: "Yellow cotton T-shirt",
    brand: "Weekday",
    seller: "Maya",
    itemPrice: 4,
    shipping: 4.29,
    delivery: "Pickup point",
    distanceMiles: 1.8,
    distanceLabel: "1.8 miles away",
    area: "East London",
    size: "M",
    condition: "Very good",
    favourite: false,
    imagePosition: "0% 0%",
    score: 62,
    reason: "Nearby pickup with a delivery trade-off",
  },
  {
    id: "yellow-b",
    title: "Soft yellow tee",
    brand: "Arket",
    seller: "Nora",
    itemPrice: 5,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Good",
    favourite: true,
    imagePosition: "25% 0%",
    score: 96,
    reason: "Same seller bundle opportunity",
  },
  {
    id: "yellow-c",
    title: "Lemon cotton baby tee",
    brand: "Monki",
    seller: "Nora",
    itemPrice: 6,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 3.6,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "S",
    condition: "New without tags",
    favourite: false,
    imagePosition: "50% 0%",
    score: 84,
    reason: "Same seller · style match",
  },
  {
    id: "yellow-d",
    title: "Vintage yellow cotton top",
    brand: "Zara",
    seller: "Iris",
    itemPrice: 3.5,
    shipping: 3.49,
    delivery: "Either",
    distanceMiles: 8.5,
    distanceLabel: "Under 10 miles",
    area: "West London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "75% 0%",
    score: 58,
    reason: "Affordable piece with a delivery trade-off",
  },
  {
    id: "jeans-a",
    title: "Sun-washed cotton tee",
    brand: "Weekday",
    seller: "Nora",
    itemPrice: 9,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Very good",
    favourite: true,
    imagePosition: "100% 0%",
    score: 91,
    reason: "Same seller · size match",
  },
  {
    id: "skirt-a",
    title: "Mustard boxy T-shirt",
    brand: "Monki",
    seller: "Nora",
    itemPrice: 7.5,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Good",
    favourite: true,
    imagePosition: "0% 33.333%",
    score: 88,
    reason: "Same seller · favourited",
  },
  {
    id: "cardigan-a",
    title: "Pale yellow ribbed top",
    brand: "Arket",
    seller: "Nora",
    itemPrice: 8,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Very good",
    favourite: false,
    imagePosition: "25% 33.333%",
    score: 79,
    reason: "Same seller · colour match",
  },
  {
    id: "stripe-top",
    title: "Yellow striped cotton tee",
    brand: "Cos",
    seller: "Nora",
    itemPrice: 6.5,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "50% 33.333%",
    score: 72,
    reason: "Same seller · wardrobe match",
  },
  {
    id: "cream-jumper",
    title: "Butter yellow fitted tee",
    brand: "Arket",
    seller: "Maya",
    itemPrice: 11,
    shipping: 4.29,
    delivery: "Pickup point",
    distanceMiles: 1.8,
    distanceLabel: "1.8 miles away",
    area: "East London",
    size: "M",
    condition: "Very good",
    favourite: true,
    imagePosition: "75% 33.333%",
    score: 66,
    reason: "Favourite · pickup only",
  },
  {
    id: "green-tote",
    title: "Oversized yellow T-shirt",
    brand: "No label",
    seller: "Nora",
    itemPrice: 4.5,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "100% 33.333%",
    score: 70,
    reason: "Same seller · efficient add-on",
  },
  {
    id: "trainers",
    title: "Cropped lemon tee",
    brand: "Zara",
    seller: "Iris",
    itemPrice: 14,
    shipping: 3.49,
    delivery: "Either",
    distanceMiles: 8.5,
    distanceLabel: "Under 10 miles",
    area: "West London",
    size: "S",
    condition: "Good",
    favourite: false,
    imagePosition: "0% 66.667%",
    score: 61,
    reason: "Flexible delivery · wider distance band",
  },
  {
    id: "blue-shirt",
    title: "Soft yellow cotton shirt",
    brand: "Uniqlo",
    seller: "Nora",
    itemPrice: 7,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Very good",
    favourite: false,
    imagePosition: "25% 66.667%",
    score: 77,
    reason: "Same seller · size match",
  },
  {
    id: "floral-dress",
    title: "Yellow scoop-neck tee",
    brand: "Nobody's Child-style",
    seller: "Sofia",
    itemPrice: 13,
    shipping: 2.49,
    delivery: "Home delivery",
    distanceMiles: 4.8,
    distanceLabel: "Under 5 miles",
    area: "South London",
    size: "M",
    condition: "Very good",
    favourite: true,
    imagePosition: "50% 66.667%",
    score: 69,
    reason: "Favourite · home delivery",
  },
  {
    id: "linen-trousers",
    title: "Linen yellow T-shirt",
    brand: "Mango",
    seller: "Sofia",
    itemPrice: 10,
    shipping: 2.49,
    delivery: "Home delivery",
    distanceMiles: 4.8,
    distanceLabel: "Under 5 miles",
    area: "South London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "75% 66.667%",
    score: 67,
    reason: "Same area · home delivery",
  },
  {
    id: "beige-jacket",
    title: "Faded yellow pocket tee",
    brand: "Muji-style",
    seller: "Maya",
    itemPrice: 16,
    shipping: 4.29,
    delivery: "Pickup point",
    distanceMiles: 1.8,
    distanceLabel: "1.8 miles away",
    area: "East London",
    size: "M",
    condition: "Very good",
    favourite: false,
    imagePosition: "100% 66.667%",
    score: 57,
    reason: "Nearby pickup option",
  },
  {
    id: "scarf",
    title: "Yellow cotton vest top",
    brand: "Vintage",
    seller: "Nora",
    itemPrice: 3,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "S",
    condition: "Good",
    favourite: false,
    imagePosition: "0% 100%",
    score: 73,
    reason: "Same seller · easy add-on",
  },
  {
    id: "hoodie",
    title: "Golden yellow long-sleeve",
    brand: "Weekday",
    seller: "Iris",
    itemPrice: 8,
    shipping: 3.49,
    delivery: "Either",
    distanceMiles: 8.5,
    distanceLabel: "Under 10 miles",
    area: "West London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "25% 100%",
    score: 59,
    reason: "Flexible delivery · moderate distance",
  },
  {
    id: "belt",
    title: "Vintage yellow graphic-free tee",
    brand: "Vintage",
    seller: "Nora",
    itemPrice: 5,
    shipping: 1.99,
    delivery: "Home delivery",
    distanceMiles: 2.4,
    distanceLabel: "Under 5 miles",
    area: "North London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "50% 100%",
    score: 71,
    reason: "Same seller · bundle discount",
  },
  {
    id: "small-handbag",
    title: "Yellow relaxed cotton tee",
    brand: "Vintage",
    seller: "Sofia",
    itemPrice: 12,
    shipping: 2.49,
    delivery: "Home delivery",
    distanceMiles: 4.8,
    distanceLabel: "Under 5 miles",
    area: "South London",
    size: "M",
    condition: "Very good",
    favourite: false,
    imagePosition: "75% 100%",
    score: 64,
    reason: "Home delivery · nearby band",
  },
  {
    id: "sunglasses",
    title: "Light lemon crew neck",
    brand: "No label",
    seller: "Maya",
    itemPrice: 4,
    shipping: 4.29,
    delivery: "Pickup point",
    distanceMiles: 1.8,
    distanceLabel: "1.8 miles away",
    area: "East London",
    size: "M",
    condition: "Good",
    favourite: false,
    imagePosition: "100% 100%",
    score: 55,
    reason: "Affordable piece, delivery changes the value",
  },
];

const bundleItems = [
  {
    id: "light-jeans",
    title: "Light-wash straight jeans",
    brand: "Weekday",
    seller: "Nora",
    itemPrice: 13,
    size: "W28",
    condition: "Very good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "0% 0%",
    score: 98,
    reason: "Same seller · similar to favorite jeans",
    matchLabel: "Closest favorite match",
  },
  {
    id: "white-trainers",
    title: "White leather trainers",
    brand: "Veja-style",
    seller: "Nora",
    itemPrice: 18,
    size: "UK 5",
    condition: "Good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "66.667% 0%",
    score: 94,
    reason: "Same seller · shoe size match",
    matchLabel: "Matches your shoe size",
  },
  {
    id: "cream-cardigan",
    title: "Cream rib cardigan",
    brand: "Arket",
    seller: "Nora",
    itemPrice: 11,
    size: "M",
    condition: "Very good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "0% 50%",
    score: 87,
    reason: "Same seller · outfit match",
    matchLabel: "Works with this outfit",
  },
  {
    id: "denim-shirt",
    title: "Soft denim overshirt",
    brand: "Uniqlo",
    seller: "Nora",
    itemPrice: 12,
    size: "M",
    condition: "Very good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "66.667% 50%",
    score: 84,
    reason: "Same seller · layer in your size",
    matchLabel: "Layer in your size",
  },
  {
    id: "mary-janes",
    title: "Burgundy Mary Jane flats",
    brand: "Vintage",
    seller: "Nora",
    itemPrice: 16,
    size: "UK 5",
    condition: "Good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "100% 0%",
    score: 82,
    reason: "Same seller · favorite shoe style",
    matchLabel: "Similar to favorite shoes",
  },
  {
    id: "olive-tote",
    title: "Olive canvas tote",
    brand: "No label",
    seller: "Nora",
    itemPrice: 6,
    size: "One size",
    condition: "Good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "33.333% 50%",
    score: 75,
    reason: "Same seller · low-cost add-on",
    matchLabel: "Easy add-on",
  },
  {
    id: "dark-jeans",
    title: "Dark indigo straight jeans",
    brand: "Cos",
    seller: "Maya",
    itemPrice: 15,
    size: "W28",
    condition: "Very good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "33.333% 0%",
    score: 86,
    reason: "Same seller · favorite denim style",
    matchLabel: "Similar to favorite denim",
  },
  {
    id: "black-belt",
    title: "Black leather belt",
    brand: "Vintage",
    seller: "Maya",
    itemPrice: 7,
    size: "M",
    condition: "Good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "100% 50%",
    score: 74,
    reason: "Same seller · outfit add-on",
    matchLabel: "Easy add-on",
  },
  {
    id: "navy-skirt",
    title: "Navy cotton midi skirt",
    brand: "Monki",
    seller: "Iris",
    itemPrice: 10,
    size: "M",
    condition: "Good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "0% 100%",
    score: 83,
    reason: "Same seller · favorite skirt style",
    matchLabel: "Similar to a favorite",
  },
  {
    id: "striped-top",
    title: "Striped long-sleeve top",
    brand: "Cos",
    seller: "Iris",
    itemPrice: 8,
    size: "M",
    condition: "Very good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "33.333% 100%",
    score: 76,
    reason: "Same seller · wardrobe match",
    matchLabel: "Wardrobe match",
  },
  {
    id: "tan-loafers",
    title: "Tan leather loafers",
    brand: "Vintage",
    seller: "Sofia",
    itemPrice: 19,
    size: "UK 5",
    condition: "Good",
    favourite: false,
    imageSheet: "bundle",
    imagePosition: "66.667% 100%",
    score: 77,
    reason: "Same seller · shoe size match",
    matchLabel: "Matches your shoe size",
  },
  {
    id: "blue-button-up",
    title: "Pale blue button-up shirt",
    brand: "Uniqlo",
    seller: "Sofia",
    itemPrice: 9,
    size: "M",
    condition: "Very good",
    favourite: true,
    imageSheet: "bundle",
    imagePosition: "100% 100%",
    score: 73,
    reason: "Same seller · favorite blue item",
    matchLabel: "Similar to a favorite",
  },
];

const imageFits = {
  "yellow-a": { zoom: 1.04 },
  "yellow-b": { zoom: 1.1 },
  "yellow-c": { zoom: 1.04 },
  "yellow-d": { zoom: 1.01 },
  "jeans-a": { zoom: 1.04 },
  "skirt-a": { zoom: 1.01 },
  "cardigan-a": { zoom: 1.08 },
  "stripe-top": { zoom: 1.04 },
  "cream-jumper": { zoom: 1.03 },
  "green-tote": { zoom: 1.02 },
  "trainers": { zoom: 1.02 },
  "blue-shirt": { zoom: 1.08 },
  "floral-dress": { zoom: 1.08 },
  "linen-trousers": { zoom: 1.06 },
  "beige-jacket": { zoom: 1.02 },
  "scarf": { zoom: 1.12 },
  "hoodie": { zoom: 1.05 },
  "belt": { zoom: 1.08 },
  "small-handbag": { zoom: 1.02 },
  "sunglasses": { zoom: 1.02 },
  "light-jeans": { zoom: 1.02 },
  "dark-jeans": { zoom: 1.02 },
  "white-trainers": { zoom: 1.06 },
  "mary-janes": { zoom: 1.06 },
  "cream-cardigan": { zoom: 1.03 },
  "olive-tote": { zoom: 1.05 },
  "denim-shirt": { zoom: 1.04 },
  "black-belt": { zoom: 1.08 },
  "navy-skirt": { zoom: 1.02 },
  "striped-top": { zoom: 1.03 },
  "tan-loafers": { zoom: 1.06 },
  "blue-button-up": { zoom: 1.03 },
};

export default {
  name: "VintedSmartBundling",
  components: {
    AppFooter,
    AppNavbar,
    ArrowLeft,
    Camera,
    CheckCircle2,
    Grid2X2,
    Heart,
    Home,
    Leaf,
    Mail,
    MapPin,
    PackagePlus,
    Plus,
    Search,
    ShieldCheck,
    ShoppingBag,
    SlidersHorizontal,
    UserRound,
    X,
  },
  setup() {
    useHead({
      title: "Vinted Smart Local Bundling - Eleni Chasioti",
      meta: [
        {
          name: "description",
          content:
            "Speculative Vinted-inspired prototype exploring full-value discovery, privacy-safe distance, and smart local bundling for pre-loved fashion.",
        },
      ],
    });
  },
  data() {
    return {
      screen: "results",
      sortMode: "total",
      deliveryFilter: "any",
      selectedListingId: "yellow-b",
      bundleOpen: false,
      purchaseComplete: false,
      selectedBundleIds: ["light-jeans", "white-trainers"],
      sortOptions: [
        { id: "total", label: "Full value" },
        { id: "distance", label: "Distance" },
        { id: "item", label: "Item price" },
      ],
      deliveryOptions: [
        { id: "any", label: "Any" },
        { id: "home", label: "Home" },
        { id: "pickup", label: "Pickup" },
      ],
      listings,
      bundleItems,
    };
  },
  computed: {
    filteredListings() {
      const filtered = this.listings.filter((listing) => {
        const deliveryMatch =
          this.deliveryFilter === "any" ||
          (this.deliveryFilter === "home" && ["Home delivery", "Either"].includes(listing.delivery)) ||
          (this.deliveryFilter === "pickup" && ["Pickup point", "Either"].includes(listing.delivery));

        return deliveryMatch;
      });

      return filtered.sort((a, b) => {
        if (this.sortMode === "item") return a.itemPrice - b.itemPrice;
        if (this.sortMode === "distance") return a.distanceMiles - b.distanceMiles;
        return this.totalCost(a) - this.totalCost(b);
      });
    },
    selectedListing() {
      return this.listings.find((listing) => listing.id === this.selectedListingId) || this.listings[0];
    },
    activeAnnotations() {
      if (this.purchaseComplete) {
        return [
          {
            id: "purchase-outcome",
            kicker: "Outcome",
            title: "Both proposed features converge here.",
            copy: "Discovery starts the decision. Bundling increases the basket before the fake purchase.",
            position: "note-right note-purchase",
          },
        ];
      }

      if (this.bundleOpen) {
        return [
          {
            id: "bundle-recs",
            kicker: "Feature 2",
            title: "Bundle recommendations stay outside the search task.",
            copy: "Same seller first, then favorite categories and size signals.",
            position: "note-right note-drawer",
          },
          {
            id: "bundle-buy",
            kicker: "Prototype outcome",
            title: "The fake buy button closes the loop.",
            copy: "The flow shows how these prompts can lead to a larger order.",
            position: "note-left note-buy",
          },
        ];
      }

      if (this.screen === "detail") {
        return [
          {
            id: "pricing-layer",
            kicker: "Feature 1",
            title: "Added pricing layer.",
            copy: "Item, delivery, and total are visible before commitment.",
            position: "note-left note-price",
          },
          {
            id: "bundle-trigger",
            kicker: "Feature 2",
            title: "Same-seller bundle prompt.",
            copy: "The app shifts from one item to relevant same-seller additions.",
            position: "note-right note-trigger",
          },
        ];
      }

      return [
        {
            id: "existing-shell",
            kicker: "Existing flow",
            title: "The search UI stays familiar.",
            copy: "The normal browse pattern stays intact.",
          position: "note-left note-existing",
        },
        {
            id: "full-value-sort",
            kicker: "Feature 1",
            title: "Sort by full value, not just item price.",
            copy: "Delivery and distance change which item is best value.",
          position: "note-right note-sort",
        },
      ];
    },
    bundleRecommendations() {
      return this.bundleItems
        .filter((item) => item.seller === this.selectedListing.seller && item.id !== this.selectedListing.id)
        .sort((a, b) => b.score - a.score);
    },
    selectedBundleItems() {
      return this.bundleRecommendations.filter((item) => this.selectedBundleIds.includes(item.id));
    },
    sortSummary() {
      if (this.sortMode === "distance") return "Nearest first";
      if (this.sortMode === "item") return "Sorted by item price";
      return "Sorted by full value";
    },
    shippingSaved() {
      return this.selectedBundleItems.length > 0 ? this.selectedListing.shipping * this.selectedBundleItems.length : 0;
    },
    bundleBuyerFees() {
      return [this.selectedListing, ...this.selectedBundleItems].reduce((sum, item) => sum + this.buyerFee(item), 0);
    },
    bundleDiscount() {
      return this.selectedBundleItems.length >= 2 ? 1.2 : 0;
    },
    estimatedSavings() {
      return this.shippingSaved + this.bundleDiscount;
    },
    bundleTotal() {
      const itemsTotal = this.selectedBundleItems.reduce((sum, item) => sum + item.itemPrice, this.selectedListing.itemPrice);
      return Math.max(0, itemsTotal + this.bundleBuyerFees + this.selectedListing.shipping - this.estimatedSavings);
    },
    noteTitle() {
      if (this.purchaseComplete) return "Both proposed features now end in a purchase.";
      if (this.bundleOpen) return "Bundle value updates as you add items.";
      if (this.screen === "detail") return "The item detail creates the bundling moment.";
      return this.sortMode === "total" ? "Clear pricing helps you find the best item." : "Price-only sorting can hide the full picture.";
    },
    noteCopy() {
      if (this.purchaseComplete) {
        return "The fake buy step shows the product outcome: full-value discovery starts the decision, then same-seller recommendations increase basket value.";
      }
      if (this.bundleOpen) {
        return "The summary now keeps the decision simple: add at least one item, see the bundle saving, then buy the combined order.";
      }
      if (this.screen === "detail") {
        return "The buyer sees delivery impact and a same-seller opportunity before committing, while location details stay approximate.";
      }
      return "Try switching to price-only sorting. The affordable shirt moves up, even when delivery makes another option better value.";
    },
  },
  methods: {
    money(value) {
      return `£${value.toFixed(2)}`;
    },
    totalCost(listing) {
      return this.appPrice(listing) + listing.shipping;
    },
    buyerFee(listing) {
      return Math.round((listing.itemPrice * 0.07 + 0.45) * 100) / 100;
    },
    appPrice(listing) {
      return listing.itemPrice + this.buyerFee(listing);
    },
    likeCount(listing) {
      return Math.max(8, Math.round(listing.score / 3) + (listing.favourite ? 6 : 0));
    },
    productImageSrc(item) {
      const folder = item.imageSheet === "bundle" ? "bundles" : "products";
      return resolveAsset(`@/images/vinted/${folder}/${item.id}.png`);
    },
    productImageAlt(item) {
      return `${item.brand} ${item.title}`;
    },
    productImageStyle(item, mode = "card") {
      const fit = imageFits[item.id] || {};
      const modeZoom = mode === "detail" ? 0.96 : 1;
      const zoom = Math.max(1, (fit.zoom || 1) * modeZoom);

      return {
        "--image-scale": zoom,
      };
    },
    openListing(id) {
      this.selectedListingId = id;
      this.screen = "detail";
      this.bundleOpen = false;
      this.purchaseComplete = false;
      this.selectedBundleIds = this.bundleRecommendations.slice(0, 2).map((item) => item.id);
    },
    toggleBundleItem(id) {
      if (this.selectedBundleIds.includes(id)) {
        this.selectedBundleIds = this.selectedBundleIds.filter((itemId) => itemId !== id);
        return;
      }
      this.selectedBundleIds = [...this.selectedBundleIds, id];
    },
    completePurchase() {
      if (this.selectedBundleItems.length === 0) return;
      this.bundleOpen = false;
      this.purchaseComplete = true;
    },
    resetPurchase() {
      this.purchaseComplete = false;
      this.screen = "results";
    },
  },
};
</script>

<style scoped>
.vinted-case {
  --vinted-teal: #007782;
  --vinted-teal-dark: #005f68;
  --vinted-mint: #e4f7f3;
  --vinted-line: #dce5e3;
  background: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
}

.vinted-hero {
  align-items: center;
  display: grid;
  gap: clamp(1.75rem, 4vw, 3.25rem);
  grid-template-columns: minmax(0, 1fr);
  margin: 0 auto;
  max-width: 1280px;
  padding: clamp(2rem, 4vw, 3.75rem) clamp(1rem, 5vw, 4rem) clamp(3rem, 5vw, 5rem);
}

.hero-story {
  justify-self: center;
  max-width: 54rem;
  text-align: center;
}

.back-link {
  align-items: center;
  color: var(--color-text-secondary);
  display: inline-flex;
  font-size: 0.86rem;
  gap: 0.35rem;
  margin-bottom: 1.3rem;
}

.project-label {
  color: var(--color-text-secondary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 0.75rem;
}

.hero-story h1 {
  font-size: clamp(3.2rem, 5.4vw, 5rem);
  line-height: 0.96;
  margin: 0 auto;
  max-width: 16ch;
  text-wrap: balance;
}

.hero-copy {
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  margin: 1.25rem auto 0;
  max-width: 36rem;
}

.disclaimer {
  background: #ffffff;
  border: 1px solid var(--color-border-strong);
  border-radius: 8px;
  color: var(--color-text-secondary);
  font-size: 0.84rem;
  line-height: 1.45;
  margin: 1.35rem auto 0;
  max-width: 28rem;
  padding: 0.75rem 0.85rem;
}

.feature-brief {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1rem auto 0;
  max-width: 38rem;
  text-align: left;
}

.feature-brief article {
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.85rem;
}

.feature-brief span,
.feature-brief strong,
.feature-brief p {
  display: block;
}

.feature-brief span {
  color: var(--color-text-muted);
  font-size: 0.68rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.feature-brief strong {
  color: var(--color-text);
  font-size: 0.9rem;
}

.feature-brief p {
  color: var(--color-text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
  margin: 0.35rem 0 0;
}

.prototype-stage {
  align-items: center;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
}

.prototype-device {
  display: grid;
  gap: clamp(1rem, 2.4vw, 2rem);
  grid-template-areas: "annotations phone notes";
  grid-template-columns: minmax(11rem, 1fr) minmax(21rem, 24rem) minmax(11rem, 1fr);
  justify-self: center;
  min-height: 46rem;
  position: relative;
  width: min(100%, 70rem);
}

.phone-frame {
  background: #111111;
  border-radius: 34px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
  grid-area: phone;
  justify-self: center;
  padding: 0.65rem;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  width: min(100%, 24rem);
}

.annotation-layer {
  align-content: start;
  display: grid;
  gap: 0.8rem;
  grid-area: annotations;
  inset: auto;
  padding-top: 1rem;
  pointer-events: none;
  position: static;
  z-index: 1;
}

.annotation-note {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.12);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(17, 17, 17, 0.08);
  color: #17201e;
  max-width: none;
  padding: 0.72rem 0.78rem;
  position: static;
  z-index: 3;
}

.annotation-note::after {
  background: rgba(17, 17, 17, 0.24);
  content: "";
  height: 1px;
  position: absolute;
  top: 50%;
  transform-origin: center;
}

.annotation-note::before,
.annotation-note::after {
  display: none;
}

.annotation-note::before {
  background: #111111;
  border: 2px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(17, 17, 17, 0.18);
  content: "";
  height: 0.42rem;
  position: absolute;
  top: calc(50% - 0.21rem);
  width: 0.42rem;
}

.annotation-note span,
.annotation-note strong,
.annotation-note p {
  display: block;
}

.annotation-note span {
  color: var(--color-text-muted);
  font-size: 0.64rem;
  font-weight: 800;
  margin-bottom: 0.26rem;
}

.annotation-note strong {
  font-size: 0.83rem;
  line-height: 1.22;
}

.annotation-note p {
  color: #53605d;
  font-size: 0.68rem;
  line-height: 1.42;
  margin: 0.32rem 0 0;
}

.note-left {
  left: 0;
}

.note-left::after {
  left: 100%;
  width: 3rem;
}

.note-left::before {
  left: calc(100% + 3rem);
}

.note-right {
  right: 0;
}

.note-right::after {
  right: 100%;
  width: 3rem;
}

.note-right::before {
  right: calc(100% + 3rem);
}

.note-existing {
  top: 4.4rem;
}

.note-sort {
  top: 13rem;
}

.note-price {
  top: 19.4rem;
}

.note-trigger {
  top: 29.8rem;
}

.note-drawer {
  top: 14.2rem;
}

.note-buy {
  bottom: 7.6rem;
}

.note-purchase {
  top: 19rem;
}

.phone-status {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-size: 0.72rem;
  justify-content: space-between;
  padding: 0.25rem 0.8rem 0.55rem;
}

.app-screen {
  background: #f5f7f6;
  border-radius: 26px;
  color: #182220;
  font-family: Inter, Arial, Helvetica, sans-serif;
  height: 42.5rem;
  overflow: hidden;
  position: relative;
}

.market-header {
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid var(--vinted-line);
  display: flex;
  gap: 0.55rem;
  padding: 0.82rem 0.75rem 0.62rem;
  position: relative;
}

.search-bar {
  align-items: center;
  background: #eef3f2;
  border: 1px solid #d5dddb;
  border-radius: 12px;
  color: #69706f;
  display: flex;
  flex: 1;
  font-size: 0.86rem;
  gap: 0.45rem;
  min-width: 0;
  padding: 0.58rem 0.62rem;
}

.search-bar span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.camera-icon {
  color: var(--vinted-teal);
  flex: 0 0 auto;
  margin-left: auto;
}

.market-header button,
.sort-segment button,
.delivery-filter button,
.back-to-results,
.heart-button,
.bundle-module button,
.drawer-top button,
.recommendation-list button,
.bottom-nav button {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
}

.market-header button {
  align-items: center;
  border: 1px solid #d8e0de;
  border-radius: 50%;
  display: inline-flex;
  height: 2.25rem;
  justify-content: center;
  width: 2.25rem;
}

.control-panel {
  background: #f8fbfa;
  border-bottom: 1px solid var(--vinted-line);
  display: grid;
  gap: 0.42rem;
  padding: 0.56rem 0.75rem 0.6rem;
}

.control-group {
  align-items: center;
  display: grid;
  gap: 0.48rem;
  grid-template-columns: 3.2rem minmax(0, 1fr);
}

.control-label {
  align-self: center;
  color: #5f6d6a;
  font-size: 0.64rem;
  font-weight: 800;
  line-height: 1;
}

.sort-segment,
.delivery-filter {
  background: #d8e6e3;
  border: 1px solid #d8e6e3;
  border-radius: 10px;
  display: grid;
  gap: 1px;
  min-width: 0;
  overflow: hidden;
  padding: 0;
}

.sort-segment {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.delivery-filter {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.sort-segment button,
.delivery-filter button {
  background: #ffffff;
  color: #40504e;
  font-size: 0.66rem;
  font-weight: 650;
  min-height: 1.9rem;
  overflow: hidden;
  padding: 0.38rem 0.24rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sort-segment button:focus,
.delivery-filter button:focus {
  outline: 0;
}

.sort-segment button:focus-visible,
.delivery-filter button:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(0, 119, 130, 0.34);
}

.sort-segment button.active,
.delivery-filter button.active {
  background: var(--vinted-mint);
  color: var(--vinted-teal-dark);
}

.results-view {
  height: calc(100% - 10.32rem);
  overflow-y: auto;
  padding: 0.68rem 0.75rem 5.45rem;
}

.detail-view {
  height: calc(100% - 4.7rem);
  overflow-y: auto;
  padding: 0.62rem 0.75rem 6.2rem;
}

.results-summary {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.55rem;
}

.results-summary strong {
  font-size: 0.82rem;
}

.results-summary span {
  color: #65716f;
  font-size: 0.68rem;
}

.listing-grid {
  display: grid;
  column-gap: 0.65rem;
  row-gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.listing-card {
  background: transparent;
  border: 0;
  min-width: 0;
}

.listing-card.selected {
  outline: 2px solid rgba(0, 119, 130, 0.28);
  outline-offset: 3px;
}

.listing-card button {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: block;
  font: inherit;
  min-width: 0;
  padding: 0;
  text-align: left;
  width: 100%;
}

.listing-photo,
.detail-photo,
.bundle-thumb {
  background-color: #f3f3f3;
  display: block;
  overflow: hidden;
  position: relative;
}

.listing-photo img,
.detail-photo img,
.bundle-thumb img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(var(--image-scale, 1));
  width: 100%;
}

.listing-photo {
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  width: 100%;
}

.heart-badge {
  align-items: center;
  background: rgba(20, 28, 27, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  bottom: 0.45rem;
  color: #edf5f3;
  display: inline-flex;
  gap: 0.22rem;
  height: 1.85rem;
  justify-content: center;
  z-index: 1;
  position: absolute;
  right: 0.45rem;
  width: auto;
  min-width: 2.8rem;
  padding: 0 0.48rem;
}

.heart-badge span {
  color: #edf5f3;
  display: inline;
  font-size: 0.72rem;
  font-weight: 700;
  margin: 0;
}

.listing-meta {
  display: block;
  padding: 0.42rem 0 0;
}

.listing-meta strong,
.listing-meta span,
.listing-meta b {
  display: block;
}

.listing-meta strong {
  color: #293332;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.22;
  min-height: 0;
}

.listing-meta span {
  color: #6c7473;
  font-size: 0.69rem;
  line-height: 1.25;
  margin-top: 0.16rem;
}

.item-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.detail-line {
  color: #727b79 !important;
}

.price-comparison {
  background: #ffffff;
  border: 1px solid #dce8e5;
  border-radius: 8px;
  display: grid !important;
  gap: 0;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 0.48rem !important;
  overflow: hidden;
}

.price-comparison > span {
  border-right: 1px solid #edf2f1;
  margin: 0 !important;
  min-width: 0;
  padding: 0.31rem 0.22rem;
}

.price-comparison > span:last-child {
  border-right: 0;
}

.price-comparison small,
.price-comparison b {
  display: block;
}

.price-comparison small {
  align-items: center;
  color: #7a8583;
  font-size: 0.5rem;
  font-weight: 700;
  gap: 0.08rem;
  line-height: 1.15;
  margin-bottom: 0.12rem;
  min-width: 0;
}

.price-comparison b {
  color: #293332;
  font-size: 0.67rem;
  font-weight: 700;
  line-height: 1.15;
  white-space: nowrap;
}

.price-comparison .fee-price small {
  color: var(--vinted-teal-dark);
  display: inline-flex;
}

.price-comparison .fee-price svg {
  flex: 0 0 auto;
}

.price-comparison .full-total {
  background: #eefaf7;
}

.price-comparison .full-total b {
  color: var(--vinted-teal-dark);
}

.delivery-line {
  color: #7c8583 !important;
  font-size: 0.62rem !important;
  margin-top: 0.22rem !important;
}

.back-to-results {
  align-items: center;
  color: var(--vinted-teal-dark);
  display: inline-flex;
  font-size: 0.74rem;
  gap: 0.3rem;
  margin-bottom: 0.48rem;
}

.detail-photo {
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  width: 100%;
}

.detail-photo span {
  background: rgba(255, 255, 255, 0.84);
  border-radius: 999px;
  color: #263532;
  font-size: 0.68rem;
  font-weight: 800;
  left: 0.8rem;
  padding: 0.34rem 0.55rem;
  position: absolute;
  top: 0.8rem;
  z-index: 1;
}

.detail-content {
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.62rem 0 0.52rem;
}

.detail-content h2 {
  font-size: 1.1rem;
  line-height: 1.2;
  margin: 0;
}

.detail-content p {
  color: #65716f;
  font-size: 0.73rem;
  line-height: 1.45;
  margin: 0.22rem 0 0;
}

.heart-button {
  align-items: center;
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 50%;
  color: var(--vinted-teal);
  display: inline-flex;
  flex: 0 0 auto;
  height: 2.12rem;
  justify-content: center;
  width: 2.12rem;
}

.full-total-callout {
  align-items: center;
  background: #eefaf7;
  border: 1px solid #bde4dd;
  border-radius: 10px;
  display: grid;
  gap: 0.12rem 0.55rem;
  grid-template-columns: minmax(0, 1fr) auto;
  margin-bottom: 0.5rem;
  padding: 0.58rem 0.68rem;
}

.full-total-callout span,
.full-total-callout small {
  color: #536d68;
  font-size: 0.68rem;
  line-height: 1.25;
}

.full-total-callout strong {
  color: var(--vinted-teal-dark);
  font-size: 1.02rem;
  grid-row: span 2;
  line-height: 1.1;
}

.full-total-callout small {
  display: block;
}

.price-breakdown {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 10px;
  margin: 0;
  padding: 0.58rem 0.68rem 0.55rem;
  position: relative;
}

.price-breakdown div {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.24rem 0;
}

.price-breakdown-total {
  border-top: 1px solid #e7eeee;
  color: var(--vinted-teal-dark);
  font-weight: 800;
  margin-top: 0.16rem;
  padding-top: 0.42rem;
}

.price-breakdown dt,
.price-breakdown dd {
  font-size: 0.78rem;
  margin: 0;
}

.impact-card,
.bundle-module {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 10px;
  display: flex;
  gap: 0.7rem;
  margin-top: 0.62rem;
  padding: 0.68rem;
}

.impact-icon {
  align-items: center;
  background: var(--vinted-mint);
  border-radius: 8px;
  color: var(--vinted-teal-dark);
  display: inline-flex;
  flex: 0 0 auto;
  height: 2.2rem;
  justify-content: center;
  width: 2.2rem;
}

.impact-card strong,
.impact-card span,
.bundle-module p,
.bundle-module h3,
.bundle-module span {
  display: block;
}

.impact-card strong {
  font-size: 0.78rem;
}

.impact-card span,
.bundle-module span {
  color: #65716f;
  font-size: 0.64rem;
  line-height: 1.35;
  margin-top: 0.16rem;
}

.bundle-module {
  align-items: center;
  justify-content: space-between;
  padding-top: 0.68rem;
  position: relative;
}

.bundle-module p {
  color: var(--vinted-teal-dark);
  font-size: 0.63rem;
  font-weight: 800;
  margin: 0 0 0.18rem;
}

.bundle-module h3 {
  font-size: 0.82rem;
  line-height: 1.25;
  margin: 0;
  max-width: 10.8rem;
}

.bundle-module button {
  align-items: center;
  background: var(--vinted-teal);
  border-radius: 8px;
  color: #ffffff;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 0.68rem;
  gap: 0.35rem;
  padding: 0.52rem 0.6rem;
}

.bundle-drawer {
  background: #ffffff;
  border-top: 1px solid var(--vinted-line);
  border-radius: 22px 22px 0 0;
  bottom: 4rem;
  box-shadow: 0 -16px 36px rgba(0, 49, 46, 0.16);
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: 78%;
  overflow: hidden;
  padding: 0.85rem;
  position: absolute;
  right: 0;
  z-index: 5;
}

.drawer-top {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
}

.drawer-top p {
  color: var(--vinted-teal-dark);
  font-size: 0.64rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
}

.drawer-top h2 {
  font-size: 1rem;
  margin: 0;
}

.drawer-context {
  color: #65716f;
  display: block;
  font-size: 0.62rem;
  line-height: 1.35;
  margin-top: 0.22rem;
  max-width: 14.5rem;
}

.drawer-top button {
  align-items: center;
  border: 1px solid var(--vinted-line);
  border-radius: 50%;
  display: inline-flex;
  height: 1.85rem;
  justify-content: center;
  width: 1.85rem;
}

.recommendation-list {
  display: grid;
  gap: 0.46rem;
  margin-top: 0.68rem;
  max-height: min(12.8rem, 30vh);
  overflow-y: auto;
  padding-right: 0.12rem;
}

.recommendation-list article {
  align-items: center;
  border: 1px solid #e2e9e7;
  border-radius: 10px;
  display: grid;
  gap: 0.48rem;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  padding: 0.42rem;
}

.recommendation-list article.selected {
  background: #f1faf8;
  border-color: #9fd8d0;
}

.bundle-thumb {
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  height: 3rem;
}

.recommendation-list strong,
.recommendation-list span,
.recommendation-list small {
  display: block;
}

.recommendation-list strong {
  font-size: 0.7rem;
  line-height: 1.2;
}

.recommendation-list span,
.recommendation-list small {
  color: #667471;
  font-size: 0.58rem;
  line-height: 1.25;
  margin-top: 0.14rem;
}

.recommendation-list button {
  background: #edf8f5;
  border: 1px solid #b8dfd8;
  border-radius: 999px;
  color: var(--vinted-teal-dark);
  font-size: 0.62rem;
  font-weight: 800;
  padding: 0.34rem 0.48rem;
}

.recommendation-list button.active {
  background: var(--vinted-teal);
  border-color: var(--vinted-teal);
  color: #ffffff;
}

.bundle-summary {
  background: #f4faf8;
  border: 1px solid #d7ebe7;
  border-radius: 12px;
  display: grid;
  gap: 0.46rem;
  margin-top: 0.56rem;
  padding: 0.58rem 0.64rem;
}

.bundle-summary span {
  color: #667471;
  font-size: 0.62rem;
}

.bundle-summary strong {
  color: #172523;
  font-size: 0.72rem;
}

.bundle-summary-copy span,
.bundle-summary-copy strong {
  display: block;
}

.bundle-summary-copy strong {
  color: var(--vinted-teal-dark);
  font-size: 0.9rem;
  line-height: 1.25;
  margin-top: 0.16rem;
}

.bundle-summary-copy strong:not(:only-child) {
  text-wrap: pretty;
}

.bundle-summary-row {
  align-items: center;
  border-top: 1px solid #cfe7e2;
  display: flex;
  justify-content: space-between;
  padding-top: 0.44rem;
}

.fake-buy-button {
  align-items: center;
  background: var(--vinted-teal);
  border: 0;
  border-radius: 9px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: 0.74rem;
  font-weight: 800;
  gap: 0.38rem;
  justify-content: center;
  margin-top: 0.56rem;
  padding: 0.68rem 0.82rem;
  width: 100%;
}

.fake-buy-button:disabled {
  background: #d7e3e0;
  color: #5d6d69;
  cursor: not-allowed;
}

.purchase-complete {
  align-items: center;
  background: rgba(246, 250, 248, 0.96);
  color: #172523;
  display: flex;
  flex-direction: column;
  inset: 0;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  text-align: center;
  z-index: 8;
}

.purchase-complete svg {
  color: var(--vinted-teal);
  margin-bottom: 0.8rem;
}

.purchase-complete p {
  color: var(--vinted-teal-dark);
  font-size: 0.7rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
}

.purchase-complete h2 {
  font-size: 1.35rem;
  line-height: 1.14;
  margin: 0;
  max-width: 16rem;
}

.purchase-complete span {
  color: #53605d;
  display: block;
  font-size: 0.78rem;
  line-height: 1.45;
  margin-top: 0.55rem;
  max-width: 17rem;
}

.purchase-complete button {
  background: #ffffff;
  border: 1px solid #b8d8d3;
  border-radius: 8px;
  color: var(--vinted-teal-dark);
  cursor: pointer;
  font: inherit;
  font-size: 0.76rem;
  font-weight: 800;
  margin-top: 1rem;
  padding: 0.62rem 0.82rem;
}

.bottom-nav {
  align-items: center;
  background: #ffffff;
  border-top: 1px solid var(--vinted-line);
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  left: 0;
  padding: 0.46rem 0.2rem 0.55rem;
  position: absolute;
  right: 0;
  z-index: 6;
}

.bottom-nav button {
  align-items: center;
  color: #687471;
  display: flex;
  flex-direction: column;
  font-size: 0.66rem;
  font-weight: 600;
  gap: 0.18rem;
  position: relative;
}

.bottom-nav button.active {
  color: var(--vinted-teal);
}

.bottom-nav .sell-button {
  color: var(--vinted-teal-dark);
  font-weight: 800;
}

.bottom-nav .sell-button svg {
  border: 2px solid currentColor;
  border-radius: 50%;
  padding: 0.08rem;
}

.inbox-button i {
  background: #d85765;
  border-radius: 50%;
  height: 0.58rem;
  position: absolute;
  right: 1.15rem;
  top: -0.06rem;
  width: 0.58rem;
}

.prototype-notes {
  align-self: start;
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  grid-area: notes;
  justify-self: stretch;
  margin-top: 1rem;
  padding: 1rem;
}

.prototype-notes h2 {
  font-size: 1.35rem;
  line-height: 1.15;
  margin: 0;
}

.prototype-notes p:not(.project-label) {
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0.7rem 0 0;
}

.story-section {
  margin: 0 auto;
  max-width: 1120px;
  padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 4rem);
}

.story-section {
  align-items: start;
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);
  grid-template-columns: minmax(0, 0.78fr) minmax(20rem, 1fr);
}

.story-section h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.04;
  margin: 0;
  text-wrap: balance;
}

.story-section > p {
  color: #40504e;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.65;
  margin: 2.1rem 0 0;
}

.problem-section {
  border-top: 1px solid var(--color-border-strong);
}

.drawer-enter-active,
.drawer-leave-active,
.purchase-enter-active,
.purchase-leave-active {
  transition: transform 220ms var(--ease-out), opacity 220ms var(--ease-out);
}

.drawer-enter-from,
.drawer-leave-to,
.purchase-enter-from,
.purchase-leave-to {
  opacity: 0;
  transform: translateY(24px);
}

@media (max-width: 1120px) {
  .prototype-device {
    grid-template-areas:
      "phone"
      "annotations"
      "notes";
    grid-template-columns: 1fr;
    width: min(100%, 54rem);
  }

  .phone-frame {
    width: min(100%, 24rem);
  }

  .prototype-notes {
    justify-self: center;
    max-width: 24rem;
  }
}

@media (max-width: 760px) {
  .vinted-hero {
    padding-top: 3rem;
  }

  .hero-story h1 {
    font-size: clamp(3rem, 14vw, 4.6rem);
  }

  .feature-brief {
    grid-template-columns: 1fr;
  }

  .phone-frame {
    border-radius: 28px;
  }

  .prototype-device {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    min-height: 0;
  }

  .annotation-layer {
    display: grid;
    gap: 0.6rem;
    order: 2;
    position: static;
  }

  .annotation-note {
    max-width: none;
    position: static;
  }

  .annotation-note::before,
  .annotation-note::after {
    display: none;
  }

  .phone-frame {
    order: 1;
  }

  .prototype-notes {
    order: 3;
  }

  .app-screen {
    height: 40rem;
  }

  .story-section {
    grid-template-columns: 1fr;
  }

  .story-section > p {
    margin-top: 0;
  }

}

@media (max-width: 420px) {
  .vinted-hero {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .phone-frame {
    padding: 0.45rem;
  }

  .phone-status {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }

  .listing-meta {
    padding: 0.45rem;
  }

  .listing-meta strong {
    font-size: 0.72rem;
  }

  .bundle-module {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active,
  .drawer-leave-active,
  .purchase-enter-active,
  .purchase-leave-active {
    transition-duration: 1ms;
  }
}
</style>
