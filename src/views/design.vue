<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">{{ $t("craft.title") }}</h1>
          <p class="page-subtitle">{{ $t("craft.subtitle") }}</p>
        </div>
      </header>

      <div class="section-intro">
        <p class="section-eyebrow">{{ $t("craft.productEyebrow") }}</p>
        <h2 class="section-heading">{{ $t("craft.productTitle") }}</h2>
      </div>

      <!-- Product Design Section -->
      <section class="projects-section">
        <div class="projects-grid">
          <article v-for="(project, index) in uxuiImages" :key="index" class="project-card">
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <div
                  class="poster-animation"
                  :class="`poster-${project.animation}`"
                  role="img"
                  :aria-label="project.alt"
                >
                  <div class="poster-topline">
                    <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    <span>{{ project.type }}</span>
                  </div>
                  <h3 class="poster-title">{{ project.posterTitle || project.title }}</h3>
                  <div class="poster-stage" aria-hidden="true">
                    <span class="poster-shape shape-a"></span>
                    <span class="poster-shape shape-b"></span>
                    <span class="poster-shape shape-c"></span>
                    <span class="poster-shape shape-d"></span>
                    <span class="poster-shape shape-e"></span>
                    <span class="poster-line line-a"></span>
                    <span class="poster-line line-b"></span>
                    <span class="poster-line line-c"></span>
                  </div>
                  <div class="poster-footer">
                    <span>{{ project.posterMark }}</span>
                    <span>{{ project.posterYear }}</span>
                  </div>
                </div>
                <div class="project-overlay">
                  <span class="view-project">{{ $t("common.viewProject") }}</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">{{ project.type }}</p>
              </div>
            </router-link>
          </article>
        </div>
      </section>

      <!-- System Design Section -->
      <section class="projects-section">
        <div class="section-header">
          <p class="section-eyebrow">{{ $t("craft.systemEyebrow") }}</p>
          <h2 class="section-heading">{{ $t("products.systemDesign") }}</h2>
          <p class="section-description">{{ $t("products.systemDescription") }}</p>
        </div>

        <div class="projects-grid">
          <article v-for="(project, index) in architectureImages" :key="index" class="project-card">
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <div
                  class="poster-animation"
                  :class="`poster-${project.animation}`"
                  role="img"
                  :aria-label="project.alt"
                >
                  <div class="poster-topline">
                    <span>{{ String(index + 7).padStart(2, '0') }}</span>
                    <span>{{ project.type }}</span>
                  </div>
                  <h3 class="poster-title">{{ project.posterTitle || project.title }}</h3>
                  <div class="poster-stage" aria-hidden="true">
                    <span class="poster-shape shape-a"></span>
                    <span class="poster-shape shape-b"></span>
                    <span class="poster-shape shape-c"></span>
                    <span class="poster-shape shape-d"></span>
                    <span class="poster-shape shape-e"></span>
                    <span class="poster-line line-a"></span>
                    <span class="poster-line line-b"></span>
                    <span class="poster-line line-c"></span>
                  </div>
                  <div class="poster-footer">
                    <span>{{ project.posterMark }}</span>
                    <span>{{ project.posterYear }}</span>
                  </div>
                </div>
                <div class="project-overlay">
                  <span class="view-project">{{ $t("common.viewProject") }}</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">{{ project.type }}</p>
              </div>
            </router-link>
          </article>
        </div>
      </section>

      <engineering-projects />
    </div>

    <app-footer></app-footer>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import EngineeringProjects from "../components/EngineeringProjects.vue";

export default {
  name: "Design",
  components: {
    AppNavbar,
    AppFooter,
    EngineeringProjects,
  },
  computed: {
    architectureImages() {
      const items = this.$t("products.items");

      return [
        {
          ...items.hapi,
          animation: "hapi-system",
          route: "/products/hapi-project",
        },
        {
          ...items.thesis,
          animation: "thesis-framework",
          route: "/products/thesis-project",
        },
        {
          ...items.workshop,
          animation: "workshop-futures",
          route: "/products/workshop-design",
        },
      ];
    },
    uxuiImages() {
      const items = this.$t("products.items");

      return [
        {
          ...items.coach,
          animation: "coach-catalog",
          route: "/products/coach-verification-app",
        },
        {
          ...items.industrial,
          animation: "industrial-configurator",
          route: "/products/industrial-configurator",
        },
        {
          ...items.moon,
          animation: "moon-configurator",
          route: "/products/lunar-app",
        },
        {
          ...items.language,
          animation: "language-learning",
          route: "/products/language-learning-app",
        },
        {
          ...items.filos,
          animation: "filos-mobile",
          route: "/products/filos-mobile-app",
        },
        {
          ...items.bakery,
          animation: "bakery-mobile",
          route: "/products/brew-crumb",
        },
      ];
    },
  },
};
</script>

<style scoped>
/* ===== PRODUCTS PAGE - Editorial Glass ===== */
.page-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-20) var(--space-8);
}

/* Page Header */
.page-header {
  margin-bottom: var(--space-8);
  text-align: left;
  border-bottom: 0;
  padding-bottom: 0;
}

.header-content {
  max-width: 900px;
}

.page-title {
  font-family: var(--font-sans);
  font-size: clamp(4rem, 9vw, 6rem);
  font-weight: var(--weight-bold);
  font-style: normal;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: 0;
  line-height: 0.95;
  text-transform: uppercase;
}

.page-subtitle {
  max-width: 34rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* Section Headers */
.projects-section {
  margin-bottom: var(--space-16);
}

.section-intro,
.section-header {
  margin-bottom: var(--space-10);
  text-align: left;
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-8);
}

.section-intro {
  border-top: 0;
  padding-top: 0;
}

