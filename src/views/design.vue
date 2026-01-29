<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">Products</h1>
          <p class="page-subtitle">Digital experiences designed to solve real problems</p>
        </div>
      </header>

      <!-- Product Design Section -->
      <section class="projects-section">
        <div class="section-header">
          <h2 class="section-title">Product Design</h2>
          <p class="section-description">User-centered digital products and experiences</p>
        </div>
        
        <div class="projects-grid">
          <article 
            v-for="(project, index) in uxuiImages" 
            :key="index"
            class="project-card"
          >
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <img :src="project.src" :alt="project.alt" />
                <div class="project-overlay">
                  <span class="view-project">View Project</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">Product Design</p>
              </div>
            </router-link>
          </article>
        </div>
      </section>

      <!-- System Design Section -->
      <section class="projects-section">
        <div class="section-header">
          <h2 class="section-title">System Design</h2>
          <p class="section-description">Complex systems and computational frameworks</p>
        </div>
        
        <div class="projects-grid">
          <article 
            v-for="(project, index) in architectureImages" 
            :key="index"
            class="project-card"
          >
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <img :src="project.src" :alt="project.alt" />
                <div class="project-overlay">
                  <span class="view-project">View Project</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">System Design</p>
              </div>
            </router-link>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";

export default {
  name: "Design",
  components: {
    AppNavbar,
  },
  data() {
    return {
      architectureImages: [
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Project",
          title: "Architectural System (Hapi)",
          route: "/products/hapi-project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Computational Framework (Cricket)",
          route: "/products/thesis-project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Digital Futures Workshop", 
          route: "/products/workshop-design",
        },
      ],
      uxuiImages: [
        {  
          src: require("@/images/gallery/moduleApp.png"),
          alt: "Modular App",
          title: "Modular Design System",
          route: "/products/modular-app",
        },
        {
          src: require("@/images/gallery/filos.png"),
          alt: "Filos Mobile App",
          title: "Filos Mobile Experience",
          route: "/products/filos-mobile-app",
        },
        {
          src: require("@/images/gallery/kapihan.png"),
          alt: "Coffee Shop App",
          title: "Local Bakery Platform",
          route: "/products/local-bakery-app",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Modern Products Page Layout */
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

.project-type {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
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
