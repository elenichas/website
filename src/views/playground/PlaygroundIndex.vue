<template>
  <app-navbar />

  <main class="playground-page">
    <section class="playground-hero" aria-labelledby="playground-title">
      <div class="hero-copy">
        <p class="playground-kicker">Prototype playground</p>
        <h1 id="playground-title">What do you want to test today?</h1>
        <p>
          Pick a tiny product dilemma and I will send you to the experiment that
          matches your mood.
        </p>
      </div>

      <div class="question-panel" aria-label="Choose a prototype">
        <button
          v-for="experiment in experiments"
          :key="experiment.id"
          class="answer-button"
          type="button"
          :class="{ selected: selectedId === experiment.id }"
          @click="selectExperiment(experiment.id)"
        >
          <span class="answer-icon">
            <component :is="experiment.icon" :size="20" />
          </span>
          <span>
            <strong>{{ experiment.question }}</strong>
            <small>{{ experiment.answerHint }}</small>
          </span>
        </button>

        <button class="shuffle-button" type="button" @click="shuffleExperiment">
          <Shuffle :size="15" />
          Shuffle my experiment
        </button>
      </div>
    </section>

    <transition name="recommendation" mode="out-in">
      <section :key="selectedExperiment.id" class="recommendation" aria-live="polite">
        <div class="recommendation-copy">
          <p class="playground-kicker">Recommended experiment</p>
          <h2>{{ selectedExperiment.title }}</h2>
          <p>{{ selectedExperiment.description }}</p>
          <div class="tag-row" aria-label="Prototype qualities">
            <span v-for="tag in selectedExperiment.tags" :key="tag">{{ tag }}</span>
          </div>
          <router-link class="launch-link" :to="selectedExperiment.route">
            Open prototype
            <ArrowRight :size="16" />
          </router-link>
        </div>

        <router-link class="preview-card" :to="selectedExperiment.route" :aria-label="`Open ${selectedExperiment.title}`">
          <component :is="selectedExperiment.preview" />
        </router-link>
      </section>
    </transition>

    <section class="alternate-row" aria-label="Other playground prototype">
      <p>Or keep the other door open.</p>
      <router-link :to="alternateExperiment.route">
        {{ alternateExperiment.title }}
        <ArrowRight :size="14" />
      </router-link>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  ArrowRight,
  Bot,
  Check,
  Heart,
  Home,
  MapPin,
  PackagePlus,
  Search,
  ShieldCheck,
  Shuffle,
  ShoppingBag,
  Sparkles,
} from "lucide-vue-next";
import { useHead } from "@vueuse/head";
import { markRaw } from "vue";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

const AIPreview = {
  name: "AIPreview",
  components: { Bot, Check, ShieldCheck, Sparkles },
  template: `
    <div class="ai-preview" aria-hidden="true">
      <div class="mini-window">
        <div class="mini-toolbar">
          <span></span><span></span><span></span>
        </div>
        <div class="mini-message user">Review this launch note.</div>
        <div class="mini-message assistant">
          <Bot :size="15" />
          <span>I can help, but two claims need confirmation.</span>
        </div>
        <div class="mini-checklist">
          <span><Check :size="11" /> Scoped files only</span>
          <span><ShieldCheck :size="11" /> Approval before write</span>
          <span><Sparkles :size="11" /> Suggested next step</span>
        </div>
      </div>
    </div>
  `,
};

const VintedPreview = {
  name: "VintedPreview",
  components: { Heart, Home, MapPin, PackagePlus, Search, ShoppingBag },
  template: `
    <div class="vinted-preview" aria-hidden="true">
      <div class="phone-mini">
        <div class="search-pill"><Search :size="12" /> yellow cotton t-shirt</div>
        <div class="mini-tabs"><span>Total cost</span><span>Home delivery</span></div>
        <div class="listing-grid">
          <div class="listing-card teal">
            <span class="photo"></span>
            <strong>£6.99 total</strong>
            <small><MapPin :size="10" /> East London</small>
          </div>
          <div class="listing-card coral">
            <span class="photo"></span>
            <strong>£8.29 total</strong>
            <small><Heart :size="10" /> Saved</small>
          </div>
        </div>
        <div class="bundle-strip"><PackagePlus :size="13" /> Add 2 items, save £3.20</div>
        <div class="bottom-nav"><Home :size="13" /><Search :size="13" /><ShoppingBag :size="13" /></div>
      </div>
    </div>
  `,
};

