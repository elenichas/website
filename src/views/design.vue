<template>
  <div class="portfolio-theme portfolio-gallery">
    <app-navbar />
    <main id="main" class="playroom">
      <div class="work-collection">
        <section class="intro" aria-labelledby="intro-title">
          <h1 id="intro-title">I design and build interfaces for complex work.</h1>
          <div class="intro-meta">
            <p>Product designer &amp; UX engineer in London. Now at Foster + Partners, before that Bryden Wood.</p>
            <p class="intro-links">
              <a :href="cvLink" download>CV</a>
              <router-link to="/book">Book a call</router-link>
              <a href="mailto:eleni.chasioti@gmail.com">Email</a>
              <button type="button" class="motion-toggle" :aria-pressed="!motionEnabled" @click="motionEnabled = !motionEnabled">
                {{ motionEnabled ? 'Pause previews' : 'Play previews' }}
              </button>
            </p>
          </div>
        </section>

        <section id="work" class="work-section" aria-label="Selected work">
          <div class="grid grid--featured">
            <project-tile v-for="project in featured" :key="project.slug" :project="project" :motion-enabled="motionEnabled" size="featured" />
          </div>
          <div class="grid grid--standard">
            <project-tile v-for="project in more" :key="project.slug" :project="project" :motion-enabled="motionEnabled" />
          </div>
        </section>

        <section class="work-section work-section--archive" aria-labelledby="archive-title">
          <h2 id="archive-title" class="archive-title">Earlier: architecture and computational design, 2019–2022</h2>
          <div class="grid grid--compact">
            <project-tile v-for="project in archive" :key="project.slug" :project="project" :motion-enabled="motionEnabled" size="compact" />
          </div>
        </section>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import ProjectTile from "../components/ProjectTile.vue";
import { useHead } from "@vueuse/head";

const project = (slug, fields) => ({ slug, ...fields });

export default {
  name: "Design",
  components: { AppNavbar, AppFooter, ProjectTile },
  setup() {
    useHead(() => ({
      meta: [{ name: "description", content: "Eleni Chasioti is a London-based product designer and UX engineer. Case studies in fintech and AI interfaces, 3D configurators, design systems and commerce." }],
    }));
  },
  data() {
    return {
      cvLink: "/cv/Eleni_Chasioti_Design_Engineer.pdf",
      motionEnabled: true,
      featured: [
        project("plum-pulse", {
          title: "Plum Pulse", route: "/products/plum-pulse", meta: "Fintech concept · 2026",
          summary: "A money assistant that explains what changed in your account and waits for your approval before acting.",
        }),
        project("industrial", {
          title: "Industrial Facility Configurator", route: "/products/industrial-configurator", meta: "Client project · 2025",
          summary: "A 3D tool for configuring power plants, with the engineering rules built in.",
          preview: "/media/industrial-preview.mp4", poster: "/media/industrial-preview.webp", light: true,
        }),
        project("vinted-bundling", {
          title: "Vinted Smart Local Bundling", route: "/products/vinted-smart-bundling", meta: "Commerce concept · 2026",
          summary: "Shows the real cost of an item, delivery included, before you buy.",
        }),
        project("ai-sandbox", {
          title: "AI Interface Sandbox", route: "/products/ai-sandbox", meta: "AI prototype · 2026",
          summary: "Change what an AI assistant can see and remember, and watch the interface adapt.",
        }),
      ],
      more: [
        project("coach", {
          title: "Vintage Coach Catalog", route: "/products/coach-verification-app", meta: "Personal project · 2025",
          summary: "778 bag styles, 104 colours and a serial-number decoder.",
          preview: "/media/coach-preview.mp4", poster: "/media/coach-preview.webp",
        }),
        project("map3d", {
          title: "Map3D Studio", route: "/products/map3d-studio", meta: "Open source",
          summary: "Pick a site on a map, explore it in 3D and export it.",
          preview: "/media/map3d-preview.mp4", poster: "/images/map3d/scene-night.webp",
        }),
        project("moon", {
          title: "Moon Habitat Configurator", route: "/products/lunar-app", meta: "Team concept · 2025",
          summary: "Plan a modular lunar habitat with real design-automation methods.",
          preview: "/media/moon-preview.mp4", poster: "/media/moon-preview.webp",
        }),
        project("filos", {
          title: "Filos", route: "/products/filos-mobile-app", meta: "Course project · 2023",
          summary: "Pairs people with disabilities with volunteers for everyday activities.",
        }),
        project("brew-crumb", {
          title: "Brew & Crumb", route: "/products/brew-crumb", meta: "Course project · 2023",
          summary: "Order ahead and skip the morning queue at a busy café.",
        }),
        project("arabiya", {
          title: "Arabiya", route: "/products/language-learning-app", meta: "Personal project · 2024",
          summary: "Egyptian Arabic lessons and quizzes, built from my own classes.",
        }),
      ],
      archive: [
        project("cricket", {
          title: "Cricket WFC Plugin", route: "/products/thesis-project", meta: "MSc thesis, UCL · 2020",
          summary: "A rule-based tool for generative spatial design.",
        }),
        project("workshop", {
          title: "Digital Futures Workshop", route: "/products/workshop-design", meta: "Workshop · 2022",
          summary: "Voxel housing and robotic fabrication.",
          preview: "/media/workshop-preview.mp4", poster: "/media/workshop-preview.webp", light: true,
        }),
        project("hapi", {
          title: "Hapi Modular Housing", route: "/products/hapi-project", meta: "Architecture thesis · 2019",
          summary: "A kit of parts for adaptable housing.",
        }),
      ],
    };
  },
};
</script>

