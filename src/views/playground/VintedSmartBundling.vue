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
          A marketplace interaction that helps buyers see the real cost of a
          second-hand purchase: item price, delivery, distance, and bundle
          savings in one decision.
        </p>
        <p class="disclaimer">
          Independent speculative prototype. Not affiliated with Vinted.
        </p>
      </div>

      <section class="prototype-stage" aria-label="Interactive Vinted-inspired prototype">
        <div class="phone-frame">
          <div class="phone-status">
            <span>9:41</span>
            <span>Local prototype</span>
          </div>

          <div class="app-screen">
            <header class="market-header">
              <div class="search-bar">
                <Search :size="16" />
                <span>yellow cotton t-shirt</span>
              </div>
              <button type="button" aria-label="Open filters">
                <SlidersHorizontal :size="18" />
              </button>
            </header>

            <nav class="filter-row" aria-label="Listing controls">
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

            <div class="chip-scroll" aria-label="Delivery filters">
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

            <div class="distance-control">
              <label for="distance-filter">Distance</label>
              <select id="distance-filter" v-model="distanceFilter">
                <option v-for="option in distanceOptions" :key="option.id" :value="option.id">
                  {{ option.label }}
                </option>
              </select>
            </div>

            <section v-if="screen === 'results'" class="results-view" aria-label="Search results">
              <div class="results-summary">
                <strong>{{ filteredListings.length }} results</strong>
                <span>{{ sortMode === "total" ? "Sorted by real cost" : "Sorted by item price" }}</span>
              </div>

              <div class="listing-grid">
                <article
                  v-for="listing in filteredListings"
                  :key="listing.id"
                  class="listing-card"
                  :class="{ selected: selectedListingId === listing.id }"
                >
                  <button type="button" @click="openListing(listing.id)">
                    <span class="listing-photo" :class="listing.photoClass">
                      <span v-if="listing.favourite" class="heart-badge"><Heart :size="12" fill="currentColor" /></span>
                    </span>
                    <span class="listing-meta">
                      <strong>{{ listing.title }}</strong>
                      <span>{{ listing.size }} · {{ listing.condition }}</span>
                      <span class="cost-row">
                        <b>{{ money(listing.itemPrice) }}</b>
                        <small>{{ money(listing.shipping) }} shipping</small>
                      </span>
                      <span class="total-pill">Total {{ money(totalCost(listing)) }}</span>
                      <span class="location-line">
                        <MapPin :size="11" />
                        {{ listing.distanceLabel }} · {{ listing.area }}
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

              <div class="detail-photo" :class="selectedListing.photoClass">
                <span>{{ selectedListing.brand }}</span>
              </div>

              <div class="detail-content">
                <div>
                  <h2>{{ selectedListing.title }}</h2>
                  <p>{{ selectedListing.size }} · {{ selectedListing.condition }} · {{ selectedListing.area }}</p>
                </div>
                <button type="button" class="heart-button" :aria-label="selectedListing.favourite ? 'Saved item' : 'Save item'">
                  <Heart :size="17" :fill="selectedListing.favourite ? 'currentColor' : 'none'" />
                </button>
              </div>

              <dl class="price-breakdown">
                <div>
                  <dt>Item</dt>
                  <dd>{{ money(selectedListing.itemPrice) }}</dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>{{ money(selectedListing.shipping) }}</dd>
                </div>
                <div>
                  <dt>Total</dt>
                  <dd>{{ money(totalCost(selectedListing)) }}</dd>
                </div>
              </dl>

              <article class="impact-card">
                <div class="impact-icon"><Leaf :size="17" /></div>
                <div>
                  <strong>Delivery impact</strong>
                  <span>{{ selectedListing.delivery }} · {{ selectedListing.distanceLabel }} · no exact seller location shown</span>
                </div>
              </article>

              <article class="bundle-module">
                <div>
                  <p>Make the delivery worth it</p>
                  <h3>You are already paying delivery from this seller.</h3>
                  <span>Add another item and pay shipping once.</span>
                </div>
                <button type="button" @click="bundleOpen = true">
                  View bundle
                  <PackagePlus :size="15" />
                </button>
              </article>
            </section>

            <transition name="drawer">
              <section v-if="bundleOpen" class="bundle-drawer" aria-label="Bundle recommendations">
                <div class="drawer-top">
                  <div>
                    <p>Smart bundle</p>
                    <h2>Same seller finds</h2>
                  </div>
                  <button type="button" aria-label="Close bundle drawer" @click="bundleOpen = false">
                    <X :size="17" />
                  </button>
                </div>

                <div class="recommendation-list">
                  <article v-for="item in bundleRecommendations" :key="item.id">
                    <span class="bundle-thumb" :class="item.photoClass"></span>
                    <div>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.reason }}</span>
                      <small>Score {{ item.score }} · {{ money(item.itemPrice) }}</small>
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
                  <div>
                    <span>Selected</span>
                    <strong>{{ 1 + selectedBundleItems.length }} items</strong>
                  </div>
                  <div>
                    <span>Shipping saved</span>
                    <strong>{{ money(shippingSaved) }}</strong>
                  </div>
                  <div>
                    <span>Bundle discount</span>
                    <strong>{{ money(bundleDiscount) }}</strong>
                  </div>
                  <div class="summary-total">
                    <span>Estimated savings</span>
                    <strong>{{ money(estimatedSavings) }}</strong>
                  </div>
                </div>
              </section>
            </transition>

            <nav class="bottom-nav" aria-label="Prototype mobile navigation">
              <button type="button"><Home :size="18" /><span>Home</span></button>
              <button type="button" class="active"><Search :size="18" /><span>Search</span></button>
              <button type="button" class="sell-button"><Plus :size="18" /><span>Sell</span></button>
              <button type="button"><MessageCircle :size="18" /><span>Inbox</span></button>
              <button type="button"><User :size="18" /><span>Profile</span></button>
            </nav>
          </div>
        </div>

        <aside class="prototype-notes">
          <p class="project-label">Live mock data</p>
          <h2>{{ noteTitle }}</h2>
          <p>{{ noteCopy }}</p>
        </aside>
      </section>
    </section>

    <section class="story-section problem-section">
      <div>
        <p class="project-label">Problem</p>
        <h2>The cheapest listing can be the expensive choice.</h2>
      </div>
      <p>
        Buyers often scan item price first, but delivery cost, delivery method,
        distance, and missed bundle opportunities decide what the purchase
        actually costs.
      </p>
    </section>

    <section class="insight-band">
      <article>
        <ShoppingBag :size="20" />
        <h3>Sort by total cost</h3>
        <p>Show the buyer the combined item and delivery price before they commit.</p>
      </article>
      <article>
        <MapPin :size="20" />
        <h3>Protect seller privacy</h3>
        <p>Use area labels and distance bands instead of exact streets or postcodes.</p>
      </article>
      <article>
        <PackagePlus :size="20" />
        <h3>Make bundles obvious</h3>
        <p>Surface relevant same-seller items when delivery is already being paid.</p>
      </article>
    </section>

    <section class="story-section">
      <div>
        <p class="project-label">Reflection</p>
        <h2>A prototype for marketplace judgment.</h2>
      </div>
      <p>
        This case study demonstrates product strategy, recommendation logic, and
        trust-aware UI through one contained prototype. It does not need a full
        shopping app to prove the interaction: the valuable moment is the decision
        before checkout.
      </p>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  ArrowLeft,
  Heart,
  Home,
  Leaf,
  MapPin,
  MessageCircle,
  PackagePlus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  User,
  X,
} from "lucide-vue-next";
import { useHead } from "@vueuse/head";
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
    photoClass: "photo-yellow",
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
    photoClass: "photo-sun",
  },
  {
    id: "yellow-c",
    title: "Lemon baby tee",
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
    photoClass: "photo-lemon",
  },
  {
    id: "yellow-d",
    title: "Vintage yellow top",
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
    photoClass: "photo-gold",
  },
];

