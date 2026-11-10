<template>
  <div class="bundle-lab" data-testid="bundle-prototype">
    <aside class="lab-guide">
      <p class="lab-kicker">Interactive concept · illustrative data</p>
      <h3>One item you want.<br />A bundle you can judge.</h3>
      <p>
        Start with a £5 tee. Find something useful from the same seller, then
        decide whether the complete order works for you.
      </p>
      <label class="budget-label" for="bundle-budget">Your order budget</label>
      <select id="bundle-budget" v-model.number="budget">
        <option :value="1500">£15.00</option>
        <option :value="2500">£25.00</option>
        <option :value="3500">£35.00</option>
      </select>
      <div class="scenario-list" aria-label="Prototype scenarios">
        <button type="button" @click="scenario('light')">
          <span>01</span>
          <div>
            <strong>A useful extra</strong
            ><small>Add a light shirt. Delivery stays the same.</small>
          </div>
          <ArrowUpRight :size="18" />
        </button>
        <button type="button" @click="scenario('heavy')">
          <span>02</span>
          <div>
            <strong>The delivery trade-off</strong
            ><small>Add jeans. Watch the parcel cost change.</small>
          </div>
          <ArrowUpRight :size="18" />
        </button>
        <button type="button" @click="scenario('unavailable')">
          <span>03</span>
          <div>
            <strong>An unavailable option</strong
            ><small>Recover when pickup is not available.</small>
          </div>
          <ArrowUpRight :size="18" />
        </button>
      </div>
      <div class="walkthrough-controls">
        <button
          class="demo-toggle"
          type="button"
          @click="playing ? pauseDemo() : startDemo()"
          :aria-pressed="playing"
        >
          <Pause v-if="playing" :size="16" /><Play v-else :size="16" />{{
            playing ? "Pause walkthrough" : "Play guided walkthrough"
          }}
        </button>
        <button type="button" class="reset-demo" @click="reset">
          <RotateCcw :size="15" />Reset
        </button>
      </div>
      <p class="guide-note">
        A scripted product demonstration, not a recording of a participant test.
        No real order or payment.
      </p>
      <div class="design-caption" aria-live="polite">
        <span>{{ captions[step].label }}</span>
        <p>{{ captions[step].copy }}</p>
      </div>
    </aside>

    <div class="phone-stage">
      <div class="bundle-phone">
        <div class="phone-status" aria-hidden="true">
          <span>9:41</span><span>••• ▰</span>
        </div>
        <header class="phone-header">
          <span class="wordmark">Vinted</span><span>Feature concept</span>
        </header>
        <nav class="step-nav" aria-label="Prototype steps">
          <button
            v-for="(label, index) in ['Item', 'Build bundle', 'Review']"
            :key="label"
            type="button"
            :aria-current="step === index ? 'step' : undefined"
            @click="navigate(index)"
          >
            <span>{{ index + 1 }}</span
            >{{ label }}
          </button>
        </nav>
        <div
          class="phone-body"
          ref="phoneBody"
          :key="step"
          role="region"
          :aria-label="captions[step].label"
          tabindex="-1"
        >
          <template v-if="step === 0">
            <div class="seller-line">
              <span class="avatar">n</span>
              <div>
                <strong>nora.wardrobe</strong
                ><small>★★★★★ <span>(128)</span></small>
              </div>
              <span class="seller-tag">Same seller</span>
            </div>
            <div class="main-product">
              <img
                :src="teeImage"
                alt="Illustrative yellow cotton T-shirt"
              /><span class="image-count">1 / 3</span>
            </div>
            <div class="item-details">
              <p class="item-brand">Arket</p>
              <h4>Soft yellow cotton tee</h4>
              <p>M · Very good</p>
              <strong class="item-price">£5.00</strong>
            </div>
            <div class="estimate-panel">
              <div class="estimate-heading">
                <span>Estimated total</span
                ><strong>{{ money(single.total) }}</strong>
              </div>
              <p>Item + Vinted fee + selected delivery</p>
              <div class="compact-cost">
                <span>Item £5.00</span><span>Fee {{ money(single.fee) }}</span
                ><span>Delivery {{ money(single.shipping) }}</span>
              </div>
            </div>
            <div class="bundle-invitation">
              <Package :size="21" />
              <div>
                <strong>Looking for anything else?</strong>
                <p>
                  Browse this seller’s items by category and size. Check the
                  total before deciding.
                </p>
              </div>
            </div>
          </template>

          <template v-else-if="step === 1">
            <div class="wardrobe-heading">
              <h4>More from Nora</h4>
              <p>Choose only what you need.</p>
              <span>Seller’s offer: 10% off 2+ items</span>
            </div>
            <div class="filter-row">
              <label
                >Category<select v-model="category" @change="pauseDemo">
                  <option value="all">All categories</option>
                  <option value="Tops">Tops</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Outerwear">Outerwear</option>
                </select></label
              >
              <label
                >Label size<select v-model="size" @change="pauseDemo">
                  <option value="all">All sizes</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                  <option value="L">L</option>
                </select></label
              >
            </div>
            <p class="selection-hint">
              Filters change the view, not your selection.
            </p>
            <div class="wardrobe-grid" v-if="visibleItems.length">
              <article
                v-for="item in visibleItems"
                :key="item.id"
                class="wardrobe-item"
                :class="{ chosen: selected.includes(item.id) }"
              >
                <div class="wardrobe-photo">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    loading="lazy"
                  /><span v-if="item.favourite" class="favourite-label"
                    ><Heart :size="12" fill="currentColor" />Favourited</span
                  >
                </div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.size }} · {{ item.condition }}</p>
                <div class="item-action">
                  <b>{{ money(item.price) }}</b
                  ><button
                    type="button"
                    :aria-pressed="selected.includes(item.id)"
                    :aria-label="`${selected.includes(item.id) ? 'Remove' : 'Add'} ${item.title}`"
                    @click="toggle(item.id)"
                  >
                    <Check v-if="selected.includes(item.id)" :size="15" /><Plus
                      v-else
                      :size="15"
                    />{{ selected.includes(item.id) ? "Added" : "Add" }}
                  </button>
                </div>
              </article>
            </div>
            <div v-else class="empty-wardrobe">
              <Search :size="27" />
              <h4>No items match these filters.</h4>
              <p>Your selected items are still in the order.</p>
              <button
                type="button"
                @click="
                  category = 'all';
                  size = 'all';
                "
              >
                Clear filters
              </button>
            </div>
          </template>

          <template v-else>
            <div v-if="complete" class="demo-complete" role="status">
              <CheckCircle2 :size="28" />
              <div>
                <strong>Demo review complete</strong>
                <p>No order placed. No payment taken.</p>
              </div>
            </div>
            <div class="review-heading">
              <h4>
                {{
                  selected.length
                    ? "Your bundle, in full"
                    : "Your single item, in full"
                }}
              </h4>
              <p>From nora.wardrobe</p>
            </div>
            <div class="selected-items">
              <article v-for="item in orderItems" :key="item.id">
                <img :src="item.image" :alt="item.title" />
                <div>
                  <strong>{{ item.title }}</strong
                  ><small>{{ item.size }} · {{ money(item.price) }}</small>
                </div>
                <button
                  v-if="item.id !== 'tee'"
                  type="button"
                  :aria-label="`Remove ${item.title}`"
                  @click="toggle(item.id)"
                >
                  <X :size="17" /></button
                ><span v-else class="original-item">Original</span>
              </article>
            </div>
            <fieldset class="delivery-options">
              <legend>Delivery estimate</legend>
              <label
                v-for="option in deliveryOptions"
                :key="option.id"
                :class="{
                  'delivery-disabled': unavailable && option.id === 'pickup',
                }"
                ><input
                  type="radio"
                  name="vinted-delivery"
                  :value="option.id"
                  v-model="delivery"
                  :disabled="unavailable && option.id === 'pickup'"
                  @change="pauseDemo"
                /><span
                  >{{ option.label
                  }}<small>{{
                    unavailable && option.id === "pickup"
                      ? "Not available for this example"
                      : "Illustrative quote · not a live rate"
                  }}</small></span
                ><b v-if="!(unavailable && option.id === 'pickup')">{{
                  money(priceOrder(orderItems, option.id).shipping)
                }}</b></label
              >
            </fieldset>
            <p
              v-if="unavailable && delivery === 'pickup'"
              class="cost-warning"
              role="alert"
            >
              Pickup is unavailable. Choose home delivery to continue.
            </p>
            <dl class="receipt">
              <div>
                <dt>Items</dt>
                <dd>{{ money(quote.subtotal) }}</dd>
              </div>
              <div v-if="quote.discount">
                <dt>Seller’s bundle discount (10%)</dt>
                <dd>−{{ money(quote.discount) }}</dd>
              </div>
              <div>
                <dt>Illustrative Vinted fee</dt>
                <dd>{{ money(quote.fee) }}</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>
                  {{
                    quoteAvailable ? money(quote.shipping) : "Choose delivery"
                  }}
                </dd>
              </div>
              <div class="receipt-total">
                <dt>Estimated total</dt>
                <dd>
                  {{ quoteAvailable ? money(quote.total) : "Not available" }}
                </dd>
              </div>
            </dl>
            <div class="delta-panel" v-if="selected.length && quoteAvailable">
              <strong
                >{{ money(quote.total - single.total) }} more than the tee
                alone</strong
              >
              <p>
                Compared with {{ money(single.total) }} using the same delivery
                option. Adding items increases your spending.
              </p>
            </div>
            <p
              v-if="
                selected.length &&
                quoteAvailable &&
                quote.shipping > single.shipping
              "
              class="cost-warning"
            >
              <Info :size="16" /><span
                >Delivery increases by
                {{ money(quote.shipping - single.shipping) }} because this
                example crosses a parcel band.</span
              >
            </p>
            <button
              type="button"
              class="keep-single"
              v-if="selected.length"
              @click="keepSingle"
            >
              Keep just the tee instead
            </button>
            <details class="pricing-assumptions">
              <summary>How this example is calculated</summary>
              <p>
                Fictional items and parcel weights. 10% seller discount on 2+
                items; illustrative fee of 5% + £0.50 after discount. Delivery
                changes above 500g and 1,000g. Actual Vinted fees, availability
                and parcel rules vary.
              </p>
            </details>
          </template>
        </div>
        <footer class="phone-checkout">
          <div class="live-total" aria-live="polite" aria-atomic="true">
            <span>{{
              step === 0 ? "Tee alone · estimated" : "Order total · estimated"
            }}</span
            ><strong>{{
              quoteAvailable
                ? money(step === 0 ? single.total : quote.total)
                : "Choose delivery"
            }}</strong>
          </div>
          <p
            v-if="step > 0 && quoteAvailable"
            class="budget-feedback"
            :class="{ over: quote.total > budget }"
          >
            {{ quote.total > budget ? "Over budget by" : "Within budget by" }}
            {{ money(Math.abs(budget - quote.total)) }}
          </p>
          <button
            v-if="step === 0"
            class="phone-primary"
            type="button"
            @click="navigate(1)"
          >
            Explore this wardrobe <ArrowRight :size="17" />
          </button>
          <button
            v-else-if="step === 1"
            class="phone-primary"
            type="button"
            @click="navigate(2)"
          >
            Review {{ selected.length ? "bundle" : "single item" }}
            <ArrowRight :size="17" />
          </button>
          <button
            v-else
            class="phone-primary"
            type="button"
            :disabled="complete || (unavailable && delivery === 'pickup')"
            @click="completeReview"
          >
            {{ complete ? "Review complete" : "Finish demo review" }}
            <Check :size="17" />
          </button>
          <button
            v-if="step === 0"
            class="single-link"
            type="button"
            @click="navigate(2)"
          >
            Continue with just this item
          </button>
          <p class="quote-disclaimer">
            Estimate only · final quote required before payment
          </p>
        </footer>
      </div>
      <p class="phone-caption">
        Proposed experience · UK domestic example · no live Vinted connection
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from "vue";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Heart,
  Info,
  Package,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Search,
  X,
} from "lucide-vue-next";
import { money, priceOrder } from "@/data/vintedPricing.mjs";
import teeImage from "@/images/vinted/products/yellow-b.png";
import shirtImage from "@/images/vinted/bundles/blue-button-up.png";
import jeansImage from "@/images/vinted/bundles/light-jeans.png";
import cardiganImage from "@/images/vinted/bundles/cream-cardigan.png";
import stripedImage from "@/images/vinted/bundles/striped-top.png";

