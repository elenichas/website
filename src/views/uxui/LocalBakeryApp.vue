<template>
  <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Hero Section -->
    <div class="hero-section">
      <img class="hero-image" :src="hero" alt="Brew & Crumb App Hero" />
      <div class="hero-overlay">
        <span class="project-tag">Google UX Design Course</span>
      </div>
    </div>

    <!-- Project Header -->
    <div class="project-header">
      <h1 class="project-title">Brew & Crumb</h1>
      <p class="project-subtitle">
        A mobile ordering solution to reduce wait times at a local coffee shop
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
            Long morning queues at a popular local coffee shop cause delays for
            busy professionals and lost revenue opportunities.
          </p>
        </div>
        <div class="overview-card">
          <h3>💡 Solution</h3>
          <p>
            A mobile app enabling preorders, delivery tracking, and merchandise
            shopping to streamline operations and enhance customer experience.
          </p>
        </div>
        <div class="overview-card">
          <h3>🎓 Learning Focus</h3>
          <p>
            Practiced user research, persona development, wireframing, and
            high-fidelity prototyping through the Google UX Design curriculum.
          </p>
        </div>
      </div>
    </section>

    <!-- Research & Insights -->
    <section class="research-section">
      <h2 class="section-title">Research & Insights</h2>
      <div class="insights-container">
        <div class="insight-card" v-for="(insight, index) in insights" :key="index">
          <div class="insight-icon">{{ insight.icon }}</div>
          <h4>{{ insight.title }}</h4>
          <p>{{ insight.description }}</p>
        </div>
      </div>
      
      <!-- Placeholder for research photos -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: Photos from coffee shop observation or interview notes
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
              <!-- Placeholder for persona photo -->
              <div class="avatar-placeholder">
                <span>JA</span>
              </div>
              <p class="avatar-suggestion">💡 Add: Stock photo of professional man</p>
            </div>
            <div class="persona-info">
              <h3>James Anderson</h3>
              <p class="persona-title">Marketing Manager, 34</p>
            </div>
          </div>
          <div class="persona-details" :class="{ active: activePersona === 1 }">
            <div class="detail-group">
              <span class="detail-icon">🎯</span>
              <div>
                <strong>Goal</strong>
                <p>Skip the line and get coffee on the way to work</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">😤</span>
              <div>
                <strong>Pain Point</strong>
                <p>Long queues make him late for meetings</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">📱</span>
              <div>
                <strong>Tech Savvy</strong>
                <p>High - Uses multiple apps daily</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Persona 2 -->
        <div class="persona-card" @mouseenter="activePersona = 2" @mouseleave="activePersona = null">
          <div class="persona-header">
            <div class="persona-avatar">
              <!-- Placeholder for persona photo -->
              <div class="avatar-placeholder">
                <span>ML</span>
              </div>
              <p class="avatar-suggestion">💡 Add: Stock photo of creative woman</p>
            </div>
            <div class="persona-info">
              <h3>Maria Lopez</h3>
              <p class="persona-title">Freelance Designer, 27</p>
            </div>
          </div>
          <div class="persona-details" :class="{ active: activePersona === 2 }">
            <div class="detail-group">
              <span class="detail-icon">🎯</span>
              <div>
                <strong>Goal</strong>
                <p>Order delivery while working from home</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">😤</span>
              <div>
                <strong>Pain Point</strong>
                <p>Can't track delivery status or buy merchandise online</p>
              </div>
            </div>
            <div class="detail-group">
              <span class="detail-icon">📱</span>
              <div>
                <strong>Tech Savvy</strong>
                <p>Medium - Comfortable with apps</p>
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
      <h2 class="section-title">From Sketches to Screens</h2>
      <div class="wireframe-container">
        <img :src="wireframes" alt="Low-fidelity wireframes" class="wireframe-image" />
      </div>
      
      <!-- Placeholder for additional wireframe images -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: Paper sketches or early concept drawings
        </p>
      </div> -->
    </section>

    <!-- Visual Design -->
    <section class="design-section">
      <h2 class="section-title">Visual Identity</h2>
      <div class="design-content">
        <div class="design-story">
          <p>
            I developed a warm, inviting visual language that reflects the
            cozy atmosphere of a neighborhood coffee shop. The earthy tones and
            clean typography create an approachable yet modern aesthetic.
          </p>
        </div>
        
        <div class="style-guide-modern">
                    <!-- Colors -->
          <div class="style-section">
            <h3>Color Palette</h3>
            <div class="color-palette">
              <div class="color-item">
                <div class="color-circle" style="background: #00320b"></div>
                <span class="color-code">#00320b</span>
                <span class="color-name">Deep Forest</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #d7a246"></div>
                <span class="color-code">#d7a246</span>
                <span class="color-name">Golden Cream</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #d9d9d9"></div>
                <span class="color-code">#d9d9d9</span>
                <span class="color-name">Soft Latte</span>
              </div>
              <div class="color-item">
                <div class="color-circle" style="background: #000000"></div>
                <span class="color-code">#000000</span>
                <span class="color-name">Espresso</span>
              </div>
            </div>

            <h4>Key Components</h4>
            <div class="components-showcase">
              <div class="component-sample">
                <span class="component-label">Primary Button</span>
                <button class="sample-button primary" style="background: #00320b;">Order Now</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Secondary Button</span>
                <button class="sample-button secondary" style="border-color: #d7a246; color: #d7a246;">View Menu</button>
              </div>
              <div class="component-sample">
                <span class="component-label">Input Field</span>
                <input class="sample-input" type="text" placeholder="Search menu..." style="--brand-primary: #00320b;" />
              </div>
            </div>
          </div>

                    <!-- Typography -->
          <div class="style-section">
            <h3>Typography</h3>
            <div class="typography-showcase">
              <div class="type-sample">
                <span class="type-label">Header</span>
                <p class="type-display header" style="font-family: 'Sansation', sans-serif; color: #00320b;">Fresh Coffee Daily</p>
                <span class="type-meta">Sansation Bold · 32px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Subtitle</span>
                <p class="type-display subtitle" style="font-family: 'Inter', sans-serif; color: #d7a246;">Order ahead and skip the line</p>
                <span class="type-meta">Inter Medium · 21px</span>
              </div>
              <div class="type-sample">
                <span class="type-label">Body Text</span>
                <p class="type-display body" style="font-family: 'Inter', sans-serif; color: #666;">Browse our menu of artisan coffee, fresh pastries, and local merchandise. Your order will be ready when you arrive.</p>
                <span class="type-meta">Inter Regular · 16px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- High-Fidelity Prototypes -->
    <section class="prototype-section">
      <h2 class="section-title">High-Fidelity Screens</h2>
      <div class="prototype-showcase">
        <img :src="prototypes" alt="High-fidelity prototype screens" class="prototype-image" />
      </div>

      <!-- Key Features Highlight -->
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">🛒</span>
          <h4>Quick Ordering</h4>
          <p>Browse menu and add items with just a few taps</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">📅</span>
          <h4>Schedule Pickup</h4>
          <p>Choose exact pickup time to avoid waiting</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🚚</span>
          <h4>Delivery Tracking</h4>
          <p>Real-time updates on order status</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🎁</span>
          <h4>Shop Merch</h4>
          <p>Browse and purchase shop merchandise</p>
        </div>
      </div>

      <!-- Placeholder for user flow diagram -->
      <!-- <div class="image-placeholder">
        <p class="placeholder-text">
          📸 Add image: User flow diagram showing the ordering journey
        </p>
      </div> -->
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
          <h4>🔍 User Research</h4>
          <p>
            Practiced conducting user interviews and observations to identify
            real pain points in the customer journey.
          </p>
        </div>
        <div class="learning-card">
          <h4>🎨 Visual Design</h4>
          <p>
            Learned to work within an existing brand identity while creating
            a modern digital experience.
          </p>
        </div>
        <div class="learning-card">
          <h4>🔄 Iteration</h4>
          <p>
            Developed skills in moving from low-fidelity wireframes to
            polished high-fidelity prototypes.
          </p>
        </div>
        <div class="learning-card">
          <h4>📱 Mobile-First</h4>
          <p>
            Practiced designing for mobile constraints while maintaining
            usability and visual appeal.
          </p>
        </div>
      </div>

      <div class="next-steps">
        <h3>If I Were to Continue...</h3>
        <ul>
          <li>Add loyalty rewards program integration</li>
          <li>Implement order customization features</li>
          <li>Create a tablet interface for in-store ordering</li>
          <li>Conduct usability testing with real users</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "LocalBakeryApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/kapihanHero.png"),
      wireframes: require("@/images/kapihanWireframes.png"),
      prototypes: require("@/images/kapihanPrototypes.png"),
      figmaSrc:
        "https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1",
      activePersona: null,
      insights: [
        {
          icon: "⏰",
          title: "Peak Hours Problem",
          description:
            "85% of daily traffic occurs between 7-9 AM, creating bottlenecks",
        },
        {
          icon: "💼",
          title: "Professional Clientele",
          description:
            "Most customers are office workers with tight schedules",
        },
        {
          icon: "📊",
          title: "Competitive Analysis",
          description:
            "Studied Starbucks, Dunkin', and local competitors' ordering systems",
        },
      ],
      processSteps: [
        {
          title: "Research",
          description: "Observed shop operations and interviewed customers",
        },
        {
          title: "Define",
          description: "Created personas and mapped user journeys",
        },
        {
          title: "Ideate",
          description: "Brainstormed solutions for preordering and delivery",
        },
        {
          title: "Prototype",
          description: "Built wireframes and high-fidelity mockups",
        },
      ],
    };
  },
};
</script>

<style src="@/styles/case-study-common.css"></style>
<style scoped>
/* LocalBakeryApp - Coffee Shop Theme Colors: Green & Gold */

/* Insight cards hover - brand color */
.insight-card:hover {
  border-color: #00320b;
}

/* Avatar gradient - brand colors */
.avatar-placeholder {
  background: linear-gradient(135deg, #00320b, #d7a246);
}

/* Detail group strong - brand color */
.detail-group strong {
  color: #00320b;
}

/* Process step number - brand color */
.step-number {
  background: #00320b;
  box-shadow: 0 4px 15px rgba(0, 50, 11, 0.3);
}

/* Type display - brand color */
.type-display {
  color: #00320b;
}

/* CTA Section - brand gradient */
.cta-section {
  background: linear-gradient(135deg, #00320b 0%, #004d14 100%);
}

.cta-button {
  background: #d7a246;
}

.cta-button:hover {
  background: #c89235;
  box-shadow: 0 8px 20px rgba(215, 162, 70, 0.4);
}

/* Learning card - brand color border */
.learning-card {
  border-left: 4px solid #00320b;
}

.learning-card:hover {
  border-left-color: #d7a246;
}

/* Next steps arrow - brand color */
.next-steps li::before {
  color: #00320b;
}
</style>