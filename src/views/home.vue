<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <section class="hero-section">
        <div class="hero-content">
          <div class="avatar-column anim-fade-in" style="--delay: 0.1s;">
            <div class="avatar-wrapper">
              <img :src="avatarSrc" alt="Eleni Chasioti" class="avatar" />
            </div>
          </div>
          
          <div class="content-column anim-fade-in" style="--delay: 0.3s;">
            <welcome-card></welcome-card>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="featured-section">
        <div class="featured-header scroll-reveal">
          <h2 class="featured-title">Featured Work</h2>
          <span class="featured-line"></span>
        </div>

                <!-- Project Cards -->
        <div class="projects-grid">
          <router-link 
            v-for="(project, index) in featuredProjects" 
            :key="index" 
            :to="project.route" 
            class="project-card scroll-reveal"
            :class="{ 'project-card--hero': index === 0 }"
            :style="{ '--delay': (index * 0.12) + 's' }"
          >
            <div class="project-card__image">
              <img :src="project.image" :alt="project.name" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__cta">View Project</span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>{{ project.labels[0] }}</span>
                <span class="project-card__dot">&middot;</span>
                <span>{{ project.labels[1] }}</span>
              </div>
              <h3 class="project-card__title">{{ project.name }}</h3>
              <p class="project-card__desc">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Compact Tech Stack -->
      <section class="stack-section scroll-reveal">
        <div class="stack-header">
          <h2 class="stack-title">Technical Stack</h2>
        </div>
        <div class="stack-grid">
          <div 
            v-for="(skill, index) in allSkills" 
            :key="index" 
            class="stack-item"
            :style="{ '--i': index }"
          >
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
      title: "Eleni Chasioti, Product Designer & Engineer",
      meta: [
        { name: "description", content: "Portfolio of Eleni Chasioti, Product Designer & Engineer at Foster + Partners. Designing and building complex digital products at the intersection of spatial computing and user experience." },
        { property: "og:title", content: "Eleni Chasioti, Product Designer & Engineer" },
        { property: "og:description", content: "From lunar habitat configurators to authentication systems , designing and building complex digital products." },
      ],
    });
  },
  mounted() {
    this.initScrollReveal();
  },
  methods: {
    initScrollReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      this.$nextTick(() => {
        document.querySelectorAll('.scroll-reveal').forEach((el) => {
          observer.observe(el);
        });
      });
    },
  },
    data() {
    return {
      avatarSrc: require("@/images/eleniBig.png"),
      featuredProjects: [
        {
          name: "Vintage Coach Catalog",
          labels: ["Reference Platform", "Authentication System"],
          description: "The definitive digital reference for vintage Coach leather goods, cataloging 778 styles, 104 colors, and 70 catalogs spanning 1975 to 2002, with a built-in serial number decoder for authentication.",
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
/* ===== HOME PAGE - Editorial Cinematic ===== */

/* === ENTRANCE ANIMATIONS === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes lineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes stackSlideIn {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hero entrance - plays on load */
.anim-fade-in {
  opacity: 0;
  animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay, 0s);
}

/* Scroll-triggered reveal - hidden until intersection */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stack items stagger when parent reveals */
.scroll-reveal.revealed .stack-item {
  animation: stackSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--i, 0) * 0.06s);
}

.stack-item {
  opacity: 0;
}

/* Featured line grows on reveal */
.featured-line {
  display: block;
  flex: 1;
  height: 1px;
  background: var(--color-border-strong);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.scroll-reveal.revealed .featured-line {
  transform: scaleX(1);
}

/* === BASE === */
.page-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  flex: 1;
}

/* ===== HERO ===== */
.hero-section {
  padding: var(--space-20) 0 var(--space-16);
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-16);
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

.avatar-wrapper::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  pointer-events: none;
}

.avatar {
  width: 220px;
  height: 220px;
  border-radius: var(--radius-md);
  object-fit: cover;
  display: block;
  transition: transform var(--duration-slow) var(--ease-out);
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
  padding: var(--space-12) 0;
 
}

