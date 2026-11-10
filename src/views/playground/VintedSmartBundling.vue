<template>
  <app-navbar />
  <main class="vinted-case bundle-case">
    <header class="bundle-hero case-width">
      <router-link class="back-link" to="/"
        ><ArrowLeft :size="15" /> All projects</router-link
      >
      <div class="hero-topline">
        <span>Vinted / Independent product exploration</span
        ><span>Research → interaction design → evaluation plan</span>
      </div>
      <h1>Is this bundle<br /><em>actually a better deal?</em></h1>
      <div class="hero-intro">
        <p>
          Helping second-hand buyers find useful items from one seller and
          understand the complete cost before deciding to bundle.
        </p>
        <a class="outline-link" href="#prototype"
          >Try the prototype <ArrowDown :size="16"
        /></a>
      </div>
      <div
        class="hero-composition"
        aria-label="Illustrative bundle decision: a tee alone costs £8.24; adding a shirt brings the estimated total to £10.55"
      >
        <div class="hero-finds">
          <div class="composition-heading">
            <span>A wardrobe worth exploring.</span
            ><span>One seller · two useful finds</span>
          </div>
          <div class="hero-products">
            <figure>
              <img :src="tee" alt="Illustrative yellow cotton tee" />
              <figcaption>
                <span>Yellow cotton tee</span><strong>£5.00</strong>
              </figcaption>
            </figure>
            <span class="plus-sign" aria-hidden="true">+</span>
            <figure>
              <img :src="shirt" alt="Illustrative blue cotton shirt" />
              <figcaption>
                <span>Blue cotton shirt</span><strong>£3.00</strong>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="hero-receipt">
          <span class="receipt-eyebrow">The whole decision</span>
          <h2>Two items.<br />Every cost.</h2>
          <dl>
            <div>
              <dt>Items</dt>
              <dd>£8.00</dd>
            </div>
            <div>
              <dt>Seller discount</dt>
              <dd>−£0.80</dd>
            </div>
            <div>
              <dt>Illustrative fee</dt>
              <dd>£0.86</dd>
            </div>
            <div>
              <dt>Delivery estimate</dt>
              <dd>£2.49</dd>
            </div>
            <div class="hero-total">
              <dt>Estimated total</dt>
              <dd>£10.55</dd>
            </div>
          </dl>
          <p>
            £2.31 more than the tee alone.<br />Same delivery cost. Your choice.
          </p>
          <small>Fictional items and prices · proposed interface</small>
        </div>
      </div>
      <dl class="project-facts">
        <div>
          <dt>My role</dt>
          <dd>Research synthesis, product design & interactive prototyping</dd>
        </div>
        <div>
          <dt>Scope</dt>
          <dd>UK domestic bundle decisions</dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>Public Reddit discussions & Vinted documentation</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>Independent concept · not shipped or user-tested</dd>
        </div>
      </dl>
    </header>

    <nav class="case-index case-width" aria-label="Case study sections">
      <a href="#research">Research</a><a href="#decision">Focus</a
      ><a href="#current">Current experience</a
      ><a href="#prototype">Prototype</a><a href="#validation">Validation</a
      ><a href="#sources">Sources</a>
    </nav>

    <section id="research" class="case-width story-block">
      <div class="section-intro">
        <p class="section-kicker">The starting point</p>
        <h2>A concept first.<br />Then an evidence check.</h2>
        <p>
          The original “Smart Local Bundling” concept combined total-cost
          discovery, nearby sellers and same-seller recommendations. It started
          as a speculative learning project. Before taking it further, I used
          public Reddit discussions to challenge the problem and the proposed
          solution.
        </p>
      </div>
      <div class="research-method">
        <Search :size="22" />
        <div>
          <h3>Look for friction, not agreement.</h3>
          <p>
            The first scan explored support, search, sizing, fees and delivery
            in r/vinted and r/vintedUK. Three recurring themes emerged. A
            second, targeted pass examined the original bundling assumptions:
            shipping cost, finding relevant wardrobe items and whether bundles
            really save money.
          </p>
          <p class="method-detail">
            Eight purposively selected Reddit threads are cited below, dated
            April 2025–September 2026. Reviewed 10 November 2026. This is
            qualitative secondary research, not a representative sample or a
            ranking by complaint frequency. Some evidence was available only as
            indexed text.
          </p>
        </div>
      </div>
      <div class="theme-grid">
        <article>
          <span>Trust & recovery</span>
          <h3>Getting help when an order goes wrong</h3>
          <p>
            Users report delayed support and repeated replies when an order goes
            wrong.
          </p>
          <a href="#source-R1"
            >Read the discussion · R1 <ArrowUpRight :size="13"
          /></a>
        </article>
        <article>
          <span>Discovery</span>
          <h3>Finding relevant search results</h3>
          <p>
            Buyers describe search results that do not match their specific
            terms.
          </p>
          <a href="#source-R2"
            >Read the discussion · R2 <ArrowUpRight :size="13"
          /></a>
        </article>
        <article>
          <span>Size confidence</span>
          <h3>Knowing which size to trust</h3>
          <p>
            Labels, sizing systems and filters do not always give buyers enough
            certainty.
          </p>
          <a href="#source-R3"
            >Read the discussion · R3 <ArrowUpRight :size="13"
          /></a>
        </article>
      </div>
      <div class="research-pivot">
        <span>What changed the direction?</span>
        <p>
          Sizing was a credible alternative. But the focused audit found an
          existing behaviour behind the original idea: buyers already build
          bundles to make postage worthwhile. The opportunity was to help them
          judge a bundle—not persuade them to buy more.
        </p>
      </div>
      <div class="evidence-heading">
        <h3>What people actually said</h3>
        <p>
          Public comments, quoted verbatim. Individual experiences, not verified
          platform-wide facts.
        </p>
      </div>
      <div class="evidence-grid">
        <figure v-for="item in evidence" :key="item.source">
          <figcaption>
            <strong>{{ item.finding }}</strong
            ><a :href="'#source-' + item.source"
              >{{ sourceById[item.source].date }} · {{ item.source }}
              <ArrowUpRight :size="13"
            /></a>
          </figcaption>
          <blockquote lang="en">“{{ item.quote }}”</blockquote>
          <p><span>Design implication</span>{{ item.implication }}</p>
        </figure>
      </div>
    </section>

    <section id="decision" class="decision-band">
      <div class="case-width">
        <p class="section-kicker">From evidence to a bounded problem</p>
        <h2>
          Make the total understandable.<br />Make the extra item relevant.
        </h2>
        <p class="problem-statement">
          When buying an inexpensive item, buyers can struggle to find useful
          additions from the same seller and judge whether the complete order is
          worth the cost.
        </p>
        <div class="decision-columns">
          <div>
            <h3>Keep</h3>
            <p>
              Same-seller discovery, category and size controls, and a running
              estimate that includes items, discount, fee and delivery.
            </p>
          </div>
          <div>
            <h3>Change</h3>
            <p>
              Replace “unlock savings” with a comparison against the original
              item. Adding an item costs more, even when a discount applies.
            </p>
          </div>
          <div>
            <h3>Remove</h3>
            <p>
              Nearby rankings, distance badges, promised delivery dates and
              environmental claims. The research did not establish a need or
              reliable data for them.
            </p>
          </div>
        </div>
        <div class="hypothesis">
          <span>Design hypothesis · not a finding</span>
          <p>
            If buyers can find relevant same-seller items and see how each
            addition changes the complete total, they can make a better-informed
            decision within their budget.
          </p>
        </div>
      </div>
    </section>

    <section id="current" class="case-width story-block">
      <div class="section-intro">
        <p class="section-kicker">Work with the product that exists</p>
        <h2>Bundling already exists.<br />The decision can be clearer.</h2>
        <p>
          Vinted’s official help describes creating bundles from a listing or
          seller profile, showing favourites first and updating the bundle
          price. Shipping and the fee are added after “Buy now.” Fee information
          already appears while browsing. This concept extends the existing
          flow; it does not introduce bundles or fees for the first time.
          <a href="#source-P1">P1</a> · <a href="#source-P2">P2</a>
        </p>
      </div>
      <div class="current-reference">
        <div class="reference-images">
          <figure>
            <a
              href="https://play.google.com/store/apps/details?id=fr.vinted&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="/images/vinted-research/official-listing.webp"
                alt="Vinted publisher screenshot showing its listing form, presented in promotional artwork"
                loading="lazy"
            /></a>
            <figcaption>Publisher screenshot / listing</figcaption>
          </figure>
          <figure>
            <a
              href="https://play.google.com/store/apps/details?id=fr.vinted&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="/images/vinted-research/official-item.webp"
                alt="Vinted publisher screenshot showing a photographed item and item-detail interface in promotional artwork"
                loading="lazy"
            /></a>
            <figcaption>Publisher screenshot / item detail</figcaption>
          </figure>
        </div>
        <div class="reference-copy">
          <span class="section-kicker"
            >Visual reference, not a fabricated “before”</span
          >
          <h3>Keep the familiar product language.</h3>
          <p>
            Product photography, white surfaces, teal actions, compact item
            details and a seller-led buying journey informed the proposed
            screens.
          </p>
          <p>
            These are Vinted’s public promotional screenshots, observed on
            Google Play on 10 November 2026. Artwork © Vinted. They establish
            visual direction, not the exact current UK bundle screens.
            <a href="#source-P4">P4</a>
          </p>
          <p>
            The behavioural baseline comes from official help. An authenticated,
            device-specific walkthrough is still needed before usability
            comparisons. Features can vary by market and app version.
          </p>
        </div>
      </div>
      <div class="comparison-table">
        <table>
          <caption>
            Documented baseline → proposed change
          </caption>
          <thead>
            <tr>
              <th>Decision</th>
              <th>Documented today</th>
              <th>Proposed experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Find another item</th>
              <td>
                Create a same-seller bundle; favourites appear first.
                <a href="#source-P1">P1</a>
              </td>
              <td>
                Keep favourites visible; add explicit category and label-size
                controls within bundle selection.
              </td>
            </tr>
            <tr>
              <th>Understand cost</th>
              <td>
                Bundle price updates; shipping and fee join at Buy now.
                <a href="#source-P1">P1</a>
              </td>
              <td>
                Use the chosen delivery option for a complete, clearly labelled
                estimate while building.
              </td>
            </tr>
            <tr>
              <th>Spot a trade-off</th>
              <td>
                Parcel size depends on item type and quantity.
                <a href="#source-P5">P5</a>
              </td>
              <td>
                Explain delivery increases and compare with the original item
                using the same delivery option.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="prototype" class="case-width prototype-section">
      <div class="section-intro">
        <p class="section-kicker">The proposed experience</p>
        <h2>Explore. Compare.<br />Decide for yourself.</h2>
        <p>
          A working interaction prototype using the existing project’s
          illustrative product imagery. Prices, sellers, parcel weights and
          availability are fictional. The underlying calculations respond to
          every selection; there is no connection to Vinted or a payment system.
        </p>
      </div>
      <vinted-bundle-prototype />
      <div class="design-principles">
        <article>
          <span>Relevance before volume</span>
          <p>
            Let the buyer narrow the wardrobe. A label-size match is a filter,
            not a promise of fit.
          </p>
        </article>
        <article>
          <span>Costs before commitment</span>
          <p>
            Keep the estimate visible. A heavier parcel can outweigh an item
            discount.
          </p>
        </article>
        <article>
          <span>A genuine way out</span>
          <p>
            Keep the original item available. Choosing not to bundle can be a
            successful outcome.
          </p>
        </article>
      </div>
    </section>

    <section class="case-width story-block implementation-block">
      <div class="section-intro">
        <p class="section-kicker">Real-world constraints</p>
        <h2>An estimate is a contract<br />with uncertainty.</h2>
      </div>
      <div class="constraint-grid">
        <article>
          <h3>Quote the actual destination.</h3>
          <p>
            A production version needs the buyer’s destination, eligible
            carriers, selected delivery method and parcel information. If those
            are unknown, request them or show a range. Do not label a “from”
            price as the total. <a href="#source-P3">P3</a>
          </p>
        </article>
        <article>
          <h3>Recalculate before payment.</h3>
          <p>
            Availability and prices can change. Refresh a server-issued quote,
            explain any difference and ask the buyer to review again. Sold items
            and failed quotes need recovery, not silent substitutions.
          </p>
        </article>
        <article>
          <h3>Respect marketplace constraints.</h3>
          <p>
            Seller discounts are optional. Some bundle changes require parcel
            approval. Start with eligible domestic orders; international taxes
            and verification services need separate handling.
            <a href="#source-P1">P1</a> · <a href="#source-P5">P5</a>
          </p>
        </article>
        <article>
          <h3>Keep the model inspectable.</h3>
          <p>
            This demo uses integer-pence arithmetic, 10% off 2+ items and a
            fictional fee of 5% + £0.50. Weight bands simulate delivery changes.
            These are declared test assumptions, not Vinted’s tariff.
          </p>
        </article>
      </div>
    </section>

    <section id="validation" class="validation-band">
      <div class="case-width">
        <div class="section-intro">
          <p class="section-kicker">How I would know it helps</p>
          <h2>A testable proposition.<br />No invented results.</h2>
          <p>
            No participant interviews, usability sessions or live experiment
            have been conducted for this concept. The guided walkthrough
            demonstrates the interface; it is not user-testing footage. The next
            step is to test whether people understand the decision—not whether
            they can click a purchase button.
          </p>
        </div>
        <div class="validation-plan">
          <div>
            <span class="plan-stage">First / establish the baseline</span>
            <h3>Observe real shopping decisions.</h3>
            <p>
              Recruit 6–8 recent UK Vinted buyers, including people who buy
              low-priced items, bundle regularly or avoid bundles. Ask them to
              show a recent purchase and explain when delivery changed its
              value. Check the current app on their device with consent.
            </p>
            <p>
              Review the flow with 3–4 sellers to understand discounts,
              parcel-size changes and any extra work the proposal would create.
            </p>
          </div>
          <div>
            <span class="plan-stage">Then / moderated comparison</span>
            <h3>Test a choice, not a sales funnel.</h3>
            <p>
              Use the verified current flow and this prototype, counterbalancing
              order with equivalent product sets. Ask buyers to find a useful
              extra within £15, explain the full total, spot a delivery increase
              and recover from an unavailable method.
            </p>
            <p>
              Record screen and audio only with consent. Report observed
              behaviours and denominators; a small qualitative sample cannot
              prove a conversion lift.
            </p>
          </div>
        </div>
        <div class="comparison-table">
          <table>
            <caption>
              Proposed measures and decision rules · not achieved outcomes
            </caption>
            <thead>
              <tr>
                <th>Question</th>
                <th>Measure</th>
                <th>What would change the design?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Do buyers understand the cost?</th>
                <td>
                  Unprompted explanation of total, delivery increase and
                  difference from the original item.
                </td>
                <td>
                  Any repeated confusion between a discount and lower overall
                  spending triggers a copy or hierarchy revision.
                </td>
              </tr>
              <tr>
                <th>Can they find something useful?</th>
                <td>
                  Task completion, time, irrelevant items inspected and filter
                  use, relative to the verified baseline.
                </td>
                <td>
                  If controls add effort or hide wanted items, simplify them
                  before adding recommendations.
                </td>
              </tr>
              <tr>
                <th>Can they keep control?</th>
                <td>
                  Notice budget feedback, remove an item and choose the
                  single-item alternative without help.
                </td>
                <td>
                  If people feel pressured to add items, revise the prompt and
                  prioritise the exit.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="live-experiment">
          <div>
            <span class="plan-stage"
              >If shipped / a separate live experiment</span
            >
            <h3>Measure informed decisions,<br />not bigger baskets alone.</h3>
          </div>
          <div>
            <p>
              Randomise eligible buyers, rather than individual visits, to avoid
              mixing experiences. Define eligibility as starting a bundle from
              an item with eligible same-seller inventory. Choose sample size
              and duration from baseline rates, a minimum detectable effect and
              a power calculation before launch.
            </p>
            <p>
              <strong>Primary:</strong> completed eligible orders per exposed
              buyer. <strong>Diagnostics:</strong> bundle completion,
              original-item purchases, quote-to-final-price differences and cost
              comprehension. <strong>Guardrails:</strong> cancellations,
              returns, cost-related support contacts and reported pressure to
              buy unwanted items. Balance with seller workload and margin.
            </p>
            <p class="honest-outcome">
              Current outcome: a research-informed prototype and an evaluation
              plan. Business impact remains unknown.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="case-width story-block closing-reflection">
      <p class="section-kicker">Reflection</p>
      <h2>The research kept the idea.<br />It changed the promise.</h2>
      <p>
        The useful opportunity was not “buy more nearby.” It was helping someone
        see whether a particular bundle is worthwhile. Removing distance claims,
        guaranteed savings and a forced bundle checkout made the concept
        narrower, more honest and easier to test.
      </p>
    </section>

    <section id="sources" class="case-width sources-section">
      <div class="source-heading">
        <div>
          <p class="section-kicker">Research trail</p>
          <h2>Evidence you can inspect.</h2>
        </div>
        <p>
          Selected public sources. Reddit accounts are anecdotal; votes are not
          treated as prevalence. Official help supports the product baseline.
          Original quotes remain in English.
        </p>
      </div>
      <details>
        <summary>
          Method, limitations & remaining questions <Plus :size="17" />
        </summary>
        <div class="method-expanded">
          <p>
            Search terms included “Vinted customer support automated replies”,
            “Vinted search irrelevant results”, “Vinted sizing filters”, “Vinted
            shipping cheap items bundles”, “wardrobes and bundles” and “bundle
            postage doubled”. Searches were purposive, expanded as themes
            emerged and checked against counterexamples.
          </p>
          <p>
            Sources include English-language discussions across more than one
            market. The prototype is limited to a UK domestic scenario; amounts
            from other markets are not used as UK tariffs. Public posts may be
            incomplete, deleted or unrepresentative. Thread dates follow indexed
            search metadata. No personal profiles or private conversations were
            collected.
          </p>
          <p>
            Open questions: How often does cost uncertainty stop a purchase? Do
            wardrobe filters outperform favourites-first browsing? Can useful
            delivery estimates be served before checkout without excessive
            friction? Would buyers feel helped or encouraged to overspend?
          </p>
        </div>
      </details>
      <ol class="source-list">
        <li
          v-for="source in sources"
          :key="source.id"
          :id="'source-' + source.id"
        >
          <span class="source-id">{{ source.id }}</span>
          <div>
            <a :href="source.url" target="_blank" rel="noopener noreferrer"
              >{{ source.title }} <ArrowUpRight :size="13" /></a
            ><span>{{ source.type }} · {{ source.date }}</span>
            <p>{{ source.note }}</p>
          </div>
        </li>
      </ol>
    </section>
  </main>
  <app-footer />