const tee = {
  id: "tee",
  seller: "nora",
  title: "Soft yellow cotton tee",
  price: 500,
  grams: 150,
  size: "M",
  image: teeImage,
};
const items = [
  {
    id: "shirt",
    seller: "nora",
    title: "Blue cotton shirt",
    price: 300,
    grams: 120,
    size: "M",
    category: "Tops",
    condition: "Very good",
    favourite: true,
    image: shirtImage,
  },
  {
    id: "jeans",
    seller: "nora",
    title: "Straight-leg jeans",
    price: 1300,
    grams: 600,
    size: "M",
    category: "Jeans",
    condition: "Very good",
    favourite: false,
    image: jeansImage,
  },
  {
    id: "cardigan",
    seller: "nora",
    title: "Cream cardigan",
    price: 800,
    grams: 900,
    size: "L",
    category: "Outerwear",
    condition: "Good",
    favourite: false,
    image: cardiganImage,
  },
  {
    id: "stripes",
    seller: "nora",
    title: "Striped cotton top",
    price: 400,
    grams: 180,
    size: "S",
    category: "Tops",
    condition: "Very good",
    favourite: false,
    image: stripedImage,
  },
];
const deliveryOptions = [
  { id: "pickup", label: "Pickup point" },
  { id: "home", label: "Home delivery" },
];
const step = ref(0),
  selected = ref([]),
  category = ref("all"),
  size = ref("all"),
  delivery = ref("pickup"),
  budget = ref(1500),
  unavailable = ref(false),
  complete = ref(false),
  playing = ref(false),
  phoneBody = ref(null);