.section-eyebrow {
  margin: 0 0 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading {
  max-width: 46rem;
  margin: 0 0 0.5rem;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: clamp(2rem, 5vw, 4.5rem);
  font-weight: var(--weight-bold);
  letter-spacing: -0.06em;
  line-height: 0.98;
  text-transform: uppercase;
}

.section-description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
  gap: var(--space-6);
}

/* Project Cards - borderless, image-forward */
.project-card {
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}

.project-card:hover {
  transform: translateY(-3px);
}

.project-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* Project Images */
.project-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--color-accent-soft);
  border-radius: 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

.poster-animation {
  --poster-bg: #f3f2ea;
  --poster-ink: #111111;
  --poster-muted: rgba(17, 17, 17, 0.48);
  --poster-red: #e54832;
  --poster-blue: #24539a;
  --poster-green: #2d7148;
  --poster-yellow: #dfa030;
  --poster-pink: #e7a0ae;
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: clamp(1rem, 2.4vw, 1.35rem);
  overflow: hidden;
  background: var(--poster-bg);
  background-size: auto;
  color: var(--poster-ink);
  isolation: isolate;
  border-radius: 0;
}

.poster-animation::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(17, 17, 17, 0.08);
  pointer-events: none;
  z-index: 4;
}

.poster-animation::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 38%;
  background: linear-gradient(180deg, transparent, rgba(17, 17, 17, 0.05));
  pointer-events: none;
  z-index: 1;
}

.poster-topline,
.poster-footer {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  color: var(--poster-muted);
  font-size: clamp(0.5rem, 1.1vw, 0.64rem);
  font-weight: var(--weight-semibold);
  line-height: 1.15;
  text-transform: uppercase;
}

.poster-topline span:last-child,
.poster-footer span:first-child {
  max-width: 12rem;
  text-align: right;
}

.poster-title {
  position: absolute;
  z-index: 3;
  top: 18%;
  left: clamp(1rem, 2.4vw, 1.35rem);
  right: clamp(1rem, 2.4vw, 1.35rem);
  color: var(--poster-ink);
  font-family: var(--font-sans);
  font-size: clamp(2.75rem, 7.3vw, 5.6rem);
  font-weight: var(--weight-bold);
  line-height: 0.84;
  letter-spacing: 0;
  text-transform: uppercase;
  word-break: break-word;
}

.poster-stage {
  position: absolute;
  inset: 24% 7% 13%;
  z-index: 2;
  transform-origin: center;
  transition: transform 700ms var(--ease-out);
}

.poster-card:hover .poster-stage,
.project-card:hover .poster-stage {
  transform: translateY(-0.25rem) scale(1.02);
}

.poster-shape,
.poster-line {
  position: absolute;
  display: block;
}

.poster-shape {
  background: var(--poster-red);
  border: 0.28rem solid var(--poster-ink);
  animation: posterFloat 6.4s var(--ease-in-out) infinite;
}

.poster-line {
  height: 0.34rem;
  border-radius: 999px;
  background: var(--poster-ink);
  transform-origin: left center;
  animation: posterLineSweep 5.6s var(--ease-in-out) infinite;
}

.poster-coach-catalog {
  --poster-red: #bd6f38;
  --poster-blue: #18362d;
  --poster-green: #6c4a31;
  --poster-yellow: #d8a55a;
}

.poster-coach-catalog .poster-title {
  top: 12%;
}

.poster-coach-catalog .shape-a,
.poster-coach-catalog .shape-b,
.poster-coach-catalog .shape-c,
.poster-coach-catalog .shape-d {
  width: 22%;
  height: 30%;
  border-radius: 0.6rem 0.6rem 1rem 1rem;
  background: var(--poster-yellow);
}