</template>

<script setup>
import { useHead } from "@vueuse/head";
import {
  ArrowLeft,
  ArrowDown,
  ArrowUpRight,
  Plus,
  Search,
} from "lucide-vue-next";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";
import VintedBundlePrototype from "@/components/VintedBundlePrototype.vue";
import { evidence, sources } from "@/data/vintedResearch";
import tee from "@/images/vinted/products/yellow-b.png";
import shirt from "@/images/vinted/bundles/blue-button-up.png";
const sourceById = Object.fromEntries(
  sources.map((source) => [source.id, source]),
);
useHead({
  meta: [
    {
      name: "description",
      content:
        "A research-informed Vinted bundle concept: relevant same-seller discovery, transparent total costs, an interactive prototype and an honest evaluation plan.",
    },
  ],
});
</script>

<style scoped>
.bundle-case {
  --bundle-mint: #e6efeb;
  --bundle-green: #007782;
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: 80px;
}
.case-width {
  width: calc(100% - 80px);
  max-width: 1160px;
  margin-inline: auto;
}
.bundle-hero {
  padding-top: 44px;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 54px;
}
.hero-topline {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  font-size: 12px;
  color: var(--color-text-secondary);
  border-top: 1px solid var(--color-border);
  padding-top: 18px;
  margin-bottom: 35px;
}
.bundle-hero h1 {
  font-size: clamp(44px, 6.8vw, 86px);
  font-weight: 550;
  line-height: 1.05;
  letter-spacing: -0.055em;
  margin: 0;
  max-width: 1000px;
}
.bundle-hero h1 em {
  font-family: "Instrument Serif", Georgia, serif;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: #87c8b4;
}
:root[data-visual-theme="light"] .bundle-hero h1 em {
  color: #006b64;
}
.hero-intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  margin: 30px 0 48px;
}
.hero-intro > p {
  max-width: 610px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}
