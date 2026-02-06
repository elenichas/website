<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Modular App Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Design Exercise</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Modular Building System</h1>
      <p class="project-subtitle">
        A node-based 3D building application for creating and managing modular architectural projects
      </p>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX Designer</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Type</span>
          <span class="meta-value">Concept Sketch</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Focus</span>
          <span class="meta-value">Workflow & UI</span>
        </div>
      </div>
    </div>

        <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🎯 Concept</h3>
          <p>
            Early-stage wireframes exploring a unit-based creation system for modular building design with intuitive node-based workflows.
          </p>
        </div>
        <div class="overview-card">
          <h3>💡 Approach</h3>
          <p>
            Designed to provide designers with flexibility and simplicity through visual feedback, performance analytics, and modular customization.
          </p>
        </div>
        <div class="overview-card">
          <h3>🎓 Learning Focus</h3>
          <p>
            Practiced creating complex workflows, node-based interfaces, and leveraging Material Design for rapid prototyping.
          </p>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="features-section">
      <h2 class="section-title">Key Workflow Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">🔐</span>
          <h4>Project Management</h4>
          <p>Login and load existing projects or create new modular designs</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🧩</span>
          <h4>Module Library</h4>
          <p>Browse and add modules from organized type-based galleries</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🔗</span>
          <h4>Node Design</h4>
          <p>Visual drag-and-drop interface to connect and organize modules</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📊</span>
          <h4>Data Inspection</h4>
          <p>Edit parameters and settings through intuitive sliders</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📈</span>
          <h4>Performance Analytics</h4>
          <p>Evaluate structures based on cost, energy, and other metrics</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">💾</span>
          <h4>Save & Navigate</h4>
          <p>Clear feedback and progress tracking throughout the design</p>
        </div>
      </div>
    </section>

        <!-- Wireframes -->
    <section class="wireframes-section">
      <h2 class="section-title">High-Fidelity Wireframes</h2>
      
      <!-- Figma Embed -->
      <div class="figma-embed-container">
        <iframe
          class="figma-iframe"
          src="https://embed.figma.com/design/ZcTk8BtMkSmaQiSlrK97IJ/Modular-Building-App?node-id=0-1&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Placeholder for user flow -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: User flow diagram or journey map
        </p>
      </div> -->
    </section>

        <!-- Visual Design -->
    <section class="design-section">
      <h2 class="section-title">Design System</h2>
      <div class="design-content">
        <div class="design-story">
          <p>
            I leveraged Google Material Design UI kit for rapid prototyping during this brainstorming exercise.
            This approach provided consistency, accessibility, and a modern aesthetic while allowing me to focus
            on workflow and interaction patterns.
          </p>
        </div>
        
        <div class="benefits-section">
          <h3>Material Design Benefits</h3>
          <div class="benefits-grid">
            <div class="benefit-item" v-for="(item, index) in items" :key="index">
              <span class="benefit-icon">✓</span>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>

        <div class="style-guide-modern">
                    <!-- Colors -->
          <div class="style-section">
            <h3>Color Palette</h3>
            <div class="color-palette">
              <div class="color-item">
                <div class="color-circle" style="background: #F4F3FA"></div>
                <span class="color-code">#F4F3FA</span>
                <span class="color-name">Light Base</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #485E92"></div>
                <span class="color-code">#485E92</span>
                <span class="color-name">Primary Blue</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #FBD4F7"></div>
                <span class="color-code">#FBD4F7</span>
                <span class="color-name">Accent Pink</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #D9DFF6"></div>
                <span class="color-code">#D9DFF6</span>
                <span class="color-name">Light Blue</span>
              </div>
            </div>

            <h4>Key Components</h4>
            <div class="components-showcase">
              <div class="component-sample">
                <span class="component-label">Primary Button</span>
                <button class="sample-button primary" style="background: #485E92;">Create Project</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Secondary Button</span>
                <button class="sample-button secondary" style="border-color: #FBD4F7; color: #485E92;">Add Module</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Input Field</span>
                <input class="sample-input" type="text" placeholder="Project name..." style="--brand-primary: #485E92;" />
              </div>
            </div>
          </div>

                    <!-- Typography -->
          <div class="style-section">
            <h3>Typography</h3>
            <div class="typography-showcase">
              <div class="type-sample">
                <span class="type-label">Header</span>
                <p class="type-display header" style="font-family: 'Roboto', sans-serif; color: #485E92;">Design Modular Systems</p>
                <span class="type-meta">Roboto Bold · 32px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Subtitle</span>
                <p class="type-display subtitle" style="font-family: 'Roboto', sans-serif; color: #FBD4F7;">Node-based workflow for architects</p>
                <span class="type-meta">Roboto Medium · 21px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Body Text</span>
                <p class="type-display body" style="font-family: 'Roboto', sans-serif; color: #666;">Create complex architectural projects using an intuitive drag-and-drop interface. Connect modules, inspect data, and analyze performance metrics in real-time.</p>
                <span class="type-meta">Roboto Regular · 16px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Learnings & Reflection -->
    <section class="reflection-section">
      <h2 class="section-title">Key Learnings & Next Steps</h2>
      <div class="learnings-grid">
        <div class="learning-card">
          <h4>🔗 Complex Workflows</h4>
          <p>
            Practiced designing node-based interfaces and understanding how to visualize complex relationships between components.
          </p>
        </div>
        <div class="learning-card">
          <h4>⚡ Rapid Prototyping</h4>
          <p>
            Leveraged Material Design to quickly explore concepts while maintaining consistency and professional quality.
          </p>
        </div>
        <div class="learning-card">
          <h4>📊 Data Visualization</h4>
          <p>
            Explored ways to present performance analytics and metrics in an accessible, actionable format.
          </p>
        </div>
        <div class="learning-card">
          <h4>🎨 System Thinking</h4>
          <p>
            Developed understanding of designing for modular systems and maintaining flexibility in complex applications.
          </p>
        </div>
      </div>

      <div class="next-steps">
        <h3>Next Steps</h3>
        <ul>
          <li>Build functional prototype with interactive node connections</li>
          <li>Replace placeholder text with real content and data</li>
          <li>Conduct usability testing to validate workflow assumptions</li>
          <li>Refine UI consistency and visual hierarchy throughout</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "ModularApp",
  components: {
    AppNavbar,
  },
  props: {},
  data() {
    return {
      hero: require("@/images/moduleAppHero.png"),
      items: [
        "Consistency and Familiarity",
        "Efficient Prototyping",
        "Responsive and Adaptive Design",
        "Accessibility",
        "Modern, Clean Aesthetic",
      ],
    };
  },
};
</script>

<style src="@/styles/case-study-common.css"></style>
<style scoped>
/* ModularApp - Material Design Theme Colors: Blue & Pink */

/* Feature cards with border */
.feature-card {
  border: 2px solid #e0e0e0;
}

.feature-card:hover {
  border-color: #485E92;
}

/* Benefit icon - brand color */
.benefit-icon {
  color: #485E92;
}

/* Color circles with border for light colors */
.color-circle {
  border: 2px solid #e0e0e0;
}

/* Type display - brand color */
.type-display {
  color: #485E92;
}

/* Learning card - brand color border */
.learning-card {
  border-left: 4px solid #485E92;
}

.learning-card:hover {
  border-left-color: #FBD4F7;
}

/* Next steps arrow - brand color */
.next-steps li::before {
  color: #485E92;
}

/* Wireframes section background */
.wireframes-section {
  background: #fafafa;
}
</style>
