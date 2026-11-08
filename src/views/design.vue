<template>
  <div class="portfolio-theme portfolio-gallery">
    <app-navbar />
    <main id="main" class="playroom">
      <div class="work-collection">
        <section class="intro" aria-labelledby="intro-title">
          <p class="intro-eyebrow">Eleni Chasioti · Product designer &amp; UX engineer · London</p>
          <div class="intro-main">
            <h1 id="intro-title">Clear interfaces for complex systems.</h1>
            <p class="intro-lede">
              I design and build products for expert workflows, from 3D configurators and design systems
              to new explorations of trust in fintech and AI.
            </p>
          </div>
          <div class="intro-actions">
            <a :href="cvLink" class="action" download>Download CV <span aria-hidden="true">↗</span></a>
            <router-link to="/book" class="action">Book a call <span aria-hidden="true">↗</span></router-link>
          </div>
        </section>

        <section id="work" ref="work" class="work-section" aria-label="Featured case studies">
          <header class="section-head section-head--controls">
            <button type="button" class="motion-toggle" :aria-pressed="!motionEnabled" @click="motionEnabled = !motionEnabled">
              <span aria-hidden="true">{{ motionEnabled ? '❙❙' : '▶' }}</span>
              {{ motionEnabled ? 'Pause previews' : 'Play previews' }}
            </button>
          </header>
          <div class="grid grid--featured">
            <project-tile v-for="project in featured" :key="project.slug" :project="project" :motion-enabled="motionEnabled" size="featured" />
          </div>
        </section>

        <section class="experience-section" aria-labelledby="experience-title">
          <div class="experience-heading">
            <h2 id="experience-title">Experience behind the work</h2>
            <p>Six years turning specialist knowledge into usable products, from research and interface design to production code.</p>
          </div>
          <dl class="proof">
            <div v-for="item in proof" :key="item.label" class="proof-item">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}<span>{{ item.detail }}</span></dd>
            </div>
          </dl>
          <p class="intro-links">
            <a href="https://www.linkedin.com/in/eleni-chasioti-948486194/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a>
            <a href="https://github.com/elenichas" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a>
            <a href="mailto:eleni.chasioti@gmail.com">eleni.chasioti@gmail.com</a>
          </p>
        </section>

        <section class="work-section" aria-label="More product work">
          <div class="grid grid--standard">
            <project-tile v-for="project in more" :key="project.slug" :project="project" :motion-enabled="motionEnabled" />
          </div>
        </section>

        <section class="work-section work-section--archive" aria-labelledby="archive-title">
          <header class="section-head">
            <div>
              <p class="section-eyebrow">Earlier work, 2019–2022</p>
              <h2 id="archive-title">Architecture &amp; computational design</h2>
              <p class="section-note">Where my systems thinking started: parametric tools, generative rules and fabrication logic.</p>
            </div>
          </header>
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
      proof: [
        { label: "Now", value: "Foster + Partners", detail: "Associate Design Systems Analyst, since 2024" },
        { label: "Before", value: "Bryden Wood", detail: "Senior Front-End Developer, 2020–2024" },
        { label: "Education", value: "MSc, The Bartlett, UCL", detail: "Architectural Computation, Distinction" },
        { label: "Teaching", value: "Anglia Ruskin University", detail: "Associate Lecturer in architecture, 2021–2022" },
      ],
      featured: [
        project("plum-pulse", {
          title: "Plum Pulse", route: "/products/plum-pulse", kicker: "Fintech · Agent UX",
          summary: "A bounded financial agent that investigates account changes, shows its evidence and only acts on a specific approval.",
          role: "Product framing, agent UX, interactive prototype", context: "Independent concept, 2026",
        }),
        project("industrial", {
          title: "Industrial Facility Configurator", route: "/products/industrial-configurator", kicker: "Enterprise · 3D configurator",
          summary: "A rule-aware workspace that turns specialist power-plant knowledge into a unit catalog, configurator and validation checks.",
          role: "Lead product designer", context: "Consultancy client project",
          preview: "/media/industrial-preview.mp4", poster: "/media/industrial-preview.webp", light: true,
        }),
        project("vinted-bundling", {
          title: "Vinted Smart Local Bundling", route: "/products/vinted-smart-bundling", kicker: "Commerce · Mobile",
          summary: "A marketplace concept that brings item price, delivery and nearby bundles into one honest decision.",
          role: "UX design, interactive prototype", context: "Independent concept, 2026",
        }),
        project("ai-sandbox", {
          title: "AI Interface Sandbox", route: "/products/ai-sandbox", kicker: "AI UX · Desktop",
          summary: "An explorable prototype showing how permissions, memory and uncertainty should change an AI assistant’s interface.",
          role: "Interaction design, front-end build", context: "Independent prototype, 2026",
        }),
      ],
      more: [
        project("coach", {
          title: "Vintage Coach Catalog", route: "/products/coach-verification-app",
          summary: "A searchable reference of 778 styles and 104 leather colours, with a serial-number decoder across three eras.",
          role: "Design and full build", context: "Personal data product, 2025",
          preview: "/media/coach-preview.mp4", poster: "/media/coach-preview.webp",
        }),
        project("map3d", {
          title: "Map3D Studio", route: "/products/map3d-studio",
          summary: "An open-source workflow for exploring map data, inspecting a site and exporting the results.",
          role: "Workflow design, UX engineering", context: "Open-source contribution",
          preview: "/media/map3d-preview.mp4", poster: "/images/map3d/scene-night.webp",
        }),
        project("moon", {
          title: "Moon Habitat Configurator", route: "/products/lunar-app",
          summary: "A spatial planning tool that applies real design-automation methods to modular lunar habitats.",
          role: "Led configurator product design", context: "Team proof of concept, 2025",
          preview: "/media/moon-preview.mp4", poster: "/media/moon-preview.webp",
        }),
        project("filos", {
          title: "Filos Inclusive Activity App", route: "/products/filos-mobile-app",
          summary: "A mobile service connecting people with disabilities and volunteer companions around shared activities.",
          role: "UX/UI design, research", context: "Course project, 2023",
        }),
        project("brew-crumb", {
          title: "Brew & Crumb", route: "/products/brew-crumb",
          summary: "A mobile ordering service designed around the morning coffee rush, for customers and staff.",
          role: "UX/UI design, research", context: "Course project, 2023",
        }),
        project("arabiya", {
          title: "Arabiya Language App", route: "/products/language-learning-app",
          summary: "A bilingual learning app for Egyptian Arabic, built around real lessons, practice and progress.",
          role: "Design and full-stack build", context: "Personal product, 2024",
        }),
      ],
      archive: [
        project("cricket", {
          title: "Cricket WFC Plugin", route: "/products/thesis-project",
          summary: "A rule-based design tool exploring generative growth and spatial variation.",
          context: "MSc thesis, UCL, 2020",
        }),
        project("workshop", {
          title: "Digital Futures Workshop", route: "/products/workshop-design",
          summary: "Voxel housing, aggregation logic and robotic fabrication.",
          context: "Computational design workshop, 2022",
          preview: "/media/workshop-preview.mp4", poster: "/media/workshop-preview.webp", light: true,
        }),
        project("hapi", {
          title: "Hapi Modular Housing", route: "/products/hapi-project",
          summary: "A parametric kit of parts for adaptable housing configurations.",
          context: "Architecture thesis, 2019",
        }),
      ],
    };
  },
  methods: {
    scrollToWork() {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.$refs.work?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    },
  },
};
</script>