.outline-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  white-space: nowrap;
  border: 1px solid var(--color-border-strong);
  border-radius: 5px;
  padding: 13px 18px;
  font-size: 12px;
  color: var(--color-text);
}
.outline-link:hover {
  background: var(--color-surface);
}
.hero-composition {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  background: #e6efeb;
  color: #163c32;
  border-radius: 8px;
  overflow: hidden;
  color-scheme: light;
}
.hero-finds {
  padding: 35px 32px 24px;
}
.composition-heading {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 12px;
  margin-bottom: 34px;
}
.composition-heading > span:last-child {
  font-size: 10px;
  color: #45665a;
}
.hero-products {
  display: grid;
  grid-template-columns: 1fr 22px 1fr;
  align-items: center;
  gap: 18px;
}
.hero-products figure {
  margin: 0;
}
.hero-products img {
  height: 270px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  background: #ece9df;
}
.hero-products figcaption {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 11px;
  margin-top: 13px;
}
.hero-products figcaption strong {
  white-space: nowrap;
}
.plus-sign {
  text-align: center;
  font-size: 25px;
  font-weight: 300;
}
.hero-receipt {
  padding: 36px 34px;
  background: #d2e2d9;
  border-left: 1px solid #bdd1c4;
}
.receipt-eyebrow {
  font-size: 11px;
  color: #45665a;
}
.hero-composition .hero-receipt h2 {
  font-size: 36px;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 18px 0 25px;
  font-weight: 550;
}
.hero-receipt dl {
  margin: 0;
}
.hero-receipt dl > div {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 10px 0;
}
.hero-receipt dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
}
.hero-receipt .hero-total {
  border-top: 1px solid #abc4b4;
  margin-top: 15px;
  padding-top: 15px;
  font-size: 19px;
  font-weight: 650;
}
.hero-receipt > p {
  font-size: 12px;
  line-height: 1.65;
  margin: 15px 0;
  color: #284d3e;
}
.hero-receipt > small {
  font-size: 9px;
  color: #45665a;
}
.project-facts {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
  gap: 30px;
  margin: 32px 0 0;
}
.project-facts dt {
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-bottom: 9px;
}
.project-facts dd {
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}
.case-index {
  display: flex;
  gap: 28px;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border);
  margin-top: 40px;
  flex-wrap: wrap;
}
.case-index a {
  font-size: 12px;
  color: var(--color-text-secondary);
  text-underline-offset: 6px;
}
.case-index a:hover {
  text-decoration: underline;
  color: var(--color-text);
}
.story-block {
  padding-block: 92px;
  border-bottom: 1px solid var(--color-border);
}
.section-intro {
  max-width: 760px;
  margin-bottom: 36px;
}
.section-kicker {
  font-size: 12px;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin: 0 0 19px;
}
.bundle-case h2 {
  font-size: clamp(30px, 4.1vw, 48px);
  font-weight: 550;
  letter-spacing: -0.04em;
  line-height: 1.12;
  margin: 0 0 24px;
}
.section-intro > p:not(.section-kicker),
.closing-reflection > p:last-child {
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0;
}
.bundle-case a {
  color: inherit;
}
.bundle-case p > a,
.bundle-case td a {
  color: #8dd5c4;
  text-decoration: underline;
  text-underline-offset: 3px;
}
:root[data-visual-theme="light"] .bundle-case p > a,
:root[data-visual-theme="light"] .bundle-case td a {
  color: #006b64;
}
.research-method {
  display: flex;
  gap: 24px;
  padding: 25px 0;
  border-top: 1px solid var(--color-border);
  margin-bottom: 35px;
}
.research-method > svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #8dd5c4;
}
.research-method h3 {
  font-size: 18px;
  font-weight: 550;
  margin: 0 0 12px;
}
.research-method p {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 850px;
  margin: 0 0 14px;
}
.research-method .method-detail {
  font-size: 12px;
  margin-bottom: 0;
  max-width: 800px;
}
.theme-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}
.theme-grid article {
  border-top: 1px solid var(--color-border-strong);
  padding-top: 20px;
}
.theme-grid article > span {
  font-size: 11px;
  color: var(--color-text-secondary);
}
.theme-grid h3 {
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 14px 0;
}
.theme-grid p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0 0 18px;
}
.theme-grid a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.research-pivot {
  border-left: 2px solid #78b39f;
  padding-left: 22px;
  margin: 45px 0 60px;
  max-width: 850px;
}
.research-pivot > span {
  font-size: 12px;
  font-weight: 650;
}
.research-pivot p {
  font-size: 17px;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 13px 0;
}
.evidence-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
}
.evidence-heading h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}
.evidence-heading p {
  font-size: 11px;
  color: var(--color-text-secondary);
  max-width: 370px;
  line-height: 1.7;
  margin: 0;
}
.evidence-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.evidence-grid figure {
  margin: 0;
  padding: 28px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 6px;
}
.evidence-grid figcaption {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: start;
}
.evidence-grid figcaption strong {
  font-size: 12px;
  font-weight: 600;
}
.evidence-grid figcaption a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: var(--color-text-secondary);
  text-align: right;
}
.evidence-grid blockquote {
  font-family: "Instrument Serif", Georgia, serif;
  font-size: 24px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 25px 0;
  color: var(--color-text);
}
.evidence-grid figure > p {
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}
.evidence-grid figure > p span {
  display: block;
  font-size: 10px;
  margin-bottom: 5px;
  color: var(--color-text);
}
.decision-band {
  background: #dbe9e1;
  color: #173f32;
  padding: 76px 0;
  color-scheme: light;
}
.decision-band .section-kicker {
  color: #466454;
}
.decision-band h2 {
  max-width: 900px;
}
.problem-statement {
  max-width: 750px;
  font-size: 20px;
  line-height: 1.6;
  color: #335547;
  margin: 30px 0 44px;
}
.decision-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
}
.decision-columns > div {
  border-top: 1px solid #aac2b2;
  padding-top: 18px;
}
.decision-columns h3 {
  font-size: 14px;
  font-weight: 650;
  margin: 0 0 12px;
}
.decision-columns p {
  font-size: 14px;
  line-height: 1.8;
  color: #335547;
  margin: 0;
}
.hypothesis {
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 36px;
  border-top: 1px solid #aac2b2;
  margin-top: 40px;
  padding-top: 24px;
}
.hypothesis > span {
  font-size: 11px;
}
.hypothesis p {
  font-size: 17px;
  line-height: 1.7;
  margin: 0;
}
.current-reference {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
  margin: 42px 0;
}
.reference-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  background: #112e30;
  padding: 25px;
  border-radius: 6px;
}
.reference-images figure {
  margin: 0;
}
.reference-images img {
  width: 100%;
  height: 310px;
  object-fit: contain;
  display: block;
}
.reference-images figcaption {
  font-size: 9px;
  line-height: 1.6;
  color: #c4d8d2;
  margin-top: 10px;
  text-align: center;
}
.reference-copy h3 {
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 18px 0;
}
.reference-copy p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0 0 18px;
}
.reference-copy .section-kicker {
  font-size: 10px;
}
.comparison-table {
  width: 100%;
  overflow-x: auto;
}
.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
  line-height: 1.75;
  min-width: 650px;
}
.comparison-table caption {
  text-align: left;
  font-size: 12px;
  margin-bottom: 18px;
  color: var(--color-text-secondary);
}
.comparison-table th,
.comparison-table td {
  padding: 18px 20px 18px 0;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}