.poster-coach-catalog .shape-a { left: 4%; top: 42%; animation-delay: 0s; }
.poster-coach-catalog .shape-b { left: 30%; top: 52%; background: var(--poster-red); animation-delay: 0.3s; }
.poster-coach-catalog .shape-c { right: 24%; top: 38%; background: var(--poster-green); animation-delay: 0.6s; }
.poster-coach-catalog .shape-d { right: 0; top: 56%; background: #111; animation-delay: 0.9s; }
.poster-coach-catalog .shape-e {
  right: 3%;
  bottom: 2%;
  width: 35%;
  height: 20%;
  border-radius: var(--radius-sm);
  background: #fff;
  border-color: var(--poster-ink);
}
.poster-coach-catalog .line-a { right: 9%; bottom: 16%; width: 22%; }
.poster-coach-catalog .line-b { right: 9%; bottom: 10%; width: 15%; animation-delay: 0.3s; }

.poster-industrial-configurator .shape-a {
  left: 3%;
  top: 40%;
  width: 58%;
  height: 24%;
  border-radius: 999px;
  background: var(--poster-ink);
}
.poster-industrial-configurator .shape-b {
  right: 4%;
  top: 36%;
  width: 42%;
  height: 36%;
  transform: rotate(-18deg);
  background: transparent;
}
.poster-industrial-configurator .shape-c,
.poster-industrial-configurator .shape-d,
.poster-industrial-configurator .shape-e {
  width: 14%;
  aspect-ratio: 1;
  border-radius: 50%;
  border-width: 0.22rem;
}
.poster-industrial-configurator .shape-c { left: 18%; top: 28%; background: var(--poster-blue); }
.poster-industrial-configurator .shape-d { left: 45%; top: 52%; background: var(--poster-yellow); animation-delay: 0.4s; }
.poster-industrial-configurator .shape-e { right: 13%; top: 24%; background: var(--poster-red); animation-delay: 0.8s; }
.poster-industrial-configurator .line-a { left: 16%; top: 49%; width: 62%; transform: rotate(18deg); }
.poster-industrial-configurator .line-b { left: 24%; top: 61%; width: 45%; transform: rotate(-12deg); animation-delay: 0.4s; }

.poster-moon-configurator {
  --poster-bg: #eeece3;
  --poster-red: #f05a28;
  --poster-blue: #3f94ce;
  --poster-yellow: #f2bd42;
}
.poster-moon-configurator .shape-a {
  left: -12%;
  bottom: 0;
  width: 82%;
  height: 55%;
  border-radius: 50% 50% 0 0;
  background: var(--poster-yellow);
}
.poster-moon-configurator .shape-b,
.poster-moon-configurator .shape-c,
.poster-moon-configurator .shape-d,
.poster-moon-configurator .shape-e {
  width: 18%;
  aspect-ratio: 1;
  border-radius: 50%;
}
.poster-moon-configurator .shape-b { left: 36%; top: 38%; background: var(--poster-blue); }
.poster-moon-configurator .shape-c { right: 19%; top: 31%; background: var(--poster-red); animation-delay: 0.4s; }
.poster-moon-configurator .shape-d { right: 5%; top: 54%; background: #fff; animation-delay: 0.8s; }
.poster-moon-configurator .shape-e { left: 58%; bottom: 2%; background: var(--poster-ink); animation-delay: 1.1s; }
.poster-moon-configurator .line-a { left: 44%; top: 48%; width: 42%; transform: rotate(22deg); }
.poster-moon-configurator .line-b { left: 52%; top: 58%; width: 33%; transform: rotate(-16deg); animation-delay: 0.4s; }

.poster-language-learning .poster-title {
  font-size: clamp(2.25rem, 6.6vw, 4.8rem);
}
.poster-language-learning .shape-a {
  left: 3%;
  bottom: 11%;
  width: 78%;
  height: 35%;
  border-radius: 0.8rem;
  background: var(--poster-ink);
}
.poster-language-learning .shape-b,
.poster-language-learning .shape-c,
.poster-language-learning .shape-d {
  width: 21%;
  aspect-ratio: 1;
  border-radius: 50%;
  border-width: 0;
}
.poster-language-learning .shape-b { right: 8%; top: 43%; background: var(--poster-yellow); }
.poster-language-learning .shape-c { left: 13%; bottom: 20%; background: var(--poster-red); animation-delay: 0.4s; }
.poster-language-learning .shape-d { left: 39%; bottom: 20%; background: var(--poster-blue); animation-delay: 0.7s; }
.poster-language-learning .shape-e {
  right: 5%;
  bottom: 12%;
  width: 22%;
  height: 35%;
  border-radius: var(--radius-sm);
  background: var(--poster-yellow);
}
.poster-language-learning .line-a { left: 12%; bottom: 31%; width: 42%; background: #fff; }
.poster-language-learning .line-b { left: 12%; bottom: 24%; width: 28%; background: #fff; animation-delay: 0.5s; }

.poster-filos-mobile .shape-a,
.poster-bakery-mobile .shape-a {
  left: 34%;
  top: 28%;
  width: 32%;
  height: 58%;
  border-radius: 1.6rem;
  background: #f8f8f2;
}
.poster-filos-mobile .shape-b,
.poster-filos-mobile .shape-c,
.poster-filos-mobile .shape-d {
  border-width: 0;
  border-radius: 50%;
}
.poster-filos-mobile .shape-b { left: 18%; top: 43%; width: 26%; aspect-ratio: 1; background: var(--poster-blue); }
.poster-filos-mobile .shape-c { right: 18%; top: 43%; width: 26%; aspect-ratio: 1; background: var(--poster-pink); animation-delay: 0.45s; }
.poster-filos-mobile .shape-d { left: 42%; bottom: 17%; width: 16%; aspect-ratio: 1; background: var(--poster-green); animation-delay: 0.9s; }
.poster-filos-mobile .line-a { left: 28%; top: 56%; width: 45%; transform: rotate(-18deg); }
.poster-filos-mobile .line-b { left: 35%; top: 65%; width: 31%; transform: rotate(22deg); animation-delay: 0.4s; }

.poster-bakery-mobile {
  --poster-red: #d6472f;
  --poster-green: #315f3b;
  --poster-yellow: #e3a63c;
  --poster-pink: #f0b5bf;
}
.poster-bakery-mobile .shape-b,
.poster-bakery-mobile .shape-c,
.poster-bakery-mobile .shape-d,
.poster-bakery-mobile .shape-e {
  border-width: 0;
  border-radius: 999px 999px 0.6rem 0.6rem;
}
.poster-bakery-mobile .shape-b { left: 21%; bottom: 15%; width: 28%; height: 36%; background: var(--poster-red); }
.poster-bakery-mobile .shape-c { left: 43%; bottom: 15%; width: 28%; height: 47%; background: var(--poster-yellow); animation-delay: 0.35s; }
.poster-bakery-mobile .shape-d { right: 16%; bottom: 15%; width: 24%; height: 30%; background: var(--poster-pink); animation-delay: 0.7s; }
.poster-bakery-mobile .shape-e { left: 28%; bottom: 11%; width: 50%; height: 16%; background: var(--poster-ink); }
.poster-bakery-mobile .line-a { left: 40%; top: 41%; width: 20%; transform: rotate(90deg); }

.poster-hapi-system .shape-a,
.poster-hapi-system .shape-b,
.poster-hapi-system .shape-c,
.poster-hapi-system .shape-d,
.poster-hapi-system .shape-e {
  width: 28%;
  height: 28%;
  border-radius: var(--radius-sm);
}
.poster-hapi-system .shape-a { left: 9%; top: 33%; background: var(--poster-red); }
.poster-hapi-system .shape-b { left: 35%; top: 33%; background: var(--poster-blue); animation-delay: 0.25s; }
.poster-hapi-system .shape-c { left: 61%; top: 33%; background: var(--poster-yellow); animation-delay: 0.5s; }
.poster-hapi-system .shape-d { left: 22%; bottom: 10%; background: var(--poster-green); animation-delay: 0.75s; }
.poster-hapi-system .shape-e { left: 48%; bottom: 10%; background: #fff; animation-delay: 1s; }

.poster-thesis-framework .shape-a {
  left: 11%;
  top: 29%;
  width: 78%;
  height: 58%;
  border-radius: 50%;
  background: transparent;
}
.poster-thesis-framework .shape-b,
.poster-thesis-framework .shape-c,
.poster-thesis-framework .shape-d {
  border-width: 0;
  border-radius: 50%;
  mix-blend-mode: multiply;
  opacity: 0.9;
}
.poster-thesis-framework .shape-b { left: 19%; top: 36%; width: 42%; aspect-ratio: 1; background: rgba(63, 148, 206, 0.78); }
.poster-thesis-framework .shape-c { right: 15%; top: 38%; width: 42%; aspect-ratio: 1; background: rgba(229, 72, 50, 0.78); animation-delay: 0.5s; }
.poster-thesis-framework .shape-d { left: 31%; bottom: 10%; width: 42%; aspect-ratio: 1; background: rgba(223, 160, 48, 0.78); animation-delay: 1s; }
.poster-thesis-framework .line-a { left: 10%; top: 51%; width: 80%; }
.poster-thesis-framework .line-b { left: 20%; top: 67%; width: 60%; animation-delay: 0.4s; }

.poster-workshop-futures .shape-a {
  left: 5%;
  top: 33%;
  width: 90%;
  height: 22%;
  border-radius: 999px;
  background: var(--poster-ink);
}
.poster-workshop-futures .shape-b {
  left: 5%;
  top: 58%;
  width: 90%;
  height: 22%;
  border-radius: 999px;
  background: var(--poster-ink);
  animation-delay: 0.35s;
}
.poster-workshop-futures .shape-c {
  left: 13%;
  top: 35%;
  width: 27%;
  height: 18%;
  border-radius: 999px;
  background: var(--poster-blue);
  border-width: 0;
}
.poster-workshop-futures .shape-d {
  right: 13%;
  top: 60%;
  width: 27%;
  height: 18%;
  border-radius: 999px;
  background: var(--poster-red);
  border-width: 0;
  animation-delay: 0.5s;
}
.poster-workshop-futures .shape-e {
  left: 5%;
  bottom: 4%;
  width: 38%;
  height: 18%;
  background: var(--poster-yellow);
}
.poster-workshop-futures .line-a { left: 14%; top: 46%; width: 72%; background: #fff; }
.poster-workshop-futures .line-b { left: 14%; top: 71%; width: 72%; background: #fff; animation-delay: 0.3s; }

.project-card:hover .poster-shape {
  animation-play-state: paused;
}

@keyframes posterFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-0.45rem) rotate(1.5deg);
  }
}

@keyframes posterLineSweep {
  0%,
  100% {
    transform: scaleX(0.72);
    opacity: 0.58;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
}

.coach-card-animation,
.product-card-animation {
  --animation-bg-start: #f7f4ec;
  --animation-bg-mid: #d9d4c8;
  --animation-bg-end: #363432;
  --animation-ink: #24211d;
  --animation-ink-soft: rgba(36, 33, 29, 0.22);
  --animation-glass: rgba(255, 252, 244, 0.78);
  --animation-glass-strong: rgba(255, 252, 244, 0.9);
  --animation-line: rgba(255, 255, 255, 0.18);
  --animation-shadow: 0 24px 60px rgba(31, 28, 24, 0.18);
  --animation-accent: #9b7652;
  --animation-accent-2: #587e78;
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 14%, rgba(255, 255, 255, 0.56), transparent 26%),
    linear-gradient(135deg, var(--animation-bg-end) 0%, var(--animation-bg-mid) 52%, var(--animation-bg-start) 100%);
  color: var(--animation-ink);
  isolation: isolate;
}

.coach-card-animation {
  --animation-bg-start: #d8b777;
  --animation-bg-mid: #8a5435;
  --animation-bg-end: #2b1a13;
  --animation-accent: #8e4d2f;
  --animation-accent-2: #244138;
}

.coach-card-animation::before,
.product-card-animation::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, var(--animation-line) 1px, transparent 1px),
    linear-gradient(var(--animation-line) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(135deg, transparent 5%, #000 32%, #000 68%, transparent 96%);
  animation: productGridMove 12s linear infinite;
  opacity: 0.52;
}

.coach-card-animation::after,
.product-card-animation::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 50%, rgba(12, 10, 8, 0.08)),
    radial-gradient(circle at 50% 50%, transparent 58%, rgba(12, 10, 8, 0.18));
  pointer-events: none;
  z-index: 1;
}

.coach-browser {
  position: absolute;
  left: 8%;
  top: 10%;
  width: 84%;
  height: 78%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: var(--radius-sm);
  background: var(--animation-glass);
  box-shadow: var(--animation-shadow);
  backdrop-filter: blur(10px);
  transform-origin: center;
  animation: coachBrowserFloat 7s var(--ease-in-out) infinite;
  z-index: 2;
}

.coach-browser-top {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.7rem;
}

.coach-browser-top span {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: var(--animation-accent);
  opacity: 0.8;
}

.coach-toolbar {
  display: grid;
  grid-template-columns: 1fr 4.25rem;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}

.coach-search,
.coach-filter-pill {
  height: 1.35rem;
  border: 1px solid rgba(80, 43, 27, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
}

.coach-search {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0 0.55rem;
}

.coach-search-dot {
  width: 0.42rem;
  height: 0.42rem;
  border: 1.5px solid var(--animation-accent);
  border-radius: 50%;
}

.coach-search-line {
  width: 48%;
  height: 0.22rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--animation-accent) 30%, transparent);
  animation: coachSearchPulse 4s var(--ease-in-out) infinite;
}

.coach-filter-pill {
  background: color-mix(in srgb, var(--animation-accent) 14%, transparent);
}

.coach-content {
  display: grid;
  grid-template-columns: 1fr 31%;
  gap: 0.75rem;
  height: calc(100% - 2.8rem);
}

.coach-catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
}

