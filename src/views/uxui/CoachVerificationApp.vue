<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Vintage Coach Catalog</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Vintage Coach Catalog interface with searchable bag references" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Personal Project</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer, Front End Developer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Stack</span>
          <span class="meta-value">Next.js, Data Systems</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A personal data product for vintage Coach leather goods, turning catalog data into a searchable reference with 778 styles, 104 colors, and a serial number decoder for authentication research.
        </p>
      </div>
    </div>

    <!-- Challenge + Solution -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Scattered knowledge, hard-to-check authenticity</h2>
      <p class="body-text">
        Vintage Coach collectors and resellers rely on fragmented information spread across forums, social media groups, and personal knowledge. Authentication is hard. Serial number formats changed across three distinct eras, and understanding what a legitimate serial looks like for a specific bag requires cross-referencing multiple data points that didn&rsquo;t exist in one place.
      </p>
      <p class="section-label" style="margin-top: 2.5rem;">Solution</p>
      <h2 class="section-heading">A comprehensive digital catalog and authentication tool</h2>
      <p class="body-text">
        I built a web application that structures publicly available catalog data into a searchable, filterable reference with detailed product pages, a color encyclopedia, and an interactive serial number decoder. The app is currently private, with plans to share it publicly.
      </p>
    </section>

    <!-- Catalog screens: 2 side by side -->
    <section class="showcase-section catalog-showcase">
      <div class="showcase-text">
        <p class="section-label">Catalog</p>
        <h2 class="section-heading">778 styles, fully searchable</h2>
        <p class="body-text">
          The main catalog offers filtering by category, decade, and color with progressive loading. Each bag links to a detail page with dimensions, volume, strap length, production years, and available colorways, making the dataset easier to browse than a static reference list.
        </p>
      </div>
      <div class="showcase-screens showcase-screens-2">
        <img loading="lazy" :src="catalogFilter" alt="Catalog grid with filters" class="screen-image" />
        <img loading="lazy" :src="itemPreview" alt="Bag detail page" class="screen-image" />
      </div>
    </section>

    <!-- Tablet view - landscape image, full width -->
    <section class="tablet-section">
      <div class="tablet-text">
        <p class="section-label">Responsive</p>
        <h2 class="section-heading">Designed for any device</h2>
        <p class="body-text">
          The interface adapts from mobile through tablet to desktop. Collectors can reference the catalog at flea markets on their phone or browse the full collection at home on a larger screen.
        </p>
      </div>
      <div class="tablet-frame">
        <img loading="lazy" :src="tabletPreview" alt="Tablet responsive view" class="tablet-image" />
      </div>
    </section>

    <!-- App Demo Video - phone recording with text -->
    <section class="showcase-section live-demo-section">
      <div class="showcase-text">
        <p class="section-label">Live Demo</p>
        <h2 class="section-heading">Browsing the catalog in action</h2>
        <p class="body-text">
          A walkthrough of the app experience, from searching and filtering to viewing product details and decoding serial numbers in real time.
        </p>
      </div>
      <div class="video-phone-container">
        <video preload="metadata" :src="appRecording" autoplay muted loop playsinline class="video-phone"></video>
      </div>
    </section>

    <!-- Color Encyclopedia: 2 screens side by side -->
    <section class="showcase-section showcase-section-reverse">
      <div class="showcase-screens showcase-screens-2 media-container-green">
        <img loading="lazy" :src="colorFamily" alt="Color encyclopedia grid" class="screen-image" />
        <img loading="lazy" :src="colorFilters" alt="Color filtering with bags" class="screen-image" />
      </div>
      <div class="showcase-text">
        <p class="section-label">Color System</p>
        <h2 class="section-heading">104 leather colors, visually organized</h2>
        <p class="body-text">
          The color system organizes 104 leather colors from 1981 to 1999 across seven collections. Colors are grouped by visual family using HSL values, and each color expands to show the bags offered in that colorway, filterable by year and decade.
        </p>
      </div>
    </section>


    <!-- Authentication: 3 screens side by side -->
    <section class="showcase-section showcase-section-reverse">
      <div class="showcase-text">
        <p class="section-label">Authentication</p>
        <h2 class="section-heading">Decoding serial numbers across three eras</h2>
        <p class="body-text">
          The decoder parses all Coach serial formats: pre-1994 numeric-only, 1994&ndash;2006 letter-digit-letter + 4-digit style, and 2006&ndash;2020 expanded format. It extracts manufacturing month, year, plant code, cross-references the style against the database, and flags mismatches or known counterfeit patterns.
        </p>
      </div>
      <div class="showcase-screens showcase-screens-3 media-container-purple">
        <img loading="lazy" :src="authInfo" alt="Serial number format guide" class="screen-image" />
        <img loading="lazy" :src="authSuccess" alt="Successful authentication" class="screen-image" />
        <img loading="lazy" :src="authFail" alt="Failed authentication" class="screen-image" />
      </div>
    </section>
 
    <!-- Technical + Reflection -->
    <section class="content-section">
      <p class="section-label">Reflection</p>
      <h2 class="section-heading">Turning research into a usable product</h2>
      <p class="body-text">
        This project sits at the intersection of my interests in sustainability, fashion, and data. The biggest challenge was turning scraped and publicly available reference material into a structured dataset that could support useful interactions. Designing the decoder taught me how to present complex, multi-format parsing logic in a way that feels simple while remaining transparent about what the system checks and why.
      </p>
    </section>

    <case-study-footer currentRoute="/products/coach-verification-app" />
  </div>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "CoachVerificationApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  setup() {
    useHead({
      title: "Vintage Coach Catalog — Eleni Chasioti",
      meta: [
        { name: "description", content: "Case study: A personal data product cataloging 778 vintage Coach styles with search, filtering, color organization, and serial number decoding." },
        { property: "og:title", content: "Vintage Coach Catalog — Eleni Chasioti" },
        { property: "og:description", content: "A searchable vintage Coach reference and authentication research tool built from structured catalog data." },
      ],
    });
  },
  data() {
    return {
      hero: resolveAsset("@/images/coach/hero.webp"),
      catalogFilter: resolveAsset("@/images/coach/coachcatalogfilter-phone.svg"),
      itemPreview: resolveAsset("@/images/coach/coachitemPreview-phone.svg"),
      tabletPreview: resolveAsset("@/images/coach/coachItemPreviewInTablet-mockup.svg"),
      colorFamily: resolveAsset("@/images/coach/colorFamilycoach.webp"),
      colorFilters: resolveAsset("@/images/coach/colorfilterscoach.webp"),
      authInfo: resolveAsset("@/images/coach/authenticationInfocaoch.webp"),
      authSuccess: resolveAsset("@/images/coach/authenticationsuccesscoach.webp"),
      authFail: resolveAsset("@/images/coach/authenticationfailcaoch.webp"),
      appRecording: resolveAsset("@/images/coach/Recording App.mp4"),
    };
  },
};
</script>

