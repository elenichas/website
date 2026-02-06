<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Filos App Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Google UX Design Course</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Filos</h1>
      <p class="project-subtitle">
        Connecting people with and without disabilities through shared activities and meaningful interactions
      </p>
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Duration</span>
          <span class="meta-value">1 Month (2023)</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Type</span>
          <span class="meta-value">Course Project</span>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="section-grid">
        <div class="overview-card">
          <h3>🎯 Challenge</h3>
          <p>
            People with disabilities face barriers to social participation, while those working in disability services lack opportunities for meaningful connections.
          </p>
        </div>
        <div class="overview-card">
          <h3>💡 Solution</h3>
          <p>
            A platform enabling people with and without disabilities to connect, propose activities, and build genuine relationships through shared experiences.
          </p>
        </div>
        <div class="overview-card">
          <h3>🎓 Learning Focus</h3>
          <p>
            Practiced inclusive design principles, accessibility standards, and creating interfaces that serve diverse user needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Research & Insights -->
    <section class="research-section">
      <h2 class="section-title">Problem Space</h2>
      <div class="insights-container">
        <div class="insight-card" v-for="(insight, index) in insights" :key="index">
          <div class="insight-icon">{{ insight.icon }}</div>
          <h4>{{ insight.title }}</h4>
          <p>{{ insight.description }}</p>
        </div>
      </div>
      
      <!-- Placeholder for research visuals -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: Research findings or user interview insights
        </p>
      </div> -->
    </section>

    <!-- User Personas -->
    <section class="personas-section">
      <h2 class="section-title">Meet the Users</h2>
      <div class="personas-grid">
        <!-- Persona 1 -->
        <div class="persona-card" @mouseenter="activePersona = 1" @mouseleave="activePersona = null">
          <div class="persona-header">
            <div class="persona-avatar">
              <div class="avatar-placeholder">
                <span>AM</span>
              </div>
              <p class="avatar-suggestion">💡 Add: Stock photo of person using wheelchair</p>
            </div>
            <div class="persona-info">
              <h3>Alex Martinez</h3>
              <p class="persona-title">Software Developer, 29</p>
            </div>
          </div>
          <div class="persona-details" :class="{ active: activePersona === 1 }">
            <div class="detail-group">
              <span class="detail-icon">🎯</span>
              <div>
                <strong>Goal</strong>
                <p>Find accessible activities and connect with understanding community members</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">😤</span>
              <div>
                <strong>Pain Point</strong>
                <p>Difficulty finding accessible activities and people who understand mobility challenges</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">♿</span>
              <div>
                <strong>Context</strong>
                <p>Uses wheelchair, works remotely, sometimes feels isolated</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Persona 2 -->
        <div class="persona-card" @mouseenter="activePersona = 2" @mouseleave="activePersona = null">
          <div class="persona-header">
            <div class="persona-avatar">
              <div class="avatar-placeholder">
                <span>ET</span>
              </div>
              <p class="avatar-suggestion">💡 Add: Stock photo of university student</p>
            </div>
            <div class="persona-info">
              <h3>Emma Thompson</h3>
              <p class="persona-title">OT Student, 22</p>
            </div>
          </div>
          <div class="persona-details" :class="{ active: activePersona === 2 }">
            <div class="detail-group">
              <span class="detail-icon">🎯</span>
              <div>
                <strong>Goal</strong>
                <p>Volunteer and gain real-world experience with people with disabilities</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">😤</span>
              <div>
                <strong>Pain Point</strong>
                <p>Hard to find meaningful volunteer opportunities and connect respectfully</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">📚</span>
              <div>
                <strong>Context</strong>
                <p>Studying occupational therapy, passionate about making a difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Process -->
    <section class="process-section">
      <h2 class="section-title">Design Process</h2>
      <div class="process-steps">
        <div class="process-step" v-for="(step, index) in processSteps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- Wireframes -->
    <section class="wireframes-section">
      <h2 class="section-title">Wireframes & User Flow</h2>
      <div class="wireframe-container">
        <img :src="wireframes" alt="Low-fidelity wireframes" class="wireframe-image" />
      </div>
      
      <!-- Figma Embed -->
      <div class="figma-embed-container">
        <iframe
          class="figma-iframe"
          src="https://embed.figma.com/design/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=22-403&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Visual Design -->
    <section class="design-section">
      <h2 class="section-title">Visual Identity</h2>
      <div class="design-content">
        <div class="design-story">
          <p>
            I created a visual identity emphasizing inclusivity and trust. The name "Filos" means friendship,
            and the calming purple gradient evokes approachability. Every design choice prioritizes accessibility
            with large buttons, high contrast, and clear navigation.
          </p>
        </div>
        
        <div class="style-guide-modern">
                    <!-- Colors -->
          <div class="style-section">
            <h3>Color Palette</h3>
            <div class="color-palette">
              <div class="color-item">
                <div class="color-circle" style="background: #a469cc"></div>
                <span class="color-code">#a469cc</span>
                <span class="color-name">Lavender</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #511f88"></div>
                <span class="color-code">#511f88</span>
                <span class="color-name">Deep Purple</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #d9d9d9"></div>
                <span class="color-code">#d9d9d9</span>
                <span class="color-name">Light Gray</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #000000"></div>
                <span class="color-code">#000000</span>
                <span class="color-name">Black</span>
              </div>
            </div>

            <h4>Key Components</h4>
            <div class="components-showcase">
              <div class="component-sample">
                <span class="component-label">Primary Button</span>
                <button class="sample-button primary" style="background: #511f88;">Join Activity</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Secondary Button</span>
                <button class="sample-button secondary" style="border-color: #a469cc; color: #a469cc;">Learn More</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Input Field</span>
                <input class="sample-input" type="text" placeholder="Search activities..." style="--brand-primary: #511f88;" />
              </div>
            </div>
          </div>

                    <!-- Typography -->
          <div class="style-section">
            <h3>Typography</h3>
            <div class="typography-showcase">
              <div class="type-sample">
                <span class="type-label">Header</span>
                <p class="type-display header" style="font-family: 'Inter', sans-serif; color: #511f88;">Connect & Grow Together</p>
                <span class="type-meta">Inter Bold · 32px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Subtitle</span>
                <p class="type-display subtitle" style="font-family: 'Inter', sans-serif; color: #a469cc;">Building inclusive communities</p>
                <span class="type-meta">Inter Medium · 21px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Body Text</span>
                <p class="type-display body" style="font-family: 'Inter', sans-serif; color: #666;">Join activities, meet new people, and create meaningful connections in an accessible and welcoming environment designed for everyone.</p>
                <span class="type-meta">Inter Regular · 16px</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Placeholder for additional design visuals -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: UI component library or design system showcase
        </p>
      </div> -->
    </section>

    <!-- Key Features -->
    <section class="prototype-section">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">👥</span>
          <h4>Connect</h4>
          <p>Find people nearby and build meaningful connections</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📅</span>
          <h4>Activities</h4>
          <p>Create or join accessible events and activities</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">💬</span>
          <h4>Chat</h4>
          <p>Simple messaging to coordinate and connect</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">♿</span>
          <h4>Accessibility</h4>
          <p>Designed with WCAG standards and inclusive design</p>
        </div>
      </div>
    </section>

    <!-- Interactive Prototype CTA -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Try the Interactive Prototype</h2>
        <p>Experience the full user flow in Figma</p>
        <a
          :href="figmaSrc"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button"
        >
          <span>View Prototype</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </section>

    <!-- Learnings & Reflection -->
    <section class="reflection-section">
      <h2 class="section-title">Key Learnings</h2>
      <div class="learnings-grid">
        <div class="learning-card">
          <h4>♿ Accessibility First</h4>
          <p>
            Learned to prioritize accessibility from the start—not as an afterthought but as a core design principle for all users.
          </p>
        </div>
        <div class="learning-card">
          <h4>🤝 Inclusive Design</h4>
          <p>
            Practiced designing for diverse abilities and understanding how design choices impact different user groups.
          </p>
        </div>
        <div class="learning-card">
          <h4>🎨 Empathy in Design</h4>
          <p>
            Developed deeper empathy by considering barriers users face and designing solutions that truly serve their needs.
          </p>
        </div>
        <div class="learning-card">
          <h4>✅ WCAG Standards</h4>
          <p>
            Gained hands-on experience applying accessibility guidelines and understanding their practical impact.
          </p>
        </div>
      </div>

      <div class="next-steps">
        <h3>If I Were to Continue...</h3>
        <ul>
          <li>Conduct usability testing with users who have various disabilities</li>
          <li>Implement voice commands and screen reader optimization</li>
          <li>Add real-time feedback system for continuous improvement</li>
          <li>Explore additional accessibility features like haptic feedback</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "FilosMobileApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/filosHero.png"),
      wireframes: require("@/images/filosWireframes.png"),
      figmaSrc:
        "https://www.figma.com/proto/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=0-1&t=XXX",
      activePersona: null,
      insights: [
        {
          icon: "🚫",
          title: "Social Barriers",
          description:
            "People with disabilities often face physical and social barriers to participation",
        },
        {
          icon: "🤝",
          title: "Connection Gap",
          description:
            "Disability professionals lack opportunities for meaningful real-world connections",
        },
        {
          icon: "❓",
          title: "Awareness Need",
          description:
            "Limited understanding of daily experiences creates empathy gaps",
        },
      ],
      processSteps: [
        {
          title: "Research",
          description: "Identified accessibility needs and connection barriers",
        },
        {
          title: "Define",
          description: "Created diverse personas and mapped user journeys",
        },
        {
          title: "Ideate",
          description: "Brainstormed accessible activity and connection features",
        },
        {
          title: "Prototype",
          description: "Built inclusive wireframes and high-fidelity mockups",
        },
      ],
    };
  },
};
</script>

<style src="@/styles/case-study-common.css"></style>
<style scoped>
/* FilosMobileApp - Accessibility Theme Colors: Purple */

/* Insight cards hover - brand color */
.insight-card:hover {
  border-color: #511f88;
}

/* Avatar gradient - brand colors */
.avatar-placeholder {
  background: linear-gradient(135deg, #511f88, #a469cc);
}

/* Detail group strong - brand color */
.detail-group strong {
  color: #511f88;
}

/* Process step number - brand color */
.step-number {
  background: #511f88;
  box-shadow: 0 4px 15px rgba(81, 31, 136, 0.3);
}

/* Type display - brand color */
.type-display {
  color: #511f88;
}

/* CTA Section - brand gradient */
.cta-section {
  background: linear-gradient(135deg, #511f88 0%, #6e3199 100%);
}

.cta-button {
  background: #a469cc;
}

.cta-button:hover {
  background: #b57dd9;
  box-shadow: 0 8px 20px rgba(164, 105, 204, 0.4);
}

/* Learning card - brand color border */
.learning-card {
  border-left: 4px solid #511f88;
}

.learning-card:hover {
  border-left-color: #a469cc;
}

/* Next steps arrow - brand color */
.next-steps li::before {
  color: #511f88;
}
</style>