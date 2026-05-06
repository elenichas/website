<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Vintage Coach Catalog" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Reference Platform</p>
      <h1 class="project-title">Vintage Coach Catalog</h1>
      <p class="project-intro">
        The definitive digital reference for vintage Coach leather goods &mdash; cataloging 778 styles, 104 colors, and 70 catalogs spanning 1975 to 2002, with a built-in serial number decoder for authentication.
      </p>
      <div class="project-meta">
        <span class="meta-item">Design &amp; Development</span>
        <span class="meta-divider">&middot;</span>
        <span class="meta-item">Personal Project</span>
        <span class="meta-divider">&middot;</span>
        <span class="meta-item">Next.js &amp; Data Systems</span>
      </div>
    </div>

    <!-- Challenge + Solution -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Scattered knowledge, no single source of truth</h2>
      <p class="body-text">
        Vintage Coach collectors and resellers rely on fragmented information spread across forums, social media groups, and personal knowledge. Authentication is hard &mdash; serial number formats changed across three distinct eras, and understanding what a legitimate serial looks like for a specific bag requires cross-referencing multiple data points that didn&rsquo;t exist in one place.
      </p>
      <p class="section-label" style="margin-top: 2.5rem;">Solution</p>
      <h2 class="section-heading">A comprehensive digital catalog and authentication tool</h2>
      <p class="body-text">
        I built a web application that consolidates the entire vintage Coach product line into a searchable, filterable catalog with detailed product pages, a color encyclopedia, and an interactive serial number decoder.
      </p>
    </section>

    <!-- Catalog screens: 2 side by side -->
    <section class="showcase-section">
      <div class="showcase-text">
        <p class="section-label">Catalog</p>
        <h2 class="section-heading">778 styles, fully searchable</h2>
        <p class="body-text">
          The main catalog offers filtering by category, decade, and color with progressive loading. Each bag links to a rich detail page with full specs &mdash; dimensions, volume, strap length, production years, and available colorways.
        </p>
      </div>
      <div class="showcase-screens showcase-screens-2 media-container-yellow">
        <img :src="catalogFilter" alt="Catalog grid with filters" class="screen-image" />
        <img :src="itemPreview" alt="Bag detail page" class="screen-image" />
      </div>
    </section>

    <!-- Tablet view — landscape image, full width -->
    <section class="tablet-section">
      <div class="tablet-text">
        <p class="section-label">Responsive</p>
        <h2 class="section-heading">Designed for any device</h2>
        <p class="body-text">
          The interface adapts from mobile through tablet to desktop. Collectors can reference the catalog at flea markets on their phone or browse the full collection at home on a larger screen.
        </p>
      </div>
      <div class="tablet-frame">
        <img :src="tabletPreview" alt="Tablet responsive view" class="tablet-image" />
      </div>
    </section>

    <!-- App Demo Video — phone recording with text -->
    <section class="showcase-section">
      <div class="showcase-text">
        <p class="section-label">Live Demo</p>
        <h2 class="section-heading">Browsing the catalog in action</h2>
        <p class="body-text">
          A walkthrough of the app experience &mdash; searching, filtering, viewing product details, and decoding serial numbers in real time.
        </p>
      </div>
      <div class="video-phone-container">
        <video :src="appRecording" autoplay muted loop playsinline class="video-phone"></video>
      </div>
    </section>

    <!-- Color Encyclopedia: 2 screens side by side -->
    <section class="showcase-section showcase-section-reverse">
      <div class="showcase-screens showcase-screens-2 media-container-green">
        <img :src="colorFamily" alt="Color encyclopedia grid" class="screen-image" />
        <img :src="colorFilters" alt="Color filtering with bags" class="screen-image" />
      </div>
      <div class="showcase-text">
        <p class="section-label">Color System</p>
        <h2 class="section-heading">104 leather colors, visually organized</h2>
        <p class="body-text">
          Every official Coach leather color from 1981 to 1999 across seven collections &mdash; sorted by visual family using HSL color science. Selecting a color expands an inline panel showing every bag offered in that colorway, filterable by year and decade.
        </p>
      </div>
    </section>


    <!-- Authentication: 3 screens side by side -->
    <section class="showcase-section showcase-section-reverse">
      <div class="showcase-text">
        <p class="section-label">Authentication</p>
        <h2 class="section-heading">Decoding serial numbers across three eras</h2>
        <p class="body-text">
          The decoder parses all Coach serial formats &mdash; pre-1994 numeric-only, 1994&ndash;2006 letter-digit-letter + 4-digit style, and 2006&ndash;2020 expanded format. It extracts manufacturing month, year, plant code, cross-references the style against the database, and flags mismatches or known counterfeit patterns.
        </p>
      </div>
      <div class="showcase-screens showcase-screens-3 media-container-purple">
        <img :src="authInfo" alt="Serial number format guide" class="screen-image" />
        <img :src="authSuccess" alt="Successful authentication" class="screen-image" />
        <img :src="authFail" alt="Failed authentication" class="screen-image" />
      </div>
    </section>

    <!-- Technical + Reflection -->
    <section class="content-section">
      <!-- <p class="section-label">Technology</p>
      <h2 class="section-heading">Built for performance and scale</h2>
      <p class="body-text">
        Next.js 16 with App Router and static generation for all 778 bag pages &mdash; no runtime database queries. Tailwind CSS 4 for styling, Framer Motion for the color grid animations. Data compiled from 70 original Coach catalogs with images stored in Supabase.
      </p> -->
      <p class="section-label" style="margin-top: 2.5rem;">Reflection</p>
      <h2 class="section-heading">Turning research into a usable product</h2>
      <p class="body-text">
        This project started as personal curiosity and grew into a comprehensive reference tool. The biggest challenge was data accuracy &mdash; cross-referencing 70 catalogs to build a reliable dataset. Designing the serial number decoder taught me how to present complex, multi-format parsing logic in a way that feels simple while remaining transparent about what the system checks and why.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "CoachVerificationApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/coach/hero.jpg"),
      catalogFilter: require("@/images/coach/coachcatalogfilter.jpg"),
      itemPreview: require("@/images/coach/coachitemPreview.jpg"),
      tabletPreview: require("@/images/coach/coachItemPreviewInTablet.jpg"),
      colorFamily: require("@/images/coach/colorFamilycoach.jpg"),
      colorFilters: require("@/images/coach/colorfilterscoach.jpg"),
      authInfo: require("@/images/coach/authenticationInfocaoch.jpg"),
      authSuccess: require("@/images/coach/authenticationsuccesscoach.jpg"),
      authFail: require("@/images/coach/authenticationfailcaoch.jpg"),
      appRecording: require("@/images/coach/Recording App.mp4"),
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Design */

