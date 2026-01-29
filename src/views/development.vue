<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">Craft</h1>
          <p class="page-subtitle">Technical projects and engineering solutions</p>
        </div>
      </header>

      <!-- Technical Projects Section -->
      <section class="projects-section">
        <div class="section-header">
          <h2 class="section-title">Technical Craft</h2>
          <p class="section-description">Open source projects and engineering experiments</p>
        </div>
        
        <div class="projects-grid">
          <article 
            v-for="(project, index) in images" 
            :key="index"
            class="project-card"
          >
            <a :href="project.gitlabLink" target="_blank" class="project-link">
              <div class="project-image">
                <img :src="project.src" :alt="project.name" />
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
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";

export default {
  name: "ImageGallery",
  components: {
    AppNavbar,
  },
  data() {
    return {
      images: [
        {
          name: "Computational Framework",
          stack: "C#, Rhino, Grasshopper, Algorithm Design",
          gitlabLink:
            "https://github.com/elenichas/Cricket-Plugin-Master-thesis",
          src: require("@/images/development/cricket2.png"),
        },
        {
          name: "View Analysis Engine", 
          stack: "C#, Rhino, Grasshopper, Spatial Computing",
          gitlabLink: "https://github.com/elenichas/view-analysis-plugin",
          src: require("@/images/development/viewAnalysis.png"),
        },
        {
          name: "Portfolio Platform",
          stack: "Vue.js, JavaScript, D3.js, Modern CSS",
          gitlabLink: "https://github.com/elenichas/website",
          src: require("@/images/development/portfolio.png"),
        },
        {
          name: "Financial Management App",
          stack: "React, TypeScript, Chart.js, Bootstrap",
          gitlabLink: "https://github.com/elenichas/expenses-app",
          src: require("@/images/development/reactApp.jpg"),
        },
        {
          name: "Book Reviews API",
          stack: "Express.js, Node.js, RESTful APIs",
          gitlabLink: "https://github.com/elenichas/expressBookReviews",
          src: require("@/images/development/expressApp.png"),
        },
        {
          name: "Search Service",
          stack: "Flask, Python, HTTP APIs, Backend",
          gitlabLink: "https://github.com/elenichas/book-search-python-flask",
          src: require("@/images/development/bookSearchApp.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Modern Craft Page Layout */
.page-layout {
  min-height: 100vh;
  background: var(--primary-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
}

/* Page Header */
.page-header {
  margin-bottom: var(--space-2xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border-light);
}

.header-content {
  max-width: 800px;
}

.page-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* Section Headers */
.projects-section {
  margin-bottom: var(--space-3xl);
}

.section-header {
  margin-bottom: var(--space-xl);
}

.section-title {
  font-size: 1.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  letter-spacing: -0.01em;
}

.section-description {
  font-size: 0.9375rem;
  color: var(--text-muted);
  margin: 0;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
}

/* Project Cards */
.project-card {
  background: var(--primary-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--text-primary);
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
  background: var(--secondary-bg);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: var(--font-weight-semibold);
  padding: var(--space-sm) var(--space-lg);
  border: 2px solid white;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.view-project:hover {
  background: white;
  color: var(--text-primary);
}

/* Project Info */
.project-info {
  padding: var(--space-lg);
}

.project-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  line-height: 1.3;
}

.project-stack {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: var(--space-xl) var(--space-md);
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--space-lg) var(--space-sm);
  }
}
</style>
