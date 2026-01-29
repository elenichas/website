<template>
  <div class="welcome-card">
    <div class="welcome-text">
            <h1 class="name">Eleni Chasioti</h1>
      <h2 class="job-title-container">
        <span class="job-title">{{ animatedTitle }}</span>
      </h2>
      <p class="description">
        I design and engineer digital products that solve real problems for real people. 
        From concept to code, I bridge the gap between user needs and technical solutions.
      </p>

      <div class="cta-buttons">
        <a :href="cvLink" download class="btn-primary">
          Download Resume
          <span class="mdi mdi-download"></span>
        </a>
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/Eleni_Chasioti_CV.pdf"; // This points to the public folder

export default {
  name: "WelcomeCard",
  data() {
    return {
      cvLink,
      avatarSrc: require("@/images/eleniBig.png"), // Path to your avatar image
            titles: [
        "Product Engineer",
        "Product Designer", 
        "Front-end Developer",
      ], // Titles to rotate through
      currentTitleIndex: 0, // Index to track the current title
      animatedTitle: "Product Engineer", // Variable for displaying the current animated text
      isErasing: false, // Flag to track whether text is being erased
      typeSpeed: 150, // Typing speed in ms
      eraseSpeed: 100, // Erasing speed in ms
      delayBetweenTitles: 2000, // Delay before erasing and switching to the next title
    };
  },
  mounted() {
    this.startTypingAnimation();
  },
  methods: {
    startTypingAnimation() {
      let fullTitle = this.titles[this.currentTitleIndex]; // Get the current title
      let charIndex = 0;
      let isTyping = true; // Start with typing

      const type = () => {
        if (isTyping) {
          if (charIndex < fullTitle.length) {
            // Add characters one by one
            this.animatedTitle = fullTitle.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, this.typeSpeed);
          } else {
            // Finished typing, pause before erasing
            setTimeout(() => {
              isTyping = false; // Switch to erasing
              setTimeout(type, this.eraseSpeed);
            }, this.delayBetweenTitles);
          }
                        } else {
          if (charIndex > 0) {
            // Erase characters one by one, but never make it completely empty
            const newText = fullTitle.substring(0, charIndex - 1);
            this.animatedTitle = newText || '\u00A0'; // Use non-breaking space if empty
            charIndex--;
            setTimeout(type, this.eraseSpeed);
          } else {
            // Finished erasing, switch to the next title
            this.currentTitleIndex =
              (this.currentTitleIndex + 1) % this.titles.length;
            fullTitle = this.titles[this.currentTitleIndex];
            isTyping = true; // Start typing again
            charIndex = 0; // Reset character index
            // Add a small delay before starting the next title
            setTimeout(type, 300);
          }
        }
      };

      type();
    },
  },
};
</script>

<style scoped>
.welcome-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.welcome-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.job-title-container {
  margin: 0;
  min-height: 3rem; /* Ensure consistent height */
  display: flex;
  align-items: center;
}

.job-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  border-right: 2px solid var(--text-primary);
  padding-right: var(--space-sm);
  animation: blinkCursor 1s infinite;
  display: inline-block;
  min-height: 1.2em; /* Maintain consistent height */
  min-width: 0.5em; /* Prevent complete collapse */
}

@keyframes blinkCursor {
  0%, 50% {
    border-right-color: var(--text-primary);
  }
  51%, 100% {
    border-right-color: transparent;
  }
}

.description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
}

.cta-buttons {
  display: flex;
  gap: var(--space-md);
  align-items: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .welcome-card {
    text-align: center;
  }
  
  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }
}
</style>
