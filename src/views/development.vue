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
        <div class="projects-grid">
          <article v-for="(project, index) in images" :key="index" class="project-card">
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
          src: require("@/images/development/map.jpg"),
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
      ],
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Craft Page */
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
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #000;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.project-stack {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 4rem 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 3rem 1.5rem;
  }
}
</style>