<style scoped>
.playroom { background: var(--visual-bg); color: var(--visual-fg); }
.work-collection { max-width: 1440px; margin: 0 auto; padding: 24px clamp(16px, 4vw, 56px) 112px; }

/* Intro */
.intro { padding: 20px 0 24px; }
.intro-eyebrow { margin: 0 0 24px; font-size: 13px; color: var(--visual-muted); }
.intro-main { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(260px, .7fr); align-items: end; gap: clamp(32px, 6vw, 96px); }
.intro h1 { max-width: 13ch; margin: 0; font-size: clamp(44px, 5.7vw, 78px); font-weight: 450; line-height: 1.02; letter-spacing: -.035em; text-wrap: balance; color: var(--visual-fg); }
.intro-lede { max-width: 42ch; margin: 0 0 5px; font-size: clamp(16px, 1.4vw, 18px); line-height: 1.55; color: var(--visual-muted); text-wrap: pretty; }
.intro-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 25px; }
.action { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; border: 1px solid var(--visual-border); border-radius: 999px; color: var(--visual-fg); font-size: var(--type-sm); font-weight: 500; text-decoration: none; transition: border-color 160ms ease, background-color 160ms ease; }
.action:hover { border-color: var(--visual-fg); }
.action--primary { background: var(--visual-fg); border-color: var(--visual-fg); color: var(--visual-bg); }
.action--primary:hover { background: transparent; color: var(--visual-fg); }
.action:focus-visible, .motion-toggle:focus-visible { outline: 2px solid var(--visual-fg); outline-offset: 4px; }