export default {
  name: "PlaygroundIndex",
  components: {
    AppFooter,
    AppNavbar,
    ArrowRight,
    Bot,
    Shuffle,
    ShoppingBag,
  },
  setup() {
    useHead({
      title: "Playground - Eleni Chasioti",
      meta: [
        {
          name: "description",
          content: "Interactive product prototypes exploring AI boundaries and marketplace decision-making.",
        },
      ],
    });
  },
  data() {
    return {
      selectedId: "vinted",
      experiments: [
        {
          id: "ai",
          icon: "Bot",
          preview: markRaw(AIPreview),
          question: "Can an AI assistant help without overstepping?",
          answerHint: "Test uncertainty, permissions, memory, and user control.",
          title: "AI Interface Sandbox",
          description:
            "A launch-review assistant where every product decision changes what the interface reveals, asks, or refuses to do.",
          route: "/playground/ai-sandbox",
          tags: ["AI UX", "Permissions", "Trust states"],
        },
        {
          id: "vinted",
          icon: "ShoppingBag",
          preview: markRaw(VintedPreview),
          question: "Can a £4 bargain secretly cost more?",
          answerHint: "Sort second-hand listings by the real purchase cost.",
          title: "Vinted Smart Local Bundling",
          description:
            "A speculative marketplace prototype that makes delivery cost, privacy-safe distance, and bundle savings visible before checkout.",
          route: "/playground/vinted-smart-bundling",
          tags: ["Marketplace UX", "Mock data", "Smart bundling"],
        },
      ],
    };
  },
  computed: {
    selectedExperiment() {
      return this.experiments.find((experiment) => experiment.id === this.selectedId) || this.experiments[0];
    },
    alternateExperiment() {
      return this.experiments.find((experiment) => experiment.id !== this.selectedId) || this.experiments[0];
    },
  },
  methods: {
    selectExperiment(id) {
      this.selectedId = id;
    },
    shuffleExperiment() {
      this.selectedId = this.alternateExperiment.id;
    },
  },
};
</script>