.coach-bag-card,
.coach-serial-card {
  border: 1px solid rgba(80, 43, 27, 0.12);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.64);
  box-shadow: 0 8px 24px rgba(86, 46, 26, 0.08);
}

.coach-bag-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.32rem;
  min-width: 0;
  animation: coachCardScan 8s var(--ease-in-out) infinite;
}

.coach-bag-card:nth-child(2) {
  animation-delay: 0.5s;
}

.coach-bag-card:nth-child(3) {
  animation-delay: 1s;
}

.coach-bag-card:nth-child(4) {
  animation-delay: 1.5s;
}

.coach-bag-card-primary {
  background: color-mix(in srgb, var(--animation-accent) 10%, #fff 90%);
}

.coach-bag-shape {
  position: relative;
  width: 2.15rem;
  height: 1.55rem;
  border: 2px solid var(--animation-accent);
  border-radius: 0.25rem 0.25rem 0.45rem 0.45rem;
  background: linear-gradient(135deg, var(--animation-accent), #c89152);
  box-shadow: inset 0 -0.45rem 0 rgba(49, 22, 12, 0.12);
}

.coach-bag-shape::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -0.55rem;
  width: 1.2rem;
  height: 0.8rem;
  border: 2px solid var(--animation-accent);
  border-bottom: 0;
  border-radius: 999px 999px 0 0;
  transform: translateX(-50%);
}

.coach-bag-shape.small {
  width: 1.75rem;
}

.coach-bag-shape.tall {
  width: 1.75rem;
  height: 1.8rem;
}

.coach-bag-shape.wide {
  width: 2.45rem;
  height: 1.35rem;
}

.coach-card-line {
  width: 56%;
  height: 0.2rem;
  border-radius: 999px;
  background: rgba(80, 43, 27, 0.24);
}

.coach-card-line.short {
  width: 36%;
  opacity: 0.6;
}

.coach-side-panel {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.55rem;
  min-width: 0;
}

.coach-swatches {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3rem;
}

.coach-swatches span {
  aspect-ratio: 1;
  border: 1px solid rgba(80, 43, 27, 0.13);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.35);
  animation: coachSwatchPop 5s var(--ease-in-out) infinite;
}