.intro-links { display: flex; flex-wrap: wrap; gap: 8px 24px; margin: 28px 0 0; font-size: var(--type-sm); }
.intro-links a { color: var(--visual-muted); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--visual-border); }
.intro-links a:hover { color: var(--visual-fg); text-decoration-color: currentColor; }
.intro-links a:focus-visible { outline: 2px solid var(--visual-fg); outline-offset: 3px; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.experience-section { display: grid; grid-template-columns: minmax(220px, .8fr) minmax(0, 1.2fr); gap: 24px 72px; margin-top: 96px; padding: 52px 0; border-block: 1px solid var(--visual-border); }
.experience-heading h2 { max-width: 12ch; margin: 0; font-size: clamp(28px, 3vw, 40px); font-weight: 450; line-height: 1.15; letter-spacing: -.03em; text-wrap: balance; }
.experience-heading p { max-width: 38ch; margin: 18px 0 0; color: var(--visual-muted); font-size: var(--type-sm); line-height: 1.6; }
.experience-section .intro-links { grid-column: 2; margin: 0; }
.proof { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin: 0; }
.proof-item { padding-top: 0; }
.proof dt { font-size: var(--type-xs); letter-spacing: .08em; text-transform: uppercase; color: var(--visual-muted); }
.proof dd { margin: 8px 0 0; font-size: var(--type-md); font-weight: 500; color: var(--visual-fg); }
.proof dd span { display: block; margin-top: 4px; font-size: var(--type-sm); font-weight: 400; line-height: 1.5; color: var(--visual-muted); }

/* Sections */
.work-section { padding-top: 82px; scroll-margin-top: 72px; }
.intro + .work-section { padding-top: 36px; }
.section-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 26px; }
.section-head--controls { justify-content: flex-end; margin-bottom: 16px; }
.section-eyebrow { margin: 0 0 12px; font-size: var(--type-xs); letter-spacing: .08em; text-transform: uppercase; color: var(--visual-muted); }
.section-head h2 { margin: 0; font-size: var(--type-2xl); font-weight: 450; line-height: 1.15; letter-spacing: -.03em; text-wrap: balance; color: var(--visual-fg); }
.section-note { max-width: 60ch; margin: 12px 0 0; font-size: var(--type-sm); line-height: 1.6; color: var(--visual-muted); }
.motion-toggle { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 4px; border: 0; background: transparent; color: var(--visual-muted); font: inherit; font-size: var(--type-sm); cursor: pointer; }
.motion-toggle:hover { color: var(--visual-fg); }
.motion-toggle span { font-size: 10px; }

.grid { display: grid; }
.grid--featured { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 56px 28px; }
.grid--featured > :first-child { grid-column: 1 / -1; }
.grid--featured > :first-child :deep(.tile-link) { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(280px, .65fr); gap: clamp(24px, 4vw, 56px); align-items: center; }
.grid--featured > :first-child :deep(.tile-copy) { padding-top: 0; }
.grid--featured > :first-child :deep(.tile-title) { font-size: clamp(28px, 3.1vw, 42px); line-height: 1.1; }
.grid--featured > :first-child :deep(.tile-kicker) { margin-bottom: 16px; }
.grid--featured > :first-child :deep(.tile-summary) { font-size: clamp(16px, 1.3vw, 18px); line-height: 1.55; }
.grid--standard { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 56px 28px; }
.grid--compact { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px 24px; }

@media (max-width: 1100px) {
  .grid--featured > :not(:first-child) :deep(.tile-meta) { grid-template-columns: 1fr; gap: 12px; }
}
@media (max-width: 1024px) {
  .intro-main { grid-template-columns: minmax(0, 1fr) minmax(240px, .65fr); gap: 28px; }
  .grid--standard { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 760px) {
  .intro-main { grid-template-columns: 1fr; gap: 22px; }
  .intro-lede { max-width: 62ch; }
  .grid--featured > :first-child :deep(.tile-link) { grid-template-columns: 1fr; gap: 0; }
  .grid--featured > :first-child :deep(.tile-copy) { padding-top: 20px; }
  .grid--featured { grid-template-columns: 1fr; gap: 48px; }
  .grid--featured > :not(:first-child) :deep(.tile-meta) { grid-template-columns: 1fr 1fr; gap: 16px; }
  .experience-section { grid-template-columns: 1fr; gap: 32px; }
  .experience-section .intro-links { grid-column: 1; }
}
@media (max-width: 640px) {
  .work-collection { padding-top: 16px; padding-bottom: 72px; }
  .intro { padding: 16px 0 32px; }
  .intro-eyebrow { margin-bottom: 20px; }
  .intro h1 { font-size: clamp(42px, 11vw, 64px); }
  .intro-actions { margin-top: 24px; }
  .proof { grid-template-columns: 1fr; gap: 18px; }
  .experience-section { margin-top: 72px; padding: 40px 0; }
  .work-section { padding-top: 64px; }
  .intro + .work-section { padding-top: 32px; }
  .section-head { flex-direction: column; align-items: flex-start; gap: 12px; margin-bottom: 28px; }
  .grid--featured, .grid--standard { grid-template-columns: 1fr; gap: 48px; }
  .grid--compact { grid-template-columns: 1fr; gap: 24px; }
  .grid--compact :deep(.tile-link) { display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 16px; align-items: start; }
  .grid--compact :deep(.tile-copy) { padding-top: 0; }
  .grid--compact :deep(.tile-summary) { font-size: var(--type-xs); }
}
@media (prefers-reduced-motion: reduce) {
  .action { transition: none; }
}
@media (prefers-reduced-motion: no-preference) {
  .intro-eyebrow { animation: arrive 600ms cubic-bezier(.16,1,.3,1) both; }
  .intro h1 { animation: arrive 760ms cubic-bezier(.16,1,.3,1) 90ms both; }
  .intro-lede { animation: arrive 760ms cubic-bezier(.16,1,.3,1) 170ms both; }
  .intro-actions { animation: arrive 760ms cubic-bezier(.16,1,.3,1) 230ms both; }
}
@keyframes arrive { from { opacity: .45; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
</style>
