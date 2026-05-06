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

      <!-- Featured Project -->
      <section class="featured-section">
        <div class="featured-header">
          <h2 class="featured-title">Featured Project</h2>
        </div>
        <router-link to="/products/coach-verification-app" class="featured-card">
          <div class="featured-image">
            <img :src="featuredImage" alt="Vintage Coach Catalog" />
            <div class="featured-overlay">
              <span class="featured-view">View Project</span>
            </div>
          </div>
          <div class="featured-info">
            <div class="featured-meta">
              <span class="featured-label">Reference Platform</span>
              <span class="featured-divider">&middot;</span>
              <span class="featured-label">Authentication System</span>
            </div>
            <h3 class="featured-name">Vintage Coach Catalog</h3>
            <p class="featured-description">
              The definitive digital reference for vintage Coach leather goods &mdash; cataloging 778 styles, 104 colors, and 70 catalogs spanning 1975 to 2002, with a built-in serial number decoder for authentication.
            </p>
          </div>
        </router-link>
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
  metaInfo: {
    title: "Work by Eleni Chasioti",
    meta: [
      {
        property: "og:title",
        content: "Work by Eleni Chasioti",
      },
    ],
  },
  data() {
    return {
      avatarSrc: require("@/images/eleniBig.png"),
      featuredImage: require("@/images/gallery/coachHero.jpg"),
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

.hero-section {
  padding: 6rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
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
  width: 280px;
  height: 280px;
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

/* Featured Project */
.featured-section {
  padding: 4rem 0;
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

.featured-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
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
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 2rem;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
}

.featured-view:hover {
  background: white;
  color: #000;
}

.featured-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.featured-divider {
  color: #ccc;
}

.featured-name {
  font-size: 1.75rem;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.featured-description {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

/* Compact Tech Stack */
.stack-section {
  padding: 4rem 0;
  border-top: 1px solid #eee;
}

.stack-header {
  margin-bottom: 2rem;
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
  gap: 1.5rem;
  align-items: center;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.stack-item:hover {
  border-color: #000;
  transform: translateY(-2px);
}

.stack-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stack-icon img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.stack-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
}

.stack-item:hover .stack-name {
  color: #000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .hero-section {
    padding: 2.5rem 0 1.5rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .avatar {
    width: 180px;
    height: 180px;
  }

  .featured-section {
    padding: 2rem 0;
  }

  .featured-header {
    margin-bottom: 1rem;
  }

  .featured-title {
    font-size: 1.25rem;
  }

  .featured-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .featured-name {
    font-size: 1.375rem;
  }

  .featured-description {
    font-size: 0.9375rem;
  }

  .stack-section {
    padding: 2rem 0 2.5rem;
  }

  .stack-header {
    margin-bottom: 1rem;
  }

  .stack-title {
    font-size: 1.25rem;
  }

  .stack-grid {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-section {
    padding: 1.5rem 0 1rem;
  }
  
  .hero-content {
    gap: 1rem;
  }
  
  .avatar {
    width: 130px;
    height: 130px;
  }

  .featured-section {
    padding: 1.5rem 0;
  }

  .featured-header {
    margin-bottom: 0.75rem;
  }

  .featured-card {
    gap: 0.75rem;
  }

  .featured-info {
    gap: 0.4rem;
  }

  .featured-name {
    font-size: 1.2rem;
  }

  .featured-description {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .featured-meta {
    font-size: 0.6875rem;
  }

  .stack-section {
    padding: 1.5rem 0 2rem;
  }

  .stack-header {
    margin-bottom: 0.75rem;
  }

  .stack-grid {
    gap: 0.5rem;
  }

  .stack-item {
    padding: 0.35rem 0.7rem;
  }

  .stack-icon {
    width: 18px;
    height: 18px;
  }

  .stack-icon img {
    width: 14px;
    height: 14px;
  }

  .stack-name {
    font-size: 0.75rem;
  }
}
</style>