.coach-swatches span:nth-child(1) {
  background: #6b341f;
}

.coach-swatches span:nth-child(2) {
  background: #a9653d;
  animation-delay: 0.35s;
}

.coach-swatches span:nth-child(3) {
  background: #1f2b24;
  animation-delay: 0.7s;
}

.coach-swatches span:nth-child(4) {
  background: #c6a266;
  animation-delay: 1.05s;
}

.coach-serial-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.65rem;
  overflow: hidden;
}

.coach-serial-card::before {
  content: "";
  position: absolute;
  left: -35%;
  top: 0;
  width: 28%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 130, 83, 0.18), transparent);
  animation: coachDecodeSweep 4.8s var(--ease-in-out) infinite;
}

.coach-serial-label {
  font-size: clamp(0.42rem, 1.1vw, 0.58rem);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  color: rgba(80, 43, 27, 0.58);
}

.coach-serial-number {
  font-size: clamp(0.62rem, 1.55vw, 0.9rem);
  font-weight: var(--weight-semibold);
  color: #32180f;
  white-space: nowrap;
}

.coach-verify-line {
  width: 78%;
  height: 0.18rem;
  border-radius: 999px;
  background: rgba(80, 43, 27, 0.2);
}

.coach-verify-line.short {
  width: 52%;
}

.coach-status {
  align-self: flex-start;
  margin-top: 0.12rem;
  padding: 0.16rem 0.38rem;
  border-radius: 999px;
  background: rgba(54, 125, 71, 0.16);
  color: #25552f;
  font-size: clamp(0.42rem, 1.1vw, 0.55rem);
  font-weight: var(--weight-bold);
  letter-spacing: 0.06em;
  animation: coachStatusBlink 4.8s var(--ease-in-out) infinite;
}

.project-card:hover .coach-browser {
  animation-play-state: paused;
  transform: translateY(-2px) scale(1.03);
}

.industrial-card-animation {
  --animation-bg-start: #d8dbd5;
  --animation-bg-mid: #747a78;
  --animation-bg-end: #252b2c;
  --animation-accent: #d8c94e;
  --animation-accent-2: #67c5d4;
}

.industrial-workspace {
  position: absolute;
  inset: 10% 8%;
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 0.8rem;
  transform: perspective(900px) rotateX(6deg) rotateY(-8deg);
  transform-origin: center;
  animation: industrialWorkspaceFloat 7s var(--ease-in-out) infinite;
  z-index: 2;
}

.industrial-canvas,
.industrial-panel,
.moon-orbit-grid,
.moon-side-panel,
.language-browser,
.phone-shell {
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: var(--radius-sm);
  background: var(--animation-glass);
  box-shadow: var(--animation-shadow);
  backdrop-filter: blur(10px);
}

.industrial-canvas {
  position: relative;
  overflow: hidden;
  background: rgba(29, 36, 38, 0.78);
}

.industrial-canvas::before {
  content: "";
  position: absolute;
  inset: 14% 10%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  transform: skewY(-18deg);
}

.industrial-zone,
.industrial-unit,
.industrial-network,
.industrial-check {
  position: absolute;
  display: block;
}

.industrial-zone {
  border: 2px solid;
  transform: skewY(-18deg);
  opacity: 0.75;
}

