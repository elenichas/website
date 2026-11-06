<template>
  <div class="portfolio-theme portfolio-gallery">
  <app-navbar />
  <main id="project-index" class="playroom">
    <header class="gallery-intro">
      <h1>Product design &amp; UX engineering, with a focus on fintech.</h1>
      <router-link to="/about">About Eleni <span aria-hidden="true">↗</span></router-link>
    </header>

    <nav class="worlds" aria-label="Filter projects by category">
      <button v-for="discipline in disciplines" :key="discipline.id"
        type="button" :aria-pressed="isDisciplineSelected(discipline.id)"
        :class="{ selected: isDisciplineSelected(discipline.id) }"
        @click="setDiscipline(discipline.id)">
        {{ discipline.label }} <sup>{{ countForDiscipline(discipline.id) }}</sup>
      </button>
    </nav>

    <div class="room-toolbar" aria-live="polite">
      <p>{{ activeDisciplineLabel }}</p>
      <p>{{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }}</p>
    </div>

    <section v-if="filteredProjects.length" class="project-field" aria-label="Project gallery">
      <article
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        class="project-tile"
      >
        <router-link :to="project.route" :aria-label="`View ${project.title}`">
          <project-motion-card v-if="project.slug === 'vinted-bundling' || project.slug === 'plum-pulse'" :kind="project.slug === 'vinted-bundling' ? 'vinted' : 'plum'" />
          <div v-else-if="project.slug === 'coach'" class="coach-showcase">
            <img class="coach-screen coach-screen-left" src="/media/coach-colors.webp" alt="" aria-hidden="true" />
            <img class="coach-screen coach-screen-right" src="/media/coach-authentication.webp" alt="" aria-hidden="true" />
            <video class="coach-screen coach-screen-main" :src="project.preview" :poster="project.poster" autoplay muted loop playsinline preload="metadata" aria-label="Vintage Coach Catalog recorded interface preview" />
          </div>
          <video v-else-if="project.preview" class="tile-recording" :class="{ 'tile-recording-light': project.slug === 'industrial' || project.slug === 'workshop' }" :src="project.preview" :poster="project.poster" autoplay muted loop playsinline preload="metadata" :aria-label="`${project.title} motion preview`" />
          <div v-else class="tile-visual">
            <img :src="project.image" :alt="project.imageAlt" :loading="index < 3 ? 'eager' : 'lazy'" draggable="false" />
            <span class="tile-action" aria-hidden="true">Open project <b>↗</b></span>
          </div>
          <div class="tile-copy">
            <h2>{{ project.title }}</h2>
            <p class="project-summary">{{ project.summary }}</p>
            <ul class="tags" :aria-label="`${project.title} categories`">
              <li v-for="(tag, tagIndex) in project.tags" :key="tag" :class="`tag-${tagIndex % 3}`">{{ tag }}</li>
            </ul>
          </div>
        </router-link>
      </article>
    </section>

    <section v-else class="nothing-found" role="status">
      <span aria-hidden="true">↻</span>
      <h2>A little too specific?</h2>
      <p>No projects in this category yet. Explore the complete collection.</p>
      <button type="button" @click="setDiscipline('all')">Show all work</button>
    </section>

  </main>
  <app-footer />
  </div>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import ProjectMotionCard from "../components/ProjectMotionCard.vue";
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "Design",
  components: { AppNavbar, AppFooter, ProjectMotionCard },
  setup() {
    useHead({
      title: "Eleni Chasioti · Product design & UX engineering",
      meta: [{ name: "description", content: "Product design and UX engineering by Eleni Chasioti. Explore fintech concepts, commerce experiences, AI interfaces and complex workflow tools." }],
    });
  },
  data() {
    return {
      activeDisciplines: [],
      disciplines: [
        { id: "all", label: "All work" },
        { id: "product", label: "Products" },
        { id: "finance", label: "Fintech" },
        { id: "mobile", label: "Mobile" },
        { id: "desktop", label: "Desktop" },
        { id: "playground", label: "Experiments" },
      ],
      projects: [
        {
          slug: "map3d", title: "Map3D Studio", summary: "An open-source workflow for exploring map data, inspecting a site and exporting the results.", route: "/products/map3d-studio",
          image: "/images/map3d/scene-night.webp", imageAlt: "Map3D Studio showing an Athens site with scene layers and exploration tools", preview: "/media/map3d-preview.mp4", poster: "/images/map3d/scene-night.webp", tags: ["Open source", "Desktop", "Data tools"], disciplines: ["desktop", "data"],
        },
        {
          slug: "moon", title: "Moon Habitat Configurator", summary: "A spatial planning tool for assembling modular lunar habitats.", route: "/products/lunar-app",
          preview: "/media/moon-preview.mp4", poster: "/media/moon-preview.webp",
          image: resolveAsset("@/images/gallery/moonPixel.webp"), imageAlt: "Modular lunar habitat shown in a 3D configurator", tags: ["Architecture", "3D systems", "Desktop"], disciplines: ["architecture", "three-d", "desktop"], format: "Design automation", year: 2025, tone: "space", size: "wide",
        },
        {
          slug: "coach", title: "Vintage Coach Catalog", summary: "A searchable reference and authentication system for vintage leather goods.", route: "/products/coach-verification-app",
          preview: "/media/coach-preview.mp4", poster: "/media/coach-preview.webp",
          image: resolveAsset("@/images/gallery/coachHero.jpg"), imageAlt: "Vintage Coach Catalog authentication interface", tags: ["Commerce", "Desktop", "Data"], disciplines: ["commerce", "desktop"], format: "Reference platform", year: 2025, tone: "leather", size: "tall",
        },
        {
          slug: "plum-pulse", title: "Plum Pulse", summary: "A bounded financial agent: investigate account changes, inspect evidence and approve a specific next step.", route: "/playground/plum-pulse",
          image: resolveAsset("@/images/gallery/plum-pulse.svg"), imageAlt: "Plum Pulse financial agent concept", tags: ["Agent UX", "Finance", "Mobile"], disciplines: ["finance", "mobile", "agent-ux", "ai-ux", "playground"], format: "Feature concept", year: 2026, tone: "finance", size: "standard",
        },
        {
          slug: "ai-sandbox", title: "AI Interface Sandbox", summary: "Explore how permissions, memory and uncertainty change an AI assistant’s interface.", route: "/playground/ai-sandbox",
          image: resolveAsset("@/images/gallery/ai-sandbox.svg"), imageAlt: "Illustrated AI sandbox with permission settings and a review response", tags: ["AI UX", "Desktop", "Playground"], disciplines: ["ai-ux", "desktop", "playground"], format: "Interactive prototype", year: 2026, tone: "sandbox", size: "standard",
        },
        {
          slug: "vinted-bundling", title: "Vinted Smart Local Bundling", summary: "A marketplace concept that brings item price, delivery and nearby bundles into one decision.", route: "/playground/vinted-smart-bundling",
          image: resolveAsset("@/images/gallery/vinted-bundling.svg"), imageAlt: "Vinted prototype showing a yellow T-shirt listing and its full price breakdown", tags: ["Commerce", "Mobile", "Playground"], disciplines: ["commerce", "mobile", "playground"], format: "Interactive prototype", year: 2026, tone: "commerce", size: "standard",
        },
        {
          slug: "industrial", title: "Industrial Facility Configurator", summary: "A rule-aware 3D workspace for specifying complex industrial facilities.", route: "/products/industrial-configurator",
          preview: "/media/industrial-preview.mp4", poster: "/media/industrial-preview.webp",
          image: resolveAsset("@/images/gallery/industrial.png"), imageAlt: "Industrial facility configurator showing a plant in 3D", tags: ["3D systems", "Desktop", "Architecture"], disciplines: ["three-d", "desktop", "architecture"], format: "Configuration system", year: 2025, tone: "industrial", size: "standard",
        },
        {
          slug: "brew-crumb", title: "Brew & Crumb", summary: "A mobile ordering service designed around the morning coffee rush.", route: "/products/brew-crumb",
          image: resolveAsset("@/images/gallery/kapihan.webp"), imageAlt: "Brew and Crumb mobile ordering app screens", tags: ["Hospitality", "Mobile", "Service"], disciplines: ["hospitality", "mobile"], format: "Mobile service", year: 2023, tone: "cafe", size: "standard",
        },
        {
          slug: "arabiya", title: "Arabiya Language App", summary: "A bilingual learning experience built around practice, progress and context.", route: "/products/language-learning-app",
          image: resolveAsset("@/images/gallery/language.jpg"), imageAlt: "Arabiya language learning interface", tags: ["Mobile", "Learning"], disciplines: ["mobile", "learning"], format: "Learning product", year: 2024, tone: "language", size: "wide",
        },
        {
          slug: "hapi", title: "Hapi Modular Housing", summary: "A parametric kit of parts for adaptable housing configurations.", route: "/products/hapi-project",
          image: resolveAsset("@/images/gallery/hapi.webp"), imageAlt: "Hapi modular housing system render", tags: ["Architecture", "3D systems", "Research"], disciplines: ["architecture", "three-d"], format: "Spatial system", year: 2019, tone: "hapi", size: "standard",
        },
        {
          slug: "filos", title: "Filos Inclusive Activity App", summary: "A mobile concept connecting people with disabilities and volunteer companions around shared activities.", route: "/products/filos-mobile-app",
          image: resolveAsset("@/images/gallery/filos.webp"), imageAlt: "Filos inclusive activity app screens", tags: ["Mobile", "Accessibility", "Service"], disciplines: ["mobile", "accessibility"], format: "Mobile concept", year: 2023, tone: "filos", size: "tall",
        },
        {
          slug: "workshop", title: "Digital Futures Workshop", summary: "A study in voxel housing, aggregation logic and robotic fabrication.", route: "/products/workshop-design",
          preview: "/media/workshop-preview.mp4", poster: "/media/workshop-preview.webp",
          image: resolveAsset("@/images/gallery/workshop.webp"), imageAlt: "Voxel housing aggregation study from the Digital Futures Workshop", tags: ["Architecture", "3D systems", "Fabrication"], disciplines: ["architecture", "three-d"], format: "Computational study", year: 2022, tone: "workshop", size: "wide",
        },
        {
          slug: "cricket", title: "Cricket WFC Plugin", summary: "A rule-based design tool exploring generative growth and spatial variation.", route: "/products/thesis-project",
          image: resolveAsset("@/images/gallery/thesis.webp"), imageAlt: "Cricket rule-based design plugin study", tags: ["Architecture", "3D systems", "Code"], disciplines: ["architecture", "three-d", "desktop"], format: "Computational tool", year: 2021, tone: "cricket", size: "standard",
        },
      ],
    };
  },
  computed: {
    activeDisciplineLabel() { return this.activeDisciplines.length ? this.disciplines.find(d => d.id === this.activeDisciplines[0]).label : 'The complete collection'; },
    filteredProjects() { const order = ['plum-pulse', 'coach', 'vinted-bundling', 'ai-sandbox', 'map3d', 'arabiya', 'filos', 'brew-crumb', 'industrial', 'moon', 'hapi', 'cricket', 'workshop'];
      return [...this.projects].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)).filter(project => this.matchesDiscipline(project, this.activeDisciplines[0] || 'all')); },
  },
  methods: {
    matchesDiscipline(project, id) {
      if (id === 'all') return true;
      if (id === 'spatial') return project.disciplines.includes('three-d');
      if (id === 'product') return !project.disciplines.includes('playground') && (project.disciplines.includes('mobile') || project.disciplines.includes('desktop'));
      return project.disciplines.includes(id);
    },
    isDisciplineSelected(id) { return id === (this.activeDisciplines[0] || 'all'); },
    countForDiscipline(id) { return this.projects.filter(project => this.matchesDiscipline(project, id)).length; },
    setDiscipline(id) { this.activeDisciplines = id === 'all' ? [] : [id]; },
  },
};
</script>

