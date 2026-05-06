<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Arabiya Language Learning App" />
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <p class="project-label">Web Application</p>
      <h1 class="project-title">Arabiya</h1>
      <p class="project-intro">
        An immersive web app for English and Greek speakers to learn Egyptian Arabic through interactive lessons covering the alphabet, vowel diacritics, and everyday phrases.
      </p>
      <div class="project-meta">
        <span class="meta-item">Front-End Development</span>
        <span class="meta-divider">&middot;</span>
        <span class="meta-item">UI/UX Design</span>
        <span class="meta-divider">&middot;</span>
        <span class="meta-item">Educational Technology</span>
      </div>
    </div>

    <!-- Background -->
    <section class="content-section">
      <p class="section-label">Background</p>
      <h2 class="section-heading">A personal learning tool</h2>
      <p class="body-text">
        I created Arabiya as a way to support my own journey learning Arabic. Rather than relying solely on generic apps, I wanted a tool tailored to the material I cover in my actual lessons with my teacher. The app is an ongoing project—I plan to continue adding lessons based on real session content as I progress through the language.
      </p>
      <p class="body-text">
        I’m also currently working on a dual-language version where Greek, my native language, is fully supported as the interface language, making the app accessible to Greek speakers who want to learn Arabic as well.
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
        <li><strong>Multi-Language Interface</strong> Full English and Greek UI localization, allowing non-English speakers to learn Arabic in their native language</li>
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
        Built with Next.js 16 and React 19 using TypeScript for type safety. The UI leverages Tailwind CSS v4 with custom glassmorphic components, Radix UI primitives for accessibility, and Lucide icons. A custom internationalization system supports full English and Greek translations. Deployed on Vercel with analytics integration.
      </p>
    </section>

    <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">My Role</p>
      <h2 class="section-heading">Sole designer & developer</h2>
      <p class="body-text">
        End-to-end ownership of product design, UI implementation, content creation, and internationalization architecture. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
      </p>
    </section>

    <section class="content-section">
      <p class="section-label">Reflection</p>
      <h2 class="section-heading">Designing for script-based language learning</h2>
      <p class="body-text">
        This project taught me how to handle bidirectional text (RTL Arabic alongside LTR English/Greek), design quiz systems that provide encouraging feedback without being punitive, and build progressive learning pathways that respect the complexity of a new writing system.
      </p>
      <p class="body-text">
        The two-phase study-then-practice model proved effective: users can reference material at any time and return to quizzes without losing progress. Supporting multiple UI languages also reinforced the importance of building internationalization into the architecture from the start rather than retrofitting it later.
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
        { name: "description", content: "Case study: An immersive web app for learning Egyptian Arabic with interactive lessons, quizzes, and bilingual support." },
        { property: "og:title", content: "Arabiya Language App — Eleni Chasioti" },
        { property: "og:description", content: "Interactive language learning with RTL text support, study modes, and multi-language UI." },
      ],
    });
  },
  data() {
    return {
      hero: require("@/images/language/LandingPage.jpg"),
      dialectSelect: require("@/images/language/2SelectDialect.jpg"),
      lessonHub: require("@/images/language/3SelectLesson.jpg"),
      alphabetStudy: require("@/images/language/AlphabetStudyMode.jpg"),
      alphabetQuiz: require("@/images/language/AlphabetQuizMode.jpg"),
      diacriticsStudy: require("@/images/language/DiacriticsLessonStudyMode.jpg"),
      phrasesStudy: require("@/images/language/PhrasesStudyMode.jpg"),
    };
  },
};
</script>

<style scoped>
/* Minimal Editorial Design */

.case-study {
  background: #fff;
  color: #000;
  padding-bottom: 3rem;
}

/* Hero */
.hero-section {
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Project Header */
.project-header {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.project-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.75rem;
  font-weight: 500;
}

.project-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  color: #000;
}

.project-intro {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 2rem;
}

.project-meta {
  font-size: 0.9375rem;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.meta-divider {
  color: #ccc;
}

/* Content Sections */
.content-section {
  max-width: 760px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.section-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.section-heading {
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0 0 1rem;
  color: #000;
  font-family: Georgia, 'Times New Roman', serif;
}

.body-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1rem;
}

/* Simple List */
.simple-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0;
}

.simple-list li {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 0.625rem;
  padding-left: 0;
}

.simple-list li strong {
  color: #000;
  font-weight: 600;
}

/* Images */
.image-figure {
  margin: 2rem 0;
  max-width: 100%;
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Split Sections - Asymmetric Layout */
.split-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
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

/* Media Containers with Colored Backgrounds */
.media-container-amber {
  background: #FFF3E0;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-blue {
  background: #E8F0FF;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-green {
  background: #DFF5D4;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-purple {
  background: #F0E8FF;
  padding: 2rem;
  border-radius: 24px;
}

.media-container-yellow {
  background: #FFF9E0;
  padding: 2rem;
  border-radius: 24px;
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Style Guide */
.style-guide {
  margin-top: 2rem;
}

.style-block {
  margin-bottom: 2rem;
}

.style-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
}

/* Color Palette */
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.color-name {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #000;
}

.color-code {
  font-size: 0.8125rem;
  color: #666;
  font-family: monospace;
}

/* Typography Samples */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.type-sample {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sample-text {
  line-height: 1.4;
}

.sample-meta {
  font-size: 0.8125rem;
  color: #999;
}

/* Components Showcase */
.components-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.component-example {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.component-label {
  font-size: 0.8125rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.sample-button {
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.sample-button:hover {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .project-header,
  .content-section {
    padding: 0 1.5rem;
  }
  
  .split-section {
    flex-direction: column;
    padding: 2rem 1.5rem;
    margin: 2rem auto;
  }
  
  .split-content,
  .split-media {
    max-width: 100%;
  }
}
</style>
