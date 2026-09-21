<template>
  <app-navbar />
  <main id="project-index" class="playroom">
    <header class="room-heading">
      <div class="room-intro">
        <span class="studio-label">Eleni Chasioti · Designer & Engineer</span>
        <h1>Spatial roots.<br /><span>Product expertise.</span></h1>
      </div>
      <div class="room-note">
        <p>I’m a <strong>product designer and engineer</strong> with a background in architecture, building tools for complex spatial and digital workflows.</p>
        <p>That’s my foundation. <span>Commerce, learning and everyday services</span> are where I explore what else that expertise can do.</p>
      </div>
    </header>

    <nav class="worlds" aria-label="Explore work by discipline">
      <button v-for="discipline in disciplines" :key="discipline.id"
        type="button" :aria-pressed="activeDiscipline === discipline.id"
        :class="{ selected: activeDiscipline === discipline.id }"
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
          <div class="tile-visual">
            <img :src="project.image" :alt="project.imageAlt" :loading="index < 3 ? 'eager' : 'lazy'" draggable="false" />
            <span class="tile-action" aria-hidden="true">Open project <b>↗</b></span>
          </div>
          <div class="tile-copy">
            <p class="project-format">{{ project.format }} · {{ project.year }}</p>
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
      <p>No projects are available in {{ activeDisciplineLabel.toLowerCase() }}.</p>
      <button type="button" @click="setDiscipline('all')">Show all work</button>
    </section>

    <div class="room-signoff"><span>Architecture · Commerce · Finance · Mobile · Desktop · 3D · Hospitality</span><span>Different worlds. Same curiosity. <span aria-hidden="true">✳</span></span></div>
  </main>
  <app-footer />
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "Design",
  components: { AppNavbar, AppFooter },
  setup() {
    useHead({
      title: "Eleni Chasioti · Design, code & spatial systems",
      meta: [{ name: "description", content: "Explore Eleni Chasioti’s work across architecture, commerce, mobile, desktop, 3D systems and hospitality." }],
    });
  },
  data() {
    return {
      activeDiscipline: "all",
      disciplines: [
        { id: "all", label: "All work" },
        { id: "architecture", label: "Architecture" },
        { id: "commerce", label: "Commerce" },
        { id: "mobile", label: "Mobile" },
        { id: "desktop", label: "Desktop" },
        { id: "three-d", label: "3D systems" },
        { id: "hospitality", label: "Hospitality" },
        { id: "finance", label: "Finance" },
      ],
      projects: [
        {
          slug: "moon", title: "Moon Habitat Configurator", summary: "A spatial planning tool for assembling modular lunar habitats.", route: "/products/lunar-app",
          image: resolveAsset("@/images/gallery/moonPixel.webp"), imageAlt: "Modular lunar habitat shown in a 3D configurator", tags: ["Architecture", "3D systems", "Desktop"], disciplines: ["architecture", "three-d", "desktop"], format: "Design automation", year: 2025, tone: "space", size: "wide",
        },
        {
          slug: "coach", title: "Vintage Coach Catalog", summary: "A searchable reference and authentication system for vintage leather goods.", route: "/products/coach-verification-app",
          image: resolveAsset("@/images/gallery/coachHero.jpg"), imageAlt: "Vintage Coach Catalog authentication interface", tags: ["Commerce", "Desktop", "Data"], disciplines: ["commerce", "desktop"], format: "Reference platform", year: 2025, tone: "leather", size: "tall",
        },
        {
          slug: "plum-pulse", title: "Plum Pulse", summary: "A monthly review that connects investment performance, automations and fees in one mobile story.", route: "/playground/plum-pulse",
          image: resolveAsset("@/images/gallery/plum-pulse.svg"), imageAlt: "Plum Pulse monthly investment review interface", tags: ["Finance", "Mobile", "Data"], disciplines: ["finance", "mobile"], format: "Feature concept", year: 2026, tone: "finance", size: "standard",
        },
        {
          slug: "industrial", title: "Industrial Facility Configurator", summary: "A rule-aware 3D workspace for specifying complex industrial facilities.", route: "/products/industrial-configurator",
          image: resolveAsset("@/images/gallery/industrial.png"), imageAlt: "Industrial facility configurator showing a plant in 3D", tags: ["3D systems", "Desktop", "Architecture"], disciplines: ["three-d", "desktop", "architecture"], format: "Configuration system", year: 2025, tone: "industrial", size: "standard",
        },
        {
          slug: "brew-crumb", title: "Brew & Crumb", summary: "A mobile ordering service designed around the morning coffee rush.", route: "/products/brew-crumb",
          image: resolveAsset("@/images/gallery/kapihan.webp"), imageAlt: "Brew and Crumb mobile ordering app screens", tags: ["Hospitality", "Mobile", "Service"], disciplines: ["hospitality", "mobile"], format: "Mobile service", year: 2023, tone: "cafe", size: "standard",
        },
        {
          slug: "arabiya", title: "Arabiya Language App", summary: "A bilingual learning experience built around practice, progress and context.", route: "/products/language-learning-app",
          image: resolveAsset("@/images/gallery/language.jpg"), imageAlt: "Arabiya language learning interface", tags: ["Mobile", "Education", "Product"], disciplines: ["mobile"], format: "Learning product", year: 2024, tone: "language", size: "wide",
        },
        {
          slug: "hapi", title: "Hapi Modular Housing", summary: "A parametric kit of parts for adaptable housing configurations.", route: "/products/hapi-project",
          image: resolveAsset("@/images/gallery/hapi.webp"), imageAlt: "Hapi modular housing system render", tags: ["Architecture", "3D systems", "Research"], disciplines: ["architecture", "three-d"], format: "Spatial system", year: 2019, tone: "hapi", size: "standard",
        },
        {
          slug: "filos", title: "Filos Inclusive Activity App", summary: "A mobile concept that helps people find accessible activities and routes.", route: "/products/filos-mobile-app",
          image: resolveAsset("@/images/gallery/filos.webp"), imageAlt: "Filos inclusive activity app screens", tags: ["Mobile", "Inclusion", "Service"], disciplines: ["mobile"], format: "Mobile concept", year: 2023, tone: "filos", size: "tall",
        },
        {
          slug: "workshop", title: "Digital Futures Workshop", summary: "A study in voxel housing, aggregation logic and robotic fabrication.", route: "/products/workshop-design",
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
    activeDisciplineLabel() { return this.disciplines.find((discipline) => discipline.id === this.activeDiscipline)?.label || "All work"; },
    filteredProjects() {
      if (this.activeDiscipline === "all") return this.projects;
      return this.projects.filter((project) => project.disciplines.includes(this.activeDiscipline));
    },
  },
  methods: {
    countForDiscipline(id) { return id === "all" ? this.projects.length : this.projects.filter((project) => project.disciplines.includes(id)).length; },
    setDiscipline(id) { this.activeDiscipline = id; },
  },
};
</script>

<style scoped>
.playroom {
  --room: #fafafa;
  --ink: #111;
  --muted: #595959;
  min-height: 100vh;
  padding: clamp(36px, 5vw, 68px) max(20px, calc((100vw - 1380px) / 2)) 28px;
  overflow: visible;
  background: var(--room);
  color: var(--ink);
  scroll-margin-top: 72px;
}
.room-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, .55fr);
  align-items: start;
  gap: clamp(32px, 7vw, 112px);
}
.studio-label {
  display: inline-block;
  margin-bottom: 18px;
  padding-bottom: 5px;
  border-bottom: 3px solid #f24e1e;
  font-size: clamp(15px, 1.3vw, 18px);
  font-weight: 650;
}
.room-heading h1 {
  max-width: 900px;
  color: var(--ink);
  font-size: clamp(44px, 6vw, 86px);
  font-weight: 650;
  letter-spacing: -.04em;
  line-height: .96;
  text-wrap: balance;
}
.room-heading h1 > span {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: #ffd76b;
  text-decoration-thickness: .12em;
  text-underline-offset: .09em;
}
.room-note {
  max-width: 360px;
  padding-bottom: 5px;
}
.room-note p {
  margin: 0;
  color: var(--ink);
  font-size: 15px;
  line-height: 1.6;
}
.room-note strong {
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #f24e1e;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
.room-note p + p {
  margin-top: 18px;
  color: var(--muted);
  font-size: 13px;
}
.room-note p + p span {
  color: #6841a5;
  font-weight: 650;
}
.worlds {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 34px 0 20px;
}
.worlds button {
  display: flex;
  min-height: 40px;
  align-items: center;
  gap: 9px;
  padding: 8px 15px;
  border: 1px solid #cecece;
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 180ms ease, border-color 180ms ease, color 180ms ease;
}
.worlds button:hover { border-color: var(--ink); background: #fff; }
.worlds button.selected { border-color: var(--ink); background: var(--ink); color: #fff; }
.worlds sup { font-size: 9px; font-variant-numeric: tabular-nums; }
.room-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 14px;
  border-top: 1px solid #ddd;
}
.room-toolbar p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
}
.project-field {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding: clamp(30px, 4vw, 54px) 0 clamp(72px, 8vw, 112px);
}
.project-tile {
  position: relative;
  z-index: 1;
  min-width: 0;
  transform-origin: center;
  transition: transform 320ms cubic-bezier(.22, 1, .36, 1);
}
.project-tile:hover,
.project-tile:focus-within {
  z-index: 10;
  transform: scale(1.18);
}
.project-tile a {
  display: block;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  box-shadow: 0 1px 3px #00000014;
  transition: box-shadow 320ms cubic-bezier(.22, 1, .36, 1);
}
.project-tile:hover a,
.project-tile:focus-within a {
  box-shadow: 0 18px 38px #00000029;
}
.tile-visual {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 4px;
  background: #e8e8e8;
}
.tile-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms cubic-bezier(.22, 1, .36, 1), filter 260ms ease;
}
.project-tile:hover img,
.project-tile:focus-within img {
  filter: saturate(1.04);
  transform: scale(1.035);
}
.tile-copy {
  padding: 14px 6px 7px;
}
.project-format {
  margin: 0 0 6px;
  color: #5f5f5f;
  font-size: 9px;
  font-weight: 600;
}
.tile-copy h2 {
  color: var(--ink);
  font-size: clamp(15px, 1.3vw, 19px);
  line-height: 1.15;
  letter-spacing: -.02em;
  text-wrap: balance;
}
.project-summary {
  margin: 7px 0 0;
  color: #4e4e4e;
  font-size: 10px;
  line-height: 1.5;
}
.tile-action {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 5px;
  background: #fff;
  color: var(--ink);
  font-size: 9px;
  font-weight: 650;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 180ms ease, transform 260ms cubic-bezier(.22, 1, .36, 1);
}
.tile-action b { font-size: 14px; line-height: 1; }
.project-tile:hover .tile-action,
.project-tile:focus-within .tile-action {
  opacity: 1;
  transform: translateY(0);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}