let demoTimer;
const orderItems = computed(() => [
  tee,
  ...items.filter((item) => selected.value.includes(item.id)),
]);
const quote = computed(() => priceOrder(orderItems.value, delivery.value));
const single = computed(() => priceOrder([tee], delivery.value));
const quoteAvailable = computed(
  () => !(unavailable.value && delivery.value === "pickup"),
);
const visibleItems = computed(() =>
  items.filter(
    (item) =>
      (category.value === "all" || item.category === category.value) &&
      (size.value === "all" || item.size === size.value),
  ),
);
const captions = [
  {
    label: "01 / Start with the real cost",
    copy: "The item is still the focus. The estimate groups every mandatory cost, without pretending this is a confirmed carrier quote.",
  },
  {
    label: "02 / Find a useful addition",
    copy: "Category and label-size controls reduce irrelevant browsing. Filters never silently remove selected items. Label size does not guarantee fit.",
  },
  {
    label: "03 / Make the trade-off visible",
    copy: "Delivery increases, budget feedback and the single-item alternative remain visible. Success can mean choosing not to bundle.",
  },
];
function pauseDemo() {
  clearInterval(demoTimer);
  playing.value = false;
}
function scrollPhone() {
  nextTick(() => phoneBody.value?.scrollTo({ top: 0, behavior: "instant" }));
}
function navigate(index) {
  pauseDemo();
  step.value = index;
  scrollPhone();
  nextTick(() => phoneBody.value?.focus({ preventScroll: true }));
}
function toggle(id) {
  pauseDemo();
  complete.value = false;
  selected.value = selected.value.includes(id)
    ? selected.value.filter((value) => value !== id)
    : [...selected.value, id];
}
function reset() {
  pauseDemo();
  step.value = 0;
  selected.value = [];
  category.value = "all";
  size.value = "all";
  delivery.value = "pickup";
  budget.value = 1500;
  unavailable.value = false;
  complete.value = false;
  scrollPhone();
}
function keepSingle() {
  pauseDemo();
  selected.value = [];
  complete.value = false;
  scrollPhone();
}
function scenario(kind) {
  reset();
  if (kind === "light") {
    step.value = 1;
    category.value = "Tops";
    size.value = "M";
    selected.value = ["shirt"];
  } else {
    step.value = 2;
    selected.value = ["jeans"];
    unavailable.value = kind === "unavailable";
  }
  scrollPhone();
}
function completeReview() {
  pauseDemo();
  complete.value = true;
  scrollPhone();
}
function startDemo() {
  reset();
  playing.value = true;
  const frames = [
    () => {
      step.value = 1;
    },
    () => {
      category.value = "Tops";
      size.value = "M";
    },
    () => {
      selected.value = ["shirt"];
    },
    () => {
      step.value = 2;
    },
    () => {
      selected.value = ["jeans"];
    },
    () => {
      selected.value = [];
    },
    () => pauseDemo(),
  ];
  let frame = 0;
  demoTimer = setInterval(() => {
    frames[frame++]?.();
    scrollPhone();
  }, 2800);
}
onBeforeUnmount(pauseDemo);
</script>