const bundleItems = [
  {
    id: "jeans",
    title: "Straight leg jeans",
    itemPrice: 9,
    seller: "Nora",
    score: 90,
    reason: "Same seller · size match",
    photoClass: "photo-denim",
  },
  {
    id: "skirt",
    title: "Black midi skirt",
    itemPrice: 7.5,
    seller: "Nora",
    score: 82,
    reason: "Same seller · favourited",
    photoClass: "photo-black",
  },
  {
    id: "cardigan",
    title: "Mint cardigan",
    itemPrice: 8,
    seller: "Nora",
    score: 74,
    reason: "Same seller · style match",
    photoClass: "photo-mint",
  },
];

export default {
  name: "VintedSmartBundling",
  components: {
    AppFooter,
    AppNavbar,
    ArrowLeft,
    Heart,
    Home,
    Leaf,
    MapPin,
    MessageCircle,
    PackagePlus,
    Plus,
    Search,
    ShoppingBag,
    SlidersHorizontal,
    User,
    X,
  },
  setup() {
    useHead({
      title: "Vinted Smart Local Bundling - Eleni Chasioti",
      meta: [
        {
          name: "description",
          content:
            "Speculative Vinted-inspired prototype exploring total purchase cost, privacy-safe distance, and smart local bundling.",
        },
      ],
    });
  },
  data() {
    return {
      screen: "results",
      sortMode: "total",
      deliveryFilter: "home",
      distanceFilter: "under-5",
      selectedListingId: "yellow-b",
      bundleOpen: false,
      selectedBundleIds: ["jeans", "skirt"],
      sortOptions: [
        { id: "item", label: "Item price" },
        { id: "total", label: "Total cost" },
      ],
      deliveryOptions: [
        { id: "any", label: "Either" },
        { id: "home", label: "Home delivery" },
        { id: "pickup", label: "Pickup point" },
      ],
      distanceOptions: [
        { id: "any", label: "Any distance" },
        { id: "under-2", label: "Under 2 miles" },
        { id: "under-5", label: "Under 5 miles" },
        { id: "under-10", label: "Under 10 miles" },
        { id: "london", label: "Greater London" },
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
          (this.deliveryFilter === "home" && listing.delivery === "Home delivery") ||
          (this.deliveryFilter === "pickup" && listing.delivery === "Pickup point");

        const distanceMatch =
          this.distanceFilter === "any" ||
          this.distanceFilter === "london" ||
          (this.distanceFilter === "under-2" && listing.distanceMiles <= 2) ||
          (this.distanceFilter === "under-5" && listing.distanceMiles <= 5) ||
          (this.distanceFilter === "under-10" && listing.distanceMiles <= 10);

        return deliveryMatch && distanceMatch;
      });

      return filtered.sort((a, b) => {
        if (this.sortMode === "item") return a.itemPrice - b.itemPrice;
        return this.totalCost(a) - this.totalCost(b);
      });
    },
    selectedListing() {
      return this.listings.find((listing) => listing.id === this.selectedListingId) || this.listings[0];
    },
    bundleRecommendations() {
      return this.bundleItems
        .filter((item) => item.seller === this.selectedListing.seller)
        .sort((a, b) => b.score - a.score);
    },
    selectedBundleItems() {
      return this.bundleRecommendations.filter((item) => this.selectedBundleIds.includes(item.id));
    },
    shippingSaved() {
      return this.selectedBundleItems.length > 0 ? this.selectedListing.shipping * this.selectedBundleItems.length : 0;
    },
    bundleDiscount() {
      return this.selectedBundleItems.length >= 2 ? 1.2 : 0;
    },
    estimatedSavings() {
      return this.shippingSaved + this.bundleDiscount;
    },
    noteTitle() {
      if (this.bundleOpen) return "Bundle math updates as you add items.";
      if (this.screen === "detail") return "The item detail creates the bundling moment.";
      return this.sortMode === "total" ? "Total cost beats item price." : "Item-price sorting hides delivery friction.";
    },
    noteCopy() {
      if (this.bundleOpen) {
        return "Recommendations are mocked, but scored like a real product decision: same seller first, then favourites, size, style, and bundle discount.";
      }
      if (this.screen === "detail") {
        return "The buyer sees delivery impact and a same-seller opportunity before checkout, while the seller location stays approximate.";
      }
      return "Try switching to item-price sorting. The £4 shirt rises, even though it costs more after shipping.";
    },
  },
  methods: {
    money(value) {
      return `£${value.toFixed(2)}`;
    },
    totalCost(listing) {
      return listing.itemPrice + listing.shipping;
    },
    openListing(id) {
      this.selectedListingId = id;
      this.screen = "detail";
      this.bundleOpen = false;
    },
    toggleBundleItem(id) {
      if (this.selectedBundleIds.includes(id)) {
        this.selectedBundleIds = this.selectedBundleIds.filter((itemId) => itemId !== id);
        return;
      }
      this.selectedBundleIds = [...this.selectedBundleIds, id];
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
  background: #f7faf9;
  color: #12211f;
  min-height: 100vh;
}

.vinted-hero {
  align-items: center;
  display: grid;
  gap: clamp(2rem, 5vw, 5rem);
  grid-template-columns: minmax(0, 0.82fr) minmax(24rem, 1.18fr);
  margin: 0 auto;
  max-width: 1320px;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 5vw, 4rem);
}