.case-study {
  background: #fff;
  color: #000;
  padding-bottom: 3rem;
}

/* Hero */
.hero-section {
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Project Header */
.project-header {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.project-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.75rem;
  font-weight: 500;
}

.project-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  color: #000;
}

.project-intro {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 2rem;
}

.project-meta {
  font-size: 0.9375rem;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.meta-divider {
  color: #ccc;
}

/* Content Sections */
.content-section {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.content-section-wide {
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.section-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.section-heading {
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0 0 1rem;
  color: #000;
  font-family: Georgia, 'Times New Roman', serif;
}

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1rem;
}

/* Images */
.image-figure {
  margin: 3rem 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Tablet Section — landscape image */
.tablet-section {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 2rem;
}

.tablet-text {
  max-width: 600px;
  margin-bottom: 2rem;
}

.tablet-frame {
  background: #f5f5f5;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.tablet-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Video — phone recording */
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
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.video-phone::-webkit-media-controls {
  opacity: 0;
  transition: opacity 0.3s;
}

.video-phone:hover::-webkit-media-controls {
  opacity: 1;
}

/* Showcase Sections — text + grouped screens */
.showcase-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 2rem;
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
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 24px;
}

.showcase-screens-2 {
  justify-content: center;
}

.showcase-screens-3 {
  justify-content: center;
}

.showcase-single {
  justify-content: center;
}

.screen-image {
  flex: 1;
  min-width: 0;
  max-width: 280px;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Media Containers with Colored Backgrounds */
.media-container-blue {
  background: #E8F0FF;
}

.media-container-green {
  background: #DFF5D4;
}

.media-container-purple {
  background: #F0E8FF;
}

.media-container-yellow {
  background: #FFF9E0;
}

/* Responsive */
@media (max-width: 1024px) {
  .showcase-section {
    flex-direction: column;
    gap: 2rem;
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
    flex: none;
    width: 100%;
    max-width: 300px;
  }

  .video-phone {
    height: auto;
    width: 100%;
    max-height: 480px;
  }
}

@media (max-width: 768px) {
  .project-header,
  .content-section,
  .content-section-wide {
    padding: 0 1.5rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .showcase-section {
    padding: 0 1.5rem;
  }

  .showcase-screens {
    padding: 1.5rem;
    gap: 1rem;
  }

  .screen-image {
    max-width: 160px;
  }

  .video-phone-container {
    width: 100%;
    max-width: 260px;
  }

  .video-phone {
    height: auto;
    width: 100%;
    max-height: 420px;
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .showcase-screens-3 {
    flex-wrap: wrap;
  }

  .screen-image {
    max-width: 45%;
    flex: 0 0 45%;
  }
}
</style>