<style scoped>
.playroom { background: var(--visual-bg); color: var(--visual-fg); }
.work-collection { max-width: 1440px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 56px) 112px; }

/* Intro: one statement and a line of facts, so the work starts in the first screen. */
.intro { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); align-items: end; gap: 24px clamp(32px, 6vw, 96px); padding: clamp(32px, 5vw, 64px) 0 clamp(32px, 4vw, 48px); }
.intro h1 { max-width: 24ch; margin: 0; font-size: clamp(32px, 3.6vw, 52px); font-weight: 500; line-height: 1.08; letter-spacing: -.03em; text-wrap: balance; color: var(--visual-fg); }
.intro-meta p { margin: 0; max-width: 40ch; font-size: var(--type-md); line-height: 1.5; color: var(--visual-muted); }
.intro-meta .intro-links { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 20px; margin-top: 14px; }
.intro-links a, .motion-toggle { display: inline-flex; align-items: center; min-height: 32px; padding: 0; border: 0; background: none; font: inherit; font-size: var(--type-sm); color: var(--visual-fg); text-decoration: underline; text-decoration-color: var(--visual-border); text-underline-offset: 5px; cursor: pointer; transition: text-decoration-color 160ms ease; }
.intro-links a:hover, .motion-toggle:hover { text-decoration-color: currentColor; }
.motion-toggle { color: var(--visual-muted); }
.intro-links a:focus-visible, .motion-toggle:focus-visible { outline: 2px solid var(--visual-fg); outline-offset: 3px; }

/* Work */
.work-section { scroll-margin-top: 72px; }
.grid { display: grid; }
.grid--featured, .grid--standard { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 56px 28px; }
.grid--standard { margin-top: 72px; }
.grid--featured > :first-child { grid-column: 1 / -1; margin-bottom: -12px; }
.grid--featured > :first-child :deep(.tile-link) { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(260px, 1fr); gap: clamp(24px, 4vw, 64px); align-items: end; }
.grid--featured > :first-child :deep(.tile-copy) { padding: 0 0 8px; }
.grid--featured > :first-child :deep(.tile-title) { font-size: clamp(26px, 2.6vw, 36px); line-height: 1.1; }
.grid--featured > :first-child :deep(.tile-summary) { font-size: var(--type-md); max-width: 36ch; }

.work-section--archive { padding-top: 120px; }
.archive-title { margin: 0 0 28px; font-family: var(--font-mono); font-size: var(--type-xs); font-weight: 400; color: var(--visual-muted); }
.grid--compact { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 40px 24px; }

@media (max-width: 1024px) {
  .grid--standard, .grid--compact { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 860px) {
  .intro { grid-template-columns: 1fr; }
  .grid--featured > :first-child :deep(.tile-link) { grid-template-columns: 1fr; gap: 0; }
  .grid--featured > :first-child :deep(.tile-copy) { padding: 18px 0 0; }
  .grid--featured { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid--featured > :last-child { grid-column: 1 / -1; }
}
@media (max-width: 640px) {
  .work-collection { padding-bottom: 72px; }
  .intro { padding: 28px 0 32px; gap: 16px; }
  .grid--featured, .grid--standard { grid-template-columns: 1fr; gap: 44px; }
  .grid--featured > :last-child { grid-column: auto; }
  .grid--standard { margin-top: 44px; }
  .work-section--archive { padding-top: 80px; }
  .grid--compact { grid-template-columns: 1fr; gap: 20px; }
  .grid--compact :deep(.tile-link) { display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 16px; align-items: start; }
  .grid--compact :deep(.tile-copy) { padding-top: 0; }
}
@media (prefers-reduced-motion: no-preference) {
  .intro > * { animation: arrive 640ms cubic-bezier(.16,1,.3,1) both; }
  .intro > :nth-child(2) { animation-delay: 80ms; }
}
@keyframes arrive { from { opacity: .4; transform: translateY(12px); } to { opacity: 1; transform: none; } }
</style>
