<template>
  <div class="design-system-page">
    <app-navbar />

    <main>
      <section class="system-hero">
        <p class="section-label">Portfolio design system</p>
        <h1>Custom portfolio design system</h1>
        <p class="hero-copy">
          A compact visual system for a personal portfolio: quiet navigation, clear typography,
          reusable interaction patterns, and project pages that let the work carry the color.
        </p>
        <div class="hero-actions" aria-label="Design system summary">
          <span v-for="item in summary" :key="item">{{ item }}</span>
        </div>
      </section>

      <section class="system-section">
        <div class="section-heading-row">
          <p class="section-label">01 Rationale</p>
          <h2>One shell, many project worlds</h2>
          <p>
            The website uses a restrained portfolio shell so each project can have its own visual character.
            Neutral surfaces, compact controls, and consistent spacing make the experience feel deliberate
            while keeping screenshots, prototypes, and case-study evidence in focus.
          </p>
        </div>

        <div class="principle-grid">
          <article v-for="principle in principles" :key="principle.title" class="system-card">
            <span>{{ principle.kicker }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.detail }}</p>
          </article>
        </div>
      </section>

      <section class="system-section">
        <div class="section-heading-row">
          <p class="section-label">02 Foundations</p>
          <h2>Tokens and visual language</h2>
          <p>
            The system is intentionally small. Color, type, radius, spacing, elevation, and motion are
            defined as shared values, then applied through Vue components and page-level patterns.
          </p>
        </div>

        <div class="token-layout">
          <article class="token-panel color-panel">
            <h3>Color tokens</h3>
            <div class="color-list">
              <div v-for="color in colors" :key="color.name" class="color-row">
                <span class="color-swatch" :style="{ background: color.value }"></span>
                <div>
                  <strong>{{ color.name }}</strong>
                  <code>{{ color.token }}</code>
                </div>
                <span>{{ color.value }}</span>
              </div>
            </div>
          </article>

          <article class="token-panel type-panel">
            <h3>Type system</h3>
            <div class="type-spec display-spec">Eleni Chasioti</div>
            <div class="type-spec headline-spec">Case study title</div>
            <p>
              Inter carries the interface. Instrument Serif appears selectively as a signature, which keeps
              expressive moments from becoming noise.
            </p>
          </article>

          <article class="token-panel compact-panel">
            <h3>Spacing, radius, motion</h3>
            <div class="scale-list">
              <span v-for="space in spacing" :key="space.token">{{ space.token }} {{ space.value }}</span>
            </div>
            <div class="radius-row">
              <span v-for="radius in radii" :key="radius.token" :style="{ borderRadius: radius.value }">
                {{ radius.token }}
              </span>
            </div>
            <p>
              Small radii and short ease-out transitions make controls feel tactile without turning the site
              into an app dashboard.
            </p>
          </article>
        </div>
      </section>

      <section class="system-section">
        <div class="section-heading-row">
          <p class="section-label">03 Components</p>
          <h2>Reusable pieces</h2>
          <p>
            These are the recurring interface parts I rely on across the portfolio: the shell, page headers,
            cards, buttons, tags, and the animated project posters used in the Craft section.
          </p>
        </div>

        <div class="component-board">
          <article class="component-sample nav-sample">
            <span class="sample-label">Navigation bar</span>
            <div class="nav-preview">
              <div class="preview-brand">
                <span>EC</span>
                <strong>Eleni Chasioti</strong>
              </div>
              <nav aria-label="Navigation preview">
                <span>Home</span>
                <span>Craft</span>
                <span>Playground</span>
                <span>About</span>
              </nav>
              <div class="language-preview">
                <span>EN</span>
                <span>EL</span>
              </div>
            </div>
            <p>Sticky, compact, bilingual, and quiet enough to keep the work as the main event.</p>
          </article>

          <article class="component-sample header-sample">
            <span class="sample-label">Page header</span>
            <div class="header-preview">
              <p class="section-label">Selected work</p>
              <h3>Craft</h3>
              <p>Large heading, short context, then content. The pattern supports quick scanning.</p>
            </div>
          </article>

          <article class="component-sample controls-sample">
            <span class="sample-label">Actions and metadata</span>
            <div class="button-row">
              <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary">
                Get in touch
                <span class="mdi mdi-arrow-right"></span>
              </a>
              <a href="/cv/EleniChasiotiCV2026.pdf" class="btn-secondary">
                Download resume
                <span class="mdi mdi-download"></span>
              </a>
              <router-link to="/playground" class="btn-ghost">Explore playground</router-link>
            </div>
            <div class="chip-row">
              <span class="tag">UX/UI</span>
              <span class="tag">Front end</span>
              <span class="tag">Spatial computing</span>
            </div>
          </article>

          <article class="component-sample footer-sample">
            <span class="sample-label">Footer</span>
            <div class="footer-preview">
              <div>
                <h3>Let us work together</h3>
                <p>Simple closing CTA with social links and contact path.</p>
              </div>
              <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary">Get in touch</a>
            </div>
          </article>
        </div>
      </section>

      <section class="system-section">
        <div class="section-heading-row">
          <p class="section-label">04 Craft cards</p>
          <h2>Animated project previews</h2>
          <p>
            The Craft page uses animated poster cards as compact project previews. They share a layout and
            motion model, while each project can set its own accent palette and visual motif.
          </p>
        </div>

        <div class="poster-grid">
          <article
            v-for="card in craftCards"
            :key="card.title"
            class="craft-poster"
            :class="card.className"
            :aria-label="card.title"
          >
            <div class="poster-topline">
              <span>{{ card.index }}</span>
              <span>{{ card.type }}</span>
            </div>
            <h3>{{ card.title }}</h3>
            <div class="poster-stage" aria-hidden="true">
              <span class="poster-shape shape-a"></span>
              <span class="poster-shape shape-b"></span>
              <span class="poster-shape shape-c"></span>
              <span class="poster-line line-a"></span>
              <span class="poster-line line-b"></span>
            </div>
            <div class="poster-footer">
              <span>{{ card.mark }}</span>
              <span>{{ card.year }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="system-section final-section">
        <div class="section-heading-row">
          <p class="section-label">05 Quality rules</p>
          <h2>Responsive and accessible by design</h2>
          <p>
            The system is shaped around readable text, visible focus states, touch-friendly controls,
            responsive grids, meaningful image treatment, and reduced-motion fallbacks for animated surfaces.
          </p>
        </div>

        <div class="quality-grid">
          <article v-for="item in qualityRules" :key="item.title" class="quality-item">
            <span>{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </article>
        </div>

        <div class="quality-evidence">
          <article class="evidence-panel contrast-panel">
            <div class="evidence-heading">
              <span>Contrast examples</span>
              <p>Representative component states are checked against WCAG contrast thresholds.</p>
            </div>

            <div class="contrast-list">
              <div v-for="item in contrastExamples" :key="item.component" class="contrast-row">
                <div
                  class="contrast-sample"
                  :style="{ backgroundColor: item.background, color: item.foreground }"
                >
                  {{ item.sample }}
                </div>
                <div>
                  <strong>{{ item.component }}</strong>
                  <span>{{ item.detail }}</span>
                </div>
                <b>{{ item.rating }}</b>
              </div>
            </div>
          </article>

          <article class="evidence-panel hierarchy-panel">
            <div class="evidence-heading">
              <span>Hierarchy model</span>
              <p>Scale, weight, and spacing guide visitors from page context into project evidence.</p>
            </div>

            <div class="hierarchy-list">
              <div v-for="item in hierarchyExamples" :key="item.level" class="hierarchy-row">
                <span>{{ item.level }}</span>
                <strong>{{ item.title }}</strong>
                <p>{{ item.detail }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  name: "DesignSystemCaseStudy",
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      summary: ["CSS tokens", "Vue components", "Case-study layouts", "Responsive rules"],
      colors: [
        { name: "Studio Canvas", token: "--color-bg", value: "#fafafa" },
        { name: "Clean Surface", token: "--color-surface", value: "#ffffff" },
        { name: "Carbon Ink", token: "--color-text", value: "#111111" },
        { name: "Measured Gray", token: "--color-text-secondary", value: "#555555" },
        { name: "Soft Rule", token: "--color-border", value: "rgba(0, 0, 0, 0.06)" },
        { name: "Canvas Wash", token: "--color-canvas-wash", value: "#f3f2ea" },
      ],
      spacing: [
        { token: "space-2", value: "0.5rem" },
        { token: "space-4", value: "1rem" },
        { token: "space-8", value: "2rem" },
        { token: "space-16", value: "4rem" },
      ],
      radii: [
        { token: "sm", value: "6px" },
        { token: "md", value: "10px" },
        { token: "lg", value: "16px" },
        { token: "full", value: "9999px" },
      ],
      principles: [
        {
          kicker: "Composition",
          title: "Work first",
          detail: "Project imagery, prototypes, and evidence are given the visual weight. The interface frames them without competing.",
        },
        {
          kicker: "Consistency",
          title: "Shared visual language",
          detail: "Buttons, tags, labels, spacing, and elevation follow the same rules so pages feel connected.",
        },
        {
          kicker: "Flexibility",
          title: "Project color lives inside projects",
          detail: "The shell stays neutral, while case studies and posters can express their own subject matter.",
        },
      ],
      craftCards: [
        {
          index: "01",
          type: "Authentication system",
          title: "Coach catalog",
          mark: "UX/UI",
          year: "2026",
          className: "poster-coach",
        },
        {
          index: "02",
          type: "Configuration system",
          title: "Industrial configurator",
          mark: "Front end",
          year: "2025",
          className: "poster-industrial",
        },
        {
          index: "03",
          type: "Learning product",
          title: "Language app",
          mark: "Product",
          year: "2024",
          className: "poster-language",
        },
      ],
      qualityRules: [
        {
          kicker: "Responsive",
          title: "Fluid grids",
          detail: "Cards, token panels, and project previews collapse from multi-column layouts into readable single-column flows.",
        },
        {
          kicker: "Accessibility",
          title: "Readable and keyboard-aware",
          detail: "The site uses semantic landmarks, visible focus states, comfortable hit areas, and contrast-conscious text colors.",
        },
        {
          kicker: "Motion",
          title: "Motion supports meaning",
          detail: "Animated posters and reveals are decorative enhancements, with reduced-motion fallbacks respected across the site.",
        },
      ],
      contrastExamples: [
        {
          component: "Primary CTA",
          sample: "Get in touch",
          foreground: "#ffffff",
          background: "#111111",
          rating: "AAA 18.9:1",
          detail: "White text on Carbon Ink for the main action.",
        },
        {
          component: "Body copy",
          sample: "Project context",
          foreground: "#555555",
          background: "#fafafa",
          rating: "AAA 7.1:1",
          detail: "Measured Gray on Studio Canvas for paragraphs.",
        },
        {
          component: "Metadata label",
          sample: "Selected work",
          foreground: "#666666",
          background: "#ffffff",
          rating: "AA 5.7:1",
          detail: "Muted labels stay readable while remaining secondary.",
        },
        {
          component: "Poster title",
          sample: "Craft",
          foreground: "#111111",
          background: "#f3f2ea",
          rating: "AAA 16.8:1",
          detail: "Animated cards keep high-contrast titles over project color.",
        },
      ],
      hierarchyExamples: [
        {
          level: "01",
          title: "Page",
          detail: "Large uppercase page titles establish location before a visitor reads the supporting copy.",
        },
        {
          level: "02",
          title: "Section",
          detail: "Short headings and compact descriptions keep each section legible as a self-contained idea.",
        },
        {
          level: "03",
          title: "Component",
          detail: "Labels, tags, and buttons use smaller type so the primary project content remains dominant.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.design-system-page {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

main {
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: var(--space-10) var(--space-8) var(--space-16);
}

.system-hero {
  display: grid;
  align-content: end;
  gap: var(--space-4);
  padding: clamp(4rem, 8vw, 6rem) 0 var(--space-10);
  border-bottom: 1px solid var(--color-border);
}

.system-hero h1 {
  max-width: none;
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(3.25rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 0.96;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}

.hero-copy {
  max-width: 49rem;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.55;
}

.hero-actions,
.chip-row,
.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
}

.hero-actions span {
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  font-size: 0.8125rem;
  font-weight: var(--weight-medium);
}

.system-section {
  padding: clamp(2.25rem, 4vw, 3.25rem) 0;
  border-bottom: 1px solid var(--color-border);
}

.final-section {
  border-bottom: 0;
}

.section-heading-row {
  display: grid;
  gap: var(--space-3);
  max-width: 58rem;
}

.section-heading-row h2,
.system-section h2 {
  max-width: 22ch;
  margin: 0;
  font-size: clamp(1.8rem, 3.2vw, 3rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;
  text-transform: uppercase;
  text-wrap: balance;
}

.section-heading-row p:not(.section-label),
.system-section p {
  max-width: 52rem;
  color: var(--color-text-secondary);
}

.principle-grid,
.component-board,
.poster-grid,
.quality-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.component-board {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.nav-sample {
  grid-column: 1 / -1;
}

.token-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.95fr 0.95fr;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.system-card,
.component-sample,
.token-panel,
.quality-item {
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
}

.system-card,
.component-sample,
.token-panel,
.quality-item {
  padding: var(--space-5);
}

.system-card span,
.sample-label,
.quality-item span {
  display: block;
  margin-bottom: var(--space-3);
  color: var(--color-text-muted);
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0;
}

.system-card h3,
.component-sample h3,
.token-panel h3,
.quality-item h3 {
  margin: 0;
  color: var(--color-text);
  font-size: 1.15rem;
  line-height: 1.25;
}

.system-card p,
.component-sample p,
.token-panel p,
.quality-item p {
  margin-top: var(--space-3);
  font-size: 0.92rem;
  line-height: 1.55;
}

.quality-evidence {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.evidence-panel {
  padding: var(--space-5);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
}

.evidence-heading {
  display: grid;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.evidence-heading span,
.hierarchy-row span {
  color: var(--color-text-muted);
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
}

.evidence-heading p,
.hierarchy-row p {
  max-width: 42rem;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  line-height: 1.55;
}

.contrast-list,
.hierarchy-list {
  display: grid;
  gap: var(--space-3);
}

.contrast-row {
  display: grid;
  grid-template-columns: minmax(7.5rem, 0.8fr) minmax(0, 1.3fr) auto;
  gap: var(--space-3);
  align-items: center;
  min-width: 0;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.contrast-sample {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: var(--weight-semibold);
  text-align: center;
}

.contrast-row strong,
.hierarchy-row strong {
  display: block;
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.25;
}

.contrast-row span {
  display: block;
  margin-top: 0.2rem;
  color: var(--color-text-secondary);
  font-size: 0.82rem;
  line-height: 1.45;
}

.contrast-row b {
  justify-self: end;
  padding: 0.35rem 0.55rem;
  border-radius: var(--radius-full);
  background: var(--color-accent-soft);
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: var(--weight-semibold);
  white-space: nowrap;
}

.hierarchy-row {
  display: grid;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.color-list,
.scale-list {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.color-row {
  display: grid;
  grid-template-columns: 2.25rem 1fr auto;
  gap: var(--space-3);
  align-items: center;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.color-row strong,
.color-row code {
  display: block;
}

.color-row strong {
  color: var(--color-text);
  font-size: 0.875rem;
}

.color-row code {
  margin-top: 0.1rem;
  color: var(--color-text-muted);
  font-family: var(--font-sans);
  font-size: 0.72rem;
}

.color-swatch {
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
}

.type-spec {
  margin-top: var(--space-4);
  color: var(--color-text);
}

.display-spec {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-style: italic;
  line-height: 1;
}

.headline-spec {
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  font-weight: 900;
  line-height: 0.98;
  text-transform: uppercase;
}

.scale-list span,
.radius-row span {
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.8125rem;
}

.radius-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.nav-preview {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-4);
  align-items: center;
  min-width: 0;
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
}

.nav-sample > p {
  max-width: 42rem;
}

.preview-brand,
.nav-preview nav,
.language-preview,
.footer-preview {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
}

.preview-brand span {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.35rem;
}

.preview-brand strong,
.nav-preview nav span,
.language-preview span {
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
}

.nav-preview nav {
  justify-content: center;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.language-preview {
  gap: var(--space-1);
}

.language-preview span {
  display: grid;
  place-items: center;
  min-width: 2rem;
  min-height: 2rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
}

.language-preview span:first-child {
  background: var(--color-text);
  color: var(--color-on-ink);
}

.header-preview {
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
}

.header-preview h3 {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  text-transform: uppercase;
}

.controls-sample {
  display: grid;
  align-content: start;
  gap: var(--space-5);
}

.footer-preview {
  justify-content: space-between;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
}

.footer-preview h3 {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-style: italic;
  font-weight: var(--weight-normal);
}

.craft-poster {
  --poster-bg: var(--color-canvas-wash);
  --poster-ink: var(--color-text);
  --poster-muted: var(--color-ink-subtle);
  --poster-red: #e54832;
  --poster-blue: #24539a;
  --poster-green: #2d7148;
  --poster-yellow: #dfa030;
  position: relative;
  min-height: clamp(18rem, 34vw, 24rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: var(--space-5);
  overflow: hidden;
  background: var(--poster-bg);
  color: var(--poster-ink);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
}

.craft-poster::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 38%;
  background: linear-gradient(180deg, transparent, rgba(17, 17, 17, 0.05));
  pointer-events: none;
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
  font-size: 0.68rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
}

.craft-poster h3 {
  position: absolute;
  z-index: 3;
  top: 18%;
  left: var(--space-5);
  right: var(--space-5);
  margin: 0;
  color: var(--poster-ink);
  font-size: clamp(1.9rem, 3.15vw, 2.95rem);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: 0;
  text-transform: uppercase;
  text-wrap: balance;
  overflow-wrap: normal;
  word-break: normal;
}

.poster-stage {
  position: absolute;
  inset: 24% 8% 15%;
  z-index: 2;
  transition: transform 700ms var(--ease-out);
}

.craft-poster:hover .poster-stage {
  transform: translateY(-0.25rem) scale(1.02);
}

.poster-shape,
.poster-line {
  position: absolute;
  display: block;
}

.poster-coach {
  --poster-bg: var(--color-canvas-wash);
  --poster-red: #bd6f38;
  --poster-blue: #18362d;
  --poster-green: #6c4a31;
  --poster-yellow: #d8a55a;
}

.poster-coach .shape-a {
  left: 9%;
  top: 25%;
  width: 34%;
  height: 34%;
  border: 0.25rem solid var(--poster-ink);
  background: var(--poster-red);
  animation: posterFloat 6s var(--ease-in-out) infinite;
}

.poster-coach .shape-b {
  right: 15%;
  bottom: 15%;
  width: 34%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--poster-yellow);
}

.poster-coach .line-a,
.poster-coach .line-b {
  left: 18%;
  right: 18%;
  height: 0.3rem;
  border-radius: var(--radius-full);
  background: var(--poster-ink);
  animation: posterLineSweep 5.5s var(--ease-in-out) infinite;
}

.poster-coach .line-a {
  top: 56%;
}

.poster-coach .line-b {
  top: 65%;
  animation-delay: 0.35s;
}

.poster-industrial {
  --poster-bg: var(--color-canvas-wash);
}

.poster-industrial h3 {
  font-size: clamp(1.75rem, 2.85vw, 2.6rem);
}

.poster-industrial .shape-a,
.poster-industrial .shape-b,
.poster-industrial .shape-c {
  width: 24%;
  height: 42%;
  border: 0.18rem solid var(--poster-ink);
  background: var(--poster-blue);
  animation: posterFloat 6.4s var(--ease-in-out) infinite;
}

.poster-industrial .shape-a {
  left: 10%;
  top: 34%;
}

.poster-industrial .shape-b {
  left: 38%;
  top: 22%;
  background: var(--poster-red);
  animation-delay: 0.35s;
}

.poster-industrial .shape-c {
  right: 10%;
  top: 42%;
  background: var(--poster-green);
  animation-delay: 0.7s;
}

.poster-language {
  --poster-bg: var(--color-canvas-wash);
}

.poster-language h3 {
  font-size: clamp(1.9rem, 3vw, 2.75rem);
}

.poster-language .shape-a {
  left: 12%;
  top: 28%;
  width: 36%;
  height: 36%;
  border-radius: var(--radius-sm);
  background: var(--poster-yellow);
  animation: posterFloat 6.8s var(--ease-in-out) infinite;
}

.poster-language .shape-b {
  right: 13%;
  top: 38%;
  width: 28%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--poster-blue);
}

.poster-language .line-a,
.poster-language .line-b {
  left: 16%;
  width: 54%;
  height: 0.34rem;
  border-radius: var(--radius-full);
  background: var(--poster-ink);
  animation: posterLineSweep 5s var(--ease-in-out) infinite;
}

.poster-language .line-a {
  bottom: 28%;
}

.poster-language .line-b {
  bottom: 20%;
  width: 38%;
  animation-delay: 0.45s;
}

@keyframes posterFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-0.55rem) rotate(1.5deg);
  }
}

@keyframes posterLineSweep {
  0%, 100% {
    transform: scaleX(0.78);
    transform-origin: left center;
  }

  50% {
    transform: scaleX(1);
  }
}

@media (max-width: 980px) {
  .component-board {
    grid-template-columns: 1fr;
  }

  .quality-evidence {
    grid-template-columns: 1fr;
  }

  .token-layout {
    grid-template-columns: 1fr;
  }

  .nav-preview {
    grid-template-columns: 1fr;
  }

  .nav-preview nav {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 760px) {
  main {
    padding: var(--space-8) var(--space-5) var(--space-12);
  }

  .system-hero {
    padding: var(--space-12) 0 var(--space-8);
  }

  .system-hero h1 {
    max-width: 12ch;
    font-size: clamp(3rem, 11vw, 4.75rem);
    white-space: normal;
    text-wrap: balance;
  }

  .system-section {
    padding: var(--space-8) 0;
  }

  .footer-preview,
  .button-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .contrast-row {
    grid-template-columns: minmax(7rem, 0.8fr) minmax(0, 1fr);
  }

  .contrast-row b {
    justify-self: start;
    grid-column: 2;
  }
}

@media (max-width: 560px) {
  main {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }

  .color-row {
    grid-template-columns: 2.25rem 1fr;
  }

  .color-row > span:last-child {
    grid-column: 2;
  }

  .contrast-row {
    grid-template-columns: 1fr;
  }

  .contrast-row b {
    grid-column: auto;
  }

  .radius-row {
    grid-template-columns: 1fr 1fr;
  }

  .craft-poster {
    min-height: 18rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .poster-shape,
  .poster-line,
  .poster-stage {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
</style>