<style scoped>
/* ===== CASE STUDY - Editorial Reveal ===== */

/* Reveal Animation */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-reveal {
  opacity: 0;
  animation: revealUp 0.8s var(--ease-out) forwards;
  animation-delay: var(--delay, 0s);
}

/* Base */
.case-study {
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: var(--space-12);
}

/* ===== CINEMATIC HEADER ===== */
.case-header {
  padding: var(--space-16) var(--space-8) 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  white-space: nowrap;
  /* push the baseline down so the text "sits" on the hero */
  margin-bottom: -0.15em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== PROJECT INFO - split ===== */
.case-info {
  max-width: 1100px;
  margin: 0 auto var(--space-16);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.info-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  line-height: 1.4;
}

.info-description {
  padding-top: 0.25rem;
}

.info-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.35;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.content-section-wide {
  max-width: 1200px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  font-weight: var(--weight-semibold);
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

/* ===== IMAGES ===== */
.image-figure {
  margin: var(--space-12) 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== TABLET SECTION ===== */
.tablet-section {
  max-width: 1000px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.tablet-text {
  max-width: 600px;
  margin-bottom: var(--space-8);
}

.tablet-frame {
  background: var(--color-accent-soft);
  border-radius: var(--radius-sm);
  padding: var(--space-5);
}

.tablet-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

/* ===== VIDEO ===== */
.video-phone-container {
  flex: none;
  display: flex;
  justify-content: center;
}

.video-phone {
  height: 520px;
  width: auto;
  max-width: 100%;
  display: block;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}

.live-demo-section {
  align-items: center;
}

.live-demo-section .video-phone-container {
  flex: 1 1 0;
  width: 100%;
  max-width: min(52rem, 100%);
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: visible;
}

.live-demo-section .video-phone {
  width: 100% !important;
  height: auto !important;
  max-height: min(78vh, 48rem);
  object-fit: contain;
  border-radius: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}

/* ===== SHOWCASE SECTIONS ===== */
.showcase-section {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  max-width: 1400px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.showcase-section-reverse {
  flex-direction: row-reverse;
}

.showcase-text {
  flex: 0 0 320px;
  max-width: 360px;
}

.showcase-screens {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.showcase-screens-2 {
  justify-content: center;
}

.showcase-screens-3 {
  justify-content: center;
}

.catalog-showcase,
.catalog-showcase .showcase-screens {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0;
  box-shadow: none !important;
}

.catalog-showcase .screen-image {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.case-study.case-study .catalog-showcase .screen-image {
  background: transparent !important;
  box-shadow: none !important;
}

.showcase-section-reverse .showcase-screens-2 .screen-image,
.showcase-section-reverse .showcase-screens-3 .screen-image {
  box-shadow: none !important;
}

.screen-image {
  flex: 1;
  min-width: 0;
  max-width: 280px;
  height: auto;
  display: block;
  border-radius: 2px;
  box-shadow: var(--shadow-sm);
}

/* Media Containers */
.media-container-blue {
  background: rgba(232, 240, 255, 0.5) !important;
}

.media-container-green {
  background: rgba(223, 245, 212, 0.45) !important;
}

.media-container-purple {
  background: rgba(240, 232, 255, 0.45) !important;
}

.media-container-yellow {
  background: rgba(255, 249, 224, 0.5) !important;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .case-info {
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
  }

  .showcase-section {
    flex-direction: column;
    gap: var(--space-6);
  }

  .showcase-section-reverse {
    flex-direction: column;
  }

  .showcase-text {
    flex: none;
    max-width: 100%;
  }

  .showcase-screens {
    width: 100%;
  }

  .screen-image {
    max-width: 220px;
  }

  .video-phone-container {
    width: 100%;
    max-width: 300px;
  }

  .video-phone {
    height: auto;
    width: 100%;
    max-height: 480px;
  }

  .live-demo-section {
    align-items: stretch;
  }

  .live-demo-section .video-phone-container {
    max-width: 100%;
  }

  .live-demo-section .video-phone {
    max-height: 72vh;
  }
}

@media (max-width: 768px) {
  .case-study {
    overflow-x: hidden;
  }

  .case-study.case-study .editorial-reveal,
  .case-study.case-study .editorial-reveal.reveal-from-left,
  .case-study.case-study .editorial-reveal.reveal-from-right,
  .case-study.case-study .editorial-reveal.reveal-media {
    opacity: 1;
    transform: none;
    clip-path: none;
    transition: none;
  }

  .case-header {
    padding: var(--space-8) var(--space-5) 0;
  }

  .case-title {
    font-size: clamp(2.35rem, 13vw, 4.25rem);
    line-height: 0.98;
    margin-bottom: 0;
    white-space: normal;
  }

  .case-hero {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-6);
  }

  .case-info {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    padding: 0 var(--space-5);
    margin-bottom: var(--space-10);
  }

  .info-meta {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.25rem;
    line-height: 1.28;
  }

  .content-section,
  .content-section-wide {
    padding: 0 var(--space-5);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .showcase-section {
    gap: var(--space-5);
    margin: var(--space-10) auto;
    padding: 0 var(--space-5);
  }

  .case-study.case-study .content-section,
  .case-study.case-study .content-section-wide,
  .case-study.case-study .showcase-section,
  .case-study.case-study .tablet-section {
    margin-bottom: var(--space-10);
  }

  .case-study.case-study > section + section {
    padding-top: 0;
  }

  .showcase-screens {
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-3);
    margin-left: calc(var(--space-5) * -1);
    margin-right: calc(var(--space-5) * -1);
    padding: var(--space-4) var(--space-5) var(--space-5);
    overflow-x: auto;
    overflow-y: hidden;
    scroll-padding-inline: var(--space-5);
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }

  .case-study.case-study .showcase-screens {
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .showcase-screens::-webkit-scrollbar {
    height: 4px;
  }

  .screen-image {
    flex: 0 0 auto;
    width: min(68vw, 260px);
    max-width: none;
    max-height: min(62vh, 34rem);
    object-fit: contain;
    scroll-snap-align: center;
  }

  .case-study.case-study .screen-image,
  .case-study.case-study .showcase-screens-3 .screen-image {
    flex: 0 0 auto;
    width: min(68vw, 260px);
    max-width: none;
  }

  .showcase-screens {
    flex-direction: column;
  }

  .catalog-showcase .showcase-screens,
  .showcase-section-reverse .showcase-screens {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
    padding: var(--space-3) 0 0;
    overflow: visible;
    scroll-snap-type: none;
  }

  .catalog-showcase .screen-image,
  .showcase-section-reverse .screen-image {
    width: min(100%, 320px);
  }

  .tablet-section {
    margin: var(--space-10) auto;
    padding: 0 var(--space-5);
  }

  .tablet-text {
    margin-bottom: var(--space-5);
  }

  .tablet-frame {
    padding: var(--space-3);
  }

  .video-phone-container {
    width: 100%;
    max-width: 260px;
  }

  .video-phone {
    height: auto;
    width: 100%;
    max-height: 420px;
  }

  .live-demo-section .video-phone-container {
    align-items: center;
    justify-content: center;
    width: min(72vw, 260px);
    max-width: 260px;
    aspect-ratio: 9 / 18;
    margin: 0 auto;
    overflow: hidden;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md);
  }

  .live-demo-section .video-phone {
    width: 100% !important;
    height: 100% !important;
    max-height: none;
    object-fit: cover;
    object-position: center;
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2.35rem, 12vw, 3.5rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }

  .showcase-screens-3 {
    flex-wrap: nowrap;
  }

  .screen-image {
    width: min(72vw, 250px);
    flex: 0 0 auto;
  }
}
</style>
