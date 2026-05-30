<template>
  <section class="projects-section">
    <div class="section-header">
      <p class="section-eyebrow">{{ $t("craft.engineeringEyebrow") }}</p>
      <h2 class="section-title">{{ $t("engineering.title") }}</h2>
      <p class="section-description">{{ $t("engineering.subtitle") }}</p>
    </div>

        <div class="projects-grid">
          <article v-for="(project, index) in images" :key="index" class="project-card">
            <a :href="project.gitlabLink" target="_blank" rel="noopener noreferrer" class="project-link">
              <div class="project-image">
                <div
                  class="engineering-poster"
                  :class="`poster-${project.animation}`"
                  role="img"
                  :aria-label="project.name"
                >
                  <div class="poster-topline">
                    <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    <span>{{ project.posterType }}</span>
                  </div>
                  <h3 class="poster-title">{{ project.posterTitle }}</h3>
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
                  <span class="view-project">
                    <span class="mdi mdi-github"></span>
                    {{ $t("common.viewOnGithub") }}
                  </span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.name }}</h3>
                <p class="project-stack">{{ project.stack }}</p>
              </div>
            </a>
          </article>
        </div>
  </section>
</template>

<script>
export default {
  name: "EngineeringProjects",
  computed: {
    images() {
      const items = this.$t("engineering.items");

      return [
 
        {
          ...items.maps,
          gitlabLink: "https://github.com/elenichas/30DayMapChallenge",
          animation: "map",
        },
        {
          ...items.finance,
          gitlabLink: "https://github.com/elenichas/expenses-app",
          animation: "finance",
        },
        {
          ...items.api,
          gitlabLink: "https://github.com/elenichas/expressBookReviews",
          animation: "api",
        },
        {
          ...items.search,
          gitlabLink: "https://github.com/elenichas/book-search-python-flask",
          animation: "search",
        },
               {
          ...items.framework,
          gitlabLink:
            "https://github.com/elenichas/Cricket-Plugin-Master-thesis",
          animation: "framework",
        },
        {
          ...items.view,
          gitlabLink: "https://github.com/elenichas/view-analysis-plugin",
          animation: "view",
        },
      ];
    },
  },
};
</script>

<style scoped>
/* ===== ENGINEERING PROJECTS ===== */
.projects-section {
  margin-bottom: var(--space-16);
}

.section-header {
  margin-bottom: var(--space-10);
  text-align: left;
}