.back-link {
  align-items: center;
  color: var(--vinted-teal-dark);
  display: inline-flex;
  font-size: 0.86rem;
  gap: 0.35rem;
  margin-bottom: 1.3rem;
}

.project-label {
  color: var(--vinted-teal-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 0.75rem;
}

.hero-story h1 {
  font-size: clamp(3.2rem, 6vw, 5.7rem);
  line-height: 0.96;
  margin: 0;
  max-width: 10ch;
  text-wrap: balance;
}

.hero-copy {
  color: #425250;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  margin: 1.25rem 0 0;
  max-width: 36rem;
}

.disclaimer {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 8px;
  color: #52615f;
  font-size: 0.84rem;
  line-height: 1.45;
  margin-top: 1.35rem;
  max-width: 28rem;
  padding: 0.75rem 0.85rem;
}

.prototype-stage {
  align-items: center;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: minmax(18rem, 24rem) minmax(12rem, 1fr);
}

.phone-frame {
  background: #10211f;
  border-radius: 34px;
  box-shadow: 0 24px 60px rgba(0, 74, 69, 0.22);
  padding: 0.65rem;
}

.phone-status {
  align-items: center;
  color: #d8fffa;
  display: flex;
  font-size: 0.72rem;
  justify-content: space-between;
  padding: 0.25rem 0.8rem 0.55rem;
}

.app-screen {
  background: #f5f7f6;
  border-radius: 26px;
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
  padding: 0.85rem 0.75rem 0.65rem;
}

.search-bar {
  align-items: center;
  background: #f3f6f5;
  border: 1px solid #d8e0de;
  border-radius: 999px;
  color: #576562;
  display: flex;
  flex: 1;
  font-size: 0.83rem;
  gap: 0.45rem;
  min-width: 0;
  padding: 0.58rem 0.72rem;
}

.search-bar span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.market-header button,
.filter-row button,
.chip-scroll button,
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

.filter-row,
.chip-scroll {
  background: #ffffff;
  display: flex;
  gap: 0.45rem;
  overflow-x: auto;
  padding: 0.45rem 0.75rem;
}

.filter-row button,
.chip-scroll button {
  border: 1px solid #d5e0de;
  border-radius: 999px;
  color: #40504e;
  flex: 0 0 auto;
  font-size: 0.72rem;
  padding: 0.42rem 0.62rem;
}

.filter-row button.active,
.chip-scroll button.active {
  background: var(--vinted-mint);
  border-color: #9bd9d0;
  color: var(--vinted-teal-dark);
}

.distance-control {
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid var(--vinted-line);
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0 0.75rem 0.6rem;
}

.distance-control label {
  color: #61706e;
  font-size: 0.72rem;
}

.distance-control select {
  background: #f3f6f5;
  border: 1px solid #d8e0de;
  border-radius: 999px;
  color: #243432;
  font: inherit;
  font-size: 0.72rem;
  padding: 0.36rem 0.5rem;
}

.results-view,
.detail-view {
  height: calc(100% - 12.95rem);
  overflow-y: auto;
  padding: 0.75rem 0.75rem 5.2rem;
}

.results-summary {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.65rem;
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
  gap: 0.65rem;
  grid-template-columns: 1fr 1fr;
}

.listing-card {
  background: #ffffff;
  border: 1px solid #e1e7e5;
  border-radius: 11px;
  overflow: hidden;
}

.listing-card.selected {
  border-color: var(--vinted-teal);
}

.listing-card button {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: block;
  font: inherit;
  padding: 0;
  text-align: left;
  width: 100%;
}

.listing-photo,
.detail-photo,
.bundle-thumb {
  background: #f1d23f;
  display: block;
  position: relative;
}

.listing-photo {
  height: 8rem;
}

.heart-badge {
  align-items: center;
  background: #ffffff;
  border-radius: 50%;
  color: var(--vinted-teal);
  display: inline-flex;
  height: 1.55rem;
  justify-content: center;
  position: absolute;
  right: 0.45rem;
  top: 0.45rem;
  width: 1.55rem;
}

.listing-meta {
  display: block;
  padding: 0.52rem;
}

.listing-meta strong,
.listing-meta span {
  display: block;
}

.listing-meta strong {
  color: #172523;
  font-size: 0.78rem;
  line-height: 1.25;
  min-height: 2rem;
}

.listing-meta span {
  color: #687472;
  font-size: 0.65rem;
  margin-top: 0.18rem;
}

.cost-row {
  align-items: baseline;
  display: flex !important;
  gap: 0.35rem;
  justify-content: space-between;
}

.cost-row b {
  color: #172523;
  font-size: 0.82rem;
}

.cost-row small {
  color: #697572;
  font-size: 0.56rem;
  text-align: right;
}

.total-pill {
  background: var(--vinted-mint);
  border-radius: 999px;
  color: var(--vinted-teal-dark) !important;
  font-weight: 800;
  margin-top: 0.38rem !important;
  padding: 0.28rem 0.42rem;
  width: max-content;
}

.location-line {
  align-items: center;
  display: flex !important;
  gap: 0.22rem;
}

.photo-yellow {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.35), transparent 42%),
    linear-gradient(145deg, #f4d642 0 58%, #e5b332 58%);
}

