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
/* Minimal Editorial Products Page */
.page-layout {
  min-height: 100vh;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

/* Page Header */
.page-header {
  margin-bottom: 5rem;
  text-align: center;
}

.header-content {
  max-width: 760px;
  margin: 0 auto;
}

.page-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #000;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.125rem;
  color: #333;
  margin: 0;
  line-height: 1.6;
}

/* Section Headers */
.projects-section {
  margin-bottom: 5rem;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 400;
  font-style: italic;
  color: #000;
  margin-bottom: 0.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.3;
}

.section-description {
  font-size: 0.9375rem;
  color: #666;
  margin: 0;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2.5rem;
}

/* Project Cards */
.project-card {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
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
  background: #f5f5f5;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.view-project:hover {
  background: white;
  color: #000;
}

/* Project Info */
.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.project-type {
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Project Context Badge */
.project-context {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #333;
  z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 3rem 1.25rem;
  }

  .page-header {
    margin-bottom: 3rem;
  }

  .projects-section {
    margin-bottom: 3rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-info {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.125rem;
  }

  .project-type {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 2rem 1rem;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .page-subtitle {
    font-size: 0.9375rem;
  }

  .projects-section {
    margin-bottom: 2.5rem;
  }

  .projects-grid {
    gap: 1.5rem;
  }

  .project-info {
    padding: 0.875rem;
  }

  .project-title {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .project-type {
    font-size: 0.6875rem;
  }

  .view-project {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }

  .project-context {
    font-size: 0.5625rem;
    padding: 0.2rem 0.5rem;
  }
}
</style>
