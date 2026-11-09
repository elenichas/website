<template>
  <div class="portfolio-theme portfolio-gallery">
    <app-navbar />
    <main id="main" class="playroom">
      <div class="work-collection">
        <section class="intro" aria-labelledby="intro-title">
          <h1 id="intro-title">I design and build interfaces for complex work.</h1>
          <div class="intro-meta">
            <p>Product designer &amp; UX engineer in London.</p>
            <p class="intro-links">
              <a :href="cvLink" download>CV</a>
              <router-link to="/book">Book a call</router-link>
              <a href="mailto:eleni.chasioti@gmail.com">Email</a>
            </p>
          </div>
        </section>

        <div class="toolbar">
          <div class="filters" role="group" aria-label="Filter projects">
            <button
              v-for="filter in filters" :key="filter.id" type="button"
              :aria-pressed="activeFilter === filter.id" :class="{ selected: activeFilter === filter.id }"
              @click="activeFilter = filter.id"
            >
              {{ filter.label }} <span class="count">{{ countFor(filter.id) }}</span>
            </button>
          </div>
        </div>

        <section id="work" class="gallery" aria-label="Projects" aria-live="polite">
          <project-tile v-for="project in visibleProjects" :key="project.slug" :project="project" />
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
      activeFilter: "all",
      filters: [
        { id: "all", label: "All" },
        { id: "gaming", label: "Gaming" },
        { id: "mobile", label: "Mobile" },
        { id: "desktop", label: "Desktop & 3D" },
        { id: "ai", label: "AI & fintech" },
        { id: "architecture", label: "Architecture" },
      ],
      // Newest first, every project shown at the same size.
      projects: [
        project("simba", {
          title: "Modretro App Design", route: "/products/adventures-of-simba", meta: "Personal game · 2026", tags: ["desktop", "gaming"],
          summary: "A Game Boy Color adventure about my cat, his flat and his ideal day.",
          preview: "/media/simba-demo.webm", poster: "/images/simba/poster.jpg",
        }),
        project("paper-and-parcel", {
          title: "Paper & Parcel", route: "/products/paper-and-parcel", meta: "Local AI agent · 2026", tags: ["desktop", "ai"],
          summary: "A shop assistant with real tools, an execution inspector and a lab for learning how agents work.",
          preview: "/media/paper-and-parcel-preview.mp4", poster: "/images/paper-and-parcel/video-poster.jpg",
        }),
        project("plum-pulse", {
          title: "Plum Pulse", route: "/products/plum-pulse", meta: "Fintech concept · 2026", tags: ["mobile", "ai"],
          summary: "A money assistant that explains what changed in your account and waits for your approval before acting.",
        }),
        project("vinted-bundling", {
          title: "Vinted Smart Local Bundling", route: "/products/vinted-smart-bundling", meta: "Commerce concept · 2026", tags: ["mobile"],
          summary: "Shows the real cost of an item, delivery included, before you buy.",
        }),
        project("ai-sandbox", {
          title: "AI Interface Sandbox", route: "/products/ai-sandbox", meta: "AI prototype · 2026", tags: ["desktop", "ai"],
          summary: "Change what an AI assistant can see and remember, and watch the interface adapt.",
        }),
        project("industrial", {
          title: "Industrial Facility Configurator", route: "/products/industrial-configurator", meta: "Client project · 2025", tags: ["desktop"],
          summary: "A 3D tool for configuring power plants, with the engineering rules built in.",
          preview: "/media/industrial-preview.mp4", poster: "/media/industrial-preview.webp", light: true,
        }),
        project("coach", {
          title: "Vintage Coach Catalog", route: "/products/coach-verification-app", meta: "Personal project · 2025", tags: ["desktop"],
          summary: "778 bag styles, 104 colours and a serial-number decoder.",
          preview: "/media/coach-preview.mp4", poster: "/media/coach-preview.webp",
        }),
        project("moon", {
          title: "Moon Habitat Configurator", route: "/products/lunar-app", meta: "Team concept · 2025", tags: ["desktop"],
          summary: "Plan a modular lunar habitat with real design-automation methods.",
          preview: "/media/moon-preview.mp4", poster: "/media/moon-preview.webp",
        }),
        project("map3d", {
          title: "Map3D Studio", route: "/products/map3d-studio", meta: "Open source", tags: ["desktop"],
          summary: "Pick a site on a map, explore it in 3D and export it.",
          preview: "/media/map3d-preview.mp4", poster: "/images/map3d/scene-night.webp",
        }),
        project("arabiya", {
          title: "Arabiya", route: "/products/language-learning-app", meta: "Personal project · 2024", tags: ["mobile"],
          summary: "Egyptian Arabic lessons and quizzes, built from my own classes.",
        }),
        project("filos", {
          title: "Filos", route: "/products/filos-mobile-app", meta: "Course project · 2023", tags: ["mobile"],
          summary: "Pairs people with disabilities with volunteers for everyday activities.",
        }),
        project("brew-crumb", {
          title: "Brew & Crumb", route: "/products/brew-crumb", meta: "Course project · 2023", tags: ["mobile"],
          summary: "Order ahead and skip the morning queue at a busy café.",
        }),
        project("workshop", {
          title: "Digital Futures Workshop", route: "/products/workshop-design", meta: "Workshop · 2022", tags: ["architecture"],
          summary: "Voxel housing and robotic fabrication.",
          preview: "/media/workshop-preview.mp4", poster: "/media/workshop-preview.webp", light: true,
        }),
        project("cricket", {
          title: "Cricket WFC Plugin", route: "/products/thesis-project", meta: "MSc thesis, UCL · 2020", tags: ["architecture", "desktop"],
          summary: "A rule-based tool for generative spatial design.",
        }),
        project("hapi", {
          title: "Hapi Modular Housing", route: "/products/hapi-project", meta: "Architecture thesis · 2019", tags: ["architecture"],
          summary: "A kit of parts for adaptable housing.",
        }),
      ],
    };
  },
  computed: {
    visibleProjects() {
      if (this.activeFilter === "all") return this.projects;
      return this.projects.filter((p) => p.tags.includes(this.activeFilter));
    },
  },
  methods: {
    countFor(id) {
      return id === "all" ? this.projects.length : this.projects.filter((p) => p.tags.includes(id)).length;
    },
  },
};
</script>