.comparison-table thead th {
  font-size: 10px;
  color: var(--color-text-secondary);
  font-weight: 500;
  border-top: 1px solid var(--color-border-strong);
}
.comparison-table tbody th {
  font-weight: 500;
  width: 23%;
}
.comparison-table td {
  color: var(--color-text-secondary);
  width: 38%;
}
.prototype-section {
  padding-top: 90px;
}
.prototype-section .section-intro {
  margin-bottom: 42px;
}
.design-principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  padding: 30px 0 0;
}
.design-principles span {
  font-size: 12px;
  font-weight: 600;
}
.design-principles p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 10px 0 0;
}
.constraint-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 50px;
}
.constraint-grid article {
  border-top: 1px solid var(--color-border);
  padding-top: 20px;
}
.constraint-grid h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 0 0 12px;
}
.constraint-grid p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0;
}
.validation-band {
  padding: 86px 0;
  background: var(--color-surface);
}
.validation-plan {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  margin: 45px 0;
}
.plan-stage {
  font-size: 11px;
  color: var(--color-text-secondary);
}
.validation-plan h3,
.live-experiment h3 {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 15px 0;
}
.validation-plan p,
.live-experiment p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 12px 0;
}
.live-experiment {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 55px;
  margin-top: 48px;
}
.live-experiment strong {
  color: var(--color-text);
  font-weight: 550;
}
.live-experiment .honest-outcome {
  border-left: 2px solid #78b39f;
  padding-left: 18px;
  color: var(--color-text);
  margin-top: 25px;
}
.closing-reflection {
  max-width: 850px;
}
.closing-reflection > p:last-child {
  max-width: 750px;
}
.sources-section {
  padding-top: 80px;
}
.source-heading {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: end;
  margin-bottom: 30px;
}
.source-heading > p {
  max-width: 350px;
  font-size: 12px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0 0 24px;
}
.sources-section details {
  border-block: 1px solid var(--color-border);
  margin: 0 0 25px;
}
.sources-section summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 13px;
  cursor: pointer;
  list-style: none;
}
.sources-section summary::-webkit-details-marker {
  display: none;
}
.sources-section details[open] summary svg {
  transform: rotate(45deg);
}
.method-expanded {
  max-width: 850px;
  padding-bottom: 20px;
}
.method-expanded p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 10px 0;
}
.source-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 45px;
}
.source-list li {
  display: flex;
  gap: 17px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
  scroll-margin-top: 100px;
}
.source-id {
  font-size: 10px;
  color: var(--color-text-secondary);
  padding-top: 3px;
  min-width: 20px;
}
.source-list li > div {
  min-width: 0;
}
.source-list a {
  font-size: 12px;
  line-height: 1.6;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.source-list a svg {
  display: inline;
  vertical-align: middle;
}
.source-list li > div > span {
  font-size: 10px;
  display: block;
  color: var(--color-text-secondary);
  margin: 7px 0;
}
.source-list p {
  font-size: 11px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}
.bundle-case :is(a, button, summary):focus-visible {
  outline: 3px solid #b98111;
  outline-offset: 5px;
}
.bundle-case section[id] {
  scroll-margin-top: 90px;
}
@media (max-width: 900px) {
  .case-width {
    width: calc(100% - 48px);
  }
  .hero-topline > span:last-child {
    display: none;
  }
  .hero-intro {
    gap: 25px;
  }
  .hero-composition {
    grid-template-columns: 1.25fr 1fr;
  }
  .hero-products {
    gap: 9px;
    grid-template-columns: 1fr 15px 1fr;
  }
  .hero-products img {
    height: 230px;
  }
  .hero-finds {
    padding: 25px 20px;
  }
  .hero-receipt {
    padding: 25px 24px;
  }
  .composition-heading {
    display: block;
  }
  .composition-heading > span {
    display: block;
    margin-bottom: 8px;
  }
  .hero-products figcaption {
    flex-direction: column;
    gap: 5px;
  }
  .project-facts {
    grid-template-columns: 1fr 1fr;
  }
  .current-reference {
    gap: 28px;
  }
  .reference-images {
    padding: 15px;
    gap: 10px;
  }
  .reference-images img {
    height: 250px;
  }
  .theme-grid {
    gap: 20px;
  }
  .evidence-grid figure {
    padding: 22px;
  }
  .evidence-grid figcaption {
    display: block;
  }
  .evidence-grid figcaption a {
    margin-top: 9px;
  }
  .hypothesis {
    grid-template-columns: 180px 1fr;
  }
  .case-index {
    gap: 20px;
  }
  .source-list {
    gap: 0 25px;
  }
}
@media (max-width: 600px) {
  .case-width {
    width: calc(100% - 36px);
  }
  .bundle-hero {
    padding-top: 28px;
  }
  .back-link {
    margin-bottom: 35px;
  }
  .hero-topline {
    font-size: 10px;
    margin-bottom: 25px;
  }
  .bundle-hero h1 {
    font-size: 43px;
    line-height: 1.05;
  }
  .hero-intro {
    display: block;
    margin: 25px 0 32px;
  }
  .hero-intro > p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .outline-link {
    font-size: 12px;
    padding: 11px 15px;
  }
  .hero-composition {
    grid-template-columns: 1fr;
  }
  .hero-finds {
    padding: 22px;
  }
  .composition-heading {
    display: flex;
    font-size: 11px;
    margin-bottom: 18px;
  }
  .composition-heading > span:last-child {
    display: none;
  }
  .hero-products img {
    height: 200px;
  }
  .hero-products figcaption {
    flex-direction: row;
    font-size: 10px;
  }
  .hero-receipt {
    border-left: 0;
    border-top: 1px solid #bdd1c4;
    padding: 24px;
  }
  .hero-composition .hero-receipt h2 {
    font-size: 30px;
    margin: 10px 0 20px;
  }
  .hero-receipt h2 br {
    display: none;
  }
  .project-facts {
    gap: 24px 20px;
  }
  .project-facts dd {
    font-size: 11px;
  }
  .case-index {
    margin-top: 25px;
    gap: 16px 20px;
    padding-block: 20px;
  }
  .case-index a {
    font-size: 11px;
  }
  .story-block {
    padding-block: 60px;
  }
  .section-intro > p:not(.section-kicker),
  .closing-reflection > p:last-child {
    font-size: 14px;
  }
  .research-method {
    gap: 15px;
  }
  .research-method > svg {
    width: 18px;
  }
  .research-method p {
    font-size: 13px;
  }
  .theme-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .theme-grid h3 {
    font-size: 20px;
    margin-block: 9px;
  }
  .theme-grid p {
    margin-bottom: 12px;
  }
  .research-pivot {
    margin: 35px 0 45px;
  }
  .research-pivot p {
    font-size: 15px;
  }
  .evidence-heading {
    display: block;
  }
  .evidence-heading p {
    margin-top: 12px;
  }
  .evidence-grid {
    grid-template-columns: 1fr;
  }
  .evidence-grid blockquote {
    font-size: 24px;
  }
  .decision-band {
    padding-block: 55px;
  }
  .decision-columns {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .problem-statement {
    font-size: 17px;
    margin: 25px 0 35px;
  }
  .hypothesis {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .hypothesis p {
    font-size: 15px;
  }
  .current-reference {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .reference-images {
    padding: 20px;
    gap: 14px;
  }
  .reference-images img {
    height: 280px;
  }
  .comparison-table table {
    min-width: 620px;
    font-size: 12px;
  }
  .prototype-section {
    padding-top: 60px;
  }
  .design-principles {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .constraint-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .constraint-grid p {
    font-size: 13px;
  }
  .validation-band {
    padding-block: 60px;
  }
  .validation-plan {
    grid-template-columns: 1fr;
    gap: 25px;
    margin: 30px 0;
  }
  .validation-plan p,
  .live-experiment p {
    font-size: 13px;
  }
  .live-experiment {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 35px;
  }
  .sources-section {
    padding-top: 60px;
  }
  .source-heading {
    display: block;
  }
  .source-heading > p {
    margin-bottom: 25px;
    max-width: none;
  }
  .source-list {
    grid-template-columns: 1fr;
  }
  .sources-section summary {
    font-size: 12px;
  }
  .bundle-case {
    padding-bottom: 50px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .bundle-case * {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
</style>