.section-eyebrow {
  margin: 0 0 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  font-weight: var(--weight-semibold);
  font-style: normal;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  line-height: 1.3;
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

.engineering-poster {
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

.engineering-poster::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(17, 17, 17, 0.08);
  pointer-events: none;
  z-index: 4;
}

.engineering-poster::after {
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
  top: 17%;
  left: clamp(1rem, 2.4vw, 1.35rem);
  right: clamp(1rem, 2.4vw, 1.35rem);
  color: var(--poster-ink);
  font-family: var(--font-sans);
  font-size: clamp(2.55rem, 6.9vw, 5.25rem);
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

.poster-map .shape-a {
  left: 1%;
  bottom: 8%;
  width: 98%;
  height: 48%;
  border-radius: 50% 50% 0 0;
  background: var(--poster-ink);
}

.poster-map .shape-b,
.poster-map .shape-c,
.poster-map .shape-d {
  width: 18%;
  aspect-ratio: 1;
  border-radius: 50%;
  border-width: 0;
}

.poster-map .shape-b { left: 16%; top: 44%; background: var(--poster-blue); }
.poster-map .shape-c { left: 43%; top: 55%; background: var(--poster-red); animation-delay: 0.4s; }
.poster-map .shape-d { right: 12%; top: 38%; background: var(--poster-yellow); animation-delay: 0.8s; }
.poster-map .shape-e {
  left: 9%;
  top: 34%;
  width: 74%;
  height: 45%;
  border-radius: 999px;
  background: transparent;
  border-color: rgba(17, 17, 17, 0.9);
}
.poster-map .line-a { left: 19%; top: 52%; width: 62%; transform: rotate(14deg); }
.poster-map .line-b { left: 27%; top: 64%; width: 48%; transform: rotate(-18deg); animation-delay: 0.45s; }

.poster-finance .shape-a,
.poster-finance .shape-b,
.poster-finance .shape-c,
.poster-finance .shape-d {
  bottom: 10%;
  width: 15%;
  border-radius: 999px 999px 0 0;
  border-width: 0;
}

.poster-finance .shape-a { left: 12%; height: 30%; background: var(--poster-blue); }
.poster-finance .shape-b { left: 32%; height: 46%; background: var(--poster-yellow); animation-delay: 0.35s; }
.poster-finance .shape-c { left: 52%; height: 24%; background: var(--poster-red); animation-delay: 0.7s; }
.poster-finance .shape-d { left: 72%; height: 56%; background: var(--poster-green); animation-delay: 1s; }
.poster-finance .shape-e {
  left: 10%;
  bottom: 8%;
  width: 80%;
  height: 8%;
  border-radius: 999px;
  background: var(--poster-ink);
}
.poster-finance .line-a { left: 11%; top: 44%; width: 76%; }
.poster-finance .line-b { left: 11%; top: 55%; width: 54%; animation-delay: 0.4s; }
.poster-finance .line-c { left: 11%; top: 66%; width: 68%; animation-delay: 0.8s; }

.poster-api .shape-a,
.poster-api .shape-b,
.poster-api .shape-c {
  left: 8%;
  width: 84%;
  height: 18%;
  border-radius: 999px;
  background: var(--poster-ink);
}
.poster-api .shape-a { top: 36%; }
.poster-api .shape-b { top: 56%; animation-delay: 0.4s; }
.poster-api .shape-c { top: 76%; animation-delay: 0.8s; }
.poster-api .shape-d,
.poster-api .shape-e {
  width: 17%;
  aspect-ratio: 1;
  border-radius: 50%;
  border-width: 0;
}
.poster-api .shape-d { left: 18%; top: 37%; background: var(--poster-blue); }
.poster-api .shape-e { right: 18%; top: 57%; background: var(--poster-red); animation-delay: 0.55s; }
.poster-api .line-a { left: 28%; top: 45%; width: 45%; background: #fff; }
.poster-api .line-b { left: 28%; top: 65%; width: 36%; background: #fff; animation-delay: 0.45s; }

.poster-search .shape-a {
  left: 15%;
  top: 39%;
  width: 38%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: transparent;
}
.poster-search .shape-b {
  left: 49%;
  top: 66%;
  width: 35%;
  height: 10%;
  border-radius: 999px;
  transform: rotate(34deg);
  background: var(--poster-ink);
}
.poster-search .shape-c,
.poster-search .shape-d,
.poster-search .shape-e {
  right: 8%;
  width: 26%;
  height: 13%;
  border-radius: var(--radius-sm);
  border-width: 0;
}
.poster-search .shape-c { top: 38%; background: var(--poster-yellow); }
.poster-search .shape-d { top: 54%; background: var(--poster-blue); animation-delay: 0.35s; }
.poster-search .shape-e { top: 70%; background: var(--poster-red); animation-delay: 0.7s; }
.poster-search .line-a { left: 21%; top: 57%; width: 26%; }

.poster-framework .shape-a,
.poster-framework .shape-b,
.poster-framework .shape-c,
.poster-framework .shape-d,
.poster-framework .shape-e {
  width: 16%;
  aspect-ratio: 1;
  border-radius: 50%;
}
.poster-framework .shape-a { left: 10%; top: 44%; background: var(--poster-blue); }
.poster-framework .shape-b { left: 36%; top: 34%; background: var(--poster-yellow); animation-delay: 0.3s; }
.poster-framework .shape-c { right: 24%; top: 50%; background: var(--poster-red); animation-delay: 0.6s; }
.poster-framework .shape-d { right: 5%; top: 33%; background: var(--poster-green); animation-delay: 0.9s; }
.poster-framework .shape-e { left: 46%; bottom: 5%; background: #fff; animation-delay: 1.2s; }
.poster-framework .line-a { left: 21%; top: 52%; width: 58%; transform: rotate(-15deg); }
.poster-framework .line-b { left: 47%; top: 46%; width: 36%; transform: rotate(22deg); animation-delay: 0.4s; }
.poster-framework .line-c { left: 28%; top: 70%; width: 37%; transform: rotate(15deg); animation-delay: 0.8s; }

.poster-view .shape-a {
  left: 4%;
  top: 36%;
  width: 92%;
  height: 48%;
  border-radius: 50%;
  background: transparent;
}
.poster-view .shape-b {
  left: 27%;
  top: 47%;
  width: 46%;
  height: 25%;
  border-radius: 50%;
  background: var(--poster-blue);
  border-width: 0;
}
.poster-view .shape-c,
.poster-view .shape-d,
.poster-view .shape-e {
  width: 4%;
  height: 42%;
  border-radius: 999px;
  background: var(--poster-ink);
}
.poster-view .shape-c { left: 32%; top: 39%; transform: rotate(24deg); }
.poster-view .shape-d { left: 50%; top: 39%; transform: rotate(-8deg); animation-delay: 0.3s; }
.poster-view .shape-e { right: 29%; top: 39%; transform: rotate(-27deg); animation-delay: 0.6s; }
.poster-view .line-a { left: 11%; top: 62%; width: 78%; }
.poster-view .line-b { left: 23%; top: 51%; width: 54%; animation-delay: 0.4s; }

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

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.project-stack {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: var(--space-10) var(--space-5);
  }

  .page-header {
    margin-bottom: var(--space-10);
    padding-bottom: var(--space-6);
  }

  .page-title {
    font-size: clamp(2.65rem, 12vw, 4rem);
    overflow-wrap: anywhere;
  }

  .projects-section {
    margin-bottom: var(--space-10);
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

  .project-stack {
    font-size: 0.6875rem;
  }

  .view-project {
    padding: 0.4rem 0.875rem;
    font-size: 0.75rem;
  }
}
</style>