.photo-sun {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.42), transparent 44%),
    linear-gradient(145deg, #f7d953 0 50%, #008c84 50%);
}

.photo-lemon {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent 44%),
    linear-gradient(145deg, #f3d85a 0 54%, #b9dfd7 54%);
}

.photo-gold {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.35), transparent 44%),
    linear-gradient(145deg, #f0c84c 0 55%, #df8c76 55%);
}

.photo-denim {
  background: linear-gradient(145deg, #37688c 0 52%, #b7d9e4 52%);
}

.photo-black {
  background: linear-gradient(145deg, #1f2526 0 58%, #c8cec9 58%);
}

.photo-mint {
  background: linear-gradient(145deg, #a8ddd1 0 56%, #f1d64f 56%);
}

.back-to-results {
  align-items: center;
  color: var(--vinted-teal-dark);
  display: inline-flex;
  font-size: 0.78rem;
  gap: 0.3rem;
  margin-bottom: 0.65rem;
}

.detail-photo {
  border-radius: 12px;
  height: 15rem;
  overflow: hidden;
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
}

.detail-content {
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.85rem 0 0.65rem;
}

.detail-content h2 {
  font-size: 1.24rem;
  line-height: 1.2;
  margin: 0;
}

.detail-content p {
  color: #65716f;
  font-size: 0.8rem;
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
  height: 2.35rem;
  justify-content: center;
  width: 2.35rem;
}

.price-breakdown {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 10px;
  margin: 0;
  padding: 0.7rem;
}

.price-breakdown div {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.32rem 0;
}

.price-breakdown div:last-child {
  border-top: 1px solid #e7eeee;
  color: var(--vinted-teal-dark);
  font-weight: 800;
  margin-top: 0.25rem;
  padding-top: 0.55rem;
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
  margin-top: 0.75rem;
  padding: 0.78rem;
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
  font-size: 0.68rem;
  line-height: 1.45;
  margin-top: 0.16rem;
}

.bundle-module {
  align-items: center;
  justify-content: space-between;
}

.bundle-module p {
  color: var(--vinted-teal-dark);
  font-size: 0.68rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
}

.bundle-module h3 {
  font-size: 0.92rem;
  line-height: 1.25;
  margin: 0;
}

.bundle-module button {
  align-items: center;
  background: var(--vinted-teal);
  border-radius: 8px;
  color: #ffffff;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 0.72rem;
  gap: 0.35rem;
  padding: 0.58rem 0.68rem;
}

.bundle-drawer {
  background: #ffffff;
  border-top: 1px solid var(--vinted-line);
  border-radius: 22px 22px 0 0;
  bottom: 4.35rem;
  box-shadow: 0 -16px 36px rgba(0, 49, 46, 0.16);
  left: 0;
  max-height: 76%;
  overflow-y: auto;
  padding: 1rem;
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
  font-size: 0.68rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
}

.drawer-top h2 {
  font-size: 1.08rem;
  margin: 0;
}

.drawer-top button {
  align-items: center;
  border: 1px solid var(--vinted-line);
  border-radius: 50%;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  width: 2rem;
}

.recommendation-list {
  display: grid;
  gap: 0.65rem;
  margin-top: 0.85rem;
}

.recommendation-list article {
  align-items: center;
  border: 1px solid #e2e9e7;
  border-radius: 10px;
  display: grid;
  gap: 0.6rem;
  grid-template-columns: 3.4rem minmax(0, 1fr) auto;
  padding: 0.5rem;
}

.bundle-thumb {
  border-radius: 8px;
  height: 3.4rem;
}

.recommendation-list strong,
.recommendation-list span,
.recommendation-list small {
  display: block;
}

.recommendation-list strong {
  font-size: 0.76rem;
}

.recommendation-list span,
.recommendation-list small {
  color: #667471;
  font-size: 0.62rem;
  line-height: 1.35;
  margin-top: 0.14rem;
}

.recommendation-list button {
  background: #edf8f5;
  border: 1px solid #b8dfd8;
  border-radius: 999px;
  color: var(--vinted-teal-dark);
  font-size: 0.68rem;
  font-weight: 800;
  padding: 0.42rem 0.58rem;
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
  gap: 0.5rem;
  margin-top: 0.85rem;
  padding: 0.75rem;
}

.bundle-summary div {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.bundle-summary span {
  color: #667471;
  font-size: 0.68rem;
}

.bundle-summary strong {
  color: #172523;
  font-size: 0.78rem;
}

.summary-total {
  border-top: 1px solid #cfe7e2;
  padding-top: 0.55rem;
}

.summary-total strong {
  color: var(--vinted-teal-dark);
  font-size: 1rem;
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
  font-size: 0.58rem;
  gap: 0.16rem;
}

.bottom-nav button.active {
  color: var(--vinted-teal);
}

.bottom-nav .sell-button {
  color: var(--vinted-teal-dark);
  font-weight: 800;
}

.prototype-notes {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 12px;
  padding: 1rem;
}

.prototype-notes h2 {
  font-size: 1.35rem;
  line-height: 1.15;
  margin: 0;
}

.prototype-notes p:not(.project-label) {
  color: #52615f;
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0.7rem 0 0;
}

.story-section,
.insight-band {
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
  border-top: 1px solid var(--vinted-line);
}

.insight-band {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 0;
}

.insight-band article {
  background: #ffffff;
  border: 1px solid var(--vinted-line);
  border-radius: 12px;
  padding: 1rem;
}

.insight-band svg {
  color: var(--vinted-teal);
}

.insight-band h3 {
  font-size: 1.08rem;
  margin: 1.1rem 0 0.35rem;
}

.insight-band p {
  color: #52615f;
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 220ms var(--ease-out), opacity 220ms var(--ease-out);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(24px);
}

@media (max-width: 1120px) {
  .vinted-hero,
  .prototype-stage {
    grid-template-columns: 1fr;
  }

  .prototype-stage {
    justify-items: center;
  }

  .prototype-notes {
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

  .phone-frame {
    border-radius: 28px;
    max-width: 24rem;
    width: 100%;
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

  .insight-band {
    grid-template-columns: 1fr;
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

  .listing-photo {
    height: 7rem;
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
  .drawer-leave-active {
    transition-duration: 1ms;
  }
}
</style>
