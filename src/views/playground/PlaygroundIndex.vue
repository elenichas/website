<template>
  <app-navbar />

  <main class="playground-page">
    <section class="playground-stage" aria-labelledby="playground-title">
      <p class="playground-kicker">Prototype playground</p>
      <h1 id="playground-title">What do you want to play with?</h1>

      <nav class="shape-links" aria-label="Open a playground prototype">
        <router-link
          v-for="experiment in experiments"
          :key="experiment.id"
          class="shape-link"
          :class="experiment.shape"
          :to="experiment.route"
          :aria-label="`Open ${experiment.title}`"
        >
          <span class="shape-mark" aria-hidden="true"></span>
          <span class="shape-copy">
            <strong>{{ experiment.question }}</strong>
            <small>{{ experiment.answerHint }}</small>
          </span>
        </router-link>
      </nav>
    </section>
  </main>

  <app-footer />
</template>

<script>
import { useHead } from "@vueuse/head";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  name: "PlaygroundIndex",
  components: {
    AppFooter,
    AppNavbar,
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
      experiments: [
        {
          id: "ai",
          shape: "circle",
          question: "Customize an AI assistant",
          answerHint: "Interface states, permissions, memory",
          title: "AI Interface Sandbox",
          route: "/playground/ai-sandbox",
        },
        {
          id: "vinted",
          shape: "triangle",
          question: "Explore sustainable fashion",
          answerHint: "Total cost, local discovery, bundles",
          title: "Vinted Smart Local Bundling",
          route: "/playground/vinted-smart-bundling",
        },
      ],
    };
  },
};
</script>

<style scoped>
.playground-page {
  background: var(--color-bg);
  color: var(--color-text);
  min-height: auto;
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1rem, 5vw, 5rem) clamp(2.5rem, 5vw, 4rem);
}

.playground-stage {
  display: grid;
  gap: clamp(1.25rem, 3vw, 2.4rem);
  margin: 0 auto;
  max-width: 1180px;
}

.playground-kicker {
  color: var(--color-text-muted);
  font-size: 0.74rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
}

.playground-stage h1 {
  font-size: clamp(2.7rem, 5.8vw, 5rem);
  font-weight: var(--weight-bold);
  letter-spacing: 0;
  line-height: 0.9;
  margin: 0;
  max-width: 14ch;
  text-transform: uppercase;
  text-wrap: balance;
}

.shape-links {
  align-items: end;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.2rem, 4vw, 3rem);
}

.shape-link {
  align-items: center;
  color: var(--color-text);
  display: inline-flex;
  gap: 1rem;
  min-width: min(100%, 20rem);
  text-decoration: none;
}

.shape-mark {
  animation: shapeIdle 2.6s var(--ease-out) infinite;
  background: #111111;
  display: inline-block;
  flex: 0 0 auto;
  transition:
    transform var(--duration-normal) var(--ease-out),
    background-color var(--duration-normal) var(--ease-out);
}

.shape-link.circle .shape-mark {
  border-radius: 50%;
  height: clamp(5.8rem, 12vw, 9rem);
  width: clamp(5.8rem, 12vw, 9rem);
}

.shape-link.triangle .shape-mark {
  animation-delay: 220ms;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  height: clamp(5.4rem, 11vw, 8.6rem);
  width: clamp(6.2rem, 12vw, 9.8rem);
}

.shape-link:hover .shape-mark,
.shape-link:focus-visible .shape-mark {
  background: #333333;
  transform: translateY(-4px) rotate(-2deg);
}

.shape-copy strong,
.shape-copy small {
  display: block;
}

.shape-copy strong {
  font-size: clamp(1.05rem, 1.8vw, 1.5rem);
  line-height: 1.12;
  max-width: 12rem;
}

.shape-copy small {
  color: var(--color-text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
  margin-top: 0.45rem;
  max-width: 13rem;
}

@media (max-width: 700px) {
  .playground-page {
    padding-top: 2.4rem;
  }

  .shape-links {
    align-items: stretch;
    flex-direction: column;
  }

  .shape-link {
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shape-mark {
    animation: none;
    transition-duration: 1ms;
  }
}

@keyframes shapeIdle {
  0%,
  78%,
  100% {
    transform: translateY(0);
  }
  86% {
    transform: translateY(-8px);
  }
  92% {
    transform: translateY(2px);
  }
}
</style>