<style scoped>
.playground-page {
  background:
    radial-gradient(circle at 13% 8%, rgba(0, 128, 128, 0.12), transparent 26rem),
    linear-gradient(135deg, #fbfaf7 0%, #f1f6f4 58%, #f8f3ec 100%);
  color: #111;
  min-height: 100vh;
  padding: clamp(2.4rem, 5vw, 5.5rem) clamp(1rem, 5vw, 5rem) clamp(4rem, 7vw, 7rem);
}

.playground-hero,
.recommendation,
.alternate-row {
  margin: 0 auto;
  max-width: 1180px;
}

.playground-hero {
  align-items: end;
  display: grid;
  gap: clamp(1.5rem, 4vw, 4rem);
  grid-template-columns: minmax(0, 1.08fr) minmax(21rem, 0.72fr);
}

.playground-kicker {
  color: #006d67;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 0.8rem;
}

.hero-copy h1 {
  font-size: clamp(3.2rem, 7vw, 6rem);
  line-height: 0.95;
  margin: 0;
  max-width: 12ch;
  text-wrap: balance;
}

.hero-copy p:not(.playground-kicker),
.recommendation-copy p,
.alternate-row p {
  color: #4d5957;
  font-size: clamp(1rem, 1.45vw, 1.18rem);
  line-height: 1.55;
  margin: 1.25rem 0 0;
  max-width: 38rem;
}

.question-panel {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  box-shadow: 0 8px 26px rgba(17, 32, 30, 0.08);
  display: grid;
  gap: 0.75rem;
  padding: 0.85rem;
}

.answer-button,
.shuffle-button,
.launch-link,
.alternate-row a {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
}

.answer-button {
  background: #f7faf9;
  border: 1px solid #dce8e5;
  border-radius: 10px;
  color: #10201e;
  gap: 0.8rem;
  padding: 1rem;
  text-align: left;
  transition: background 180ms var(--ease-out), border-color 180ms var(--ease-out), transform 180ms var(--ease-out);
  width: 100%;
}

.answer-button:hover,
.answer-button.selected {
  background: #e8f8f4;
  border-color: #008c84;
  transform: translateY(-1px);
}

.answer-icon {
  align-items: center;
  background: #ffffff;
  border: 1px solid #d6e5e2;
  border-radius: 8px;
  color: #007782;
  display: inline-flex;
  flex: 0 0 auto;
  height: 2.65rem;
  justify-content: center;
  width: 2.65rem;
}

.answer-button strong,
.answer-button small {
  display: block;
}

.answer-button strong {
  font-size: 1rem;
  line-height: 1.25;
}

.answer-button small {
  color: #5e6a68;
  font-size: 0.78rem;
  line-height: 1.45;
  margin-top: 0.28rem;
}

.shuffle-button {
  background: #111;
  border: 1px solid #111;
  border-radius: 8px;
  color: #fff;
  gap: 0.45rem;
  justify-content: center;
  padding: 0.78rem 1rem;
}

.recommendation {
  align-items: center;
  display: grid;
  gap: clamp(1.25rem, 4vw, 3rem);
  grid-template-columns: minmax(0, 0.85fr) minmax(20rem, 1fr);
  margin-top: clamp(2rem, 5vw, 4.5rem);
}

.recommendation-copy h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.02;
  margin: 0;
  max-width: 11ch;
  text-wrap: balance;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.tag-row span {
  background: rgba(0, 124, 116, 0.09);
  border: 1px solid rgba(0, 124, 116, 0.18);
  border-radius: 999px;
  color: #005f5a;
  font-size: 0.78rem;
  padding: 0.35rem 0.65rem;
}

.launch-link,
.alternate-row a {
  background: #007782;
  border: 1px solid #007782;
  border-radius: 8px;
  color: #fff;
  gap: 0.45rem;
  margin-top: 1.5rem;
  padding: 0.78rem 1rem;
  width: max-content;
}

.preview-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  color: inherit;
  min-height: 30rem;
  overflow: hidden;
  position: relative;
}

.alternate-row {
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  margin-top: clamp(2.5rem, 6vw, 5rem);
  padding-top: 1rem;
}

.alternate-row p {
  margin: 0;
}

.alternate-row a {
  background: transparent;
  color: #111;
  margin-top: 0;
}

:deep(.ai-preview),
:deep(.vinted-preview) {
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 30rem;
  justify-content: center;
  padding: 1.5rem;
}

:deep(.ai-preview) {
  background: #eee8dc;
}

:deep(.mini-window) {
  background: #fbfaf7;
  border: 1px solid #d8d1c5;
  box-shadow: 0 12px 34px rgba(42, 35, 26, 0.12);
  max-width: 24rem;
  padding: 0.85rem;
  width: 100%;
}

:deep(.mini-toolbar) {
  border-bottom: 1px solid #e5ded2;
  display: flex;
  gap: 0.32rem;
  padding-bottom: 0.65rem;
}

:deep(.mini-toolbar span) {
  background: #b7ad9f;
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
}

:deep(.mini-message) {
  border: 1px solid #ddd6ca;
  color: #403d38;
  font-size: 0.78rem;
  line-height: 1.45;
  margin-top: 0.8rem;
  padding: 0.7rem;
}

:deep(.mini-message.user) {
  background: #e7e0d4;
  margin-left: auto;
  max-width: 70%;
}

:deep(.mini-message.assistant) {
  align-items: flex-start;
  background: #fff;
  display: flex;
  gap: 0.5rem;
}