<style scoped>
.bundle-lab {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(340px, 1fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: start;
  color: #142c2b;
  background: #e6efeb;
  padding: clamp(24px, 4vw, 64px);
  border-radius: 12px;
  color-scheme: light;
}
.lab-guide {
  padding-top: 28px;
  max-width: 420px;
}
.lab-kicker {
  font-size: 12px !important;
  font-weight: 600;
  color: #3d615b !important;
  margin-bottom: 20px !important;
}
.lab-guide h3 {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 550;
  line-height: 1.13;
  letter-spacing: -0.035em;
  margin: 0 0 20px;
}
.lab-guide > p {
  font-size: 15px;
  line-height: 1.7;
  color: #405d57;
  margin: 0 0 24px;
}
.budget-label {
  font-size: 12px;
  font-weight: 650;
  display: block;
  margin-bottom: 8px;
}
.lab-guide select {
  background: white;
  border: 1px solid #a7bab3;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 16px;
  color: #142c2b;
  min-width: 140px;
}
.scenario-list {
  margin: 28px 0 24px;
  border-top: 1px solid #b7cbc2;
}
.scenario-list button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #b7cbc2;
  background: transparent;
  padding: 18px 0;
  color: #142c2b;
  cursor: pointer;
}
.scenario-list button > span {
  font-size: 12px;
  color: #49645c;
}
.scenario-list button > div {
  flex: 1;
}
.scenario-list strong {
  font-size: 14px;
  display: block;
}
.scenario-list small {
  font-size: 12px;
  line-height: 1.5;
  color: #405d57;
  display: block;
  margin-top: 5px;
}
.scenario-list button:hover strong {
  text-decoration: underline;
}
.walkthrough-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.demo-toggle,
.reset-demo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  min-height: 44px;
  cursor: pointer;
}
.demo-toggle {
  border: 1px solid #294d43;
  background: #294d43;
  color: white;
  border-radius: 5px;
  padding: 10px 14px;
}
.reset-demo {
  border: 0;
  background: transparent;
  color: #294d43;
  padding: 8px;
}
.guide-note {
  font-size: 12px !important;
  line-height: 1.6 !important;
  margin-top: 14px !important;
}
.design-caption {
  border-left: 2px solid #007782;
  padding-left: 16px;
  margin-top: 36px;
}
.design-caption > span {
  font-size: 12px;
  font-weight: 700;
}
.design-caption p {
  font-size: 14px;
  line-height: 1.65;
  margin: 10px 0;
  color: #405d57;
}
.phone-stage {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bundle-phone {
  width: 100%;
  max-width: 366px;
  border: 7px solid #172b28;
  border-radius: 38px;
  overflow: hidden;
  background: white;
  color: #263332;
  box-shadow: 0 20px 45px #193d3021;
  font-family: Inter, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 790px;
  max-height: 900px;
}
.phone-status {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 700;
  padding: 12px 20px 6px;
}
.phone-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px 12px;
  border-bottom: 1px solid #e2e5e3;
}
.wordmark {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 27px;
  color: #007782;
  font-weight: 700;
  letter-spacing: -2px;
}
.phone-header > span:last-child {
  font-size: 10px;
  color: #596862;
}
.step-nav {
  display: flex;
  padding: 8px 12px;
  gap: 5px;
  border-bottom: 1px solid #e2e5e3;
  flex-shrink: 0;
}
.step-nav button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex: 1;
  min-height: 34px;
  border: 0;
  border-radius: 4px;
  background: white;
  color: #53615d;
  font-size: 10px;
  cursor: pointer;
}
.step-nav button span {
  width: 17px;
  height: 17px;
  display: grid;
  place-items: center;
  border: 1px solid #b7c8c1;
  border-radius: 50%;
  font-size: 9px;
}
.step-nav button[aria-current] {
  background: #e4f2ee;
  color: #005e63;
  font-weight: 700;
}
.step-nav button[aria-current] span {
  border-color: #007782;
}
.phone-body {
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: #b7c8c1 transparent;
}
.seller-line {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
}
.avatar {
  background: #e8dfcd;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  font-family: Georgia, serif;
  font-style: italic;
}
.seller-line strong {
  font-size: 10px;
  display: block;
}
.seller-line small {
  display: block;
  font-size: 9px;
  color: #bc830b;
}
.seller-line small span {
  color: #65736e;
}
.seller-tag {
  margin-left: auto;
  font-size: 9px;
  color: #596862;
}
.main-product {
  height: 215px;
  position: relative;
  background: #eee9df;
}
.main-product img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.image-count {
  position: absolute;
  bottom: 10px;
  right: 12px;
  background: #fffdf0e6;
  border-radius: 4px;
  font-size: 10px;
  padding: 3px 6px;
}
.item-details {
  padding: 14px 16px 10px;
}
.item-details h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 4px 0;
}
.item-details p {
  font-size: 11px;
  color: #596862;
  margin: 4px 0;
}
.item-details .item-brand {
  font-weight: 650;
  color: #263332;
}
.item-price {
  font-size: 19px;
  display: block;
  margin-top: 10px;
}
.estimate-panel {
  margin: 0 16px 14px;
  background: #edf5f2;
  border: 1px solid #c5dcd3;
  padding: 12px;
  border-radius: 5px;
}
.estimate-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
}
.estimate-heading strong {
  font-size: 20px;
  letter-spacing: -0.03em;
}
.estimate-panel > p {
  font-size: 9px;
  color: #49635c;
  margin: 5px 0 12px;
}
.compact-cost {
  display: flex;
  gap: 10px;
  font-size: 9px;
  color: #35564c;
  flex-wrap: wrap;
}
.bundle-invitation {
  display: flex;
  gap: 10px;
  margin: 0 16px 20px;
  color: #007782;
}
.bundle-invitation svg {
  flex-shrink: 0;
}
.bundle-invitation strong {
  font-size: 12px;
}
.bundle-invitation p {
  font-size: 11px;
  line-height: 1.6;
  color: #596862;
  margin: 5px 0;
}
.wardrobe-heading,
.review-heading {
  padding: 18px 16px 12px;
}
.wardrobe-heading h4,
.review-heading h4 {
  font-size: 20px;
  letter-spacing: -0.035em;
  font-weight: 550;
  margin: 0 0 5px;
}
.wardrobe-heading p,
.review-heading p {
  font-size: 11px;
  color: #596862;
  margin: 0 0 8px;
}
.wardrobe-heading > span {
  font-size: 10px;
  color: #00666d;
  background: #edf5f2;
  padding: 5px 7px;
  border-radius: 3px;
  display: inline-block;
}
.filter-row {
  display: flex;
  gap: 8px;
  padding: 0 16px;
}
.filter-row label {
  flex: 1;
  font-size: 9px;
  color: #53615d;
}
.filter-row select {
  display: block;
  width: 100%;
  padding: 8px 6px;
  margin-top: 4px;
  border: 1px solid #a7bab3;
  border-radius: 4px;
  background: white;
  color: #263332;
  font-size: 11px;
  min-height: 36px;
}
.selection-hint {
  font-size: 9px;
  color: #596862;
  padding: 0 16px;
  margin: 8px 0 12px;
}
.wardrobe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 10px;
  padding: 0 16px 24px;
}
.wardrobe-photo {
  height: 150px;
  background: #f0efea;
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
}
.wardrobe-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chosen .wardrobe-photo {
  border: 2px solid #007782;
}
.favourite-label {
  position: absolute;
  left: 5px;
  bottom: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fffffff0;
  padding: 4px;
  border-radius: 3px;
  font-size: 8px;
  color: #4b5551;
}
.wardrobe-item > strong {
  font-size: 10px;
  display: block;
  margin: 8px 0 4px;
  font-weight: 600;
}
.wardrobe-item > p {
  font-size: 9px;
  margin: 0 0 8px;
  color: #65736e;
}
.item-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
}
.item-action b {
  font-size: 12px;
}
.item-action button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-height: 32px;
  padding: 5px 7px;
  font-size: 10px;
  color: #007782;
  border: 1px solid #007782;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