<style scoped>
.tile-recording { display:block; width:100%; aspect-ratio:16/11; object-fit:contain; background:#18191b; border-radius:8px; }
.tile-recording-light { background:#fff; border:1px solid #eeedf0; }
.coach-showcase { position:relative; aspect-ratio:16/11; overflow:hidden; border-radius:8px; background:radial-gradient(ellipse at 50% 25%, #f3ece1, #c7b7a2); isolation:isolate; }
.coach-showcase .coach-screen { position:absolute; display:block; width:35%; height:auto; border:3px solid #29241f; border-radius:12px; box-shadow:0 14px 28px #34261935; }
.coach-showcase .coach-screen-left { left:3%; top:16%; transform:rotate(-9deg); }
.coach-showcase .coach-screen-right { right:3%; top:13%; transform:rotate(9deg); }
.coach-showcase .coach-screen-main { z-index:1; width:38%; left:31%; top:5%; }
.project-tile a:hover .coach-screen-left { transform:rotate(-9deg); }
.project-tile a:hover .coach-screen-right { transform:rotate(9deg); }
.playroom { --ink:#202024; --muted:#626266; min-height:100vh; padding:0 max(24px,calc((100vw - 1600px)/2)) 80px; background:#fff; color:var(--ink); }
.gallery-intro { display:flex; justify-content:space-between; align-items:center; gap:24px; padding:36px 0 30px; }
.gallery-intro h1 { font-size:clamp(20px,2vw,28px); letter-spacing:-.025em; line-height:1.35; font-weight:450; color:#202024; margin:0; }
.gallery-intro > a { flex-shrink:0; display:inline-flex; align-items:center; gap:16px; min-height:44px; font-size:13px; color:#55555b; text-decoration:none; }
.gallery-intro > a:hover { color:#202024; }
.worlds { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px; }
.worlds button { display:flex; align-items:center; gap:8px; min-height:44px; padding:8px 16px; border:1px solid #d5d5d8; border-radius:6px; background:#fff; color:#333338; font:inherit; font-size:13px; cursor:pointer; transition:background 180ms ease; }
.worlds button:hover { background:#f1f1f3; }
.worlds sup { font-size:10px; }
.room-toolbar { display:flex; justify-content:space-between; border-top:1px solid #e3e3e6; padding-top:14px; gap:20px; }
.room-toolbar p { margin:0; font-size:12px; color:#626266; }
.project-field { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:40px 24px; padding-top:24px; }
.project-tile { min-width:0; }
.project-tile a { display:block; color:#202024; text-decoration:none; }
.tile-visual { position:relative; aspect-ratio:16/11; overflow:hidden; border-radius:8px; background:#f0f0f2; }
.tile-visual img { display:block; width:100%; height:100%; object-fit:cover; transition:transform 450ms cubic-bezier(.22,1,.36,1); }
.project-tile a:hover img { transform:scale(1.025); }
.tile-copy { padding-top:16px; }
.tile-copy h2 { font-size:20px; font-weight:550; line-height:1.25; letter-spacing:-.025em; }
.project-summary { font-size:14px; line-height:1.6; color:#626266; margin:8px 0 0; max-width:48ch; }
.tile-action { position:absolute; right:12px; bottom:12px; background:#fff; color:#202024; padding:9px 12px; border-radius:5px; display:flex; gap:14px; align-items:center; font-size:12px; opacity:0; transition:opacity 180ms ease; }
.project-tile a:is(:hover,:focus-visible) .tile-action { opacity:1; }
.tags { display:flex; flex-wrap:wrap; list-style:none; gap:8px; padding:0; margin:12px 0 0; }
.tags li { font-size:11px; color:#626266; }
.nothing-found { padding:60px 0; text-align:center; }
.playroom :is(a,button):focus-visible { outline:2px solid #202024; outline-offset:5px; }
@media(max-width:1100px) { .project-field { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media(max-width:600px) { .playroom { padding-inline:18px; } .gallery-intro { align-items:flex-start; flex-direction:column; gap:8px; padding:22px 0 20px; } .gallery-intro h1 { font-size:22px; max-width:30ch; } .gallery-intro > a { min-height:36px; } .project-field { grid-template-columns:1fr; gap:36px; } .worlds { gap:6px; } .worlds button { padding-inline:10px; font-size:12px; } .tile-action { opacity:1; } }
@media(hover:none) { .tile-action { opacity:1; } }
@media(prefers-reduced-motion:reduce) { .tile-visual img,.tile-action,.worlds button { transition:none; } .project-tile a:hover img { transform:none; } }
</style>

<style>
/* Scope the quieter shell to the work index; other pages retain their identity. */
#app .portfolio-gallery .modern-navbar { background:#fff; border-bottom:1px solid #e7e7e9; }
#app .portfolio-gallery .modern-navbar :is(.nav-link,.brand-link,.brand-name) { color:#202024; }
#app .portfolio-gallery .nav-link.active::after { background:var(--portfolio-header,#f65b32); }
#app .portfolio-gallery .language-switcher { background:#f2f2f4; }
#app .portfolio-gallery .worlds button { border-color:#d5d5d8; }
#app .portfolio-gallery .worlds button.selected { background:#202024; border-color:#202024; color:#fff; }
#app .portfolio-gallery .tags li { display:inline-flex; align-items:center; justify-content:center; padding:4px 8px; margin:0; line-height:1.2; border-radius:3px; background:var(--workshop-lilac, #e6dafa); color:var(--workshop-ink, #251a25); }
#app .portfolio-gallery .tags li + li::before { content:none; }
</style>