:deep(.mini-checklist) {
  display: grid;
  gap: 0.45rem;
  margin-top: 0.8rem;
}

:deep(.mini-checklist span) {
  align-items: center;
  background: #f2efe8;
  color: #5a554d;
  display: flex;
  font-size: 0.68rem;
  gap: 0.4rem;
  padding: 0.5rem;
}

:deep(.vinted-preview) {
  background: linear-gradient(160deg, #e4fbf7, #fff7ed);
}

:deep(.phone-mini) {
  background: #f6f6f6;
  border: 8px solid #142522;
  border-radius: 30px;
  box-shadow: 0 18px 44px rgba(0, 59, 56, 0.18);
  max-width: 19rem;
  min-height: 25rem;
  overflow: hidden;
  padding: 0.75rem;
  width: 100%;
}

:deep(.search-pill) {
  align-items: center;
  background: #fff;
  border: 1px solid #dce3e1;
  border-radius: 999px;
  color: #586461;
  display: flex;
  font-size: 0.72rem;
  gap: 0.4rem;
  padding: 0.56rem 0.7rem;
}

:deep(.mini-tabs) {
  display: flex;
  gap: 0.4rem;
  margin: 0.7rem 0;
}

:deep(.mini-tabs span) {
  background: #e5f6f2;
  border: 1px solid #bee7df;
  border-radius: 999px;
  color: #007782;
  font-size: 0.62rem;
  padding: 0.35rem 0.5rem;
}

:deep(.listing-grid) {
  display: grid;
  gap: 0.55rem;
  grid-template-columns: 1fr 1fr;
}

:deep(.listing-card) {
  background: #fff;
  border: 1px solid #e0e5e3;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 0.5rem;
}

:deep(.photo) {
  display: block;
  height: 5.2rem;
}

:deep(.listing-card.teal .photo) {
  background: linear-gradient(140deg, #f4d642 0 52%, #0a8d83 52%);
}

:deep(.listing-card.coral .photo) {
  background: linear-gradient(140deg, #f4d642 0 45%, #ef8c76 45%);
}

:deep(.listing-card strong),
:deep(.listing-card small) {
  display: block;
  padding: 0 0.48rem;
}

:deep(.listing-card strong) {
  color: #1f2826;
  font-size: 0.72rem;
  margin-top: 0.45rem;
}

:deep(.listing-card small) {
  align-items: center;
  color: #6b7472;
  display: flex;
  font-size: 0.58rem;
  gap: 0.22rem;
  margin-top: 0.16rem;
}

:deep(.bundle-strip) {
  align-items: center;
  background: #007782;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-size: 0.72rem;
  gap: 0.42rem;
  margin-top: 0.7rem;
  padding: 0.65rem;
}

:deep(.bottom-nav) {
  align-items: center;
  background: #fff;
  border-top: 1px solid #e1e7e5;
  color: #007782;
  display: flex;
  justify-content: space-around;
  margin: 0.8rem -0.75rem -0.75rem;
  padding: 0.7rem;
}

.recommendation-enter-active,
.recommendation-leave-active {
  transition: opacity 260ms var(--ease-out), transform 260ms var(--ease-out);
}

.recommendation-enter-from,
.recommendation-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 860px) {
  .playground-page {
    padding-top: 3rem;
  }

  .playground-hero,
  .recommendation {
    grid-template-columns: 1fr;
  }

  .preview-card {
    min-height: 24rem;
  }

  .alternate-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 560px) {
  .hero-copy h1 {
    font-size: clamp(2.8rem, 17vw, 4.3rem);
  }

  .question-panel {
    border-radius: 12px;
  }

  .answer-button {
    align-items: flex-start;
    padding: 0.85rem;
  }

  .answer-icon {
    height: 2.3rem;
    width: 2.3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .answer-button,
  .recommendation-enter-active,
  .recommendation-leave-active {
    transition-duration: 1ms;
  }
}
</style>