.featured-header {
  margin-bottom: var(--space-8);
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
}

.featured-title {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

/* ===== PROJECT CARDS GRID ===== */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
}

/* The hero card spans full width - image top, text below */
.project-card {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-4px);
}

/* First card is full-width hero */
.project-card--hero .project-card__image {
  aspect-ratio: 2.2 / 1;
}

/* Make 2nd and 3rd cards sit side by side */
.projects-grid {
  grid-template-columns: repeat(2, 1fr);
}

.project-card--hero {
  grid-column: 1 / -1;
}

/* Image container */
.project-card__image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background: var(--color-accent-soft);
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-card__image img {
  transform: scale(1.04);
}

/* Overlay */
.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__cta {
  color: white;
  font-weight: var(--weight-medium);
  padding: 0.5rem 1.125rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
}

.project-card__cta:hover {
  background: white;
  color: var(--color-text);
}

/* Text body */
.project-card__body {
  padding: var(--space-4) 0 0;
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.625rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--weight-semibold);
  margin-bottom: 0.375rem;
}

.project-card__dot {
  color: var(--color-border-strong);
}

.project-card__title {
  font-size: 1.25rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0 0 0.375rem;
}

.project-card--hero .project-card__title {
  font-size: 1.5rem;
}

.project-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.project-card--hero .project-card__desc {
  font-size: 0.9375rem;
  max-width: 680px;
}

/* ===== TECH STACK ===== */
.stack-section {
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-border);
}

.stack-header {
  margin-bottom: var(--space-6);
}

.stack-title {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.stack-item:hover {
  border-color: var(--color-text);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.stack-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stack-icon img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.stack-name {
  font-size: 0.75rem;
  font-weight: var(--weight-medium);
  color: var(--color-text-secondary);
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.stack-item:hover .stack-name {
  color: var(--color-text);
}

/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .hero-content {
    gap: var(--space-10);
  }

  .avatar {
    width: 180px;
    height: 180px;
  }

  .projects-grid {
    gap: var(--space-8);
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-5);
  }

  .hero-section {
    padding: var(--space-10) 0 var(--space-8);
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    text-align: center;
  }

  .avatar {
    width: 130px;
    height: 130px;
    margin: 0 auto;
  }

  .avatar-wrapper::after {
    inset: -4px;
  }

  .featured-section {
    padding: var(--space-8) 0;
  }

  .featured-header {
    margin-bottom: var(--space-5);
  }

  .featured-title {
    font-size: 1.375rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .project-card--hero {
    grid-column: 1;
  }

  .project-card--hero .project-card__image {
    aspect-ratio: 16 / 10;
  }

  .project-card--hero .project-card__title {
    font-size: 1.25rem;
  }

  .project-card__title {
    font-size: 1.125rem;
  }

  .project-card__desc {
    font-size: 0.8125rem;
  }

  .stack-section {
    padding: var(--space-8) 0 var(--space-10);
  }

  .stack-title {
    font-size: 1.375rem;
  }

  .stack-grid {
    gap: 0.5rem;
  }

  .stack-item {
    padding: 0.35rem 0.75rem;
  }

  .stack-name {
    font-size: 0.6875rem;
  }
}

/* ===== SMALL PHONE ===== */
@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-4);
  }

  .hero-section {
    padding: var(--space-8) 0 var(--space-6);
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .featured-section {
    padding: var(--space-6) 0;
  }

  .projects-grid {
    gap: var(--space-5);
  }

  .project-card__title {
    font-size: 1rem;
  }

  .project-card__desc {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .project-card__meta {
    font-size: 0.5625rem;
  }

  .stack-section {
    padding: var(--space-6) 0 var(--space-8);
  }

  .stack-grid {
    gap: 0.375rem;
  }

  .stack-item {
    padding: 0.3rem 0.625rem;
  }

  .stack-icon {
    width: 14px;
    height: 14px;
  }

  .stack-icon img {
    width: 12px;
    height: 12px;
  }

  .stack-name {
    font-size: 0.625rem;
  }
}
</style>