<style scoped>
.playroom { background: var(--visual-bg); color: var(--visual-fg); }
.work-collection { max-width: 1440px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 56px) 112px; }

/* Intro: one statement and a line of facts, so the gallery starts in the first screen. */
.intro { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); align-items: end; gap: 20px clamp(32px, 6vw, 96px); padding: clamp(28px, 4vw, 48px) 0 clamp(24px, 3vw, 36px); }
.intro h1 { max-width: 24ch; margin: 0; font-family: var(--font-display); font-size: clamp(40px, 4.6vw, 68px); font-weight: 600; font-variation-settings: 'opsz' 96; line-height: 1; letter-spacing: -.035em; text-wrap: balance; color: var(--visual-fg); }
.intro-meta p { margin: 0; max-width: 40ch; font-size: var(--type-md); line-height: 1.5; color: var(--visual-muted); }
.intro-meta .intro-links { display: flex; flex-wrap: wrap; gap: 4px 20px; margin-top: 12px; }
.intro-links a { display: inline-flex; align-items: center; min-height: 32px; padding: 0; border: 0; background: none; font: inherit; font-size: var(--type-sm); color: var(--visual-fg); text-decoration: underline; text-decoration-color: var(--visual-border); text-underline-offset: 5px; cursor: pointer; transition: text-decoration-color 160ms ease; }
.intro-links a:hover { text-decoration-color: currentColor; }
:is(.intro-links a, .filters button):focus-visible { outline: 2px solid var(--visual-fg); outline-offset: 3px; }

/* Filters */
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 28px; }
.filters { display: flex; flex-wrap: wrap; gap: 8px; }
.filters button { display: inline-flex; align-items: center; gap: 8px; min-height: 36px; padding: 0 14px; border: 1px solid var(--visual-border); border-radius: 999px; background: transparent; color: var(--visual-fg); font: inherit; font-size: var(--type-sm); cursor: pointer; transition: border-color 160ms ease, background-color 160ms ease; }
.filters button:hover { border-color: var(--visual-fg); }
.filters button.selected { background: var(--visual-fg); border-color: var(--visual-fg); color: var(--visual-bg); }
.count { font-size: var(--type-xs); opacity: .7; }

/* Gallery: every project at the same size. */
.gallery { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 36px 24px; scroll-margin-top: 72px; }

@media (max-width: 1100px) { .gallery { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 860px) {
  .intro { grid-template-columns: 1fr; }
  .gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .work-collection { padding-bottom: 72px; }
  .intro { padding: 24px 0 28px; gap: 14px; }
  .toolbar { flex-direction: column; align-items: flex-start; gap: 8px; margin-bottom: 24px; }
  .filters { flex-wrap: nowrap; overflow-x: auto; max-width: 100%; padding-bottom: 4px; scrollbar-width: none; }
  .filters button { flex: none; }
  .gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 12px; }
  .gallery :deep(.tile-copy) { padding-top: 10px; }
  .gallery :deep(.tile-title) { font-size: var(--type-sm); line-height: 1.3; }
  .gallery :deep(.tile-arrow) { display: none; }
  .gallery :deep(.tile-meta) { margin-top: 4px; }
}
@media (prefers-reduced-motion: no-preference) {
  .intro > * { animation: arrive 640ms cubic-bezier(.16,1,.3,1) both; }
  .intro > :nth-child(2) { animation-delay: 80ms; }
}
@media (prefers-reduced-motion: reduce) { .filters button { transition: none; } }
@keyframes arrive { from { opacity: .4; transform: translateY(12px); } to { opacity: 1; transform: none; } }
</style>