.zone-a {
  left: 11%;
  top: 18%;
  width: 42%;
  height: 28%;
  border-color: var(--animation-accent);
}

.zone-b {
  left: 36%;
  top: 45%;
  width: 42%;
  height: 30%;
  border-color: var(--animation-accent-2);
}

.zone-c {
  left: 56%;
  top: 23%;
  width: 26%;
  height: 20%;
  border-color: rgba(255, 255, 255, 0.48);
}

.industrial-unit {
  width: 0.8rem;
  height: 2rem;
  border-radius: 0.18rem;
  background: linear-gradient(#f5f5f5, #7f898c);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.22);
}

.unit-a {
  left: 27%;
  top: 45%;
}

.unit-b {
  left: 38%;
  top: 54%;
}

.unit-c {
  left: 50%;
  top: 49%;
}

.unit-d {
  left: 67%;
  top: 39%;
}

.industrial-network {
  height: 2px;
  background: color-mix(in srgb, var(--animation-accent-2) 78%, white 22%);
  transform-origin: left center;
  box-shadow: 0 0 10px color-mix(in srgb, var(--animation-accent-2) 70%, transparent);
  animation: industrialPulse 3.8s var(--ease-in-out) infinite;
}

.network-a {
  left: 30%;
  top: 55%;
  width: 28%;
  transform: rotate(12deg);
}

.network-b {
  left: 48%;
  top: 58%;
  width: 22%;
  transform: rotate(-28deg);
  animation-delay: 0.5s;
}

.network-c {
  left: 18%;
  top: 36%;
  width: 38%;
  background: var(--animation-accent);
  transform: rotate(25deg);
  animation-delay: 1s;
}

.industrial-check {
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--animation-accent-2) 18%, white 82%);
  border: 2px solid var(--animation-accent-2);
  animation: industrialCheckPop 4s var(--ease-in-out) infinite;
}

.check-a {
  left: 57%;
  top: 34%;
}

.check-b {
  left: 32%;
  top: 68%;
  animation-delay: 1.2s;
}

.industrial-panel {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.8rem;
  background: rgba(33, 36, 40, 0.82);
}

.panel-title-line,
.panel-item,
.panel-button {
  display: block;
  border-radius: 999px;
}

.panel-title-line {
  width: 72%;
  height: 0.4rem;
  background: rgba(255, 255, 255, 0.42);
}

.panel-item {
  height: 1.35rem;
  background: rgba(255, 255, 255, 0.16);
}

.panel-item.active {
  background: color-mix(in srgb, var(--animation-accent) 70%, white 30%);
  animation: panelActiveShift 5s var(--ease-in-out) infinite;
}

.panel-button {
  margin-top: auto;
  width: 74%;
  height: 1rem;
  background: var(--animation-accent-2);
}

.moon-card-animation {
  --animation-bg-start: #d7dad2;
  --animation-bg-mid: #606a77;
  --animation-bg-end: #161a22;
  --animation-accent: #d7c068;
  --animation-accent-2: #8ac9dc;
}

.moon-orbit-grid {
  position: absolute;
  left: 8%;
  top: 12%;
  width: 66%;
  height: 74%;
  background:
    radial-gradient(ellipse at center, rgba(255, 255, 255, 0.16), transparent 60%),
    rgba(17, 21, 28, 0.62);
  transform: perspective(800px) rotateX(52deg) rotateZ(-20deg);
  animation: moonGridTilt 8s var(--ease-in-out) infinite;
  z-index: 2;
}

.moon-terrain {
  position: absolute;
  inset: 14%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
}

.moon-module,
.moon-link,
.moon-scan {
  position: absolute;
  display: block;
}