.tags li {
  padding: 4px 7px;
  border-radius: 4px;
  color: #242424;
  font-size: 8px;
  font-weight: 550;
}
.tags .tag-0 { background: #ffd76b; }
.tags .tag-1 { background: #e6dafa; }
.tags .tag-2 { background: #c6f1db; }
.room-signoff {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  color: var(--muted);
  font-size: 10px;
}
.room-signoff > span:last-child { display: flex; align-items: center; gap: 10px; }
.room-signoff > span:last-child > span { color: #f24e1e; font-size: 22px; line-height: 1; }
.nothing-found {
  display: flex;
  min-height: 360px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
}
.nothing-found > span { font-size: 54px; line-height: 1; }
.nothing-found h2,
.nothing-found p { color: var(--ink); }
.nothing-found button {
  min-height: 42px;
  padding: 10px 16px;
  border: 0;
  border-radius: 5px;
  background: var(--ink);
  color: #fff;
  font: inherit;
  cursor: pointer;
}
.playroom :where(button, a):focus-visible {
  outline: 3px solid #7851a9;
  outline-offset: 4px;
}
@media (max-width: 1050px) {
  .project-field { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .project-tile:hover,
  .project-tile:focus-within { transform: scale(1.14); }
}
@media (max-width: 760px) {
  .room-heading { grid-template-columns: 1fr; gap: 22px; }
  .room-heading h1 { font-size: clamp(44px, 11vw, 68px); }
  .room-note { max-width: 38rem; }
  .project-field { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .project-tile:hover,
  .project-tile:focus-within { transform: scale(1.08); }
}
@media (max-width: 520px) {
  .playroom { padding: 26px 14px 20px; }
  .room-heading h1 { font-size: clamp(40px, 13vw, 58px); }
  .studio-label { font-size: 14px; }
  .worlds {
    margin: 24px -14px 16px;
    padding: 0 14px 4px;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .worlds::-webkit-scrollbar { display: none; }
  .worlds button { flex: 0 0 auto; min-height: 38px; padding: 7px 11px; font-size: 10px; }
  .project-field { grid-template-columns: 1fr; gap: 12px; padding-top: 28px; }
  .project-tile:hover,
  .project-tile:focus-within { transform: none; }
  .tile-visual { aspect-ratio: 16 / 10; }
  .tile-action { opacity: 1; transform: none; }
  .room-signoff { flex-direction: column; gap: 10px; }
}
@media (hover: none) {
  .project-tile:hover { transform: none; }
  .tile-action { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .project-tile,
  .project-tile a,
  .tile-visual img,
  .tile-action { transition: none; }
  .project-tile:hover,
  .project-tile:focus-within { transform: none; }
}
</style>
