<template>
  <app-navbar></app-navbar>
  
  <main class="page-layout">
    <div class="container">
      <div class="about-content">
        <header class="about-header">
          <h1 class="about-title">Hey, I'm Eleni!</h1>
          <p class="about-lead">Product designer and engineer with a story that started in architecture and found its home in digital product development.</p>
        </header>

        <div class="story-content">
          <section class="story-section">
            <h2>The Journey</h2>
            <p>
              My story begins in architecture, designing spaces, thinking about how people move through environments, 
              and obsessing over every detail that makes a space feel just right. But somewhere along the way, I realized 
              that the most exciting spaces weren't physical anymore; they were digital.
            </p>
            <p>
              The transition from designing buildings to designing digital products wasn't as dramatic as you might think. 
              Both require the same fundamental skills: understanding user needs, creating intuitive flows, and bringing 
              complex systems to life. The tools changed, but the problem-solving mindset remained.
            </p>
          </section>

          <section class="story-section">
            <h2>What I Do Now</h2>
            <p>
              Today, as a <strong>Design Systems Analyst at Foster + Partners</strong>, I work at the intersection of design and engineering, creating 
              the tools, systems, and experiences that help creative teams do their best work. I design and build everything 
              from internal design tools to full web applications, always with one goal in mind: making complex workflows feel effortless.
            </p>
            <p>
              My days are spent diving deep into user research, prototyping solutions, coordinating across teams, and then 
              rolling up my sleeves to actually build the thing. React, TypeScript, Vue.js, whatever the project needs. 
              I believe the best products come from designers who can code and developers who truly understand users.
            </p>
          </section>

          <section class="story-section">
            <h2>How I Think About Products</h2>
            <p>
              Every product tells a story, and I'm fascinated by the details that make that story compelling. How do you 
              take something incredibly complex, like architectural design software or internal company tools, and make it 
              feel intuitive? How do you build systems that scale across teams while maintaining consistency and quality?
            </p>
            <p>
              During my four years at Bryden Wood, I evolved from front-end developer to senior developer, leading the 
              creation of web-based configurators and design tools for the AEC industry. I learned that great products 
              aren't just about beautiful interfaces, they're about understanding the real problems people face and 
              crafting solutions that genuinely make their lives better.
            </p>
          </section>

          <section class="story-section">
            <h2>Beyond the Code</h2>
            <p>
              When I'm not building products, I love sharing knowledge. I've led workshops at The Bartlett School of Architecture, 
              exploring how AI and algorithmic thinking can enhance creative processes. There's something magical about watching 
              students discover new ways to approach problems, it reminds me why I love what I do.
            </p>
            <p>
              I'm passionate about sustainable design, scalable systems, and the belief that technology should amplify human 
              creativity rather than replace it. Whether it's a design system that helps teams work more efficiently or a 
              tool that opens up new creative possibilities, I'm always asking: "How can this make someone's work more joyful?"
            </p>
          </section>

          <section class="story-section">
            <h2>Let's Connect</h2>
            <p>
              I'm always excited to discuss product design, emerging technologies, or the fascinating intersection of 
              architecture and digital products. Whether you're curious about design systems, want to chat about a project, 
              or just want to share ideas about where the industry is heading, I'd love to hear from you.
            </p>
          </section>
        </div>

        <div class="cta-section">
          <a :href="cvLink" download class="btn-primary cv-download">
            <span class="mdi mdi-download"></span>
            Download Resume
          </a>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppNavbar from "../components/navbar";
import SkillSet from "../components/skillSet.vue";
import GithubAccount from "../components/githubAccount.vue";

// Use require if the image is inside the src/assets directory
const imageSrc = require("@/images/avatar.png"); // Use require if it's in the assets folder

// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/Eleni_Chasioti_CV.pdf"; // This points to the public folder

export default {
  name: "About",
  components: {
    AppNavbar,
    SkillSet,
    GithubAccount,
  },
  data() {
    return {
      imageSrc,
      cvLink,
    };
  },
};
</script>

<style scoped>
/* Modern About Page Layout */
.page-layout {
  min-height: 100vh;
  background: var(--primary-bg);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

/* Header */
.about-header {
  text-align: center;
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--border-light);
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
}

.about-lead {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Story Content */
.story-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.story-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.story-section h2 {
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.story-section p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

.story-section p strong {
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

/* CTA Section */
.cta-section {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  align-items: center;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border-light);
  flex-wrap: wrap;
}

.cv-download {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.cv-download .mdi {
  font-size: 1.125rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: var(--space-lg) var(--space-md);
  }
  
  .about-header {
    text-align: left;
  }
  
  .about-lead {
    margin-left: 0;
    margin-right: 0;
  }
  
  .cta-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--space-md) var(--space-sm);
  }
  
  .story-section p {
    font-size: 1rem;
  }
}
</style>