.moon-module {
  width: 2.1rem;
  height: 2.1rem;
  border: 2px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  background: linear-gradient(135deg, #e6e4d7, #8ea0b5);
  box-shadow: 0 0 20px rgba(171, 221, 255, 0.35);
  animation: moonModulePulse 5s var(--ease-in-out) infinite;
}

.module-core {
  left: 42%;
  top: 42%;
  background: linear-gradient(135deg, var(--animation-accent), #e7ecef);
}

.module-lab {
  left: 18%;
  top: 28%;
  animation-delay: 0.5s;
}

.module-life {
  left: 62%;
  top: 24%;
  animation-delay: 1s;
}

.module-power {
  left: 55%;
  top: 62%;
  animation-delay: 1.5s;
}

.moon-link {
  height: 3px;
  background: color-mix(in srgb, var(--animation-accent-2) 82%, white 18%);
  transform-origin: left center;
  box-shadow: 0 0 12px color-mix(in srgb, var(--animation-accent-2) 70%, transparent);
}

.link-a {
  left: 28%;
  top: 41%;
  width: 28%;
  transform: rotate(22deg);
}

.link-b {
  left: 51%;
  top: 46%;
  width: 24%;
  transform: rotate(-27deg);
}

.link-c {
  left: 53%;
  top: 55%;
  width: 22%;
  transform: rotate(56deg);
}

.moon-scan {
  left: 8%;
  top: 16%;
  width: 84%;
  height: 2px;
  background: color-mix(in srgb, var(--animation-accent) 82%, white 18%);
  box-shadow: 0 0 18px color-mix(in srgb, var(--animation-accent) 70%, transparent);
  animation: moonScan 4.5s var(--ease-in-out) infinite;
}

.moon-side-panel {
  position: absolute;
  right: 8%;
  top: 18%;
  width: 23%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.75rem;
  background: rgba(247, 248, 239, 0.86);
  z-index: 2;
}

.moon-panel-line,
.moon-panel-chip {
  display: block;
  border-radius: 999px;
}

.moon-panel-line {
  height: 0.35rem;
  background: rgba(38, 43, 57, 0.24);
}

.moon-panel-line.short {
  width: 62%;
}

.moon-panel-chip {
  height: 1.3rem;
  background: rgba(38, 43, 57, 0.12);
}

.moon-panel-chip.active {
  background: color-mix(in srgb, var(--animation-accent-2) 36%, white 64%);
}

.language-card-animation {
  --animation-bg-start: #d8b768;
  --animation-bg-mid: #76532d;
  --animation-bg-end: #261b11;
  --animation-accent: #d4a44a;
  --animation-accent-2: #57786f;
}

.language-browser {
  position: absolute;
  inset: 10% 9%;
  display: grid;
  grid-template-columns: 1fr 36%;
  grid-template-rows: 1fr auto;
  gap: 0.75rem;
  padding: 0.9rem;
  background: rgba(31, 24, 18, 0.72);
  animation: productPanelFloat 7s var(--ease-in-out) infinite;
  z-index: 2;
}

.language-lesson-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  padding: 1rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.arabic-word {
  color: color-mix(in srgb, var(--animation-accent) 76%, white 24%);
  direction: rtl;
  font-size: clamp(2.3rem, 7vw, 4.3rem);
  font-weight: var(--weight-bold);
  line-height: 1;
  animation: arabicReveal 4.5s var(--ease-in-out) infinite;
}

.language-rule {
  display: block;
  width: 78%;
  height: 0.32rem;
  border-radius: 999px;
  background: rgba(245, 240, 232, 0.26);
}

.language-rule.short {
  width: 48%;
}

.language-options {
  display: grid;
  gap: 0.45rem;
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.12);
  color: #f5f0e8;
  font-size: 1.5rem;
  font-weight: var(--weight-semibold);
  direction: rtl;
}

.language-option.correct {
  background: color-mix(in srgb, var(--animation-accent) 78%, white 22%);
  color: #251707;
  animation: correctOptionPulse 4.5s var(--ease-in-out) infinite;
}

.language-progress {
  grid-column: 1 / -1;
  height: 0.5rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(245, 240, 232, 0.16);
}

.language-progress span {
  display: block;
  height: 100%;
  width: 68%;
  border-radius: inherit;
  background: var(--animation-accent);
  animation: progressGrow 5s var(--ease-in-out) infinite;
}

.mobile-card-animation {
  display: flex;
  align-items: center;
  justify-content: center;
}

.filos-card-animation {
  --animation-bg-start: #ebe3f4;
  --animation-bg-mid: #9d8abf;
  --animation-bg-end: #453b5f;
  --animation-accent: #67579a;
  --animation-accent-2: #8a7cba;
}

.bakery-card-animation {
  --animation-bg-start: #dacb95;
  --animation-bg-mid: #6f7d4a;
  --animation-bg-end: #1f3d2a;
  --animation-accent: #9b7d37;
  --animation-accent-2: #2f6b42;
}

.phone-shell {
  position: relative;
  width: min(38%, 10rem);
  height: 82%;
  overflow: hidden;
  border: 0.42rem solid #111;
  border-radius: 1.45rem;
  background: #f7f5f2;
  box-shadow: var(--animation-shadow);
  animation: phoneFloat 6s var(--ease-in-out) infinite;
  z-index: 2;
}

.phone-notch {
  position: absolute;
  left: 50%;
  top: 0.42rem;
  width: 34%;
  height: 0.34rem;
  border-radius: 999px;
  background: #111;
  transform: translateX(-50%);
  z-index: 2;
}

.filos-map {
  position: relative;
  height: 45%;
  background:
    radial-gradient(circle at 30% 36%, rgba(255, 255, 255, 0.72), transparent 7%),
    radial-gradient(circle at 68% 56%, rgba(255, 255, 255, 0.72), transparent 7%),
    linear-gradient(135deg, color-mix(in srgb, var(--animation-accent) 12%, white 88%), color-mix(in srgb, var(--animation-accent) 32%, white 68%));
}

.filos-route {
  position: absolute;
  left: 30%;
  top: 38%;
  width: 40%;
  height: 3px;
  border-radius: 999px;
  background: var(--animation-accent);
  transform: rotate(19deg);
  animation: routeDraw 4s var(--ease-in-out) infinite;
}

.filos-person {
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--animation-accent);
  box-shadow: 0 8px 18px rgba(82, 49, 126, 0.22);
}

.person-a {
  left: 20%;
  top: 28%;
}

.person-b {
  right: 18%;
  bottom: 28%;
  animation: personMeet 4s var(--ease-in-out) infinite;
}

.filos-activity-card,
.bakery-order-card {
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.75rem;
  border-radius: 0.9rem;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.activity-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--animation-accent);
}

.activity-line,
.order-line {
  width: 84%;
  height: 0.32rem;
  border-radius: 999px;
  background: rgba(41, 31, 49, 0.18);
}

.activity-line.short,
.order-line.short {
  width: 58%;
}

.activity-cta,
.pickup-pill {
  width: 68%;
  height: 0.85rem;
  border-radius: 999px;
  background: var(--animation-accent);
  animation: ctaPulse 4s var(--ease-in-out) infinite;
}

.bakery-hero {
  position: relative;
  height: 46%;
  background: linear-gradient(135deg, var(--animation-accent-2), color-mix(in srgb, var(--animation-accent-2) 66%, white 34%));
}

.coffee-cup {
  position: absolute;
  left: 50%;
  bottom: 20%;
  width: 2.8rem;
  height: 2.1rem;
  border-radius: 0 0 0.75rem 0.75rem;
  background: #f7f5ec;
  transform: translateX(-50%);
}

.coffee-cup::after {
  content: "";
  position: absolute;
  right: -0.72rem;
  top: 0.42rem;
  width: 0.9rem;
  height: 0.9rem;
  border: 0.24rem solid #f7f5ec;
  border-left: 0;
  border-radius: 0 999px 999px 0;
}

