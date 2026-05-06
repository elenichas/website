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
        <div class="projects-grid">
          <article v-for="(project, index) in uxuiImages" :key="index" class="project-card">
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <img :src="project.src" :alt="project.alt" loading="lazy" />
                <div class="project-overlay">
                  <span class="view-project">View Project</span>
                </div>
                <span v-if="project.context" class="project-context">{{ project.context }}</span>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">{{ project.type }}</p>
              </div>
            </router-link>
          </article>
        </div>
      </section>

      <!-- System Design Section -->
      <section class="projects-section">
        <div class="section-header">
          <h2 class="page-title">System Design</h2>
          <p class="section-description">Complex systems and computational frameworks</p>
        </div>

        <div class="projects-grid">
                    <article v-for="(project, index) in architectureImages" :key="index" class="project-card">
            <router-link :to="project.route" class="project-link">
              <div class="project-image">
                <img :src="project.src" :alt="project.alt" loading="lazy" />
                <div class="project-overlay">
                  <span class="view-project">View Project</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-type">{{ project.type }}</p>
              </div>
            </router-link>
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
  name: "Design",
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
            architectureImages: [
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Project",
          title: "Architectural System",
          type: "Parametric Modular Design",
          route: "/products/hapi-project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Computational Framework",
          type: "Rule-Based Design",
          route: "/products/thesis-project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Digital Futures Workshop",
          type: "Prefabrication and Automation Design",
          route: "/products/workshop-design",
        },
      ],
                        uxuiImages: [
        {
          src: require("@/images/gallery/coachHero.jpg"),
          alt: "Coach Bags Verification App",
          title: "Vintage Coach Catalog",
          type: "Authentication System",
          context: "Personal",
          route: "/products/coach-verification-app",
        },
        {
          src: require("@/images/gallery/industrial.png"),
          alt: "Industrial Facility 3D Configurator",
          title: "Industrial Facility Configurator",
          type: "Configuration System",
          context: "Professional",
          route: "/products/industrial-configurator",
        },
        {
          src: require("@/images/gallery/moonPixel.png"),
          alt: "Lunar Habitat 3D Configurator",
          title: "Moon Habitat Configurator",
          type: "Design Automation",
          context: "Professional",
          route: "/products/lunar-app",
        },
        {
          src: require("@/images/gallery/language.jpg"),
          alt: "Arabiya Language Learning App",
          title: "Arabiya Language App",
          type: "Educational Web App",
          context: "Personal",
          route: "/products/language-learning-app",
        },
        {
          src: require("@/images/gallery/filos.png"),
          alt: "Filos Mobile App",
          title: "Filos Mobile Experience",
          type: "Accessible Experience",
          context: "Course",
          route: "/products/filos-mobile-app",
        },
        {
          src: require("@/images/gallery/kapihan.png"),
          alt: "Coffee Shop App",
          title: "Brew & Crumb Mobile App",
          type: "Product Design",
          context: "Course",
          route: "/products/brew-crumb",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== PRODUCTS PAGE - Editorial Glass ===== */
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
  text-align: center;
}

.header-content {
  max-width: 760px;
  margin: 0 auto;
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* Section Headers */
.projects-section {
  margin-bottom: var(--space-16);
}

.section-header {
  margin-bottom: var(--space-10);
  text-align: center;
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
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all var(--duration-fast) var(--ease-out);
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

.project-type {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--weight-semibold);
  margin: 0;
}

/* Project Context Badge */
.project-context {
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: var(--glass-blur-sm);
  -webkit-backdrop-filter: var(--glass-blur-sm);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.5625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text);
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: var(--space-10) var(--space-5);
  }

  .page-header {
    margin-bottom: var(--space-10);
  }

  .projects-section {
    margin-bottom: var(--space-10);
  }

  .section-header {
    margin-bottom: var(--space-6);
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

  .projects-section {
    margin-bottom: var(--space-8);
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

  .project-type {
    font-size: 0.5625rem;
  }

  .view-project {
    padding: 0.4rem 0.875rem;
    font-size: 0.75rem;
  }

  .project-context {
    font-size: 0.5625rem;
    padding: 0.15rem 0.5rem;
  }
}
</style>
