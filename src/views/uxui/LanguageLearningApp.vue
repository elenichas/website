<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Arabiya</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Arabiya Language Learning App" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Web Application</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">Design &amp; Development</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Stack</span>
          <span class="meta-value">Next.js, React, TypeScript</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A personal learning app for Egyptian Arabic, built around my own lessons and designed to turn new material into interactive study and practice flows.
        </p>
      </div>
    </div>

    <!-- Background -->
    <section class="content-section">
      <p class="section-label">Background</p>
      <h2 class="section-heading">A personal learning tool</h2>
      <p class="body-text">
        I created Arabiya to support my own journey learning Arabic with a teacher. Rather than relying only on generic apps, I wanted a tool that could turn the material from real lessons into structured study screens, quizzes, and repeatable practice.
      </p>
      <p class="body-text">
        Because I am Greek and learning Arabic through English, the app is also an experiment in making the learning path understandable across languages. I plan to keep adding material as the lessons progress.
      </p>
    </section>

    <!-- Challenge -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Learning a script-based language from scratch</h2>
      <p class="body-text">
        Arabic presents unique challenges for Western learners: an entirely new script written right-to-left, letters that change shape based on position, short vowels represented by diacritics rather than letters, and significant differences between dialects. Most existing resources teach Modern Standard Arabic, which differs greatly from the spoken dialects people actually use.
      </p>
      <p class="body-text">
        Learners need a focused, approachable tool that breaks down these complexities into digestible lessons and provides immediate feedback through interactive practice.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">Dialect-focused interactive learning</h2>
        <p class="body-text">
          Arabiya focuses specifically on Egyptian Arabic, the most widely understood dialect, and guides learners through a structured path: from selecting their native language, to choosing a dialect, to engaging with bite-sized lessons and interactive quizzes.
        </p>
      </div>
      <div class="split-media media-container-amber">
        <img :src="dialectSelect" alt="Dialect Selection Screen" class="split-image" />
      </div>
    </section>

    <!-- Key Features -->
    <section class="content-section">
      <p class="section-label">Features</p>
      <h2 class="section-heading">Structured lessons with immediate practice</h2>
      <ul class="simple-list">
        <li><strong>Dual-Language Direction</strong> English-first interface with Greek support planned as the content and learning material expand</li>
        <li><strong>Dialect Selection</strong> Focus on Egyptian Arabic with a framework designed to support Syrian, Lebanese, Gulf, Moroccan, and Iraqi dialects</li>
        <li><strong>Alphabet Mastery</strong> Complete 28-letter reference with all four positional forms (isolated, initial, medial, final) plus letter connection rules</li>
        <li><strong>Vowels &amp; Diacritics</strong> Dedicated lesson for Fatha, Kasra, Damma, and Sukun with explanations of why diacritics matter in Arabic</li>
        <li><strong>Greetings &amp; Phrases</strong> 16 essential Egyptian Arabic phrases with cultural context and pronunciation guides</li>
        <li><strong>Interactive Quizzes</strong> Multiple-choice exercises with instant feedback, scoring, and progress tracking across each lesson</li>
      </ul>
    </section>

    <!-- Learning Flow -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-green">
        <img :src="lessonHub" alt="Lesson Hub" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Experience</p>
        <h3 class="section-heading">Study then practice</h3>
        <p class="body-text">
          Each lesson follows a two-phase approach: a comprehensive study mode with reference tables, examples, and contextual explanations, followed by multiple quiz exercises that reinforce what was learned. Learners can freely switch between study material and practice.
        </p>
      </div>
    </section>

    <!-- Alphabet Study -->
    <section class="content-section">
      <p class="section-label">Alphabet Lesson</p>
      <h2 class="section-heading">From individual letters to connected words</h2>
      <p class="body-text">
        The alphabet lesson provides a complete reference table showing each of the 28 Arabic letters with their name, sound description, and all four positional forms. It explains how letters connect in Arabic script, distinguishing between full connectors and the six right-only connectors (Alif, Dal, Zal, Ra, Zay, Waw).
      </p>
      <figure class="image-figure">
        <img :src="alphabetStudy" alt="Alphabet Study Mode" class="content-image" />
      </figure>
    </section>

    <!-- Quiz Mode -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Practice</p>
        <h3 class="section-heading">Three exercise types per lesson</h3>
        <p class="body-text">
          The alphabet quiz includes three distinct exercise types: identifying letter names, matching letters to their sounds, and reading letter combinations that form real Arabic words. Each quiz presents randomized questions with four multiple-choice options and immediate visual feedback.
        </p>
      </div>
      <div class="split-media media-container-blue">
        <img :src="alphabetQuiz" alt="Alphabet Quiz Mode" class="split-image" />
      </div>
    </section>

    <!-- Diacritics -->
    <section class="content-section">
      <p class="section-label">Vowels Lesson</p>
      <h2 class="section-heading">Understanding Arabic diacritics</h2>
      <p class="body-text">
        Arabic script normally only writes consonants. Short vowels are shown as small marks called harakat. The vowels lesson teaches learners to distinguish Fatha (short 'a'), Kasra (short 'i'), Damma (short 'u'), and Sukun (no vowel), demonstrating how the same consonant produces completely different sounds with each diacritic.
      </p>
      <figure class="image-figure">
        <img :src="diacriticsStudy" alt="Diacritics Study Mode" class="content-image" />
      </figure>
    </section>

    <!-- Phrases -->
    <section class="split-section split-section-right">
      <div class="split-media media-container-yellow">
        <img :src="phrasesStudy" alt="Phrases Study Mode" class="split-image" />
      </div>
      <div class="split-content">
        <p class="section-label">Greetings Lesson</p>
        <h3 class="section-heading">Real Egyptian expressions</h3>
        <p class="body-text">
          The greetings lesson teaches 16 essential Egyptian Arabic phrases organized by category: greetings, responses, courtesies, farewells, introductions, and basics. Each phrase includes the Arabic script, transliteration, and meaning, with cultural context explaining Egyptian customs around greetings.
        </p>
      </div>
    </section>

    <!-- Visual Design -->
    <section class="content-section">
      <p class="section-label">Visual Design</p>
      <h2 class="section-heading">Dark glassmorphism with warm tones</h2>
      <p class="body-text">
        The visual identity draws inspiration from desert landscapes with a dark atmospheric background, glassmorphic card elements, and a warm amber/gold color palette. Arabic text is rendered using Noto Sans Arabic for optimal readability, while the modern oklch() color space ensures consistent, vibrant hues throughout the interface.
      </p>

      <div class="style-guide">
        <!-- Color Palette -->
        <div class="style-block">
          <h4 class="style-heading">Color Palette</h4>
          <div class="color-palette">
            <div class="color-item">
              <div class="color-swatch" style="background: #2a1f0e"></div>
              <div class="color-info">
                <span class="color-name">Deep Desert</span>
                <span class="color-code">#2a1f0e</span>
              </div>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: #d4a44a"></div>
              <div class="color-info">
                <span class="color-name">Golden Sand</span>
                <span class="color-code">oklch(0.78 0.12 70)</span>
              </div>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: #c47a30"></div>
              <div class="color-info">
                <span class="color-name">Warm Amber</span>
                <span class="color-code">oklch(0.72 0.14 55)</span>
              </div>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: #f5f0e8"></div>
              <div class="color-info">
                <span class="color-name">Light Foreground</span>
                <span class="color-code">oklch(0.97 0.005 80)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="style-block">
          <h4 class="style-heading">Typography</h4>
          <div class="typography-samples">
            <div class="type-sample">
              <div class="sample-text" style="font-size: 2.5rem; font-weight: 700; color: #d4a44a; font-family: 'Noto Sans Arabic', sans-serif; direction: rtl;">&#x0639;&#x0631;&#x0628;&#x064A;&#x0629;</div>
              <div class="sample-meta">Noto Sans Arabic Bold &middot; Display</div>
            </div>
            <div class="type-sample">
              <div class="sample-text" style="font-size: 1.25rem; font-weight: 600; color: #2a1f0e;">Choose your lesson</div>
              <div class="sample-meta">Geist Sans Semibold &middot; 20px</div>
            </div>
            <div class="type-sample">
              <div class="sample-text" style="font-size: 1rem; color: #666;">Start with the alphabet or jump into common phrases</div>
              <div class="sample-meta">Geist Sans Regular &middot; 16px</div>
            </div>
          </div>
        </div>

        <!-- UI Components -->
        <div class="style-block">
          <h4 class="style-heading">Key Components</h4>
          <div class="components-showcase">
            <div class="component-example">
              <span class="component-label">Primary Button</span>
              <button class="sample-button primary" style="background: #d4a44a; color: #2a1f0e; border: none; padding: 0.875rem 1.75rem; border-radius: 0.75rem; font-weight: 600;">Start Practice</button>
            </div>
            <div class="component-example">
              <span class="component-label">Glass Card</span>
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 1rem 1.5rem; border-radius: 1rem; backdrop-filter: blur(12px); color: #f5f0e8; font-size: 0.9rem;">Glassmorphic Element</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="content-section">
      <p class="section-label">Technology</p>
      <h2 class="section-heading">Modern web stack</h2>
      <p class="body-text">
        Built with Next.js, React, and TypeScript. The UI uses Tailwind CSS with custom components, Radix UI primitives for accessibility, and Lucide icons. The architecture leaves room for bilingual content as the app grows.
      </p>
    </section>

    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Sole designer & developer</h2>
      <p class="body-text">
        End-to-end ownership of product design, UI implementation, lesson structure, quiz logic, and content modeling. The project is intentionally personal, but it uses the same product thinking I would apply to a larger learning platform.
      </p>
    </section>

    <section class="content-section">
      <p class="section-label">Reflection</p>
      <h2 class="section-heading">Designing for script-based language learning</h2>
      <p class="body-text">
        This project taught me how to handle bidirectional text (RTL Arabic alongside LTR English/Greek), design quiz systems that provide encouraging feedback without being punitive, and build progressive learning pathways that respect the complexity of a new writing system.
      </p>
 
      <p class="body-text">
        Because this is a living project tied to my own language studies, it continues to evolve. Each new lesson with my teacher becomes potential content for the app, keeping both the learning and the development process closely connected.
      </p>
    </section>

    <case-study-footer currentRoute="/products/language-learning-app" />
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "LanguageLearningApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
  },
  setup() {
    useHead({
      title: "Arabiya Language App — Eleni Chasioti",
      meta: [
        { name: "description", content: "Case study: A personal Egyptian Arabic learning app built around real lessons, interactive study flows, quizzes, and content modeling." },
        { property: "og:title", content: "Arabiya Language App — Eleni Chasioti" },
        { property: "og:description", content: "A personal learning tool that turns Arabic lesson material into structured study screens and practice flows." },
      ],
    });
  },
  data() {
    return {
      hero: require("@/images/language/LandingPage.webp"),
      dialectSelect: require("@/images/language/2SelectDialect.webp"),
      lessonHub: require("@/images/language/3SelectLesson.webp"),
      alphabetStudy: require("@/images/language/AlphabetStudyMode.webp"),
      alphabetQuiz: require("@/images/language/AlphabetQuizMode.webp"),
      diacriticsStudy: require("@/images/language/DiacriticsLessonStudyMode.webp"),
      phrasesStudy: require("@/images/language/PhrasesStudyMode.webp"),
    };
  },
};
</script>