.steam {
  position: absolute;
  bottom: 54%;
  width: 0.28rem;
  height: 1.5rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.62);
  animation: steamRise 3s var(--ease-in-out) infinite;
}

.steam-a {
  left: 43%;
}

.steam-b {
  left: 55%;
  animation-delay: 0.6s;
}

.order-progress {
  height: 0.45rem;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(0, 50, 11, 0.12);
}

.order-progress span {
  display: block;
  height: 100%;
  width: 72%;
  border-radius: inherit;
  background: var(--animation-accent);
  animation: progressGrow 5s var(--ease-in-out) infinite;
}

.pickup-pill {
  background: var(--animation-accent-2);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 2;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: var(--weight-medium);
  padding: 0.45rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  letter-spacing: 0;
  text-transform: uppercase;
  transition: all var(--duration-fast) var(--ease-out);
}

.view-project:hover {
  background: white;
  color: var(--color-text);
}

/* Project Info */
.project-info {
  padding: var(--space-4) var(--space-2) var(--space-1);
}

.project-title {
  font-size: 1.125rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-type {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--weight-semibold);
  margin: 0;
}

@keyframes coachGridDrift {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 76px 38px;
  }
}

@keyframes coachBrowserFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-0.6deg);
  }
  50% {
    transform: translateY(-5px) rotate(0.4deg);
  }
}

@keyframes coachSearchPulse {
  0%,
  100% {
    width: 38%;
  }
  50% {
    width: 72%;
  }
}

@keyframes coachCardScan {
  0%,
  100% {
    transform: translateY(0);
    border-color: rgba(80, 43, 27, 0.12);
  }
  45%,
  58% {
    transform: translateY(-2px);
    border-color: rgba(142, 77, 47, 0.44);
  }
}

@keyframes coachSwatchPop {
  0%,
  100% {
    transform: scale(1);
  }
  48%,
  58% {
    transform: scale(1.18);
  }
}

@keyframes coachDecodeSweep {
  0%,
  32% {
    left: -35%;
  }
  58%,
  100% {
    left: 108%;
  }
}

@keyframes coachStatusBlink {
  0%,
  42% {
    opacity: 0.38;
    transform: translateY(2px);
  }
  54%,
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes productGridMove {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 84px 42px;
  }
}

@keyframes productPanelFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes industrialWorkspaceFloat {
  0%,
  100% {
    transform: perspective(900px) translateY(0) rotateX(6deg) rotateY(-8deg);
  }
  50% {
    transform: perspective(900px) translateY(-5px) rotateX(7deg) rotateY(-4deg);
  }
}

@keyframes industrialPulse {
  0%,
  100% {
    opacity: 0.35;
    transform-origin: left center;
  }
  50% {
    opacity: 1;
    filter: brightness(1.3);
  }
}

@keyframes industrialCheckPop {
  0%,
  46%,
  100% {
    transform: scale(0.78);
    opacity: 0.58;
  }
  58%,
  76% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes panelActiveShift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2.7rem);
  }
}

@keyframes moonGridTilt {
  0%,
  100% {
    transform: perspective(800px) rotateX(52deg) rotateZ(-20deg);
  }
  50% {
    transform: perspective(800px) rotateX(48deg) rotateZ(-14deg);
  }
}

@keyframes moonModulePulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes moonScan {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(2200%);
    opacity: 0;
  }
}

@keyframes arabicReveal {
  0%,
  100% {
    letter-spacing: 0;
    opacity: 0.78;
  }
  50% {
    letter-spacing: 0.08em;
    opacity: 1;
  }
}

@keyframes correctOptionPulse {
  0%,
  42%,
  100% {
    transform: scale(1);
  }
  56%,
  72% {
    transform: scale(1.06);
  }
}

@keyframes progressGrow {
  0%,
  100% {
    width: 34%;
  }
  55% {
    width: 82%;
  }
}

@keyframes phoneFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-1.5deg);
  }
  50% {
    transform: translateY(-6px) rotate(1.5deg);
  }
}

@keyframes routeDraw {
  0%,
  100% {
    width: 0;
    opacity: 0.3;
  }
  55% {
    width: 40%;
    opacity: 1;
  }
}

@keyframes personMeet {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-0.45rem, -0.35rem);
  }
}

@keyframes ctaPulse {
  0%,
  100% {
    opacity: 0.78;
    transform: scaleX(0.82);
    transform-origin: left center;
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes steamRise {
  0% {
    opacity: 0;
    transform: translateY(0) scaleY(0.6);
  }
  45% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
    transform: translateY(-1rem) scaleY(1.1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: var(--space-10) var(--space-5);
  }

  .page-header {
    margin-bottom: var(--space-6);
    padding-bottom: 0;
  }

  .page-title {
    font-size: clamp(3rem, 14vw, 5rem);
  }

  .projects-section {
    margin-bottom: var(--space-10);
  }

  .section-header {
    margin-bottom: var(--space-6);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  .project-info {
    padding: var(--space-3) var(--space-1) 0;
  }

  .project-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--space-8) var(--space-4);
  }

  .page-header {
    margin-bottom: var(--space-8);
  }

  .page-subtitle {
    font-size: 0.875rem;
  }

  .projects-section {
    margin-bottom: var(--space-8);
  }

  .projects-grid {
    gap: var(--space-4);
  }

    .project-card {
    border-radius: 0;
  }

  .project-image {
    border-radius: 0;
  }

  .project-info {
    padding: var(--space-3) 0 0;
  }

  .project-title {
    font-size: 0.9375rem;
    margin-bottom: 0.125rem;
  }

  .project-type {
    font-size: 0.5625rem;
  }

  .view-project {
    padding: 0.4rem 0.875rem;
    font-size: 0.75rem;
  }

}
</style>