.item-action button[aria-pressed="true"] {
  background: #007782;
  color: white;
}
.empty-wardrobe {
  padding: 40px 20px;
  text-align: center;
  color: #596862;
}
.empty-wardrobe h4 {
  font-size: 14px;
  margin: 16px 0 8px;
}
.empty-wardrobe p {
  font-size: 11px;
  line-height: 1.5;
}
.empty-wardrobe button {
  padding: 10px 16px;
  background: #edf5f2;
  border: 1px solid #a7bab3;
  color: #00666d;
  border-radius: 4px;
  margin-top: 12px;
  font-size: 12px;
  cursor: pointer;
}
.selected-items {
  padding: 0 16px;
}
.selected-items article {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid #e4e8e5;
}
.selected-items img {
  width: 40px;
  height: 45px;
  object-fit: cover;
  border-radius: 3px;
  background: #f0efea;
}
.selected-items article > div {
  flex: 1;
}
.selected-items strong {
  display: block;
  font-size: 10px;
}
.selected-items small {
  display: block;
  font-size: 9px;
  margin-top: 4px;
  color: #65736e;
}
.selected-items button {
  display: grid;
  place-items: center;
  min-width: 34px;
  min-height: 34px;
  border: 0;
  background: transparent;
  color: #596862;
  cursor: pointer;
}
.original-item {
  font-size: 9px;
  color: #596862;
}
.delivery-options {
  border: 0;
  padding: 0;
  margin: 18px 16px 12px;
}
.delivery-options legend {
  font-size: 11px;
  font-weight: 650;
  margin-bottom: 8px;
}
.delivery-options label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid #e4e8e5;
  font-size: 11px;
  cursor: pointer;
}
.delivery-options input {
  accent-color: #007782;
}
.delivery-options label > span {
  flex: 1;
}
.delivery-options small {
  display: block;
  font-size: 8px;
  color: #596862;
  margin-top: 4px;
}
.delivery-options b {
  font-size: 11px;
}
.delivery-disabled {
  color: #75827b;
  cursor: default !important;
}
.receipt {
  padding: 0 16px;
  margin: 18px 0 14px;
}
.receipt > div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  margin: 10px 0;
}
.receipt dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
}
.receipt-total {
  padding-top: 12px;
  border-top: 1px solid #b7c8c1;
  font-weight: 700;
  font-size: 16px !important;
}
.delta-panel {
  margin: 0 16px 12px;
  background: #edf5f2;
  padding: 12px;
  border-radius: 5px;
}
.delta-panel strong {
  font-size: 11px;
  color: #00666d;
}
.delta-panel p {
  font-size: 10px;
  line-height: 1.5;
  margin: 6px 0 0;
  color: #49635c;
}
.cost-warning {
  margin: 10px 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  background: #fff3dc;
  color: #79520b;
  font-size: 10px;
  line-height: 1.6;
  border-radius: 4px;
}
.cost-warning svg {
  flex-shrink: 0;
}
.keep-single {
  display: block;
  margin: 14px 16px 8px;
  min-height: 36px;
  text-decoration: underline;
  text-underline-offset: 3px;
  background: transparent;
  color: #007782;
  font-size: 11px;
  border: 0;
  cursor: pointer;
}
.pricing-assumptions {
  margin: 12px 16px 20px;
  font-size: 10px;
  color: #596862;
  line-height: 1.6;
}
.pricing-assumptions summary {
  cursor: pointer;
  padding: 8px 0;
}
.pricing-assumptions p {
  margin: 6px 0;
}
.phone-checkout {
  padding: 12px 16px 10px;
  border-top: 1px solid #dce3df;
  background: white;
  flex-shrink: 0;
}
.live-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.live-total span {
  font-size: 10px;
  color: #53615d;
}
.live-total strong {
  font-size: 20px;
  font-weight: 650;
  letter-spacing: -0.03em;
}
.budget-feedback {
  font-size: 10px;
  margin: 5px 0 10px;
  color: #006651;
}
.budget-feedback.over {
  color: #925000;
}
.phone-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  background: #007782;
  color: white;
  border: 0;
  border-radius: 5px;
  min-height: 42px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 9px;
  font-weight: 600;
}
.phone-primary:hover {
  background: #005e63;
}
.phone-primary:disabled {
  background: #d2dcd7;
  color: #4f635b;
  cursor: default;
}
.single-link {
  width: 100%;
  background: none;
  border: 0;
  color: #007782;
  font-size: 10px;
  min-height: 31px;
  cursor: pointer;
}
.quote-disclaimer {
  font-size: 8px;
  text-align: center;
  color: #596862;
  margin: 8px 0 0;
}
.phone-caption {
  font-size: 10px;
  text-align: center;
  line-height: 1.6;
  color: #405d57;
  margin: 16px 0 0;
  max-width: 330px;
}
.demo-complete {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #e4f2ee;
  color: #006651;
  padding: 16px;
}
.demo-complete strong {
  font-size: 12px;
}
.demo-complete p {
  font-size: 10px;
  margin: 5px 0 0;
}
.bundle-lab :is(button, select, input, summary):focus-visible {
  outline: 3px solid #b98111;
  outline-offset: 3px;
}
@media (max-width: 800px) {
  .bundle-lab {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px 18px;
  }
  .lab-guide {
    max-width: none;
    padding-top: 0;
  }
  .lab-guide h3 {
    font-size: 30px;
  }
  .scenario-list {
    margin: 20px 0;
  }
  .design-caption {
    margin-top: 20px;
  }
  .bundle-phone {
    height: 790px;
  }
  .phone-stage {
    width: 100%;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
  }
}
</style>