<style scoped>
/* ===== CASE STUDY - Editorial Reveal ===== */
/* Reveal Animation */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-reveal {
  opacity: 0;
  animation: revealUp 0.8s var(--ease-out) forwards;
  animation-delay: var(--delay, 0s);
}

/* Base */
.case-study {
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: var(--space-12);
}

/* ===== CINEMATIC HEADER ===== */
.case-header {
  padding: var(--space-16) var(--space-8) 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  white-space: nowrap;
  margin-bottom: -0.15em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== PROJECT INFO - split ===== */
.case-info {
  max-width: 1100px;
  margin: 0 auto var(--space-16);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.info-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  line-height: 1.4;
}

.info-description {
  padding-top: 0.25rem;
}

.info-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.35;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  font-weight: var(--weight-semibold);
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

/* Simple List */
.simple-list {
  list-style: none;
  padding: 0;
  margin: var(--space-5) 0;
}

.simple-list li {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin-bottom: 0.625rem;
  padding-left: 0;
}

.simple-list li strong {
  color: var(--color-text);
  font-weight: var(--weight-semibold);
}

.case-study .simple-list li,
.case-study .simple-list li:last-child {
  border-top: 0;
  border-bottom: 0;
}

/* ===== IMAGES ===== */
.image-figure {
  margin: var(--space-8) 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== SPLIT SECTIONS ===== */
.split-section {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  max-width: 1200px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.split-section-left .split-content {
  order: 1;
}

.split-section-left .split-media {
  order: 2;
}

.split-section-right .split-content {
  order: 2;
}

.split-section-right .split-media {
  order: 1;
}

.split-content {
  flex: 1;
  max-width: 500px;
}

.split-media {
  flex: 1;
  max-width: 600px;
}

/* Media Containers */
.media-container-amber {
  background: rgba(255, 243, 224, 0.5);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-blue {
  background: rgba(232, 240, 255, 0.5);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-green {
  background: rgba(223, 245, 212, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-purple {
  background: rgba(240, 232, 255, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.media-container-yellow {
  background: rgba(255, 249, 224, 0.5);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

/* Style Guide */
.style-guide {
  margin-top: var(--space-6);
}

.style-block {
  margin-bottom: var(--space-6);
}

.style-heading {
  font-size: 1.125rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

/* Color Palette */
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
}

.color-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.color-swatch {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.color-name {
  font-size: 0.875rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
}

.color-code {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: monospace;
}

/* Typography Samples */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.type-sample {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sample-text {
  line-height: 1.4;
}

.sample-meta {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* Components Showcase */
.components-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.component-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.component-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--weight-medium);
}

.sample-button {
  font-family: inherit;
  font-size: 0.9375rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .case-info {
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
  }
  
  .split-section {
    flex-direction: column;
    gap: var(--space-6);
  }
  
  .split-content,
  .split-media {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .case-header {
    padding: var(--space-10) var(--space-5) 0;
  }

  .case-title {
    font-size: clamp(2.5rem, 14vw, 5rem);
    margin-bottom: -0.1em;
  }

  .case-hero {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-8);
  }

  .case-info {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding: 0 var(--space-5);
    margin-bottom: var(--space-12);
  }

  .info-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .info-text {
    font-size: 1.375rem;
  }

  .content-section {
    padding: 0 var(--space-5);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .split-section {
    padding: 0 var(--space-5);
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }
}
</style>
