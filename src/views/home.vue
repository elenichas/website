<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <section class="hero-section">
        <div class="hero-content">
          <div class="avatar-column">
            <div class="avatar-wrapper">
              <img :src="avatarSrc" alt="Eleni Chasioti" class="avatar" />
            </div>
          </div>
          
          <div class="content-column">
            <welcome-card></welcome-card>
          </div>
        </div>
      </section>

            <!-- Featured Projects -->
      <section class="featured-section">
        <div class="featured-header">
          <h2 class="featured-title">Featured Work</h2>
        </div>

        <!-- Primary Featured -->
        <router-link to="/products/coach-verification-app" class="featured-card">
          <div class="featured-image">
            <img :src="featuredProjects[0].image" :alt="featuredProjects[0].name" />
            <div class="featured-overlay">
              <span class="featured-view">View Project</span>
            </div>
          </div>
          <div class="featured-info">
            <div class="featured-meta">
              <span class="featured-label">{{ featuredProjects[0].labels[0] }}</span>
              <span class="featured-divider">&middot;</span>
              <span class="featured-label">{{ featuredProjects[0].labels[1] }}</span>
            </div>
            <h3 class="featured-name">{{ featuredProjects[0].name }}</h3>
            <p class="featured-description">{{ featuredProjects[0].description }}</p>
          </div>
        </router-link>

        <!-- Secondary Featured Grid -->
        <div class="featured-grid">
          <router-link 
            v-for="(project, index) in featuredProjects.slice(1)" 
            :key="index" 
            :to="project.route" 
            class="featured-grid-card"
          >
            <div class="grid-card-image">
              <img :src="project.image" :alt="project.name" loading="lazy" />
              <div class="featured-overlay">
                <span class="featured-view">View Project</span>
              </div>
            </div>
            <div class="grid-card-info">
              <span class="grid-card-label">{{ project.labels[0] }}</span>
              <h3 class="grid-card-name">{{ project.name }}</h3>
              <p class="grid-card-description">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Compact Tech Stack -->
      <section class="stack-section">
        <div class="stack-header">
          <h2 class="stack-title">Technical Stack</h2>
        </div>
        <div class="stack-grid">
          <div v-for="(skill, index) in allSkills" :key="index" class="stack-item">
            <div class="stack-icon">
              <img :src="skill.src" :alt="skill.name" />
            </div>
            <span class="stack-name">{{ skill.name }}</span>
          </div>
        </div>
      </section>
    </div>
    
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppFooter from "../components/footer";
import WelcomeCard from "../components/welcomeCard.vue";
import { useHead } from "@vueuse/head";

// Skill icons
import Figma from "@/images/skills/figma.png";
import AdobeXD from "@/images/skills/adobexd.png";
import Photoshop from "@/images/skills/photoshop.png";
import VueJS from "@/images/skills/vue.png";
import ReactJS from "@/images/skills/react.png";
import CSharp from "@/images/skills/csharp.svg";
import HTML5 from "@/images/skills/HTML5.svg";
import CSS3 from "@/images/skills/CSS3.svg";
import Three from "@/images/skills/three.png";

export default {
  name: "Home",
  components: {
    AppNavbar,
    AppFooter,
    WelcomeCard,
  },
  setup() {
    useHead({
      title: "Eleni Chasioti — Product Designer & Engineer",
      meta: [
        { name: "description", content: "Portfolio of Eleni Chasioti — Product Designer & Engineer at Foster + Partners. Designing and building complex digital products at the intersection of spatial computing and user experience." },
        { property: "og:title", content: "Eleni Chasioti — Product Designer & Engineer" },
        { property: "og:description", content: "From lunar habitat configurators to authentication systems — designing and building complex digital products." },
      ],
    });
  },
    data() {
    return {
      avatarSrc: require("@/images/eleniBig.png"),
      featuredProjects: [
        {
          name: "Vintage Coach Catalog",
          labels: ["Reference Platform", "Authentication System"],
          description: "The definitive digital reference for vintage Coach leather goods — cataloging 778 styles, 104 colors, and 70 catalogs spanning 1975 to 2002, with a built-in serial number decoder for authentication.",
          image: require("@/images/gallery/coachHero.jpg"),
          route: "/products/coach-verification-app",
        },
        {
          name: "Moon Habitat Configurator",
          labels: ["Design Automation", "3D Systems"],
          description: "A parametric design system for configuring modular lunar habitats through optimization algorithms and spatial analysis.",
          image: require("@/images/gallery/moonPixel.png"),
          route: "/products/lunar-app",
        },
        {
          name: "Arabiya Language App",
          labels: ["Educational Technology", "Full-Stack"],
          description: "An immersive web app for learning Egyptian Arabic with interactive lessons, quizzes, and full bilingual support.",
          image: require("@/images/gallery/language.jpg"),
          route: "/products/language-learning-app",
        },
      ],
      allSkills: [
        { name: "Figma", src: Figma },
        { name: "Adobe XD", src: AdobeXD },
        { name: "Photoshop", src: Photoshop },
        { name: "Vue.js", src: VueJS },
        { name: "React", src: ReactJS },
        { name: "C#", src: CSharp },
        { name: "HTML5", src: HTML5 },
        { name: "CSS3", src: CSS3 },
        { name: "Three.js", src: Three },
      ],
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Home Page */
.page-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;
}

/* ===== HERO ===== */
.hero-section {
  padding: 5rem 0 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: center;
}

.avatar-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 240px;
  height: 240px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.02);
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ===== FEATURED SECTION ===== */
.featured-section {
  padding: 3rem 0;
  border-top: 1px solid #eee;
}

.featured-header {
  margin-bottom: 2rem;
}

.featured-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.02em;
}

