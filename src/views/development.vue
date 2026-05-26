<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <div class="header-content">
                    <h1 class="page-title">Engineering</h1>
          <p class="page-subtitle">Technical projects, tools, and open-source contributions</p>
        </div>
      </header>

      <!-- Technical Projects Section -->
      <section class="projects-section">
        <div class="projects-grid">
          <article v-for="(project, index) in images" :key="index" class="project-card">
            <a :href="project.gitlabLink" target="_blank" class="project-link">
                            <div class="project-image">
                <img :src="project.src" :alt="project.name" loading="lazy" />
                <div class="project-overlay">
                  <span class="view-project">
                    <span class="mdi mdi-github"></span>
                    View on GitHub
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
    </div>

    <app-footer></app-footer>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppFooter from "../components/footer";

export default {
  name: "ImageGallery",
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      images: [
 
        {
          name: "Map Explorations",
          stack: "Data Visualization, Mapping, Creative Coding",
          gitlabLink: "https://github.com/elenichas/30DayMapChallenge",
          src: require("@/images/development/map.webp"),
        },
        {
          name: "Financial Management App",
          stack: "React, TypeScript, Chart.js, Bootstrap",
          gitlabLink: "https://github.com/elenichas/expenses-app",
          src: require("@/images/development/reactApp.webp"),
        },
        {
          name: "Book Reviews API",
          stack: "Express.js, Node.js, RESTful APIs",
          gitlabLink: "https://github.com/elenichas/expressBookReviews",
          src: require("@/images/development/expressApp.webp"),
        },
        {
          name: "Search Service",
          stack: "Flask, Python, HTTP APIs, Backend",
          gitlabLink: "https://github.com/elenichas/book-search-python-flask",
          src: require("@/images/development/bookSearchApp.webp"),
        },
               {
          name: "Computational Framework",
          stack: "C#, Rhino, Grasshopper, Algorithm Design",
          gitlabLink:
            "https://github.com/elenichas/Cricket-Plugin-Master-thesis",
          src: require("@/images/development/cricket2.webp"),
        },
        {
          name: "View Analysis Engine",
          stack: "C#, Rhino, Grasshopper, Spatial Computing",
          gitlabLink: "https://github.com/elenichas/view-analysis-plugin",
          src: require("@/images/development/viewAnalysis.webp"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== ENGINEERING PAGE - Editorial Glass ===== */
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
  margin-bottom: var(--space-16);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-8);
}

.header-content {
  max-width: 900px;
}

.page-title {
  font-family: var(--font-sans);
  font-size: clamp(4rem, 9vw, 8rem);
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

/* Section */
.projects-section {
  margin-bottom: var(--space-16);
}

.section-header {
  margin-bottom: var(--space-10);
  text-align: left;
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
  border-radius: var(--radius-sm);
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
    font-size: clamp(3rem, 14vw, 5rem);
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
    border-radius: var(--radius-sm);
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