/* Primary Featured Card */
.featured-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-4px);
}

.featured-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 8px;
  background: #f5f5f5;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.03);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .featured-overlay {
  opacity: 1;
}

.featured-view {
  color: white;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border: 2px solid white;
  border-radius: 2rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.featured-view:hover {
  background: white;
  color: #000;
}

.featured-info {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.featured-divider {
  color: #ccc;
}

.featured-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.featured-description {
  font-size: 0.9375rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

/* Secondary Featured Grid */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
}

.featured-grid-card {
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-grid-card:hover {
  transform: translateY(-4px);
}

.grid-card-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 8px;
  background: #f5f5f5;
}

.grid-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-grid-card:hover .grid-card-image img {
  transform: scale(1.03);
}

.featured-grid-card:hover .featured-overlay {
  opacity: 1;
}

.grid-card-info {
  padding: 1rem 0;
}

.grid-card-label {
  font-size: 0.6875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.grid-card-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
  margin: 0.25rem 0;
  line-height: 1.3;
}

.grid-card-description {
  font-size: 0.8125rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

/* ===== TECH STACK ===== */
.stack-section {
  padding: 3rem 0;
  border-top: 1px solid #eee;
}

.stack-header {
  margin-bottom: 1.5rem;
}

.stack-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.02em;
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.stack-item:hover {
  border-color: #000;
  transform: translateY(-2px);
}

.stack-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stack-icon img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.stack-name {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
}

.stack-item:hover .stack-name {
  color: #000;
}

/* ===== TABLET (max-width: 1024px) ===== */
@media (max-width: 1024px) {
  .hero-content {
    gap: 3rem;
  }

  .avatar {
    width: 200px;
    height: 200px;
  }

  .featured-card {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

/* ===== MOBILE (max-width: 768px) ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }

  .hero-section {
    padding: 2.5rem 0 2rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  .avatar {
    width: 140px;
    height: 140px;
    margin: 0 auto;
  }

  .featured-section {
    padding: 2rem 0;
  }

  .featured-header {
    margin-bottom: 1.25rem;
  }

  .featured-title {
    font-size: 1.25rem;
  }

  .featured-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .featured-name {
    font-size: 1.25rem;
  }

  .featured-description {
    font-size: 0.875rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .grid-card-name {
    font-size: 1rem;
  }

  .stack-section {
    padding: 2rem 0 2.5rem;
  }

  .stack-title {
    font-size: 1.25rem;
  }

  .stack-grid {
    gap: 0.5rem;
  }

  .stack-item {
    padding: 0.35rem 0.75rem;
  }

  .stack-icon {
    width: 18px;
    height: 18px;
  }

  .stack-icon img {
    width: 16px;
    height: 16px;
  }

  .stack-name {
    font-size: 0.75rem;
  }
}

/* ===== SMALL PHONE (max-width: 480px) ===== */
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-section {
    padding: 2rem 0 1.5rem;
  }

  .avatar {
    width: 110px;
    height: 110px;
  }

  .featured-section {
    padding: 1.5rem 0;
  }

  .featured-header {
    margin-bottom: 1rem;
  }

  .featured-card {
    gap: 0.75rem;
  }

  .featured-info {
    gap: 0.375rem;
  }

  .featured-name {
    font-size: 1.125rem;
  }

  .featured-description {
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .featured-meta {
    font-size: 0.625rem;
  }

  .featured-grid {
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  .grid-card-info {
    padding: 0.75rem 0;
  }

  .grid-card-name {
    font-size: 0.9375rem;
  }

  .grid-card-description {
    font-size: 0.75rem;
  }

  .stack-section {
    padding: 1.5rem 0 2rem;
  }

  .stack-header {
    margin-bottom: 0.75rem;
  }

  .stack-grid {
    gap: 0.375rem;
  }

  .stack-item {
    padding: 0.3rem 0.625rem;
  }

  .stack-icon {
    width: 16px;
    height: 16px;
  }

  .stack-icon img {
    width: 14px;
    height: 14px;
  }

  .stack-name {
    font-size: 0.6875rem;
  }
}
</style>
